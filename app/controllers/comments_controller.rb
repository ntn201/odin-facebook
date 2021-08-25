class CommentsController < ApplicationController
  before_action :authenticate_user!

  def create
    @comment = Post.find(params[:post_id]).comments.build(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      redirect_to root_path
    else
      flash[:errors] = "Some error happened commenting this post"
      redirect_to root_path
    end
  end

  def destroy
  end

  private
    def comment_params
      params.require(:comment).permit(:content)
    end
end
