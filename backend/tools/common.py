import os
import json
from django.conf import settings

class Common:
    def __init__(self):
        self.root_dir = settings.BASE_DIR

    def load_file(self, path, fileName)->json:
        full_path = os.path.join(self.root_dir, path, fileName)
        if not os.path.exists(full_path):
            return None
        file = open(full_path, 'r')
        file_data = json.loads(file.read())
        file.close()
        return file_data
    