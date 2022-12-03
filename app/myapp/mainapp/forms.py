from django import forms
from .models import ApplyPage, ContactPage

class ApplyPageForm(forms.ModelForm):
    class Meta:
        model = ApplyPage
        fields = '__all__'

class ContactPageForm(forms.ModelForm):
    name = forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Name"}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={"placeholder":"Email"}))
    subject = forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Subject"}))
    message = forms.Textarea(attrs={"placeholder":"Message"})

    class Meta:
        model = ContactPage
        fields = ['name', 'email', 'subject', 'message']