# Generated by Django 2.2.7 on 2020-02-14 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PartTimePlatform', '0008_auto_20200214_2124'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parttimeuser',
            name='Avatar',
            field=models.CharField(blank=True, default='', max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='parttimeuser',
            name='City',
            field=models.CharField(blank=True, default='', max_length=8, null=True),
        ),
        migrations.AlterField(
            model_name='parttimeuser',
            name='Hired',
            field=models.CharField(blank=True, default='', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='parttimeuser',
            name='Intro',
            field=models.TextField(blank=True, default='', null=True),
        ),
        migrations.AlterField(
            model_name='parttimeuser',
            name='PhoneNumber',
            field=models.CharField(default='', max_length=11, null=True),
        ),
    ]
