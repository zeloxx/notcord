class Api::ServersController < ApplicationController
    def index
        @servers = current_user.servers
        render :index
    end

    def create
        @server = Server.new(server_params)
        @server.owner_id = current_user.id
        if @server.save
            @server_user = ServerUser.new(
                server_id: @server.id, 
                user_id: current_user.id, 
                username_alias: current_user.username,
                is_admin: true, 
            )
            if @server_user.save
                render :show
            else
                render json: @server_user.errors.full_messages, status: 422
            end
        else
            
            render json: @server.errors.full_messages, status: 422
        end
    end

    def join
        @server = Server.find_by(invite_code: server_params[:code])
        if @server 
            if !current_user.servers.map { |server| server.id }.include?(@server.id)
                @server_user = ServerUser.create(
                    server_id: @server.id, 
                    user_id: current_user.id, 
                    username_alias: current_user.username,
                    is_admin: false, 
                )
                render :show
            else
                render json: ["You're already in that server"], status: 422
            end
        else
            render json: ["Server does not exist"], status: 401
        end
    end

    def leave
        server_user = ServerUser.where(["server_id = ? and user_id = ?", server_params[:server_id], current_user.id]).first
        if server_user 
            server_user.destroy
            @server = Server.find_by(id: server_user.server_id)
            render :show
        else
            render json: ["Failed to leave server"], status: 422
        end
    end
    
    private

    def server_params
        params.require(:server_info).permit(:name, :code, :server_id)
    end
end