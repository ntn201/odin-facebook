class Post < ApplicationRecord
    belongs_to :user
    
    has_many :likes, inverse_of: :post
    has_many :comments, inverse_of: :post

    def liked_by?(user_id)
        Like.where(user_id: user_id, post_id:id).any?
    end
end
