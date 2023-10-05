from django.http import HttpResponse
from django.shortcuts import render
from .models import Product, ProductColor, ProductImage
from .serializers import ProductColorSerializer, ProductImageSerializer, ProductSerializer
from rest_framework.renderers import JSONRenderer
from django.views.decorators.csrf import csrf_exempt
import os, json
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
from .forms import ProductForm

# Create your views here.
@csrf_exempt
def products(request):
    if request.method == 'POST':
        form = ProductForm(json.loads(request.POST['data']), request.FILES)
        if form.is_valid():
            data = request.FILES['file']
            path = default_storage.save(f'products/{data.name}', ContentFile(data.read()))
            d = json.loads(request.POST['data'])
            d['image'] = path
            form = ProductForm(d, request.FILES)
            form.save()
    products = Product.objects.all()
    l = ProductSerializer(products, many=True)
    jsondata = JSONRenderer().render({'data':l.data}).decode()
    return HttpResponse(content={jsondata})

def product(request, id):
    product = Product.objects.filter(id=id)
    l = ProductSerializer(product, many=True)
    jsondata = JSONRenderer().render({'data':l.data}).decode()
    return HttpResponse(content={jsondata})

def products1(request):
    products = Product.objects.all()
    l = ProductSerializer(products, many=True)
    data = []
    for product in l.data:
        bycolours = []
        for colour in ProductColor.objects.all().filter(product=product['id']):
            colourData = ProductColorSerializer(colour).data
            colourDataimages = []
            for image in ProductImage.objects.all().filter(productColour=colourData['id']):
                imageData = ProductImageSerializer(image).data
                colourDataimages.append(imageData)
            del colourData["product"]
            colourData["images"] = colourDataimages
            bycolours.append(colourData)
        product['colour'] = bycolours    
        data.append(product)
    jsondata = JSONRenderer().render({'data':data}).decode()
    return HttpResponse(content={jsondata})