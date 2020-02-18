from django.urls import path
from .views import index, login, register, logout, upload, download, downByShareCode

urlpatterns = [
    path('', index, name='index'),
    path('login/', login, name='login'),
    path('reg/', register, name='login'),
    path('logout/', logout, name='logout'),
    path('upload/', upload, name='upload'),
    path('download/<str:file_name>/', download, name="download"),
    path('downByShareCode/', downByShareCode, name='downByShareCode'),
]
