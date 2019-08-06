class Api::ChannelsController < ApplicationController

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render :show
        else
            render json: @channel.errors.full_messages
        end
    end

    private
    
    def channel_params
        params.require(:channel_info).permit(:name, :server_id)
    end
end