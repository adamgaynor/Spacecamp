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

# Game of thrones seed data

ned = User.create({
  email: "eddard_stark@winterfell.com",
  fname: "Eddard",
  lname: "Stark",
  password: "winteriscoming"
})

catelyn = User.create({
  email: "catelyn_tully@winterfell.com",
  fname: "Catelyn",
  lname: "Tully",
  password: "stoneheart"
})

sansa = User.create({
  email: "sansa_stark@winterfell.com",
  fname: "Sansa",
  lname: "Stark",
  password: "loras"
})

arya = User.create({
  email: "arya_stark@winterfell.com",
  fname: "Arya",
  lname: "Stark",
  password: "pointyend"
})

jon_snow = User.create({
  email: "jon_snow@winterfell.com",
  fname: "Jon",
  lname: "Snow",
  password: "youknownothing"
})

stannis = User.create({
  email: "stannis_baratheon@dragonstone.com",
  fname: "Stannis",
  lname: "Baratheon",
  password: "ironthrone"
})

tyrion = User.create({
  email: "tyrion_lannister@casterly_rock.com",
  fname: "Tyrion",
  lname: "Lannister",
  password: "valonqar"
})

jaime = User.create({
  email: "jaime_lannister@casterly_rock.com",
  fname: "Jaime",
  lname: "Lannister",
  password: "brienne"
})

cersei = User.create({
  email: "cersei_lannister@casterly_rock.com",
  fname: "Cersei",
  lname: "Lannister",
  password: "joffrey"
})

danaerys = User.create({
  email: "danaerys_targaryen@dothraki.com",
  fname: "Danaerys",
  lname: "Targaryen",
  password: "khaleesi"
})

littlefinger = User.create({
  email: "littlefinger@kingslanding.com",
  fname: "Petyr",
  lname: "Baelish",
  password: "catelyn"
})
