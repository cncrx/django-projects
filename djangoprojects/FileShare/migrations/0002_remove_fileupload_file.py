# Generated by Django 2.2.7 on 2019-11-26 10:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('FileShare', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fileupload',
            name='File',
        ),
    ]
