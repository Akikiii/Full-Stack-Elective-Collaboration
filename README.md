# AbsenotArsenal
Absenot Arsenal  is a full-stack web application designed to provide users with a convenient platform for purchasing  guns and related products online. The application includes features such as a product catalog, user authentication, shopping cart functionality, order management, and more.

# Table of Contents
  * [Features](#features)
  * [Benefits](#benefits)
    + [Customer](#customer)
    + [Platform](#platform)
  * [Django](#django)

## Libraries Used

* ASGIREF
* Django
* Flake8
* Mccabe
* Pycodestyle
* Pyflakes
* Pytz
* SQLparse
* React
* React-icons
* Tailwind-hide-scrollbar
* BOOTSTRAP
* Google Fonts
* Axios
* PE-ICON-7-STROKE
* Favicon

## Features

* Product Catalog: Browse through a diverse range of guns and accessories with detailed descriptions, images, and pricing information.
* Search and Filters: Search functionality and filtering options to help users find specific products based on criteria such as brand, type, FPS (feet per second), price range, and more.
* Detailed Product Pages: Detailed product descriptions, specifications and high-resolution imagess to provide customers with all the necessary information about each item.
* Real-time Inventory Management: Ensures accurate availability status. When a customer reserves a product, the system should instantly update the inventory count to reflect the reservation.


## Benefits
### Customer
* Guaranteed Availability: Reserve popular or high-demand guns, ensuring that they don't miss out on purchasing the item when they are ready.
* Convenience: The reservation feature saves customers time by allowing them to secure their desired products in advance without having to continuously monitor availability.
* Information: Make informed decisions with detailed product descriptions, images, and user reviews.
* Security: Trust in secure payment processing and compliance with legal regulations for a safe shopping experience.
* User Experience: Enjoy intuitive navigation, personalized features, and responsive design for an optimized shopping experience.


### Platform
* Better Inventory Management: The reservation system provides valuable insights into customer demand and allows the platform to optimize inventory levels more effectively. This reduces the risk of overstocking or understocking popular items.

## Installation 

To run the development version :

  - clone this repo
  - navigate into the root folder
  - run the following in terminal
 
 ```sh
$ pip install -r requirements.txt
$ python3 manage.py makemigrations
$ python3 manage.py migrate
$ python3 manage.py createsuperuser
  ```

-Finally run
```sh
$   python3 manage.py runserver
```
Visit the site on your browser at [localhost:8000/](http://localhost:8000/)


-----IMPORTANT------
BEFORE EVERY PULL FROM GITHUB ALWAYS RUN FOR MIGRATION JUST INCASE OF NEW DATABASE DATA
--------------------
