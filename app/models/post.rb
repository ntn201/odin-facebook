class Post < ApplicationRecord
    belongs_to :user
    
    has_many :likes, inverse_of: :post
    has_many :comments, inverse_of: :post

    def liked_by?(user_id)
        Like.where(user_id: user_id, post_id:id).any?
    end

    def as_json(options={})
        {
            :id => id,
            :caption => caption,
            :body => body,
            :user_name => user.full_name,
            :user_id => user.id
        }
    end
end
