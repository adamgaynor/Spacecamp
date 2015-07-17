# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150717183558) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",     null: false
    t.integer  "discussion_id", null: false
    t.text     "content",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["discussion_id"], name: "index_comments_on_discussion_id", using: :btree

  create_table "discussions", force: :cascade do |t|
    t.integer  "project_id", null: false
    t.integer  "author_id",  null: false
    t.string   "title",      null: false
    t.text     "content"
    t.text     "summary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "discussions", ["author_id"], name: "index_discussions_on_author_id", using: :btree
  add_index "discussions", ["project_id"], name: "index_discussions_on_project_id", using: :btree

  create_table "projects", force: :cascade do |t|
    t.integer  "owner_id",    null: false
    t.string   "title",       null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "projects", ["owner_id"], name: "index_projects_on_owner_id", using: :btree

  create_table "to_do_items", force: :cascade do |t|
    t.integer  "to_do_list_id",                 null: false
    t.integer  "order",                         null: false
    t.string   "description",                   null: false
    t.boolean  "completed",     default: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
  end

  add_index "to_do_items", ["to_do_list_id"], name: "index_to_do_items_on_to_do_list_id", using: :btree

  create_table "to_do_lists", force: :cascade do |t|
    t.integer  "project_id",  null: false
    t.string   "title",       null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "to_do_lists", ["project_id"], name: "index_to_do_lists_on_project_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree

end
