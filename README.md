# Course project
### Skills demonstrated/used
Project management and React
### Description
I want to showcase this project to demonstrate my ability to not only work with React but to show how I work with React in a team. The following description contains notes to give some part of the text context, which can be found below the description.

My role for the project was to act as a team (1) lead, but I also did some development. As team lead I proposed we use React (2) and then I dictated the development process as well as tested and merged code. As the most seasoned developer in my team, I helped the others with struggles they had in development. 

As team lead I naturally served as the primary communication channel between us and the other teams (1) and conveyed information to my team. I also took it upon myself to fix bugs and do the final deploy by the course end.

I also created the product listing page. Not alot to say about it and whoever is reading this will probably find it more helpful to look through the commit/code by themselves if interested.

 ### Notes
 1. This project was just one of many microservices developed developed under one course. The course was structured as one big agile project and each team (comprised of students in the same class) created either one frontend or one API. I chose frontend because I wanted more experience with the client side. As the most seasoned developer, I quickly started pitching ideas and was soon appointed team lead.
 2. Each team was free to choose any technology to work with. Naturally the lecturer advised us to choose something not too cryptic as then he couldn't be much of help with eventual problems. I chose React simply because of it's popularity because then everyone in my team would be familiar with it.
 
(This repository is a fork of the original which was created as a joint effort for a course)



(Below is the readme of the original project)
--------------------------------------------------------------------------------------
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
