const Users = require('../Database/users');

class UserController {
    constructor(service) {
        this.service = service;
    }

    async getUsers() {
        const users = await this.service.getAllUsers();
        return users;
    }
}

module.exports = UserController;
