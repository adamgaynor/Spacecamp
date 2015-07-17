class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :discussion_id, null: false
      t.text :content, null: false

      t.timestamps null: false
    end
    add_index :comments, :author_id
    add_index :comments, :discussion_id
  end
end
