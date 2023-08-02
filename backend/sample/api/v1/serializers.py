from rest_framework import serializers
from sample.models import Test3,Test3

class Test3Serializer(serializers.ModelSerializer):

    class Meta:
        model = Test3
        fields = "__all__"