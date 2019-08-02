json.set! @server.id do
    json.extract! @server, :id, :owner_id, :icon_url, :invite_code, :name
end