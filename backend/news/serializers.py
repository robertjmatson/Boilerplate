from rest_framework import serializers
from .models import Post, Category

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'excerpt', 'content', 'status')

class CatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')