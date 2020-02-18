

"""
def crawlHTML():
    html_source = open('nuomiTest.html', 'r', encoding="utf-8")
    html = html_source.read()
    soup = BeautifulSoup(html, "lxml")
    cinemasList = []
    for li in soup.findAll(name="li", class_=r'\"clearfix\"'):  # r
        if (li.find(name="em", class_=r'\"num\"') != None):
            cinemaName = li.find(name="span", class_=r'\"name\"').text
            cinemaAddr = li.find(name="span", class_=r'\"fl').text
            cinemaPrice = li.find(name="em", class_=r'\"num\"').text
            print(cinemaName + "" + cinemaAddr+ " " + cinemaPrice)

            cinemasList.append(
                (cinemaName, cinemaPrice, cinemaAddr))  # 将 影院id、影院名称、电影在该影院价格和影院地址以tuple形式存入list
            print("\n")

    print(cinemasList)


if __name__ == '__main__':

    crawlHTML()

list=[(1,2),(3,4),(5,6)]

for index, i in enumerate(list):
    print(index+1)
    print(i)

def p(a, b, other=True):
    if other:
        print(a+b)
    else:
        print("else")

p(2,1,other=False)

print(round(15441864/1024/1024, 1))

import random

code_str = "abcdefghijklmnopqrstuvwxyz0123456789"
shareCode = ''.join(random.sample(code_str, 4))

print(''.join('FileShare/FileStorage/{}'.format(file.name)))


str = "/fs/download/insdomgajeuiahwewhwtall.exe/"
print(str[13:-1])

message = {"login_message": "eee"}
u = message["login_message"]='haa'
print(u)
print(message)

def f(a, b, c):
    pass

print(locals())#在函数内获取

print(f.__defaults__)#使用__code__#总参数个数

print(f.__code__.co_argcount)#总参数名

print(f.__code__.co_varnames[1])

import requests
from faker import Faker
import random

fake = Faker('zh-CN')
url = "http://192.168.1.202:9000/pt/profile/edit/"
data = {

}
r = requests.patch(url, data=data)
print(r.content.decode('utf-8'))

testjson = {'username': '1', 'a2': '2'}
testjson.update({'a3': '3', 'a4': 4})
testjson['Username'] = testjson.pop('username')
print(testjson)
"""

import jwt
import base64
import hashlib

encoded_jwt = jwt.encode({
    "username": "ptuser101",  "type": "pt"
}, "very_secret_key", algorithm="HS256")

print(encoded_jwt)
try:
    jwt_decoded = jwt.decode(encoded_jwt, "very_secret_key", algorithms=["HS256"])
    print(jwt_decoded['username'], jwt_decoded['type'])  # 取值
except Exception as e:
    print("error:", e)
#eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InB0dXNlcjEwMSIsInR5cGUiOiJwdCJ9.5cg8BJ6YAet08fL13RhajIzYaVCUdPfokIS-sPEvyAM
"""

str = 'ddddd'+'md5 test'
print(str)
m = hashlib.md5()
str_bytes = str.encode(encoding="utf-8")
m.update(str_bytes)
str_md5 = m.hexdigest()

print(str_md5)



import requests
import json
url = "https://api.weixin.qq.com/sns/jscode2session?appid={}&secret={}&js_code={}&grant_type=authorization_code".format("wx4f8748a2ce106080", "6f1bf59be356db381c05e4157886c081", "0a1vjRng2nuz0H0T5eng2iX7og2vjRni")

r = requests.get(url)
print(r.content)
res = json.loads(r.content.decode("utf-8"))
print(type(res['openid']))



1. 小程序通过 wx.login() 获取 code  >
2. 小程序 wx.request() 将 code 发往 django  >
3. django 用 code 调用 auth.code2Session 接口，换取 用户唯一标识 OpenID 和 会话密钥 session_key  >
4. 根据 openid 创建用户或登录用户，密码为 md5(openid + 密码串)
5. 创建并返回 jwt.encode({"username": "username"}, "secret_key",  algorithm="HS256")
6. 小程序接收 jwt 后存入 localStorage
7. 往后的请求再 header 字段中的 authorization 带上 token
8. django 接收后解密，确认后进行后续操作

"""
"""
import requests

url = "http://192.168.1.160:9000/pt/ptu/"

data = {
    "id": "222",
    "Username": "ptutut",
    "Avatar": "avatar",
    "PhoneNumber": "188",
    "City": "gzz",
    "Intro": "haha",
    "Hired": "none"
}

r = requests.post(url, data=data)

print(r.content)"""