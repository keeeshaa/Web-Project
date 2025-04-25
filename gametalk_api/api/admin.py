from django.contrib import admin
from .models import Profile, Game, Review, Discussion, Message

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'bio')
    search_fields = ('user__username', 'bio')

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'release_date', 'average_rating')
    list_filter = ('category', 'release_date')
    search_fields = ('title', 'description')

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('game', 'user', 'rating', 'created_at')
    list_filter = ('rating', 'created_at')
    search_fields = ('game__title', 'user__username', 'text')

@admin.register(Discussion)
class DiscussionAdmin(admin.ModelAdmin):
    list_display = ('title', 'game', 'user', 'created_at', 'is_closed')
    list_filter = ('is_closed', 'created_at')
    search_fields = ('title', 'game__title', 'user__username')

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('discussion', 'user', 'created_at', 'is_edited')
    list_filter = ('is_edited', 'created_at')
    search_fields = ('text', 'user__username', 'discussion__title')