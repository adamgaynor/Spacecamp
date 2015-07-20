class AddAssignmentToTodoItems < ActiveRecord::Migration
  def change
    add_column :to_do_items, :assigned_user_id, :integer, null: false, default: -1
    add_index :to_do_items, :assigned_user_id
  end
end
