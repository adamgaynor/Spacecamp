class CreateToDoItems < ActiveRecord::Migration
  def change
    create_table :to_do_items do |t|
      t.integer :to_do_list_id, null: false
      t.integer :order, null: false
      t.string :description, null: false
      t.boolean :completed
      
      t.timestamps null: false
    end

    add_index :to_do_items, :to_do_list_id
    add_index :to_do_items, :order, unique: true
  end
end
