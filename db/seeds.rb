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
  Answer.delete_all
  user1 = User.create(username: "DemoUser", password: "1234qwer", email: "demo@xyz.com")
  # user1 = User.create(username: "Travel", password: "1234qwer", email: "travel@xyz.com")
  user2 = User.create(username: "Aconixtv", password: "1234qwer", email: "aconixtv@xyz.com")
  user3 = User.create(username: "Erosive", password: "1234qwer", email: "erosive@xyz.com")
  user4 = User.create(username: "Hauserto", password: "1234qwer", email: "hauserto@xyz.com")
  user5 = User.create(username: "PerfectXx", password: "1234qwer", email: "perfectXx@xyz.com")
  user6 = User.create(username: "RightThere", password: "1234qwer", email: "rightThere@xyz.com")
  user7 = User.create(username: "Cuamult", password: "1234qwer", email: "cuamult@xyz.com")
  user8 = User.create(username: "Germetch", password: "1234qwer", email: "germetch@xyz.com")
  user9 = User.create(username: "Willientet", password: "1234qwer", email: "willientet@xyz.com")
  question1 = Question.create(title: "What is the best programming language?", author_id: user1.id, body: "I wanna learn the best language!", created_at: "2017-01-08", updated_at: "2017-02-02")
  QuestionUpvote.create(question_id: question1.id, user_id: user1.id)
  QuestionUpvote.create(question_id: question1.id, user_id: user2.id)
  QuestionUpvote.create(question_id: question1.id, user_id: user3.id)
  QuestionUpvote.create(question_id: question1.id, user_id: user4.id)
  QuestionDownvote.create(question_id: question1.id, user_id: user8.id)
  QuestionDownvote.create(question_id: question1.id, user_id: user9.id)
  answer1 = Answer.create(author_id: user2.id, question_id: question1.id, body: "It is definitely C++", created_at: "2017-01-22")
  answer2 = Answer.create(author_id: user6.id, question_id: question1.id, body: "Definitely not C++. It's Ruby", created_at: "2017-01-24")
  answer3 = Answer.create(author_id: user5.id, question_id: question1.id, body: "A lot of people ask me about what programming languages they should learn. I found myself in a difficult situation because this is a very hard question to answer. There are a lot of things that need to be taken into account before making this decision.", created_at: "2017-02-22")
  AnswerUpvote.create(answer_id: answer3.id, user_id: user1.id)
  AnswerUpvote.create(answer_id: answer3.id, user_id: user2.id)
  AnswerUpvote.create(answer_id: answer3.id, user_id: user3.id)
  AnswerUpvote.create(answer_id: answer3.id, user_id: user4.id)
  AnswerUpvote.create(answer_id: answer3.id, user_id: user5.id)
  answer4 = Answer.create(author_id: user9.id, question_id: question1.id, body: "Pick a language and learn, you will find out.", created_at: "2017-03-22")
  answer5 = Answer.create(author_id: user2.id, question_id: question1.id, body: "Yeh, but I still think C++ is the best.", created_at: "2017-04-22")
  answer6 = Answer.create(author_id: user4.id, question_id: question1.id, body: "~~~~~", created_at: "2017-05-22")
  (0...687).each do |x|
    View.create(question_id: question1.id)
  end

  question2 = Question.create(title: "What is the worst programming language?", author_id: user1.id, body: "I wanna avoid the worst language!", created_at: "2019-01-08", updated_at: "2019-01-09")
  QuestionDownvote.create(question_id: question2.id, user_id: user8.id)
  QuestionDownvote.create(question_id: question2.id, user_id: user9.id)
  QuestionDownvote.create(question_id: question2.id, user_id: user5.id)
  QuestionDownvote.create(question_id: question2.id, user_id: user3.id)
  QuestionDownvote.create(question_id: question2.id, user_id: user1.id)
  (0...232).each do |x|
    View.create(question_id: question2.id)
  end
  answer7 = Answer.create(author_id: user8.id, question_id: question2.id, body: "This is the worst question I have ever seen.", created_at: "2019-01-10")

  question3 = Question.create(title: "Javascript - Date: How To Convert Date To Timestamp?", author_id: user8.id, body: "I want to convert date to timestamp, my input is 26-02-2012. I used new Date(myDate).getTime(); It says NaN.. Can any one tell how to convert this?" , created_at: "2019-02-02", updated_at: "2019-02-02")
  QuestionUpvote.create(question_id: question3.id, user_id: user9.id)
  (0...122).each do |x|
    View.create(question_id: question3.id)
  end
  answer8 = Answer.create(author_id: user3.id, question_id: question3.id, body: "Just Google it. You can find the answer in 10 seconds", created_at: "2019-02-11")

  question4 = Question.create(title: "C++11 and C++03 intercompatibility", author_id: user4.id, body: "I need to add to Data some C++11 features that are going to be used exclusively by Service." , created_at: "2019-02-02", updated_at: "2019-02-02")
  QuestionUpvote.create(question_id: question4.id, user_id: user2.id)
  (0...332).each do |x|
    View.create(question_id: question4.id)
  end
  answer9 = Answer.create(author_id: user3.id, question_id: question4.id, body: "This is not easy", created_at: "2019-02-11")
  
  question5 = Question.create(title: "Directory names parallel to the given directory perl", author_id: user8.id, body: "I want to get the directory all directory name which are parallel to the given directory path." , created_at: "2019-04-02", updated_at: "2019-04-02")
  QuestionUpvote.create(question_id: question5.id, user_id: user9.id)
  (0...99).each do |x|
    View.create(question_id: question5.id)
  end
  answer10 = Answer.create(author_id: user3.id, question_id: question5.id, body: "I don't know what you're asking...", created_at: "2019-04-11")
  answer11 = Answer.create(author_id: user4.id, question_id: question5.id, body: "...", created_at: "2019-04-12")
  
  question6 = Question.create(title: "left-most cell of a row, in conditional formatting?", author_id: user1.id, body: "I'd like reference the left-most cell of a row, to determine if should be shaded or not." , created_at: "2019-09-01", updated_at: "2019-09-02")
  QuestionUpvote.create(question_id: question6.id, user_id: user1.id)
  QuestionUpvote.create(question_id: question6.id, user_id: user2.id)
  QuestionUpvote.create(question_id: question6.id, user_id: user3.id)
  (0...231).each do |x|
    View.create(question_id: question6.id)
  end

  question7 = Question.create(title: "AWS Cloudformation IAM Policy with Resource", author_id: user3.id, body: "What I'm trying to do is create an IAM policy that only gives access to a certain S3 bucket and I want to pass that S3 bucket as a parameter." , created_at: "2019-09-12", updated_at: "2019-09-12")
  QuestionUpvote.create(question_id: question7.id, user_id: user4.id)
  QuestionUpvote.create(question_id: question7.id, user_id: user8.id)
  (0...14).each do |x|
    View.create(question_id: question7.id)
  end

  question8 = Question.create(title: "How to perform a while loop with a callback function", author_id: user2.id, body: "so i'm trying to reproduce a simpler version of the lodash function takeWhile." , created_at: "2019-09-13", updated_at: "2019-09-13")
  QuestionUpvote.create(question_id: question8.id, user_id: user9.id)
  (0...54).each do |x|
    View.create(question_id: question8.id)
  end
  
  question9 = Question.create(title: "React 16.9, without setState updates UI", author_id: user7.id, body: "In React 16.8, we need to call forceUpdate, is it a problem on my side." , created_at: "2019-09-15", updated_at: "2019-09-15")
  QuestionUpvote.create(question_id: question9.id, user_id: user2.id)
  QuestionUpvote.create(question_id: question9.id, user_id: user3.id)
  QuestionUpvote.create(question_id: question9.id, user_id: user6.id)
  QuestionUpvote.create(question_id: question9.id, user_id: user7.id)
  QuestionUpvote.create(question_id: question9.id, user_id: user1.id)
  (0...65).each do |x|
    View.create(question_id: question9.id)
  end

  question10 = Question.create(title: "Strange bug in CSS transform", author_id: user5.id, body: "The problem is that I'm trying to make a line to mark the items in a list and somehow appears a two-pixel stripe instead of a one-pixel and looks it have some alpha." , created_at: "2019-09-16", updated_at: "2019-09-16")
  QuestionUpvote.create(question_id: question10.id, user_id: user9.id)
  QuestionUpvote.create(question_id: question10.id, user_id: user4.id)
  (0...56).each do |x|
    View.create(question_id: question10.id)
  end
  answer12 = Answer.create(author_id: user3.id, question_id: question10.id, body: "Use Bootstrap", created_at: "2019-09-16")
  answer13 = Answer.create(author_id: user4.id, question_id: question10.id, body: "When you try to use CSS... blah", created_at: "2019-09-316")
  
  question11 = Question.create(title: "TypeError: Object(…) is not a function", author_id: user6.id, body: "I am attempting to peform Auth with Firebase and Redux. I got an error saying Object is not a function" , created_at: "2019-09-17", updated_at: "2019-09-17")
  QuestionDownvote.create(question_id: question11.id, user_id: user5.id)
  QuestionDownvote.create(question_id: question11.id, user_id: user3.id)
  QuestionUpvote.create(question_id: question11.id, user_id: user9.id)
  (0...88).each do |x|
    View.create(question_id: question11.id)
  end
  answer14 = Answer.create(author_id: user3.id, question_id: question11.id, body: "This probably has something to do with React or Redux. Check to see if you were importing your files correctly", created_at: "2019-09-17")
  answer15 = Answer.create(author_id: user4.id, question_id: question11.id, body: "...", created_at: "2019-09-17")
  
  question12 = Question.create(title: "css hover styles and iOS", author_id: user9.id, body: "I'm working on a web application where you can select things from a series of buttons.")
  QuestionDownvote.create(question_id: question12.id, user_id: user5.id)
  QuestionDownvote.create(question_id: question12.id, user_id: user3.id)
  (0...45).each do |x|
    View.create(question_id: question12.id)
  end

  question13 = Question.create(title: "JavaScript long click auto", author_id: user4.id, body: "I have trouble adding a long drop to an item on the page.")
  
end