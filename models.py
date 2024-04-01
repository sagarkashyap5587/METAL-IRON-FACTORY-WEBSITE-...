from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    product = models.CharField(max_length=50)
    length = models.CharField(max_length=50)
    breadth = models.CharField(max_length=50)
    height = models.CharField(max_length=50)
    remarks = models.CharField(max_length=50)