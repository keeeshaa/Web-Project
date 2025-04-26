from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import GameViewSet, ReviewViewSet, DiscussionViewSet, MessageViewSet, ProfileViewSet
from . import views
router = DefaultRouter()
router.register(r'games', GameViewSet)
router.register(r'reviews', ReviewViewSet)
router.register(r'discussions', DiscussionViewSet)
router.register(r'messages', MessageViewSet)
router.register(r'profile', ProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('games/', views.GameList.as_view(), name='game-list'),
    path('games/<int:pk>/', views.GameDetail.as_view(), name='game-detail'),

    # Reviews
    path('games/<int:game_id>/reviews/', views.ReviewList.as_view(), name='review-list'),
    path('reviews/', views.ReviewCreate.as_view(), name='review-create'),

    # Discussions
    path('discussions/', views.DiscussionList.as_view(), name='discussion-list'),
    path('games/<int:game_id>/discussions/', views.GameDiscussionList.as_view(), name='game-discussion-list'),

    # Messages
    path('messages/', views.MessageList.as_view(), name='message-list'),
]