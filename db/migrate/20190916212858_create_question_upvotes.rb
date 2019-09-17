class CreateQuestionUpvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :question_upvotes do |t|
      t.integer :question_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :question_upvotes, [:question_id, :user_id], unique: true
  end
end
