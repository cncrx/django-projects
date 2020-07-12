from django.urls import path
from django.views.generic.base import TemplateView
from .views import *

urlpatterns = [
    path('', TemplateView.as_view(template_name='PartTimePlatform/dist/index.html')),

    path('login/', user_login.as_view(), name="login"),
    path('logout/', user_logout, name="logout"),

    path('avatar/', avatar.as_view(), name="avatar"),

    path('ptu/', create_part_time_user.as_view(), name="add_part_time_user"),
    path('cu/', create_company_user.as_view(), name="add_company_user"),
    path('cu/<int:pk>', company_details.as_view(), name="company_details"),
    path('profile/', edit_profile.as_view(), name='edit_profile'),

    path('jobs/', jobs_list.as_view(), name="jobs_list"),
    path('jobs/create', jobs_create.as_view(), name="jobs_create"),
    path('jobs/<int:pk>', jobs_details.as_view(), name="jobs_details"),
    path('jobs/<int:pk>', job_update.as_view(), name="jobs_update"),

    path('favoritejobs/', favorite_jobs_list_create.as_view(), name="favorite_jobs_list_create"),
    path('candidates/', candidates_list_create.as_view(), name="candidates_list_create"),
    path('candidates/<int:pk>', candidates_pass.as_view(), name="candidates_pass"),
    path('checkusertype/', check_user_type.as_view(), name="check_user_type"),

    path('wechat/', wechat_user_reg_login.as_view(), name="wechat_user_reg_login")
]