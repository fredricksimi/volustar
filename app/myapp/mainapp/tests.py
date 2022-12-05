from django.test import TestCase
from .models import ApplyPage, ContactPage

class ApplyPageTestCase(TestCase):
    def setUp(self):
        ApplyPage.objects.create(
            fullname = 'Robert Pattison',
            phone = '0494848822',
            email = 'rob@email.com',
            gender = 'MALE',
            residential_address = 'Paken street',
            city = 'LA',
            country = 'USA',
            any_other_info = 'oishdfsdfsiodf'
        )

    def test_model(self):
        person = ApplyPage.objects.get(id=1)
        self.assertEqual(person.fullname, 'Robert Pattison')

class ContactPageTestCase(TestCase):
    def setUp(self):
        ContactPage.objects.create(
            name = 'Mike Ross',
            email = 'mike@email.com',
            subject = 'Law',
            message = 'This is the way' 
        )

    def test_contact_model(self):
        contact = ContactPage.objects.get(id=1)
        self.assertEqual(contact.name, 'Mike Ross')

