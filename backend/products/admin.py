from django.contrib import admin
from .models import Product, ProductColor, ProductImage, ProductDetail, ProductProperty
# Register your models here.
admin.site.register(Product)
admin.site.register(ProductColor)
admin.site.register(ProductImage)
admin.site.register(ProductDetail)
admin.site.register(ProductProperty)