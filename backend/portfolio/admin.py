from django.contrib import admin
from .models import Technology, Project, Experience, AboutItem, Profile, SocialLink

@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_published', 'created_at')
    filter_horizontal = ('technologies',)

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('role', 'company', 'period')

@admin.register(AboutItem)
class AboutItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('name', 'job_title')


@admin.register(SocialLink)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('name', 'url', 'order')
    ordering = ('order',)
