from django.conf import settings
from django.db import models
class Test3(models.Model):
    'Generated Model'
    value3 = models.BigIntegerField()
    value4 = models.ImageField(upload_to="test3/value4/images/",null=True,blank=True,)
    value5 = models.CharField(max_length=255,null=True,blank=True,)
    value6 = models.PositiveIntegerField(null=True,blank=True,)
    value877 = models.TimeField(null=True,blank=True,)
    value8 = models.SmallIntegerField(null=True,blank=True,)
    value9 = models.IntegerField(null=True,blank=True,)

# Create your models here.
