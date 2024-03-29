# AbsenotArsenal
Absenot Arsenal  is a full-stack web application designed to provide users with a convenient platform for purchasing  guns and related products online. The application includes features such as a product catalog, user authentication, shopping cart functionality, order management, and more.

# Table of Contents
  * [Features](#features)
  * [Benefits](#benefits)
    + [Customer](#customer)
    + [Platform](#platform)
  * [Django](#django)

## Features

* Product Catalog: Browse through a diverse range of guns and accessories with detailed descriptions, images, and pricing information.
* User Authentication: Register and login to create a personalized account, enabling features such as order tracking and wishlist management.
* Shopping Cart: Add items to your shopping cart, modify quantities, and proceed to checkout for secure payment processing.
* Order Management: View order history, track the status of current orders, and manage shipping and billing information.
* Reviews and Ratings: Share feedback and ratings for  guns and accessories, helping other users make informed purchasing decisions.
* Search and Filters: Search functionality and filtering options to help users find specific products based on criteria such as brand, type, FPS (feet per second), price range, and more.
* Secure Payment Gateway: Enjoy peace of mind with secure payment processing and adherence to industry-standard security protocols.
* Detailed Product Pages: Detailed product descriptions, specifications and high-resolution imagess to provide customers with all the necessary information about each item.
* Reservations: Customers are able to place pre-orders on newly announced items
* Real-time Inventory Management: Ensures accurate availability status. When a customer reserves a product, the system should instantly update the inventory count to reflect the reservation.


## Benefits
### Customer
* Guaranteed Availability: Reserve popular or high-demand guns, ensuring that they don't miss out on purchasing the item when they are ready.
* Convenience: The reservation feature saves customers time by allowing them to secure their desired products in advance without having to continuously monitor availability.
* Information: Make informed decisions with detailed product descriptions, images, and user reviews.
* Security: Trust in secure payment processing and compliance with legal regulations for a safe shopping experience.
* User Experience: Enjoy intuitive navigation, personalized features, and responsive design for an optimized shopping experience.


### Platform
* Reduced Cart Abandonment: By allowing customers to reserve products, the platform can decrease cart abandonment rates, as customers are less likely to abandon their carts if they have a reserved item waiting for them.
* Better Inventory Management: The reservation system provides valuable insights into customer demand and allows the platform to optimize inventory levels more effectively. This reduces the risk of overstocking or understocking popular items.

## Django 

Open terminal and open CMD
- Check version of Python (python --version | python3 --version)
- Check if you have installed django (django-admin --version)

      if an error happened activate the virtual environemnt (venv\Scripts\activate) until you see (venv) path/blablabla/blabla/
      once this is actiavted type django-admin --version to check again if still pip install django

-pip install pillow (this is for adding image for database)


-We use the command "python manage.py ______" to do something in django

    Common Commands:
    -py manage.py migrate (Migrates to database)
    -py manage.py makemigration (Makes a migration table found in migrations folder)
    -py manage.py runserver (Run server to localhost/)


-----IMPORTANT------
BEFORE EVERY PULL FROM GITHUB ALWAYS RUN FOR MIGRATION JUST INCASE OF NEW DATABASE DATA
--------------------


