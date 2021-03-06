class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.string :body
      t.timestamps
    end

    add_index :questions, :author_id
  end
end
