from .common import Common

class Tool:
    __common = None
    
    def __init__(self):
        pass
    
    @property
    def common(self):
        if self.__common is None:
            self.__common = Common()
        return self.__common