class Api::ServersController < ApplicationController
    def index
        @servers = current_user.servers
        render :index
    end

    def create
        # grab current user id which will be owner id
        
    end
end