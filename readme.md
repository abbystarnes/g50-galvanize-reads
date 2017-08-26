https://galvanize-reads-abby-s.herokuapp.com/books  

## Background

**Galvanize Reads** is a book catalog service that stores a list of recommended technology books. You are building a web app for them. It should allow you to:

* List books and authors
* Add books and authors
* Modify books and authors
* Remove books and authors

There are some additional features, such as search, that are nice-to-haves, but a lower priority than the core features. Focus on the basic CRUD actions. The folks at Galvanize Reads have provided you some sample data from their existing registry that you can use for development.

An example application can be found here: https://g48-galvanize-reads.herokuapp.com/

Please note that the above sample application has the majority of features but not all. Additionally, please feel free to spend less time on styling.

## Import stories into Pivotal Tracker

Import this CSV into a new project in Pivotal Tracker to get the requirements for this story. You may find it useful to prioritize the stories before you begin.

```
Id,Title,Labels,Iteration,Iteration Start,Iteration End,Type,Estimate,Current State,Created at,Accepted at,Deadline,Requested By,Description,URL,Owned By,Task,Task Status,Task,Task Status,Task,Task Status,Task,Task Status,Task,Task Status,Task,Task Status,Task,Task Status
129955941,"As a user, I need to be able to identify the company","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955941,,Add a header,not completed,Find an appropriate logo,not completed,Add the logo,not completed
129955943,"As a user, I need to be able to list all the books","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955943,,Set up a local express server,not completed,Store some sample books data,not completed,Retrieve the books data from the express server,not completed,Create a view for the books data,not completed,Deliver the data to the view,not completed,Deliver the view with the data to the user,not completed,Deploy the express server and database,not completed
129955947,"As a user, I need to be able to delete an existing book","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955947,,Create a view for deleting books,not completed,Create a link to the delete view from the books list,not completed,Create a route for deleting books,not completed,Deploy your changes,not completed
129955949,"As a user, I need to be able to edit existing books","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955949,,Create a view for editing books,not completed,Validate user input,not completed,Link to the edit view from the books list,not completed,Create a route for editing books,not completed,Validate user input on the route,not completed,Deploy your changes,not completed
129955953,"As a user, I need to be able to link to a specific book","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955953,,Create a view for reading a single book,not completed,Create a route for reading a single book,not completed,Deploy your changes,not completed
129955955,"As a user, I need to be able to list all the authors","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955955,,Update the data model to include authors,not completed,Add some seed author data,not completed,Create an authors list view,not completed,Create an authors list route,not completed,Deploy your changes,not completed
129955957,"As a user, I need to be able to easily navigate between books and authors","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955957,,Add an index page that links to the books list and authors list pages,not completed,Add a side navigation that's visible from the books list and authors list pages,not completed,Deploy your changes,not completed
129955959,"As a user, I need to be able to add an author","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955959,,Create an add author view,not completed,Validate user input in the view,not completed,Create an add author route,not completed,Validate user input in the route,not completed,Deploy your changes,not completed
129955963,"As a user, I need to be able to delete an existing author","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955963,,Create delete author view,not completed,Create delete author route,not completed,Deploy your changes,not completed
129955965,"As a user, I need to be able to edit existing authors","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955965,,Create an edit author view,not completed,Validate user input on the view,not completed,Create an edit author route,not completed,Validate user input on the route,not completed,Deploy your changes,not completed
129955967,"As a user, I need to be able to link to a specific author","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955967,,Create a view for a single author,not completed,Create a route for a single author,not completed,Deploy your changes,not completed
129955971,"As a user, I need to be able to link to an author from a book.","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955971,,Add links to single author views from the books list,not completed,Add links to single author views from individual books,not completed,Add links to single author views from delete books views,not completed,Deploy your changes,not completed
129955973,"As a user, I need to be able to link to a book from an author","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955973,,Add links to single book views from authors list,not completed,Add links to single book views from single author view,not completed,Add links to single book views from delete author view,not completed,Deploy your changes,not completed
129955977,"As a user, I need to be able to filter books by genre","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955977,,Add a drop down for genres to the books list,not completed,"When a value is selected from the list, only show books from that genre",not completed,Deploy your changes,not completed
129955979,"As a user, I need to limit the number of book results I receive at a time","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955979,,Limit the display on the books list page to 10 books per page,not completed,Link another page if there are more than 10,not completed,Link to a previous page if there are fewer than 10,not completed,Deploy your changes,not completed
129955983,"As a user, I need to limit the number of authors I receive at a time","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955983,,Limit the display on the authors page to 10 authors per page,not completed,Link to another page if there are more than 10 authors,not completed,Link to a previous page if there are fewer than 10 authors,not completed,Deploy your changes,not completed
129955985,"As a user, I need to search for books","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955985,,Add a field to the books list page to enter a search term for a book,not completed,Add the ability to search for a record to the books list route,not completed,Deploy your changes,not completed
129955989,"As a user, I need to be able to search for authors","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955989,,Add a field to the authors list page to enter a search term for an author,not completed,Add the ability to search for a record to the authors route,not completed,Deploy your changes,not completed
129955993,"As a user, I need to be able to search for books and authors","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955993,,Add the ability to enter a search term on the index page for authors or books,not completed,Add a route that can do a general search between books and authors,not completed,Add a view that displays the results of the search,not completed,Deploy your changes,not completed
129955995,"As a user, I need to be able see the total number of books","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955995,,"On the books list page, display the total number of books in the database",not completed,Deploy your changes,not completed
129955997,"As a user, I need to be able to see the total number of authors","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955997,,"On the authors list page, display the total number of authors in the database",not completed,Deploy your changes,not completed
129955945,"As a user, I need to be able to add a book","",1,"Sep 5, 2016","Sep 11, 2016",feature,,unstarted,"Jan 3, 2016",,,Benjamin Hassara,,https://www.pivotaltracker.com/story/show/129955945,,Create a view for adding books,not completed,Validate user input in the view,not completed,Link to the add book view from the books list,not completed,Create an express route for adding books,not completed,Validate user input in the route,not completed,Deploy your changes,not completed
```

## Sample Data

Your app should accomodate and make use of all of the sample data, which can be downloaded [here](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/galvanize_reads_sample_data.csv). **Note that the data is denormalized,** and will additionally require some transformation to get into the database.

```
ID,Book Title,Book Genre,Book Description,Book Cover URL,Author 1 First Name,Author 1 Last Name,Author 1 Biography,Author 1 Portrait URL,Author 2 First Name,Author 2 Last Name,Author 2 Biography,Author 2 Portrait URL,Author 3 First Name,Author 3 Last Name,Author 3 Biography,Author 3 Portrait URL
1,Python In A Nutshell,Python,"This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg,Alex,Martelli,"Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He's a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Göteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex's proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg,Anna,Ravenscroft,"Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg,Steve,Holden,"Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of ""Python Web Programming"", the O'Reilly School of Technology's ""Certificate series in Python"" and O'Reilly Media's ""Intermediate Python"" video series.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg
2,Think Python,Python,"If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg,Allen B.,Downey,"Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master's and Bachelor's degrees from MIT.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg,,,,,,,,
3,Learning React Native,JavaScript,"Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you’ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You’ll also discover how to access platform features such as the camera, user location, and local storage.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/learning_react_native.jpg,Bonnie,Eisenman,"Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg,,,,,,,,
4,You Don't Know JS: ES6 & Beyond,JavaScript,"No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the ""You Don’t Know JS"" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/es6_and_beyond.jpg,Kyle,Simpson,"Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg,,,,,,,,
5,You Don't Know JS: Scope & Closures,JavaScript,"No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/scope_and_closures.jpg,Kyle,Simpson,"Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg,,,,,,,,
6,You Don't Know JS: Async & Performance,JavaScript,"No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the ""You Don’t Know JS"" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques—including Promises, generators, and Web Workers—that let you create sophisticated single-page web applications and escape callback hell in the process.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/async_and_performance.jpg,Kyle,Simpson,"Kyle Simpson is an Open Web Evangelist who's passionate about all things JavaScript. He's an author, workshop trainer, tech speaker, and OSS contributor/leader.",https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg,,,,,,,,				
```

## Notes

* You can use a styling library if you'd like.
* You can use server-side templating or AJAX/RESTful services. There are trade-offs with each, but server-side templating will likely be faster to build.
* You can use a raw database driver, a query builder, or an ORM for your database connection. A query builder, such as Knex, is recommended.
* Use feature-branch workflows.
* Deploy your work.

## Wireframes

You can use these wireframes as a reference.

![Index](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Homepage.png)
![Books - List](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Book+List.png)
![Books - Read](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Book+Read.png)
![Books - New](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Book+New.png)
![Books - Edit](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Book+Edit.png)
![Books - Delete](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Book+Delete.png)
![Authors - List](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Author+List.png)
![Authors - Read](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Author+Read.png)
![Authors - New](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Author+New.png)
![Authors - Edit](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Author+Edit.png)
![Authors - Delete](https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/Galvanize+Reads+Author+Delete.png)

## How to Submit Your Assessment

Fork/clone this repo.
Add a README to your project that has:

* A link to your deployed site
* Link to your tracker project
* Links to any repos you used with updated code
* A data model of the final data model of the project

Submit the link to your repo.
