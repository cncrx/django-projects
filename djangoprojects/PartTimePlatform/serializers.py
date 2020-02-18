from rest_framework import serializers
from .models import *
from django.contrib import auth
User = auth.get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PartTimeUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartTimeUser
        fields = "__all__"

class CompanyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyUser
        fields = "__all__"

class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields = "__all__"

class FavoriteJobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteJobs
        fields = "__all__"

class CandidatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidates
        fields = "__all__"



