# The frontend of Scalperz's store
### A joint effort by Fredrik Wasström, Dilan Zibari, Sigrid Hallik and Christian Sandqvist

## Scalperz Store
A complete storefront with product listing, cart, checkout.

## Brief technical description
This repo houses the necessary files to run the store. The frontend gets products, inventory, user data and cart data from various APIs in a microservices architecture manner. The store itself is built on React and uses Axios to make requests. Session data is stored in a cookie. The frontend is deployed to https://scalperz-store.herokuapp.com/.

Info about React can be found in the wiki https://github.com/FrediWa/scalperz-store/wiki/React-info.

## Team
The team consists of:
- Fredrik Wasström – Team lead and product listing
- Dilan Zibari – Login and routing
- Sigrid Hallik – Checkout
- Christian Sandqvist – Cart

Majority of communication has been done through Discord and subtasks have been managed through the issues and the project board of this repo.

## API Dependency
The frontend is dependent on a couple service APIs. It is directly dependent on:
- Users service
- Product service
- Inventory service
- Cart service
- Order service

The application itself is not dependent on the shipping and invoicing services. When a user makes an order the order service contacts the necessary services to fully process the order. However the user can technically from start to finish make an order on the store without the aforementioned services. 
