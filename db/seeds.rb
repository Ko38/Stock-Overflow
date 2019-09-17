# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Question.delete_all
  User.delete_all
  user1 = User.create(username: "DemoUser", password: "1234qwer", email: "demo@xyz.com")
  question1 = Question.create(title: "What is the best programming language?", author_id: user1.id, body: "I wanna learn the best language!")
  question2 = Question.create(title: "What is the worst programming language?", author_id: user1.id, body: "I wanna avoid the worst language!")
end