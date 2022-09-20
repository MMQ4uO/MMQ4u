from django.shortcuts import render, HttpResponse

from . import qdrt, tnsk, quiz

# Create your views here.

host = 'https://a420-154-183-148-247.eu.ngrok.io/'

def home(request, *args, **kwargs):
    context = {
        'host': host,
    }
    return render(request, '20220730000000000001_HOME.html', context)

def library(request, *args, **kwargs):
    context = {
        'host': host,
        'qdrt': qdrt.QODRAT,
    }
    return render(request, '20220730000000000002_LIBRARY.html', context)

def quizes(request, *args, **kwargs):
    try:
        q = quiz.QUIZ(quiz.quiz, request.GET["quiz"])
        context = {
            'quiz_name' : q,
            'quiz_data' : q.print(),
            'quiz_ansr' : q.answer(),
        }
        return render(request, '20220730000000000004_QUIZ.html', context)
    except:
        return HttpResponse("njk")

def calculator(request, *args, **kwargs):
    try :
        tnskR = tnsk.tnskAPI(request.GET["dgre"])
        if int(request.GET["dgre"].split("&")[2]) >= int(tnskR.years()[2]) and int(request.GET["dgre"].split("&")[2]) <= int(tnskR.years()[0]):
            context = {
                "host": host,
                "lnth": tnskR.years()[:3],
                "year": request.GET["dgre"].split("&")[2],
                "lvel": request.GET["dgre"].split("&")[0][2:4],
                "syst": request.GET["dgre"].split("&")[0][4:],
                "gndr": request.GET["dgre"].split("&")[0][:2],
                "dgre": request.GET["dgre"].split("&")[1],
                "tnsk": tnskR.print(),
            }
            return render(request, '20220730000000000007_DEGREE.html', context)
        else:
            raise ValueError
    except :
        context = {
            "host": host,
            "year": '2021',
        }
        return render(request, '20220730000000000005_CALCULATOR.html', context)

def about(request, *args, **kwargs):
    context = {
        'host': host,
    }
    return render(request, '20220730000000000006_ABOUT.html', context)

def page_404(request, exception):
    return render(request, '20220730000000000008_RESPONSE.html', {"response": "404"})

def page_500(request, exception):
    return render(request, '20220730000000000008_RESPONSE.html', {"response": "500"})