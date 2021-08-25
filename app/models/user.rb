class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
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
  
  def friend_with?(user_id)
    return (FriendShip.where(user_1_id:id, user_2_id:user_id).any? and FriendShip.where(user_2_id:id, user_1_id:user_id).any?)
  end
end
