from rest_framework import authentication
from sample.models import Test3,Test3,Test3
from .serializers import Test3Serializer,Test3Serializer,Test3Serializer
from rest_framework import viewsets

class Test3ViewSet(viewsets.ModelViewSet):
    serializer_class = Test3Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Test3.objects.all()