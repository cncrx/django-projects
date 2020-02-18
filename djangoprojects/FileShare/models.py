from django.db import models
from django.conf import settings
from datetime import datetime
class FileUpload(models.Model):
    Datetime = models.DateTimeField(default=datetime.now)
    FilePath = models.CharField(max_length=120)
    FileName = models.CharField(max_length=100, default="")
    FileSize = models.CharField(max_length=10)
    ShareCode = models.CharField(max_length=6, default="")
    UploadUser = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) # 上传文件的用户名

    class Meta:
        db_table = "FileShare"

    def __str__(self):
        return self.FileName

