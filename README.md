# SpaceCamp - [Live Link][heroku]
[heroku]: http://www.spacecamp.xyz/

##Features
SpaceCamp is a project management site that allows users to create and administer their own projects, and to invite collaborators to contribute on those projects.

###Projects
Users create projects from their home screen.  The home screen displays all projects that the user owns or collaborates on.  Clicking on a project brings the user to the project's main page.

###Discussions
Users have the ability to make post messages on a project, which will appear in the discussions list and are viewable by all collaborators.  A maximum of five comments will appear on a project's home page, but more can be viewed by clicking on the link at the bottom of the section.  A summary of each discussion's most recent content is shown to the right of its title.

###Comments
Users can also make comments on other's discussion threads, which can be viewed by clicking on a discussion to go to its main view page.  The most recent comment can also be seen in the summary section to the right of a discussion's title.

###To-Do Lists
Each project can have multiple To-Do Lists, which appear below the discussions section and are displayed as a checklist.  To-Do Lists have a title and description, and can be created and edited by anyone collaborating on the project.  The link to edit a list appears when a user hovers over the title.

###To-Do Items
Each To-Do List can be assigned To-Do Items.  These items are displayed below the list's title, and contain a checkbox to show if they have been completed.  Each item has a title, and can optionally be assigned to a specific person who is collaborating on the site.  Each item can also be edited by clicking the link that appears to its left when hovering over the item.

##Technology
SpaceCamp is built using Ruby on Rails for the backend, and Backbone.js to implement an AJAX (Asynchronous JavaScript and XML) frontend.  Oauth allows users to log in using their Google login information, instead of having to create completely new accounts.  Amazon Web Services (AWS) S3 storage allows users to upload profile pictures.

###Backbone
Backbone is a JavaScript library designed to facilitate the creation of single page webapps by incorporating the use of AJAX requests into its framework.

All views in a Backbone site is displayed on a single root page, without any browser redirection.  This allows content to load in the background with AJAX, without the need to wait for a web browser to reload an entire page every time information is changed.  This lack of downtime enhances the user experience and makes the website feel significantly more responsive to input.

###Backbone Subviews
Ordinarily, Backbone views are rendered to the page one at a time, and take up the entire page.  SpaceCamp extends certain basic Backbone views with CompositeView features, which allows each vie to be divided into multiple parent and child views, each with its own content and JavaScript listeners.

**An example of this functionality is seen on each Project main page, where Discussions and To-Do Lists are shown:**

Each Discussion summary is actually a subview containing the information of only that Discussion.

Likewise, each To-Do List has its own subview, and each To-Do Item within that list is an individual subview containing the information about that particular item.

The advantages of using subviews are that they allow each data structure within a view to be compartmentalized and displayed individually, rather than lumped together with everything else on display.  It also makes assigning listeners to objects much easier, because they remain scoped to the subview in which they are created.

###Ruby on Rails
Ruby on Rails uses a Model-View-Controller (MVC) architecture, allowing users on the outside to interact with Views to receive information from Models in the database.  The Controller regulates the flow of information between these two places.  

In a classic Rails environment, each View would be a web page that the site's users would see on their browser.  Because SpaceCamp is primarily a single page webapp that uses AJAX, it displays its views as JSON information which the Backbone frontend uses to display the website's content to users.

###Oauth
Oauth allows users to log into a website using credentials from a different company, in this case Google.  The user's login information is sent to Google, which confirms the name and password through its own servers.  Google then sends back a user identification code that is used to identify the user.  The result is that the user is not required to take the time to create their own account, and can log in with one click.

###Amazon Web Services S3 Storage
AWS stores the profile pictures uploaded by users, allowing them to be displayed on the website.  When a user creates a new account, their chosen profile picture is automatically uploaded to AWS using Ruby's Paperclip gem.

##Upcoming Features

- [ ] Allow Users to upload documents, and share them with others
- [ ] Create a central calendar for team members to coordinate
- [ ] Display a project's recent updates on its main page
- [ ] Display users' profile pictures alongside their discussion comments
