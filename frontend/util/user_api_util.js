export const fetchUsers = (user) => {
    return $.ajax({
        method: "GET",
        url: "api/users",
        data: { user }
    })
}