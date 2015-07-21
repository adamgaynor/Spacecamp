# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


users = User.create([{
    email: 'adamgaynor71017@gmail.com',
    fname: 'Adam',
    lname: 'Gaynor',
    password: 'aaaaaa'
  }, {
    email: 'john_smith@example.com',
    fname: 'John',
    lname: 'Smith',
    password: 'qwerty'
  }
])

projects = Project.create([{
    owner_id: users.first.id,
    title: 'SpaceCamp',
    description: 'A project management site...for astronauts!'
  }, {
    owner_id: users[1].id,
    title: 'SpaceCamp2',
    description: 'Another project management site...for astronauts!'
  }
])

to_do_lists = ToDoList.create([{
    project_id: projects.first.id,
    title: 'Features',
    description: 'To be implemented.'
  }, {
    project_id: projects[1].id,
    title: 'Features',
    description: 'To be implemented.'
  }
])

to_do_items = ToDoItem.create([{
    to_do_list_id: to_do_lists.first.id,
    description: 'To-Do Lists',
    completed: true,
    order: 0,
    assigned_user_id: users.first.id
  }, {
    to_do_list_id: to_do_lists.first.id,
    description: 'Discussion Boards',
    completed: false,
    order: 1,
    assigned_user_id: users.first.id
  }, {
    to_do_list_id: to_do_lists[1].id,
    description: 'To-Do Lists',
    completed: true,
    order: 0,
    assigned_user_id: users.first.id
  }, {
    to_do_list_id: to_do_lists[1].id,
    description: 'Discussion Boards',
    completed: false,
    order: 1,
    assigned_user_id: users.first.id
  }]
)

discussions = Discussion.create([
  {
    author_id: users.first.id,
    project_id: projects.first.id,
    title: 'Sample Discussion',
    content: 'Here is my proposal',
    summary: 'Here is what I propose we do about the thing.'
    }, {
  author_id: users.first.id,
  project_id: projects[1].id,
  title: 'Sample Discussion',
  content: 'Here is my proposal',
  summary: 'Here is what I propose we do about the thing.'
  }
])

comments = Comment.create([{
    author_id: users[1].id,
    discussion_id: discussions.first.id,
    content: 'Yes we really should discuss this.'
  }, {
      author_id: users[1].id,
      discussion_id: discussions[1].id,
      content: 'Yes we really should discuss this.'
    }
])

collaborations = Collaboration.create([{
    user_id: users.first.id,
    project_id: projects.first.id
  }, {
    user_id: users[1].id,
    project_id: projects.first.id
  }, {
    user_id: users[1].id,
    project_id: projects[1].id
  }
])
