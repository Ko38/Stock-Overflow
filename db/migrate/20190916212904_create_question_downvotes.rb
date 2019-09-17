class CreateQuestionDownvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :question_downvotes do |t|
      t.integer :question_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :question_downvotes, [:question_id, :user_id], unique: true
  end
end
