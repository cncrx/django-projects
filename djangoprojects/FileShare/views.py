from django.shortcuts import render, HttpResponse
from django.contrib import auth
from django.http import FileResponse, Http404
from .models import FileUpload
import random
User = auth.get_user_model()

message = {
    "login_message": "",
    "is_login": False,
    "file_list": "",
    "upload_message": ""
}


def index(request):
    if request.user.is_authenticated:
        auth.login(request, request.user)
        message["login_message"] = "欢迎回来，" + request.user.username
        message["is_login"] = True

        uid = User.objects.filter(username=request.user.username).first().id
        message["file_list"] = FileUpload.objects.filter(UploadUser_id=uid)
        auto_login = render(request, "FileShare/index.html", message)
        return auto_login

    message["login_message"] = "使用前请先登录/注册"
    message["is_login"] = False
    message["upload_message"] = "账号 admin1 密码 123 或注册账号"
    return render(request, "FileShare/index.html", message)


def login(request):
    username = request.POST.get('username', None)
    password = request.POST.get('password', None)
    user = auth.authenticate(username=username, password=password)

    if user is not None:
        auth.login(request, user)
        message["login_message"] = "欢迎回来，" + username
        message["is_login"] = True
        message["upload_message"] = ""

        uid = User.objects.filter(username=username).first().id
        message["file_list"] = FileUpload.objects.filter(UploadUser_id=uid)

        return render(request, "FileShare/index.html", message)
    else:
        message["login_message"] = "该用户名不存在或密码错误"
        message["is_login"] = False
        message["upload_message"] = ""

    return render(request, "FileShare/index.html", message)


def register(request):
    message["login_message"] = "注册失败，请重试"
    message["is_login"] = False
    message["upload_message"] = ""
    username = request.POST.get('username', None)
    password = request.POST.get('password', None)
    print(username, password)

    if username and password is not None:
        regUser = User.objects.filter(username=username)
        if regUser.exists() is False:  # 检测要注册的用户名是否存在
            regUser = User.objects.create_user(
                username=username, password=password)
            regUser.save()
            message["login_message"] = "注册成功，请登录"
        else:
            message["login_message"] = "该用户名已存在"

    return render(request, "FileShare/index.html", message)


def logout(request):
    message["login_message"] = "用户注销成功"
    message["is_login"] = False
    message["file_list"] = ""
    message["upload_message"] = ""
    auth.logout(request)

    return render(request, "FileShare/index.html", message)


def upload(request):
    file = request.FILES.get('file', None)
    user = request.user.is_authenticated

    if file is not None and user:
        fileName = file
        fileSize = round(file.size / 1024 / 1024, 2)
        filePath = 'FileShare/FileStorage/{}'.format(file.name)
        code_str = "abcdefghijklmnopqrstuvwxyz0123456789"
        shareCode = ''.join(random.sample(code_str, 4))

        with open(filePath, "wb") as f:
            for chunks in file.chunks():
                f.write(chunks)

        loginName = request.user.username
        u = User.objects.filter(username=loginName).first()  # 获取 User 实例
        f = FileUpload(
            FilePath=filePath,
            FileName=fileName,
            FileSize=fileSize,
            ShareCode=shareCode,
            UploadUser=u
        )
        f.save()

        uid = User.objects.filter(username=loginName).first().id
        message["file_list"] = FileUpload.objects.filter(UploadUser_id=uid)

        message["upload_message"] = "文件上传成功"
        message["login_message"] = "欢迎回来，" + loginName
        message["is_login"] = True

    elif user:
        loginName = request.user.username
        uid = User.objects.filter(username=loginName).first().id
        message["file_list"] = FileUpload.objects.filter(UploadUser_id=uid)
        message["upload_message"] = "文件空！"
        message["login_message"] = "请先选择文件再上传"
        message["is_login"] = True

    else:
        message["upload_message"] = "未登录用户！"
        message["login_message"] = "使用前请先登录/注册"
        message["is_login"] = False

    return render(request, "FileShare/index.html", message)


def download(request, file_name):
    user = request.user.is_authenticated

    if user:
        username = request.user.username
        uid = User.objects.filter(username=username).first().id
        f = FileUpload.objects.filter(FileName=file_name).first()
        if f.UploadUser_id == uid:
            return openFileforDownload(file_name)
    else:
        return HttpResponse("没有下载权限或未登录")


def downByShareCode(request):
    shareCode = request.POST.get('share-code', None)

    if shareCode:
        f = FileUpload.objects.filter(ShareCode=shareCode)
        if f:  # 如果文件存在
            file_name = f.first().FileName
            return openFileforDownload(file_name)
        else:
            message["upload_message"] = "找不到与该分享码对应的文件"

    else:  # 如果分享码为空
        message["upload_message"] = "分享码为空"

    return render(request, "FileShare/index.html", message)


def openFileforDownload(file_name):
    try:
        file = open('FileShare/FileStorage/{}'.format(file_name), "rb")
        file_res = FileResponse(file)
        file_res["Content_Type"] = "application/octet-stream"
        file_res["Content-Disposition"] = "attachment; filename=" + file_name
        return file_res
    except Exception:
        raise Http404
