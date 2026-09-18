const User = {
    register: (userData) => {
        return {
            id: Date.now().toString(),
            name: userData.name,
            email: userData.email,
            phone : userData.phone
        }
    },
     fetch: () => {
        return {
            id: Date.now().toString(),
            name: "Huma",
            email: "huma@gmail.com",
            phone : "03123456789"
        }
    }
}

module.exports = User;