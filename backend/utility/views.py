from django.shortcuts import HttpResponse
from rest_framework.renderers import JSONRenderer
from tools import Tool

asset_path = 'assets/utility'
tool = Tool()

def _loader(filename):
    data = tool.common.load_file(asset_path, filename)
    return JSONRenderer().render(data=data).decode()
# Create your views here.
def available_languages(request):
    return HttpResponse(_loader('languages.json'))

def available_menu_items(request):
    return HttpResponse(_loader('menu_item.json'))