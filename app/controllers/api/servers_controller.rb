class Api::ServersController < ApplicationController
    def index
        @servers = current_user.servers
        render :index
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        if @server.save!
            @server_user = ServerUser.new(
                server_id: @server.id, 
                user_id: current_user.id, 
                username_alias: current_user.username,
                is_admin: true, 
            )
            if @server_user.save!
                render :show
            else
                render json: @server_user.errors.full_messages, status: 422
            end
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    private

    def server_params
        params.require(:server_info).permit(:name)
    end
end