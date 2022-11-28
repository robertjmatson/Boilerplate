from rest_framework import generics
from .models import Post, Category
from .serializers import PostSerializer, CatSerializer



class PostList(generics.ListCreateAPIView):
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer
    pass


class PostDetail(generics.RetrieveDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    pass

class CatList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CatSerializer
    pass
