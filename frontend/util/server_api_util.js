export const fetchCurrentUserServers = () => {
    return $.ajax({
        method: "GET",
        url: "/api/servers",
    })
}