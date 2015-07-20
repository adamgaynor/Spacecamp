class AddAssignmentToTodoItems < ActiveRecord::Migration
  def change
    add_column :to_do_items, :assigned_user, :integer, null: false, default: -1
    add_index :to_do_items, :assigned_user
  end
end
