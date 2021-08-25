class FriendRequestsController < ApplicationController
    def create
        @request = FriendRequest.create(:from_user_id=>current_user.id,:to_user_id=>params[:friend_id])
        if @request.save
            redirect_to users_path
        else
            flash[:errors] = "Some errors happend when trying to send friend request"
            redirect_to users_path
        end
    end
end
