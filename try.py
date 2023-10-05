# string = '''expression_pattern = "$DATE_TIME(EPOCH_FORMAT_LOCAL, $DATE_TIME(EPOCH)$, '%Y')$<sdfgfdsa$DATE_TIME(TIME)$"'''


# def get_start_end(string):
#     dic = {
#         '(':')',
#         '$':'$'
#     }
#     dic_2 = {val:key for key, val in dic.items()}
#     eleList = []
#     start=[]
#     end=[]
#     for i in range(len(string)):
#         if string[i] in dic.values() and len(eleList)>0 and eleList[-1] == dic_2[string[i]]:
#             eleList= eleList[:-1]
#             if string[i] == '$':end.append(i)
#         elif string[i] in dic.keys():
#             eleList.append(string[i])
#             if string[i] == '$':start.append(i)
#     return start, end
# def get_final_list(start, end):
#     finalList=[]
#     while start:
#         def get_diff(l1, l2):
#             diff_list=[]
#             for i in l1:
#                 for j in l2:
#                     diff_list.append([i,j,abs(i-j)])
#             selected = [0,0,1000]
#             for i in diff_list:
#                 if i[2]<selected[2]:
#                     selected = i
#             return selected
#         selected = get_diff(start,end)
#         finalList.append(selected[:-1])
#         start.remove(selected[0])
#         end.remove(selected[1])
#     return sorted(finalList, key=lambda x: x[1])
# a=get_start_end(string)
# finalList = get_final_list(a[0],a[1])
# print(finalList)

import pyautogui, time

screenWidth, screenHeight = pyautogui.size()
currentMouseX, currentMouseY = pyautogui.position()
c = 1
while True:
    time.sleep(3)
    currentMouseX1, currentMouseY1 = pyautogui.position()
    if (currentMouseX == currentMouseX1) and (currentMouseY == currentMouseY1):
        # print(currentMouseX1 + 100 * c,currentMouseY1)
        pyautogui.moveTo(currentMouseX1 + 100 * c,currentMouseY1)
        currentMouseX, currentMouseY = pyautogui.position()
        c = c * -1
    