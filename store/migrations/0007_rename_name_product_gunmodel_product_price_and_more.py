# Generated by Django 5.0.6 on 2024-05-14 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_product_category_product_desc'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='name',
            new_name='gunModel',
        ),
        migrations.AddField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=10),
        ),
        migrations.AddField(
            model_name='product',
            name='subcategory',
            field=models.CharField(choices=[], default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('Firearm', 'Firearm'), ('Accessories', 'Accessories'), ('Ammunition', 'Ammunition')], default='Firearm', max_length=50),
        ),
        migrations.AlterField(
            model_name='product',
            name='sortno',
            field=models.PositiveIntegerField(unique=True),
        ),
    ]
