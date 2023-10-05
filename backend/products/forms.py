from .models import Product
from django import forms


class ProductForm(forms.ModelForm):
    # specify the name of model to use
    image = forms.CharField()
    class Meta:
        model = Product
        fields = "__all__"