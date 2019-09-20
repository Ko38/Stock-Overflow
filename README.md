# Stock Overflow README

[Stock Overflow](https://stockoverflowku.herokuapp.com) is a place where developers could ask and answer questions related to coding.

![alt text](demo.png "Title")

Stock Overflow is a [Stack Overflow](https://https://stackoverflow.com) Clone.

## Features
* Ask Questions
* Answer Questions
* Search for Questions
* Upvote / Downvote Answers and Questions
  - Users can upvote/downvote questions or answers. They can also cancel their upvotes or downvotes. This mimics the actual feature on Stack Overflow. 

## Technologies
* Javascript
* Ruby on Rails
  - User authentication
* React
* Redux
* PostgreSQL
  - Backend Database
* CSS
* BCrypt
```Ruby
def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end
```