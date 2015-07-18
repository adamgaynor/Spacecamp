class CreateCollaborations < ActiveRecord::Migration
  def change
    create_table :collaborations do |t|
      t.integer :project_id
      t.integer :collaborator_id

      t.timestamps null: false
    end
    add_index :collaborations, :project_id
    add_index :collaborations, :collaborator_id
  end
end
