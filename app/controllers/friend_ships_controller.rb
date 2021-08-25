class FriendShipsController < ApplicationController
  before_action :authenticate_user!

  def create
    if !current_user.friend_with?(params[:friend_id])
      FriendShip.create(:user_1_id=>current_user.id,:user_2_id=>params[:friend_id])
      FriendShip.create(:user_2_id=>current_user.id,:user_1_id=>params[:friend_id])
      FriendRequest.where(from_user_id:params[:friend_id], to_user_id:current_user.id)[0].destroy
      redirect_to users_path
    else
      flash[:errors] = "Some errors happened when creating friend"
      redirect_to users_path
    end
  end

  private
    

end
