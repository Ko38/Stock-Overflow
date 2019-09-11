class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many(:questions, foreign_key: :author_id, class_name: :Question)
  attr_reader :password
  
  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username_or_email, password)
    user = User.find_by(username: username_or_email) || User.find_by(email: username_or_email)
    if user && user.is_password?(password)
      return user
    end
    
    nil
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end