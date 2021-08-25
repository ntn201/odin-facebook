class PostsController < ApplicationController
    before_action :authenticate_user!
    
    def index
        @posts = current_user.friends.reduce(Array.new) { |posts, friend| posts + friend.posts }
        @posts += current_user.posts
        @posts.sort_by { |post| post.updated_at }
    end

    def create
        @post = current_user.posts.build(post_params)
        if @post.save
            puts "Saving"
            redirect_to root_path
        else
            puts @post.user_id
            puts @post.errors.full_messages
            flash[:errors] = @post.errors.full_messages
            redirect_to root_path
        end
    end

    private
        def post_params
            params.require(:post).permit(:caption, :body)
        end
end
