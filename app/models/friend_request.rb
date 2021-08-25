class FriendRequest < ApplicationRecord
  belongs_to :from_user, :class_name => "User", inverse_of: :friend_requests_to
  belongs_to :to_user, :class_name => "User", inverse_of: :friend_requests_from
end
