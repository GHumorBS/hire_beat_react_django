# Generated by Django 3.0.7 on 2020-09-29 20:13

from django.conf import settings
import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('resume_url', models.URLField()),
                ('jd_text', models.TextField(blank=True)),
                ('skills_keywords_bool', models.BooleanField(default=False)),
                ('skills_keywords', models.TextField(blank=True)),
                ('education_match_bool', models.BooleanField(default=False)),
                ('education_match', models.TextField(blank=True)),
                ('section_headings_bool', models.BooleanField(default=False)),
                ('section_headings', models.TextField(blank=True)),
                ('file_type_list_bool', django.contrib.postgres.fields.ArrayField(base_field=models.BooleanField(default=False), size=None)),
                ('file_type_list', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(blank=True), size=None)),
                ('data_formating_bool', models.BooleanField(default=False)),
                ('data_formating', models.TextField(blank=True)),
                ('word_count_bool', models.BooleanField(default=False)),
                ('word_count_text', models.TextField(blank=True)),
                ('measureable_results_list_bool', django.contrib.postgres.fields.ArrayField(base_field=models.BooleanField(default=False), size=None)),
                ('measureable_results_list', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(blank=True), size=None)),
                ('job_level_text_bool', models.BooleanField(default=False)),
                ('job_level_text', models.TextField(blank=True)),
                ('avoid_words_bool', models.BooleanField(default=False)),
                ('avoid_words_text', models.TextField(blank=True)),
                ('hard_skill_skills_list', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(blank=True), size=None)),
                ('hard_skill_variations_list', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(blank=True), size=None)),
                ('hard_skill_resume_list', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=0, max_length=50), size=None)),
                ('hard_skill_jd_list', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=0, max_length=50), size=None)),
                ('soft_skill_skills_list', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(blank=True), size=None)),
                ('soft_skill_variations_list', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(blank=True), size=None)),
                ('soft_skill_resume_list', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=0, max_length=50), size=None)),
                ('soft_skill_jd_list', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=0, max_length=50), size=None)),
                ('other_skill_skills_list', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(blank=True), size=None)),
                ('other_skill_resume_list', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=0, max_length=50), size=None)),
                ('other_skill_jd_list', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default=0, max_length=50), size=None)),
                ('owner', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='resume', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
