export const channelCreate = (channel) => {
    return $.ajax({
        method: "POST",
        url: "/api/channels",
        data: { channel },
    })
}

export const fetchServerChannels = (server_id) => {
    return $.ajax({
        method: "GET",
        url: "/api/channels",
        data: { channel: { server_id } },
    })
}

export const channelDelete = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/channels/${id}`
    })
}