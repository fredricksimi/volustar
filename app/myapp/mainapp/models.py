from django.db import models
from .countries import COUNTRIES

GENDER = (
    ('MALE', 'MALE'),
    ('FEMALE', 'FEMALE')
)

class ApplyPage(models.Model):
    fullname = models.CharField(max_length=150)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    gender = models.CharField(max_length=50, choices=GENDER)
    residential_address = models.CharField(max_length=150)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50, choices=COUNTRIES)
    any_other_info = models.TextField()

    def __str__(self):
        return f"{self.fullname} - {self.email}"

class ContactPage(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField()
    subject = models.CharField(max_length=250)
    message = models.TextField()

    class Meta:
        verbose_name_plural = "Contact Page Messages"

    def __str__(self):
        return f"{self.name} - {self.email}"