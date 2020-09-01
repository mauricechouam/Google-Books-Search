# React Google Books Search

### Overview

React-based Google Books Search app. This SPA (Single Page Application) uses [`react-router-dom`]to navigate, hide and show your React components without changing the route within Express. Using helper/util functions and React lifecycle methods to query and display books based on user searches, this is a full MERN stack application allows users to save books to a database to refer to at a later date. Built with Node, Express and MongoDB, and React-Toastify for custom alerts. Toasty!


![GitHub](https://img.shields.io/github/repo-size/mauricechouam/Google-Books-Search?style=plastic) ![GitHub](https://img.shields.io/github/last-commit/mauricechouam/Google-Books-Search?style=plastic) ![GitHub](https://img.shields.io/github/languages/top/mauricechouam/Google-Books-Search?style=plastic) [![GitHub license](https://img.shields.io/badge/licence-BSD3.0-green)](https://github.com/mauricechouam/Google-Books-Search)


## Table of Contents
* [required npm packages](#required-npm-packages)
* [Database](#Database)
* [Technologies Implementede](#Technologies-Implemented)
* [Useful resources](#Useful-resources)
* [Authors](#authors)


### required npm packages

`mongoose`, `axios`, `react-router-dom`, `react-toastify`

## Database

1. Connect to a MongoDB database named `googlebooks` using the mongoose npm package.

2. Using mongoose, create a Book schema.

3. Books should have each of the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API

* Example JSON:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```


### Technologies Implemented

* Bootstrap
* Express
* Node.js
* React
* MongoDB
* Heroku

### UseFul Resources
* [React Router](https://reacttraining.com/react-router/)
* [Proxying API Requests in Development](https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development)
* [React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
* [Presentational vs. Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

### Author
* Application Built from Scratch by 
   [mauricechouam](https://github.com/mauricechouam)
  <img src="https://github.com/mauricechouam.png" alt="GitHub Profile Pic" width="150" height="150">

