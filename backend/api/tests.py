from django.urls import reverse  
from rest_framework import status
from rest_framework.test import APITestCase
from core.notification.models import Post, Category
from django.conf import settings
User = settings.AUTH_USER_MODEL

class PostTests(APITestCase):
    def test_view_posts(self):
        url = reverse('api:listcreate')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_post(self):
        self.test_category = Category.objects.create(name='test')
        self.testuser1 = User.objects.create_user(
            username='test_user1', password='123456789'
        )
        data = {"title": "new", "author": 1, "excerpt": "new", "content": "new"}
        url = reverse('api:listcreate')
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)