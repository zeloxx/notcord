export const messageCreate = (message) => {
    return $.ajax({
        method: "POST",
        url: "api/messages",
        data: { message },
    })
}

export const fetchMessages = (message) => {
    return $.ajax({
        method: "GET",
        url: "/api/messages",
        data: { message },
    })
}