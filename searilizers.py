from .models import Item
from rest_framework import serializers

class ItemSearilizers(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('name','email','phone','product','length','breadth','height','remarks')