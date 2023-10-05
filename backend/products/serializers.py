from rest_framework import serializers


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    brand = serializers.CharField()
    
class ProductColorSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    product = ProductSerializer()
    price = serializers.DecimalField(max_digits=9, decimal_places=2)
    discount = serializers.DecimalField(max_digits=9, decimal_places=2)
    colour = serializers.CharField()

class ProductImageSerializer(serializers.Serializer):
    productColour = ProductColorSerializer
    image = serializers.ImageField()

class ProductDetailSerializer(serializers.Serializer):
    colour = serializers.CharField()

class ProductPropertySerializer(serializers.Serializer):
    key = serializers.CharField()
    value = serializers.CharField()