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
The discussions index is a list of subviews, one for each discussion.  They are assembled in the render function of ProjectShow.  First, the removeAllDiscussions function removes existing discussions that have already been rendered to prevent repeats, then a loop calls addDiscussion on each discussion.


[Details][phase-one]

###Phase 2: Viewing Projects, Discussions, and To-Do items (~2 days)
I will add API routes to send Project, Discussion, and To-Do item information as JSON. The API routes will use CRUD functionality to create, render, and destroy items. Users will be able to create projects and view the discussions and To-Do items inside of them within the Backbone app.

[Details][phase-two]

###Phase 3: Inviting Collaborators to Projects (~1 day)
I will add functionality for intrepid space explorers to be invited as collaborators on others' projects, so that they can view and comment on the project's discussions, as well as add To-Do items.

[Details][phase-three]

###Phase 4: Commenting on Discussions and assigning To-Do items (~2 days)
I will add the capability for fellow cosmonauts to comment on discussions to which they have access. I will also add the capability for the project owner to assign To-Do items to specific collaborators on the project.

[Details][phase-four]

###Phase 5: Drag-and-Drop rearranging of To-Do items (~2 days)
I will implement the ability to drag-and-drop to rearrange items in the To-Do list and discussions list, with the 'jQuery UI' library.

[Details][phase-five]

###Phase 6: Users can upload documents to be viewed by collaborators (~2 days)
I will add the capability for users to upload documents that can be shared with collaborators on the same project. This will be done using the "paperclip" library.

### Bonus Features (TBD)
- [ ] Users can upload documents
- [ ] Users can share documents with other project members
- [ ] Projects will have a central calendar for team members to coordinate
- [ ] Track the history of project updates
- [ ] Some kind of fancy authentication

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
