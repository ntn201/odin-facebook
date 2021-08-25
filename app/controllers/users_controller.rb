class UsersController < ApplicationController
    # before_action :authenticate_user!

    def show
        @user = params[:id].to_i == current_user.id ? current_user : nil
    end

    def index
        @users = User.where.not(id:current_user.id)
    end
end
