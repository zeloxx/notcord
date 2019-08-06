export const channelCreate = (data) => {
    return $.ajax({
        method: "POST",
        url: "/api/channels",
        data: { channel_info: data },
    })
}