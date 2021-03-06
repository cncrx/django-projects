# Generated by Django 2.2.7 on 2020-02-14 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PartTimePlatform', '0007_candidates_ishire'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parttimeuser',
            name='Avatar',
            field=models.CharField(blank=True, default='', max_length=150),
        ),
        migrations.AlterField(
            model_name='parttimeuser',
            name='City',
            field=models.CharField(blank=True, default='', max_length=8),
        ),
        migrations.AlterField(
            model_name='parttimeuser',
            name='Hired',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='parttimeuser',
            name='Intro',
            field=models.TextField(blank=True, default=''),
        ),
    ]
