# Generated by Django 4.2.4 on 2023-08-27 14:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('CourseRoutes', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Assignment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=300)),
                ('start_date', models.DateTimeField(auto_now_add=True)),
                ('end_date', models.DateTimeField()),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='CourseRoutes.course')),
            ],
        ),
    ]
