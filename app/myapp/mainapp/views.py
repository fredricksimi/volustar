from django.shortcuts import redirect, render
from django.utils.translation import gettext as _
# from .models import Event
from .forms import  ContactPageForm, ApplyPageForm

# Create your views here.
def home(request):
    return render(request, 'mainapp/index.html')

def apply(request):
    if request.method == 'POST':
        form = ApplyPageForm(request.POST or None)
        if form.is_valid():
            form.save()
            return redirect('mainapp:apply')
    else:
        form = ApplyPageForm()
    context = {
        'form':form
    }
    return render(request, 'mainapp/apply.html', context)

def contact(request):
    if request.method == 'POST':
        form = ContactPageForm(request.POST, auto_id=False)
        if form.is_valid():
            form.save()
            return redirect('mainapp:contact')
    else:
        form = ContactPageForm()
    context = { 'form':form }
    return render(request, 'mainapp/contact.html', context)