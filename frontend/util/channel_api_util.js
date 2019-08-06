export const channelCreate = (data) => {
    return $.ajax({
        method: "POST",
        url: "/api/channels",
        data: { channel_info: data },
    })
}

export const fetchServerChannels = (server_id) => {
    return $.ajax({
        method: "GET",
        url: "/api/channels",
        data: { channel_info: { server_id } },
    })
}