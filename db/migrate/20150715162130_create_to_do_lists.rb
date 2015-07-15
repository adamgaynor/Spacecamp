class CreateToDoLists < ActiveRecord::Migration
  def change
    create_table :to_do_lists do |t|
      t.integer :project_id, null: false
      t.string :name, null: false
      t.string :description

      t.timestamps null: false
    end
    add_index :to_do_lists, :project_id
  end
end
