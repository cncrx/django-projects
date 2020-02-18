from django.db import models
from django.contrib.auth.models import User


class PartTimeUser(models.Model):  # 求职用户
    id = models.OneToOneField(User, related_name='partTimeUser', on_delete=models.CASCADE, primary_key='True')
    Username = models.CharField(max_length=50, default="")
    Avatar = models.CharField(max_length=150, blank=True, null=True, default="")
    PhoneNumber = models.CharField(max_length=11, blank=True, null=True, default="")
    City = models.CharField(max_length=8, blank=True, null=True, default="")
    Intro = models.TextField(blank=True, null=True, default="")
    Hired = models.CharField(max_length=50, blank=True, null=True, default="")

class CompanyUser(models.Model):
    id = models.OneToOneField(User, related_name='companyUser', on_delete=models.CASCADE, primary_key='True')
    Companyname = models.CharField(max_length=20, default="")
    Avatar = models.CharField(max_length=150, blank=True)
    City = models.CharField(max_length=8, default="")
    Address = models.CharField(max_length=50, blank=True)
    Intro = models.TextField(blank=True)

class Jobs(models.Model):
    JobName = models.CharField(max_length=20)
    JobCity = models.CharField(max_length=8, default="")
    JobLoc = models.CharField(max_length=50)
    JobSalary = models.IntegerField()
    JobWorkTime = models.CharField(max_length=20)
    JobDetail = models.TextField()
    BelongtoCompany = models.ForeignKey("CompanyUser", on_delete=models.CASCADE)
    isHire = models.BooleanField(default=False)

class FavoriteJobs(models.Model):
    BelongtoJob = models.ForeignKey("Jobs", on_delete=models.CASCADE)
    BelongtoUser = models.ForeignKey("PartTimeUser", on_delete=models.CASCADE)
    JobName = models.CharField(max_length=20, default="")


class Candidates(models.Model):
    CandidateUser = models.ForeignKey("PartTimeUser", on_delete=models.CASCADE)
    BelongtoJob = models.ForeignKey("Jobs", on_delete=models.CASCADE)
    BelongtoCompany = models.ForeignKey("CompanyUser", on_delete=models.CASCADE, default='')
    JobName = models.CharField(max_length=20, default="")
    isHire = models.BooleanField(default=False)
    CandidateName = models.CharField(max_length=50, default="")
