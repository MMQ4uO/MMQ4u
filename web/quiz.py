from random import shuffle
import sys

artc = [
[
'',
'',
],
]
imag = [
'',
]
def artc_srch(name):
    pass
quiz =  \
    '20220911200000000001 اختبار قدرات 1\n'\
    '- القسم اﻷول\n'\
    '# 0 - 0 - من هو المعلم\n'\
    '* المدرس , الطبيب , المهندس , الميكانيكي\n'\
    '# 1 - 0 - من هو الطبيب\n'\
    '* الحلاق , الدكتور , الجزار , الخياط\n'\
    '- القسم الثاني\n'\
    '# 2 - 0 - اختر الإجابة الثالثة\n'\
    '* اﻷولى , الثانية , الثالثة , الرابعة\n'\
    '# 3 - 0 - اختر الإجابة الرابعة\n'\
    '* اﻷولى , الثانية , الثالثة , الرابعة\n'\
    '# 3 - 0 - اختر الإجابة اﻷولى\n'\
    '* اﻷولى , الثانية , الثالثة , الرابعة\n'\
    '----'\
    '20220911200000000002 اختبار قدرات 2\n'\
    '- القسم اﻷول\n'\
    '# 0 - 0 - من هو المعلم\n'\
    '* المدرس , الطبيب , المهندس , الميكانيكي\n'\
    '# 1 - 0 - من هو الطبيب\n'\
    '* الحلاق , الدكتور , الجزار , الخياط\n'\
    '- القسم الثاني\n'\
    '# 2 - 0 - اختر الإجابة الثالثة\n'\
    '* اﻷولى , الثانية , الثالثة , الرابعة\n'\
    '# 3 - 0 - اختر الإجابة الرابعة\n'\
    '* اﻷولى , الثانية , الثالثة , الرابعة\n'
class QUIZ():
    """
QUIZ(quiz, index).[option]

len(QUIZ(quiz, index)) : to return the number of questions
    
option
    print() : to return a quiz as list
    """
    a = []
    b = []
    d = ''
    i = 0
    def __init__(self, quiz, index) -> None:
        x = 0
        for y in quiz.split('\n----'):
            if y.split('\n- ', 1)[0].split(' ', 1)[0] == index:
                self.d = quiz
                self.i = x
            x += 1
        self.a = []
        x0 = 0
        x1 = 0
        for y in self.d.split('\n----')[self.i].split('\n- ', 1)[1].split('\n- '):
            x2 = 0
            self.a.append([])
            self.a[x1].append(y.split('\n# ', 1)[0])
            self.a[x1].append([])
            for z in y.split('\n# ', 1)[1].split('\n# '):
                self.a[x1][1].append([])
            for z in y.split('\n# ', 1)[1].split('\n# '):
                self.a[x1][1][x2].append(z.split('\n* ', 1)[0].split(' - ', 3))
                self.a[x1][1][x2].append(z.split('\n* ', 1)[1].split(' , ', 3))
                self.a[x1][1][x2][0].insert(0, x0)
                x0 += 1
                for s in z.split('\n* ', 1)[1].split('\n* '):
                    x3 = 0
                    for t in s.split(' , ', 3):
                        self.a[x1][1][x2][1][x3] = [x3, t]
                        x3 += 1
                    shuffle(self.a[x1][1][x2][1])
                x2 += 1
            x1 += 1
        x1 = 0
        for y in self.d.split('\n----')[self.i].split('\n- ', 1)[1].split('\n- '):
            shuffle(self.a[x1][1])
            x1 += 1
    def __str__(self):
        return self.d.split('\n----')[self.i].split('\n- ', 1)[0]
    def __len__(self) -> int:
        x = 0
        for y in self.d.split('\n----')[self.i].split('\n- ', 1)[1].split('\n- '):
            for z in y.split('\n# ', 1)[1].split('\n# '):
                x += 1
        return x
    def print(self) -> list:
        return self.a
    def answer(self) -> list:
        self.b = []
        x = 0
        for y in self.print():
            self.b.append([])
            for z in y[1]:
                self.b[x].append([z[0][0], z[0][1]])
            x += 1
        return self.b
# quiz = \
#     'form_id form_name\n'\
#     '- part_name\n'\
#     '# question_answer - question_side(article_name | image_path | 0) - question_text\n'\
#     '* answer_1 , answer_2 , answer_3 , answer_4\n'