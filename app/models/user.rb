class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable, omniauth_providers: %i[facebook]
  
  has_many :posts, inverse_of: :user

  has_many :friend_ships, foreign_key: :user_1
  has_many :friends, :through => :friend_ships, :source => :user_2

  has_many :friend_requests_from, :foreign_key => "to_user_id", :class_name => "FriendRequest"
  has_many :requesting_friends, :through => :friend_requests_from, :source => :from_user

  has_many :friend_requests_to, :foreign_key => "from_user_id", :class_name => "FriendRequest"
  has_many :waiting_friends, :through => :friend_requests_to, :source => :to_user

  has_many :likes, inverse_of: :user
  has_many :comments, inverse_of: :user

  has_one :photo, as: :owner
  
  def self.from_omniauth(auth)
    User.where(uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.full_name = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image # assuming the user model has an image
    end
  end

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
        user.email = data["email"] if user.email.blank?
      end
    end
  end

  def friend_with?(user_id)
    return (FriendShip.where(user_1_id:id, user_2_id:user_id).any? and FriendShip.where(user_2_id:id, user_1_id:user_id).any?)
  end
end
