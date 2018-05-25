export default class UsersAPI {

    static generateId() {
        return Math.floor(Math.random() * 10001) + 1;
    }

    static register(user) {
        return new Promise((resolve, reject) => {
            let users = UsersAPI.getAllUsers();

            if (!users.some(u => u.username === user.username)) {
                user.id = UsersAPI.generateId();
                users.push(user);

                localStorage.setItem('users', JSON.stringify(users));

                resolve(user);
            } else {
                reject('The user already exists');
            }
        })
    }

    static seedAdmin() {
        let admin = {
            username: "admin",
            password: "admin",
            isAdmin: true,
        }

        return UsersAPI.register(admin).catch(e => console.log);
    }

    static getAllUsers() {
        let users = JSON.parse(localStorage.getItem("users"));

        if (!users) users = [];

        return users;
    }

    static getUser(id) {
        let users = UsersAPI.getAllUsers();
        id = parseInt(id);

        return users.find(u => u.id === id);
    }
}
