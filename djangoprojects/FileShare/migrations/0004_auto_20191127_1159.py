# Generated by Django 2.2.7 on 2019-11-27 03:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FileShare', '0003_remove_fileupload_downloadcount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fileupload',
            name='FileName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='fileupload',
            name='FilePath',
            field=models.CharField(max_length=120),
        ),
    ]
