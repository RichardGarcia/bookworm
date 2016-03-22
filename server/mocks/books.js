/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var booksRouter = express.Router();

  var books = [
    {
      id: 1,
      title: 'Head First jQuery',
      description: '<p>Want to add more interactivity and polish to your websites? Discover how jQuery can help you build complex scripting functionality in just a few lines of code. </p><p>With Head First jQuery, you\'ll quickly get up to speed on this amazing JavaScript library by learning how to navigate HTML documents while handling events, effects, callbacks, and animations. </p><p>By the time you\'ve completed the book, you\'ll be incorporating Ajax apps, working seamlessly with HTML and CSS, and handling data with PHP, MySQL and JSON. If you want to learn - and understand - how to create interactive web pages, unobtrusive script, and cool animations that don\'t kill your browser, this book is for you.</p>',
      author: 'Ryan Benedetti and Ronan Cranley',
      price: '$43.99'
    },
    {
      id: 2,
      title: 'Ember.js Cookbook',
      description: '<p>Ember.js is an open source JavaScript framework that will make you more productive. It uses common idioms and practices, making it simple to create amazing single-page applications. It also lets you create code in a modular way using the latest JavaScript features. Not only that, it has a great set of APIs to get any task done. The Ember.js community is welcoming newcomers and is ready to help you when needed.</p><p>This book provides in-depth explanations on how to use the Ember.js framework to take you from beginner to expert. You\’ll start with some basic topics and by the end of the book, you\’ll know everything you need to know to build a fully operational Ember application.</p><p>We\’ll begin by explaining key points on how to use the Ember.js framework and the associated tools. You\’ll learn how to effectively use Ember CLI and how to create and deploy your application. We\’ll take a close look at the Ember object model and templates by examining bindings and observers. We\’ll then move onto Ember components, models, and Ember Data. We\’ll show you examples on how to connect to RESTful databases. Next we\’ll get to grips with testing with integration and acceptance tests using QUnit. We will conclude by covering authentication, services, and Ember add-ons. We\’ll explore advanced topics such as services and initializers, and how to use them together to build real-time applications.</p>',
      author: 'Erik Hanchett',
      price: '$49.99'
    },
    {
      id: 3,
      title: 'Ruby on Rails Tutorial (3rd Ed.)',
      description: '<p>The Ruby on Rails Tutorial book and screencast series teach you how to develop and deploy real, industrial-strength web applications with Ruby on Rails, the open-source web framework that powers top websites such as Twitter, Hulu, GitHub, and the Yellow Pages. The Ruby on Rails Tutorial book is available for free online and is available for purchase as an ebook (PDF, EPUB, and MOBI formats).</p><p> The companion screencast series includes 12 individual lessons, one for each chapter of the Ruby on Rails Tutorial book. All purchases also include a free copy of the Solutions Manual for Exercises, with solutions to every exercise in the book.</p>',
      author: 'Michael Hartl',
      price: '$39.99'
    }
  ];

  booksRouter.get('/', function(req, res) {
    res.send({
      'books': books
    });
  });

  booksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  booksRouter.get('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.put('/:id', function(req, res) {
    res.send({
      'books': {
        id: req.params.id
      }
    });
  });

  booksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/books', require('body-parser').json());
  app.use('/api/books', booksRouter);
};
