class CreateEvents2 < ActiveRecord::Migration
  def change
    drop_table :calendar_events
    create_table :events do |t|
      t.string :title, null: false
      t.datetime :start, null: false
      t.datetime :end, null: false
      t.string :color, null: false
      t.integer :project_id, null: false

      t.timestamps null: false
    end
  end
end
