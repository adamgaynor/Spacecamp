# Phase 2: Viewing Blogs and Posts

## Rails
### Models

### Controllers
Api::ProjectsController (create, destroy, index, show)
Api::DiscussionsController (create, destroy, show, update)

### Views
* projects/show.json.jbuilder

## Backbone
### Models
* Project (parses nested `To-Dos` and 'Discussions' association)
* To-Do
* Discussion

### Collections
* Projects
* To-Dos
* Discussions

### Views
* Project (composite view, contains DiscussionsIndex subview, and To-Dos subview)
* DiscussionsIndex (a list of the project's discussions)
* Discussion
* To-Dos (composite view, contains a list of To-Do subviews)
* To-Do

## Gems/Libraries
