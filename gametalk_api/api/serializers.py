from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile, Game, Review, Discussion, Message


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Profile.objects.create(user=user)
        return user


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Profile
        fields = ('id', 'username', 'bio', 'avatar')


class GameSerializer(serializers.ModelSerializer):
    average_rating = serializers.FloatField(read_only=True)
    rating = serializers.FloatField(source='average_rating', read_only=True)
    reviewCount = serializers.SerializerMethodField()
    activePlayers = serializers.SerializerMethodField()

    class Meta:
        model = Game
        fields = '__all__'

    def get_reviewCount(self, obj):
        return obj.reviews.count()

    def get_activePlayers(self, obj):
        # Здесь можно реализовать подсчет активных игроков
        # Пока возвращаем фиктивное значение
        return 0


class ReviewSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ('user',)


class DiscussionSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Discussion
        fields = '__all__'
        read_only_fields = ('user',)


class MessageSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ('user',)