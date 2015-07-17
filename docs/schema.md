# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null

## to_do_lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects)
title       | string    | not null
description | string    |  

## to_do_items
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
to_do_list_id | string    | not null (references to_do_lists)
order         | integer   | not null
content       | string    | not null
completed     | boolean   |

## discussions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects)
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null
content     | text      | not null
summary     | text      | not null

## comments
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
author_id     | integer   | not null, foreign key (references users)
discussion_id | integer   | not null, foreign key (references discussions)
content       | text      | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## collaborations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects)
collaborator_id | integer   | not null, foreign key (references users)
