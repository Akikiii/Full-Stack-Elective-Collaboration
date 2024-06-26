from django.db import models

from users.models import User




class Supplier(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=120, unique=True)
    address = models.CharField(max_length=220)
    email = models.EmailField(max_length=220, default='')
    contact_number = models.CharField(max_length=20, default="none")
    created_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name


class Buyer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=120)
    address = models.CharField(max_length=220)
    email = models.EmailField(max_length=220, default='')
    contact_number = models.CharField(max_length=20, default="none")
    created_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name


class Season(models.Model):
    name = models.CharField(max_length=120, unique=True)
    description = models.CharField(max_length=220)
    created_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name


class Drop(models.Model):
    name = models.CharField(max_length=120, unique=True)
    created_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    CATEGORY_CHOICES = [
        ('Pistol', 'Firearm - Pistol'),
        ('Shotgun', 'Firearm - Shotgun'),
        ('Rifle', 'Firearm - Rifle'),
        ('Magazine','Accessories - Magazine'),
        ('Optics','Accessories - Optics'),
        ('Knives','Accessories - Knives'),
        ('Ammunition','Ammunition'),
    ]

    SUBCATEGORY_CHOICES = {
        'Firearm': [
            ('Pistol', 'Pistol'),
            ('Shotgun', 'Shotgun'),
            ('Rifle', 'Rifle')
        ],
        'Attachments': [
            ('Magazine', 'Magazine'),
            ('Optics', 'Optics'),
            ('Knives', 'Knives')
        ]
    }

    
    gunModel = models.CharField(max_length=120, unique=True)
    desc = models.CharField(max_length=500, default= 'This is an Item', null=True)
    sortno = models.PositiveIntegerField(unique = True)
    quantity = models.PositiveIntegerField(default = 0)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='Firearm')
    subcategory = models.CharField(max_length=50, choices=[], default='', null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    created_date = models.DateField(auto_now_add=True)


    def __str__(self):
        return self.gunModel


class Order(models.Model):
    STATUS_CHOICE = (
        ('pending', 'Pending'),
        ('decline', 'Decline'),
        ('approved', 'Approved'),
        ('processing', 'Processing'),
        ('complete', 'Complete'),
        ('bulk', 'Bulk'),
    )
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    buyer = models.ForeignKey(Buyer, on_delete=models.CASCADE, null=True)
    quantity = models.PositiveIntegerField(default = 0)
    created_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.product.name


class Delivery(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    courier_name = models.CharField(max_length=120)
    created_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.courier_name
