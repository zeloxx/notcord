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