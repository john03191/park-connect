class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update]
  before_action :move_to_index, except: :index

  def index
    @posts = Post.all.order(id: "DESC")
  end
  
  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to posts_path, notice: '公園を作成しました'
    else
      redirect_to new_post_path, notice: '作成に失敗しました'
    end
  end
  
  def show
  end
  
  def edit
  end

  def update
    @post.update(post_params)
    if @post.save
      redirect_to posts_path, notice: '公園を編集しました'
    else
      redirect_to edit_post_path, notice: '編集に失敗しました'
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    redirect_to posts_path
  end

  private
  def post_params
    params.require(:post).permit(:title, :text, :image).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to new_user_session_path unless user_signed_in?
  end

  def set_post
    @post = Post.find(params[:id])
  end

end
