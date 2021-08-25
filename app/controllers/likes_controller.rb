class LikesController < ApplicationController
    def create
        @like = Like.new(:post_id=>params[:post_id], :user_id=>current_user.id)
        if @like.save
            redirect_to root_path
        else 
            flash[:errors] = "Some errors happended when trying to like this post"
            redirect_to root_path
        end
    end

    def destroy
        Like.find(params[:id]).destroy
        redirect_to root_path
    end
end
