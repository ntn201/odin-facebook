class PhotosController < ApplicationController
    def create
        @photo = current_user.build_photo(photo_params)
        if @photo.save
            redirect_to user_path(current_user)
        else
            flash[:error] = "Some errors happend trying to save profile picture"
            redirect_to user_path(current_user)
        end
    end

    private
        def photo_params
            params.require(:photo).permit(:url)
        end
end
