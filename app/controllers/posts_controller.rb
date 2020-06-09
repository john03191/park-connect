class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    Post.create(post_params)
    redirect_to root_path, notice: '公園を作成しました'
  end

  private
  def post_params
    params.require(:post).permit(:title, :text, :image).merge(user_id: current_user.id)
  end

end
