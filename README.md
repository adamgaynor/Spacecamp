# Spacecamp

[Heroku link][heroku]

[heroku]: #

##Minimum Viable Project
SpaceCamp is a clone of Basecamp for NASA built on Rails and Backbone.  It is designed for use by astronauts, to keep track of ongoing projects...in space!
Space pioneers will be able to:

 - [ ] Create accounts
 - [ ] Create sessions (log in)
 - [ ] Create projects
 - [ ] Create discussions
 - [ ] Create To-Do lists
 - [ ] Create To-Do items within To-Do lists
 - [ ] Share projects with other project members
 - [ ] View discussions
 - [ ] View To-Do Items
 - [ ] Comment on discussions
 - [ ] Rearrange To-Do items
 - [ ] Mark To-Do items as completed

##Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

###Phase 1: User Authentication, Project Creation (~1 Day)
I will implement user authentication. I will do this using the Rails framework. I will also implement the ability for users to create projects in the app using a Rails form. I will ensure that the app functions correctly when pushed to Heroku.

[Details][phase-one]

###Phase 2: Viewing Projects, Discussions, and To-Do items (~2 days)
I will add API routes to send Project, Discussion, and To-Do item information as JSON. The API routes will use CRUD functionality to create, render, and destroy items. Users will be able to create projects and view the discussions and To-Do items inside of them within the Backbone app.

[Details][phase-two]

###Phase 3: Collaborators on Projects (~1 day)
I will add functionality for users to be invited as collaborators on others' projects, so that they can view and comment on the project's discussions, as well as add To-Do items.

[Details][phase-three]

###Phase 4: Commenting on Discussions and Checking off To-Do items (~2 days)
I will add the capability for users to comment on discussions to which they have access. I will also add the capability for users to mark To-Do items as completed using the check-boxes.

[Details][phase-four]

###Phase 5: Drag-and-Drop rearranging of Discussions and To-Do items (~2 days)
I will implement the ability to drag-and-drop to rearrange items in the To-Do list and discussions list, with the 'jQuery UI' library.

[Details][phase-five]

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
