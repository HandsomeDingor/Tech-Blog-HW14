# Tech-Blog-HW14

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# GITHUB LINK: https://github.com/HandsomeDingor/Tech-Blog-HW14
# Live App: https://floating-bayou-84682.herokuapp.com/

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
* [User-Story](#user-story)
* [Acceptance-Criteria](#acceptance-criteria)
* [Built-with](#built-with)
* [Demo-Video](#demo-video)
* [Demo-output](#demo-output)

## [Description](#table-of-contents)
Your challenge this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. You’ll build this site completely from scratch and deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## [Installation](#table-of-contents)
1. Clone the Repository.
2. Create a file name ".env" to the root folder.
3. Add to ".env" file DB_NAME=TechBlog_db , DB_USER='your username' , DB_PW='your password'.
4. Run npm install in the terminal.
5. Run npm run seeds.
6. Run npm start.


## [Usage](#table-of-contents)
N/A

## [Contributing](#table-of-contents)
N/A

## [Tests](#table-of-contents)
N/A

## [License](#table-of-contents)
The application is covered under the MIT License.

## [Questions](#table-of-contents)
Please contact me using the following options:

[GitHub](https://github.com/HandsomeDingor)

[Email: Gmail](mailto:jay807541931@gmail.com)


## [User-Story](#table-of-contents)

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## [Acceptance-Criteria](#table-of-contents)

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

```

## [Built-With](#table-of-contents)
* npm
* node.js
* vs code 
* Javascript
* Sequelieze
* MySql2
* Express
* Dotenv
* bcrypt
* connect-session-sequelize
* dotenv
* express-handlebars
* express-session
* handlebars


## [Demo-Vide](#table-of-contents)
## The following video demonstrates the application functionality:
N/A

## [Demo-Output](#table-of-contents)
## The demo README on dist file will look like the below:
![hw14](https://user-images.githubusercontent.com/94802639/160303717-e77cca37-33e7-41f9-9ad6-4e3fc55fda8c.gif)
![hw14(2)](https://user-images.githubusercontent.com/94802639/160303718-cd800033-5826-4822-89cf-f8534ce24d17.gif)

