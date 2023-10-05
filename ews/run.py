import json
import os, shutil
import threading
# shutil.rmtree('dist\\@lnc')
# shutil.rmtree('dist\\@patterns')
from translate import Translator
language_dict = {
    # "en":"english",
    "de":"german",
    "es":"spanish",
    "zh":"chinese",
    "fr":"french",
    "ja":"japanese"
}
def translatorFunction(english_phrases, key):
    translator= Translator(from_lang="english",to_lang=language_dict[key])
    translation = {}
    for phrase in english_phrases.keys():
        translation[phrase] = translator.translate(english_phrases[phrase])
    open('src\\assets\\i18n\\{}.json'.format(key),'w').write(json.dumps(translation))
    
english_phrases = json.load(open('src\\assets\\i18n\\en.json'))
threadsList=[]
for key in language_dict.keys():
    threadsList.append(threading.Thread(target=translatorFunction, args=[english_phrases, key]))
    threadsList[-1].start()
    
threadsList[-1].join()

for command in ['dir src\\app\\services\\*.ts /b /s > ts-files.txt',
                'npx tsc @ts-files.txt --declaration --removeComments --outDir dist\@lnc',
                'del ts-files.txt',
                'npx ng serve --host 0.0.0.0 --disable-host-check',]:
    print(command)
    os.system(command)
    # 'dir src\\app\\patterns\\*.ts /b /s > ts-files.txt',
    #             'npx tsc @ts-files.txt --declaration --removeComments --outDir dist\@patterns',
                