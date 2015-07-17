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
    title: 'SpaceCamp',
    description: 'A project management site...for astronauts!'
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
    order: 0
  }, {
    to_do_list_id: to_do_lists.first.id,
    description: 'Discussion Boards',
    completed: false,
    order: 1
  }, {
    to_do_list_id: to_do_lists[1].id,
    description: 'To-Do Lists',
    completed: true,
    order: 0
  }, {
    to_do_list_id: to_do_lists[1].id,
    description: 'Discussion Boards',
    completed: false,
    order: 1
  }]
)

#doesn't work
discussions = Discussion.create([{
  author_id: users.first.id,
  project_id: projects.first.id,
  title: 'Sample Discussion',
  content: 'Here is my proposal',
  summary: 'Here is my...'
  }
])
