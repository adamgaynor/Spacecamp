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
    password: 'aaaaaa',
    id: 1
  }, {
    email: 'john_smith@example.com',
    fname: 'John',
    lname: 'Smith',
    password: 'qwerty',
    id: 2
  }
])

projects = Project.create([{
    owner_id: users.first.id,
    title: 'SpaceCamp',
    description: 'A project management site...for astronauts!',
    id: 1
  }, {
    owner_id: users[1].id,
    title: 'SpaceCamp',
    description: 'A project management site...for astronauts!',
    id: 2
  }
])

to_do_lists = ToDoList.create([{
    project_id: projects.first.id,
    title: 'Features',
    description: 'To be implemented.',
    id: 1
  }, {
    project_id: projects[1].id,
    title: 'Features',
    description: 'To be implemented.',
    id: 2
  }
])
