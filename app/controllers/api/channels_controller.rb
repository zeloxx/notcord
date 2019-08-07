class Api::ChannelsController < ApplicationController

    def index
        server = Server.find_by(id: channel_params[:server_id])
        @channels = server.channels
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        @channel.destroy
        render :show
    end

    private
    
    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end