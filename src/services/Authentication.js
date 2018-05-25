import UsersAPI from './UsersAPI';

const loggedUserIdKey = 'loggedUserId';

export class Authentication {
    constructor() {
        this.currentUser = null;

        let currentUserId = parseInt(localStorage.getItem(loggedUserIdKey));
        if (currentUserId !== NaN) {
            let currentUser = UsersAPI.getUser();
            this.currentUser = currentUser;
        }
    }

    get isAuthenticated() {
        return this.currentUser !== null ? true : false;
    }

    static login(username, password) {
        return new Promise((resolve, reject) => {
            let users = UsersAPI.getAllUsers();

            let currentUser = users.find(u => u.username === username);

            if (currentUser) {
                localStorage.setItem(loggedUserIdKey, currentUser.id);
                this.currentUser = currentUser;

                resolve(currentUser);
            } else {
                reject('Wrong credentials');
            }
        })
    }

    static logout() {
        return new Promise((resolve, reject) => {
            if (this.currentUser === null) reject();
            localStorage.setItem(loggedUserIdKey, '');
            this.currentUser = null;
            resolve();
        });
    }
}


export default Authentication;