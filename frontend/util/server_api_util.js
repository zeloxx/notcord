export const fetchCurrentUserServers = () => {
    return $.ajax({
        method: "GET",
        url: "/api/servers",
    })
}

export const createServer = (name) => {
    return $.ajax({
        method: "POST",
        url: "/api/servers",
        data: { server_info: { name } }
    })
}

export const joinServer = (code) => {
    return $.ajax({
        method: "POST",
        url: "/api/servers/join",
        data: { server_info: { code } }
    })
}

export const leaveServer = (server_id) => {
    debugger;
    return $.ajax({
        method: "DELETE",
        url: "/api/servers/leave",
        data: { server_info: { server_id } }
    })
}