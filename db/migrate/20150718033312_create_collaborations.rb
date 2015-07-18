class CreateCollaborations < ActiveRecord::Migration
  def change
    create_table :collaborations do |t|
      t.integer :project_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :collaborations, :project_id
    add_index :collaborations, :user_id
  end
end
