from django import forms

from .models import Season, Drop, Product, Order, Delivery, Supplier


class SupplierForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'id': 'name',
        'data-val': 'true',
        'data-val-required': 'Please enter name',
    }))
    address = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'id': 'address',
        'data-val': 'true',
        'data-val-required': 'Please enter address',
    }))
    email = forms.CharField(widget=forms.EmailInput(attrs={
        'class': 'form-control',
        'id': 'email',
        'data-val': 'true',
        'data-val-required': 'Please enter email',
    }))
    contact_number = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'id': 'contact_number',
        'data-val': 'true',
        'data-val-required': 'Please enter contact number',
    }))


class BuyerForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'id': 'name',
        'data-val': 'true',
        'data-val-required': 'Please enter name',
    }))
    address = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'id': 'address',
        'data-val': 'true',
        'data-val-required': 'Please enter address',
    }))
    email = forms.CharField(widget=forms.EmailInput(attrs={
        'class': 'form-control',
        'id': 'email',
        'data-val': 'true',
        'data-val-required': 'Please enter email',
    }))
    contact_number = forms.CharField(widget=forms.EmailInput(attrs={
        'class': 'form-control',
        'id': 'email',
        'data-val': 'true',
        'data-val-required': 'Please enter number',
    }))

class SeasonForm(forms.ModelForm):
    class Meta:
        model = Season
        fields = ['name', 'description']

        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control', 'id': 'name'
            }),
            'description': forms.TextInput(attrs={
                'class': 'form-control', 'id': 'description'
            })
        }


class DropForm(forms.ModelForm):
    supplier = forms.ModelChoiceField(queryset=Supplier.objects.all(), empty_label=None, widget=forms.Select(attrs={'class': 'form-control'}))
    product = forms.ModelChoiceField(queryset=Product.objects.all(), empty_label=None, widget=forms.Select(attrs={'class': 'form-control'}))
    quantity = forms.IntegerField(widget=forms.NumberInput(attrs={'class': 'form-control'}))
    
    class Meta:
        model = Drop
        fields = ['name', 'supplier', 'product', 'quantity']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'id': 'name'})
        }


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['gunModel', 'sortno', 'category', 'price']
        widgets = {
            'gunModel': forms.TextInput(attrs={
                'class': 'form-control', 'id': 'gunModel'
            }),
            'sortno': forms.NumberInput(attrs={
                'class': 'form-control', 'id': 'sortno'
            }),
             'category': forms.Select(attrs={
                'class': 'form-control', 'id': 'category'
            }),
             'price': forms.NumberInput(attrs={
                'class': 'form-control', 'id': 'price', 'step': '0.01'
            }),
        }
class OrderForm(forms.ModelForm):
    quantity = forms.IntegerField(min_value=1)

    class Meta:
        model = Order
        fields = ['supplier', 'product', 'buyer', 'quantity'] 

        widgets = {
            'supplier': forms.Select(attrs={'class': 'form-control', 'id': 'supplier'}),
            'product': forms.Select(attrs={'class': 'form-control', 'id': 'product'}),
            'buyer': forms.Select(attrs={'class': 'form-control', 'id': 'buyer'}),
        }



class DeliveryForm(forms.ModelForm):
    class Meta:
        model = Delivery
        fields = '__all__'

        widgets = {
            'order': forms.Select(attrs={
                'class': 'form-control', 'id': 'order'
            }),
            'courier_name': forms.TextInput(attrs={
                'class': 'form-control', 'id': 'courier_name'
            }),
        }

    def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            self.fields['subcategory'].choices = []  #This starts with no choices

            if 'category' in self.data:
                category = self.data.get('category')
                self.fields['subcategory'].choices = Product.SUBCATEGORY_CHOICES.get(category, [])
            elif self.instance.pk:
                category = self.instance.category
                self.fields['subcategory'].choices = Product.SUBCATEGORY_CHOICES.get(category, [])
        


