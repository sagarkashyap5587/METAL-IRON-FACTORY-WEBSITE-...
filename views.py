from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import serializers,status
from rest_framework.response import Response
from .models import Item
from .searilizers import ItemSearilizers
from django.shortcuts import get_object_or_404


@api_view(['GET'])
def APIData(request):
    api_urls = {
        'all':'api2/all/',
        'create':'api2/create/',
        'Update':'api2/update/1/',
        'Delete':'api2/1/delete',
    }
    return Response(api_urls)

@api_view(['POST'])
def Add(request):
    item = ItemSearilizers(data=request.data)
    if Item.objects.filter(**request.data).exists():
        raise serializers.ValidationError('Already Exists')
    if item.is_valid():
        item.save()
        return Response(item.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)
@api_view(['GET'])
def View(request):
    if request.query_params:
        item = Item.objects.filter(**request.query_params.dict())
    else:
        item =Item.objects.all()
    if item:
        serializer = ItemSearilizers(item,many=True)
        return Response(serializer.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def Update(request,pk):
    item = Item.objects.get(pk=pk)
    data = ItemSearilizers(instance=item,data=request.data)

    if data.is_valid():
        return Response(data.data)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
def Deleted(request,pk):
    item = get_object_or_404(Item,pk=pk)
    item.delete()
    return Response(status=status.HTTP_404_NOT_FOUND)




