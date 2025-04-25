from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import GameViewSet, ReviewViewSet, DiscussionViewSet, MessageViewSet, ProfileViewSet

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
]