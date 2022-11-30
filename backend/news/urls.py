from django.urls import path
from .views import PostList, PostDetail, CatList

app_name = 'news'

urlpatterns = [
    path('categories/', CatList.as_view(), name='catcreate'),
    path('<int:pk>/', PostDetail.as_view(), name='detailcreate'),
    path('', PostList.as_view(), name='listcreate'),

]