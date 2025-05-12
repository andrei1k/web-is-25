const users = []

class UserService {

    login(username, password) {


        console.log(users)
        const user = users.find(user => user.username === username && user.password === password)

        if (!user) {
            throw new Error("invalid username or password")
        }

        return user;
    }

    register(username, email, password) {


        const user = users.find(user => user.email === email)

        if (user) {
            throw new Error("user already exists")
        }

        // password has to be hashed
        const newUser = {username, email, password};

        users.push(newUser);

        console.log(users)

        return newUser;
    }
}

export const userService = new UserService();