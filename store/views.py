from django.shortcuts import render, redirect
from django.views.generic import ListView
from django.contrib.auth.decorators import login_required
from django.db.models import F
from rest_framework import generics
from django.db import transaction
from .models import Product
from .serializer import ProductSerializer
from users.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Product
from django.http import JsonResponse
from .models import (
    Supplier,
    Buyer,
    Season,
    Drop,
    Product,
    Order,
    Delivery
)
from .forms import (
    SupplierForm,
    BuyerForm,
    SeasonForm,
    DropForm,
    ProductForm,
    OrderForm,
    DeliveryForm
)


# Supplier views
@login_required(login_url='login')
def create_supplier(request):
    form = SupplierForm()
    if request.method == 'POST':
        form = SupplierForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            address = form.cleaned_data['address']
            email = form.cleaned_data['email']
            contact_number = form.cleaned_data['contact_number']
            user = request.user
            Supplier.objects.create(user=user, name=name, address=address, email=email, contact_number=contact_number)
            return redirect('supplier-list')
    context = {
        'form': form
    }
    return render(request, 'store/create_supplier.html', context)





class SupplierListView(ListView):
    model = Supplier
    template_name = 'store/supplier_list.html'
    context_object_name = 'supplier'


# Buyer views
@login_required(login_url='login')
def create_buyer(request):
    if request.method == 'POST':
        form = BuyerForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            address = form.cleaned_data['address']
            email = form.cleaned_data['email']
            contact_number = form.cleaned_data['contact_number']
            user = request.user
            buyer = Buyer.objects.create(user=user, name=name, address=address, email=email, contact_number=contact_number)
            return redirect('buyer-list')
    else:
        form = BuyerForm()
        
    context = {
        'form': form
    }
    return render(request, 'store/create_buyer.html', context)


class BuyerListView(ListView):
    model = Buyer
    template_name = 'store/buyer_list.html'
    context_object_name = 'buyer'


# Season views
@login_required(login_url='login')
def create_season(request):
    forms = SeasonForm()
    if request.method == 'POST':
        forms = SeasonForm(request.POST)
        if forms.is_valid():
            forms.save()
            return redirect('season-list')
    context = {
        'form': forms
    }
    return render(request, 'store/create_season.html', context)


class SeasonListView(ListView):
    model = Season
    template_name = 'store/season_list.html'
    context_object_name = 'season'


# Drop views

@login_required(login_url='login')
def create_drop(request):
    if request.method == 'POST':
        form = DropForm(request.POST)
        if form.is_valid():
            product = form.cleaned_data['product']
            quantity = form.cleaned_data['quantity']
            # Update product quantity
            product.quantity += quantity
            product.save()
            # Save Drop instance
            form.save()
            return redirect('store/product-list')  # Redirect to success page
    else:
        form = DropForm()
    return render(request, 'store/create_drop.html', {'form': form})



class DropListView(ListView):
    model = Drop
    template_name = 'store/drop_list.html'
    context_object_name = 'drop'


# Product views
@login_required(login_url='login')
def create_product(request):
    forms = ProductForm()
    if request.method == 'POST':
        forms = ProductForm(request.POST)
        if forms.is_valid():
            forms.save()
            return redirect('product-list') 
    context = {
        'form': forms
    }
    return render(request, 'store/create_product.html', context)


class ProductListView(ListView):
    model = Product
    template_name = 'store/product_list.html'
    context_object_name = 'product'


# Order views
@login_required(login_url='login')


@login_required(login_url='login')
def create_order(request):
    form = OrderForm()
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            supplier = form.cleaned_data['supplier']
            product = form.cleaned_data['product']
            buyer = form.cleaned_data['buyer']
            quantity = form.cleaned_data['quantity']

            # Create the order
            Order.objects.create(
                supplier=supplier,
                product=product,
                buyer=buyer,
            )

            # Update the product's available quantity by deducting the ordered quantity
            Product.objects.filter(pk=product.pk).update(quantity=F('quantity') - quantity)

            return redirect('order-list')
    context = {'form': form}
    return render(request, 'store/create_order.html', context)



class OrderListView(ListView):
    model = Order
    template_name = 'store/order_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['order'] = Order.objects.all().order_by('-id')
        return context


# Delivery views
@login_required(login_url='login')
def create_delivery(request):
    forms = DeliveryForm()
    if request.method == 'POST':
        forms = DeliveryForm(request.POST)
        if forms.is_valid():
            forms.save()
            return redirect('delivery-list')
    context = {
        'form': forms
    }
    return render(request, 'store/create_delivery.html', context)


class DeliveryListView(ListView):
    model = Delivery
    template_name = 'store/delivery_list.html'
    context_object_name = 'delivery'


class ProductListViewer(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
def product_list(request):
    products = Product.objects.all()
    products_list = list(products.values())  # Convert QuerySet to list of dictionaries
    return JsonResponse(products_list, safe=False)