# AbsenotArsenal

- [Table of Contents](#table-of-contents)
  * [Database Diagram](#database-diagram)
  * [Libraries Used](#libraries-used)
  * [Images of the Application](#images-of-the-application)
    + [Dashboard](#dashboard)
    + [Storefront](#storefront)
  * [Features](#features)
  * [Benefits](#benefits)
    + [Customer](#customer)
    + [Platform](#platform)
  * [Installation](#installation)
##Description
Absenot Arsenal  is a full-stack web application designed to provide users with a convenient platform for purchasing  guns and related products online. The application includes features such as a product catalog, user authentication, shopping cart functionality, order management, and more.


## Database Diagram
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/cc243985-9ebe-4089-a800-bffe6f269be4)

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

## Images of the Application
### Dashboard
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/2142c3ed-81d7-4b13-ab67-bb0847985854)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/7bf284a1-f014-48ce-b4e7-258303eafbcc)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/b6ce03cf-8263-4f73-867a-00ec5d75c394)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/1310a1f3-d30a-4382-b2e8-a7a6ea2c2cb9)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/be9cb70b-8a08-40df-bd53-f5b64638e5a6)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/f93cc641-3731-4975-81b1-bf0cf02a5ae8)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/f7d61330-6f35-4471-9f57-e3d1a225ef02)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/669b7f50-3766-424a-8998-56b94bbb28a2)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/39483f13-1611-484f-9d07-b169a65147e1)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/7ad64101-e1f2-4098-bc5f-3e1409a08b69)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/54885887-efa8-4d6d-99c0-dbbe06e02f64)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/49565cbd-e372-4030-826b-85862f326f30)

### Storefront
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/e8023420-66b7-4ea0-afe0-223438b11cbd)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/6df9f6bd-b99e-40af-a95e-d9796373511c)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/98f55193-2fdc-4b60-bd1f-c5df1285f627)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/b562c496-80cb-4d2a-82bb-0c965db2e739)
![image](https://github.com/Akikiii/Full-Stack-Elective-Collaboration/assets/120948162/c6853954-75cf-4c74-a1d5-e8a9e41a10bb)

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
