from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=250, null=False)
    brand = models.CharField(max_length=100, null=False)


class ProductColor(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    price = models.DecimalField(null=False, decimal_places=2, max_digits=10)
    discount = models.DecimalField(null=True, decimal_places=2, max_digits=10)
    colour = models.CharField(max_length=250, null=False)

class ProductImage(models.Model):
    productColour = models.ForeignKey(ProductColor, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products', null=False)

class ProductDetail(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    detail = models.CharField(max_length=5000, null=False)

class ProductProperty(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    key = models.CharField(max_length=100, null=False)
    value = models.CharField(max_length=1000, null=False)