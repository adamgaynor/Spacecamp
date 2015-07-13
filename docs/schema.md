# Schema Information

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
title       | string    | not null

## discussions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects)
title       | string    | not null

## to_do_lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
project_id  | integer   | not null, foreign key (references projects)
title       | string    | not null
description | string    |  

## to_dos
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
to_do_list_id | string    | not null, unique (references to_do_lists)
content       | string    | not null
order         | integer   | not null
completed     | boolean   | not null

## discussion_posts
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
author_id     | integer   | not null, foreign key (references users)
discussion_id | integer   | not null, foreign key (references discussions)
body          | text      | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## collaboration

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key (references projects)
collaborator_id | integer   | not null, foreign key (references users)
