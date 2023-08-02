
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Test3ViewSet,Test3ViewSet,Test3ViewSet,Test3ViewSet
router = DefaultRouter()
router.register('test3', Test3ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
