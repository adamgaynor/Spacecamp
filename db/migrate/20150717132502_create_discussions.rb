class CreateDiscussions < ActiveRecord::Migration
  def change
    create_table :discussions do |t|
      t.integer :project_id, null: false
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :content
      t.text :summary

      t.timestamps null: false
    end
    add_index :discussions, :project_id
    add_index :discussions, :author_id
  end
end
