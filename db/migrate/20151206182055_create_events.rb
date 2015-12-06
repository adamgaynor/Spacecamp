class CreateEvents < ActiveRecord::Migration
  def change
    create_table :calendar_events do |t|
      t.string :title, null: false
      t.datetime :start, null: false
      t.datetime :end, null: false
      t.string :color, null: false

      t.timestamps null: false
    end
  end
end
