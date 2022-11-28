from django.test import TestCase
from .models import Post, Category
from django.urls import reverse  
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Post, Category
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

class Test_Create_Post(TestCase):
    @classmethod
    def setUpTestData(cls):
        test_category = Category.objects.create(name='test_cat')
        testuser1 = User.objects.create_user(
            username='test_user1', password='123456789'
            )
        test_post = Post.objects.create(
            category_id=1, title='Post Title', excerpt='Post Excerpt', content='Post Content', slug='post-title', author_id=1, status='published'
            )

    def test_post_content(self):
        post = Post.postobjects.get(id=1)
        cat = Category.objects.get(id=1)
        author = f'{post.author}'
        excerpt = f'{post.excerpt}'
        title = f'{post.title}'
        content = f'{post.content}'
        status = f'{post.status}'
        self.assertEqual(author, 'test_user1')
        self.assertEqual(title, 'Post Title')
        self.assertEqual(content, 'Post Content')
        self.assertEqual(status, 'published')
        self.assertEqual(str(post), "Post Title")
        self.assertEqual(str(cat), "test_cat")
    