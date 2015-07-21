# Spacecamp

[Heroku link][heroku]

[heroku]: http://www.spacecamp.xyz/

##User Authentication
User authentication is the normal Rails authentication method, and uses methods in the Application Controller, Sessions Controller, and Users Controller to track user registration and login.

## Project Index

The project index page displays all of the projects that the current user has either created, or been given collaborator access to.  
Its information from from the Api::Users Controller's show method, which renders a jbuilder containing the user's information and basic details about the projects to which they have access.
This information is then given to the ProjectsIndex (projects_index.js) Backbone View to render the information onto the page through its template.

##Project show page

Each project has a ProjectShow view (project_show.js), which displays the relevant information about the project.  The Show page is a Composite View that contains a list of the current discussion topics about the project, as well as lists of To-Do items.
The discussions index is a list of subviews, one for each discussion.  They are assembled in the render function of ProjectShow.  First, the removeAllDiscussions function removes existing discussions that have already been rendered to prevent repeats.  Then, a loop calls addDiscussion on each discussion, which places its Summary subview into a \<section\> on the page marked as a discussion list.

##To-Do List Subview
The To-Do Lists follow the same pattern, with a function that removes all of the lists and then adds them all as subviews into the correct \<section\>.  Each To-Do List also has subviews which are created in the ToDoList View (todo_list_show.js).  That view uses the same pattern in order to create a subview for each To-Do Item.

##Creating Projects

Projects are created from the ProjectIndex page.  Clicking on the Create Project square will take you to a form where the project title and details can be filled in.  Clicking on the "Create" button will create the project and return you to the index.  
This process is handled by the ProjectsForm View (projects_form.js), and rendered by its template.

##Creating discussions

Discussions are created by clicking on the "Post a new message" button in the Project View page.  This will take you to the DiscussionForm view (discussion_form.js), which renders the template for creating the discussion.  Your user id will automatically be logged as the author of the discussion, but anyone with access to the project can comment on the discussion.

##Commenting on discussions

Commenting on discussions is done through each discussion's DiscussionShow View (discussion_show.js).  The form to comment is embedded into the Show View's page as a subview, using the same technique as the other subviews on the site, and is controlled by the CommentForm View (comment_form.js).  Comments submitted using this form will appear on the DiscussionShow page, and display the name of the user that wrote them.

##Adding To-Do Lists

Clicking on the "Add a to-do list" button on the Project Show page will cause the ToDoList Form subview to appear (todo_list_form.js).  This will allow you to create a new list and give it a title.
Each To-Do List is provided with the id of its parent Project by the "Submit" method inside the ToDoList View, so that it is only displayed in the correct place.

##Adding To-Do Items

Clicking on the "Add a to-do" link inside of any To-Do List triggers an event causing that link to disappear, and the form to create such an item to appear in its place.  The form is a subview implemented like all the other oneds.
That form can be used to submit a new To-Do Item, and to assign it to anyone who currently is working on the project.  It know who is working on the project because the ProjectView passes down a list of collaborators that it received from its jbuilder (the project owner is also listed as a collaborator).
Once a To-Do Item is saved, it will appear unchecked below the others.  If the To-Do Item is checked as complete, that status is saved in the database and it will remain marked as complete.

##Features to implement
- [ ] Better styling for completed To-Do Items
- [ ] Share projects with other project members
- [ ] View discussions
- [ ] View To-Do Items
- [ ] Rearrange To-Do items
- [ ] Oauth integration with Google login
- [ ] Uploading avatars
- [ ] Uploading files
