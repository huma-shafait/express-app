const User = {
    register: (userData) => {
        return {
            id: Date.now().toString(),
            name: userData.name,
            email: userData.email,
            phone : userData.phone
        }
    }
}

module.exports = User;