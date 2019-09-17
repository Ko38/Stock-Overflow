class CreateViews < ActiveRecord::Migration[5.2]
  def change
    create_table :views do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.timestamps
    end

    add_index :views, [:question_id, :user_id], unique: true
  end
end
