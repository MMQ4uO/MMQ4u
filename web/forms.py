from django import forms

QUIZ = {
    '200000': {
        'qstn': {
            'القسم اﻷول': [
                'سؤال',
                ('1', 'واحد'),
                ('2', 'اثنين'),
                ('3', 'ثلاثة'),
                ('4', 'أربعة'),
            ]
        },
        'answ': '',
        'artc': [
            
        ]
    },
}

class QUIZ(forms.Form) :
    pass