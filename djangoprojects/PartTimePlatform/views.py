import random

from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

from django.contrib import auth
from django.http import HttpResponse, Http404, QueryDict
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from .models import *
from .serializers import *

User = auth.get_user_model()

auth_err_msg = {"err_msg": "未登录或认证失败"}
privilege_err_msg = {"err_msg": "未登录或没有权限"}


class user_login(APIView):
    def post(self, request):
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)
        user = auth.authenticate(username=username, password=password)
        if user is not None:
            auth.login(request, user)
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


def user_logout(request):
    auth.logout(request)
    return HttpResponse(status=status.HTTP_200_OK)


class avatar(APIView):
    def get(self, request):
        avatar_user_ID = request.GET['id']
        avatar_user = CompanyUser.objects.filter(id=avatar_user_ID)
        if (avatar_user.exists()):
            avatar_file_path = avatar_user.first().Avatar
            avarat_data = open(avatar_file_path, "rb").read()
            return HttpResponse(avarat_data, content_type="image/jpg", status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        file = request.FILES.get('file', None)

        if file is not None:
            code_str = "abcdefghijklmnopqrstuvwxyz0123456789"
            randomCode = ''.join(random.sample(code_str, 4))
            filePath = 'FileShare/FileStorage/{}'.format(
                randomCode + "_" + file.name)  # upload_to="static/avatar_images"
            with open(filePath, "wb") as f:
                for chunks in file.chunks():
                    f.write(chunks)
            return Response({"fp": filePath}, status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


def login_required(type):
    def outer(func):
        def inner(request, *args, **kwargs):
            user_auth = request.user.is_authenticated

            if user_auth:
                uid = User.objects.filter(username=request.user).first().id
            elif request.META.get("HTTP_AUTHORIZATION") is not None:  # 微信用户
                try:
                    encoded_jwt = request.META.get("HTTP_AUTHORIZATION")
                    user_type = jwtVerify(encoded_jwt)[1]
                    print(user_type)
                    if type == "pt" and user_type == "pt":
                        return func(request, *args, **kwargs)  # 放行
                    else:  # 如果权限类型为公司，禁止放行
                        return Response(privilege_err_msg, status=status.HTTP_401_UNAUTHORIZED)
                except:
                    return Response(auth_err_msg, status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response(auth_err_msg, status=status.HTTP_401_UNAUTHORIZED)

            user_type = PartTimeUser.objects.filter(id=uid).exists()
            if type == "pt":
                if user_type:  # 权限类型为 兼职用户 且 用户类型也为 兼职用户
                    return func(request, *args, **kwargs)  # 放行
                else:
                    return Response(privilege_err_msg, status=status.HTTP_401_UNAUTHORIZED)
            elif type == "company":
                if not user_type:  # 权限类型为 公司用户 且 用户类型也为 公司用户
                    return func(request, *args, **kwargs)  # 放行
                else:
                    return Response(privilege_err_msg, status=status.HTTP_401_UNAUTHORIZED)

        return inner

    return outer


@method_decorator(csrf_exempt, name="dispatch")
class create_part_time_user(APIView):
    def post(self, request):
        query_dict = request.data.copy()
        regUser = User.objects.filter(username=query_dict["username"])
        if regUser.exists() is False:
            regUser = User.objects.create_user(
                username=query_dict["username"], password=query_dict["password"])
            regUser.save()
            uid = User.objects.filter(username=regUser).first().id
            query_dict.update({'Username': query_dict["username"]})
            query_dict.pop('username')
            query_dict.pop('password')
            query_dict.update({'id': uid})
            auth.login(request, regUser)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        print(query_dict)
        print("type:", type(query_dict))
        serializer = PartTimeUserSerializer(data=query_dict)
        serializer.is_valid(raise_exception=True)
        print(serializer.save())
        print(serializer.data)

        response = Response(serializer.data, status=status.HTTP_201_CREATED)
        response.set_cookie("username_logged", regUser)
        return response


class create_company_user(APIView):
    def post(self, request):
        query_dict = request.data.copy()
        regUser = User.objects.filter(username=query_dict["username"])
        if regUser.exists() is False:
            regUser = User.objects.create_user(
                username=query_dict["username"], password=query_dict["password"])
            regUser.save()
            uid = User.objects.filter(username=regUser).first().id
            query_dict.update({'Companyname': query_dict["username"]})
            query_dict.pop('username')
            query_dict.pop('password')
            query_dict.update({'id': uid})
            auth.login(request, regUser)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        print(query_dict)
        serializer = CompanyUserSerializer(data=query_dict)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        response = Response(serializer.data, status=status.HTTP_201_CREATED)
        response.set_cookie("username_logged", regUser)
        return response


@method_decorator(csrf_exempt, name="dispatch")
class company_details(generics.RetrieveAPIView):
    queryset = CompanyUser.objects.all()
    serializer_class = CompanyUserSerializer


class edit_profile(APIView):
    def get_object(self, user_type, uid):
        try:
            return user_type.objects.get(pk=uid)
        except user_type.DoesNotExist:
            raise Http404

    def patch(self, request):
        user_auth = request.user.is_authenticated
        if user_auth:
            uid = User.objects.filter(username=request.user).first().id
        else:
            return Response(auth_err_msg, status=status.HTTP_401_UNAUTHORIZED)

        user_type = PartTimeUser.objects.filter(id=uid).exists()
        if user_type:  # 为兼职用户
            PartTimeUserIns = self.get_object(PartTimeUser, uid)
            serializer = PartTimeUserSerializer(
                PartTimeUserIns, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(status=status.HTTP_200_OK)
        else:
            CompanyUserIns = self.get_object(CompanyUser, uid)
            serializer = CompanyUserSerializer(
                CompanyUserIns, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(status=status.HTTP_200_OK)


@method_decorator(csrf_exempt, name="dispatch")
class jobs_list(generics.ListAPIView):
    queryset = Jobs.objects.all()
    serializer_class = JobsSerializer


@method_decorator(csrf_exempt, name="dispatch")
class jobs_details(generics.RetrieveAPIView):
    queryset = Jobs.objects.all()
    serializer_class = JobsSerializer


#@method_decorator(login_required(type="company"), name="dispatch")
class jobs_create(generics.CreateAPIView):
    queryset = Jobs.objects.all()
    serializer_class = JobsSerializer


@method_decorator(login_required(type="company"), name="dispatch")
class job_update(generics.UpdateAPIView):
    queryset = Jobs.objects.all()
    serializer_class = JobsSerializer


@method_decorator(login_required(type="pt"), name="dispatch")
class favorite_jobs_list_create(APIView):
    def get(self, request):
        user_auth = request.user.is_authenticated
        if user_auth:  # 修改
            user = request.user.username
        else:
            encoded_jwt = request.META.get("HTTP_AUTHORIZATION")
            user = jwtVerify(encoded_jwt)[0]

        uid = User.objects.filter(username=user).first().id
        fav_jobs = FavoriteJobs.objects.filter(BelongtoUser=uid)
        serializer = FavoriteJobsSerializer(fav_jobs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        query_dict = request.data.copy()

        if request.META.get("HTTP_AUTHORIZATION") is None:
            user = request.user
        else:
            encoded_jwt = request.META.get("HTTP_AUTHORIZATION")
            user = jwtVerify(encoded_jwt)[0]
            
        uid = User.objects.filter(username=user).first().id
        query_dict.update({'BelongtoUser': uid})

        serializer = FavoriteJobsSerializer(data=query_dict)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED) 


class candidates_list_create(APIView):
    def get(self, request):
        user_auth = request.user.is_authenticated
        if user_auth:
            user = request.user.username
        else:
            encoded_jwt = request.META.get("HTTP_AUTHORIZATION")
            user = jwtVerify(encoded_jwt)[0]
        uid = User.objects.filter(username=user).first().id
        candidates = Candidates.objects.filter(CandidateUser=uid)
        if candidates.first() is None:  # 判断查询的是兼职用户还是公司用户，确保都能查询到与自己相关的信息
            candidates = Candidates.objects.filter(BelongtoCompany=uid)
        serializer = CandidatesSerializer(candidates, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        user_auth = request.user.is_authenticated
        if user_auth:
            user = request.user.username
        else:
            encoded_jwt = request.META.get("HTTP_AUTHORIZATION")
            user = jwtVerify(encoded_jwt)[0]

        uid = User.objects.filter(username=user).first().id
        query_dict = request.data.copy()
        query_dict.update({"CandidateUser": uid})
        query_dict.update({"CandidateName": user})

        serializer = CandidatesSerializer(data=query_dict)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_201_CREATED)


class candidates_pass(generics.UpdateAPIView):
    queryset = Candidates.objects.all()
    serializer_class = CandidatesSerializer



@method_decorator(csrf_exempt, name="dispatch")
class check_user_type(APIView):
    def get(self, request):
        user_auth = request.user.is_authenticated
        if user_auth:
            uid = User.objects.filter(username=request.user).first().id
        else:
            return Response(auth_err_msg, status=status.HTTP_401_UNAUTHORIZED)

        user_type = PartTimeUser.objects.filter(id=uid).exists()
        if user_type:  # 权限类型为 兼职用户 且 用户类型也为 兼职用户
            return Response({"user_type": "pt", "user_id": uid}, status=status.HTTP_200_OK)
        else:
            return Response({"user_type": "com", "user_id": uid}, status=status.HTTP_200_OK)


@method_decorator(csrf_exempt, name="dispatch")
class wechat_user_reg_login(APIView):
    def post(self, request):
        # 如没有传递 JWT，则小程序没有注册或清空了储存，需用 code 换 openid
        if request.META.get("HTTP_AUTHORIZATION") is None:
            try:  # 获取 code
                wechat_code = request.POST.get("code", None)
                print("wechat code:", wechat_code)
            except:
                return Response({"err_msg": "小程序code获取失败，请重试"}, status=status.HTTP_400_BAD_REQUEST)

            try:  # 获取 openid
                if wechat_code is None:
                    return Response({"err_msg": "小程序code获取失败，请重试"}, status=status.HTTP_400_BAD_REQUEST) 
                else:
                    openid = req_wechat_openid(wechat_code)
            except:
                return Response({"err_msg": "openid获取失败，请重试"}, status=status.HTTP_400_BAD_REQUEST)

            regUser = User.objects.filter(username=openid)
            if regUser.exists():  # 当 openid 已经被注册，但没有传递 JWT，重新返回 JWT 给小程序存储
                encoded_jwt = jwtEncode(openid)
                print("encoded_jwt:", encoded_jwt)
                return Response({"err_msg": "login:ok", "jwt": encoded_jwt}, status=status.HTTP_200_OK)

            else:  # openid 没有被注册，创建用户
                userPassword = md5_password(
                    openid, "verysecretkey")  # md5 加密密码串
                regUser = User.objects.create_user(
                    username=openid, password=userPassword  # TODO: Username 可以微信名/自定义，但暂时 openid 替代
                )
                regUser.save()

                uid = User.objects.filter(username=regUser).first().id
                reg_dict = {"id": uid, "Username": openid}

                serializer = PartTimeUserSerializer(data=reg_dict)  # 将此用户加入兼职用户中
                serializer.is_valid(raise_exception=True)
                serializer.save()

                encoded_jwt = jwtEncode(openid)  # JWT 返回给小程序存储
                return Response({"err_msg": "reg:ok", "jwt": encoded_jwt}, status=status.HTTP_201_CREATED)

        else:  # 当传过来的 AUTHORIZATION 存在值，登录认证
            encoded_jwt = request.META.get("HTTP_AUTHORIZATION")
            print("encoded_jwt:", encoded_jwt)
            try:
                username = jwtVerify(encoded_jwt)[0]  # JWT 解密，获得用户名
                print("username:", username)
            except:
                # JWT 验证不通过后返回状态码 400
                return Response({"err_msg": "login:verify failed"}, status=status.HTTP_400_BAD_REQUEST)

            regVerify = User.objects.filter(username=username).exists()  # 验证用户名是否存在于数据库
            if regVerify:
                # JWT 验证通过后传回新的 JWT，返回状态码 200
                return Response({"err_msg": "login:ok", "jwt": encoded_jwt}, status=status.HTTP_200_OK)
            else:  # 失败则 400
                return Response({"err_msg": "login:verify failed"}, status=status.HTTP_400_BAD_REQUEST)


def req_wechat_openid(wechat_code):  # 通过 code 请求 openid
    import requests
    import json

    url = "https://api.weixin.qq.com/sns/jscode2session?appid={}&secret={}&js_code={}&grant_type=authorization_code".format(
        "wx4f8748a2ce106080", "6f1bf59be356db381c05e4157886c081", wechat_code)
    res = requests.get(url)
    print("res.content:", res.content)
    openid = json.loads(res.content.decode("utf-8"))["openid"]
    return openid


def md5_password(pwStr, secretKey):  # return md5(openid + secret key)
    import hashlib

    m = hashlib.md5()
    str = pwStr + secretKey

    str_bytes = str.encode(encoding="utf-8")
    m.update(str_bytes)
    str_md5 = m.hexdigest()

    return str_md5  # 返回加密后的密码串


def jwtVerify(encoded_jwt):
    import jwt

    jwt_decoded = jwt.decode(
        encoded_jwt, "very_secret_key", algorithms=["HS256"])
    return jwt_decoded['username'], jwt_decoded['type']


def jwtEncode(username):
    import jwt
    # type 为用户类型，pt 是 Part time 缩写，密钥和算法
    return jwt.encode({"username": username,  "type": "pt"}, "very_secret_key", algorithm="HS256")


"""
1. 小程序通过 wx.login() 获取 code  
2. 小程序 wx.request() 将 code 发往 django  
3. django 用 code 调用微信 auth.code2Session 接口，换取 用户唯一标识 OpenID 和 会话密钥 session_key  
4. 根据 openid 创建用户或登录用户，密码为 md5(openid + 密码串)
5. 创建 JWT 并返回: jwt.encode({"username": "username"}, "secret_key",  algorithm="HS256")
6. 小程序接收 JWT 后存入 localStorage
7. 往后小程序的请求在 header 字段中的 authorization 带上 JWT 即可
8. django 接收后解密，确认用户后进行后续操作
"""
