const Users = require('../Database/users');

class UserController {
    constructor(service) {
        this.service = service;
    }

    async getUsers() {
        const users = await this.service.getAllUsers();
        return users.filter(user => user.id % 2 === 0); 
    }
}

module.exports = UserController;
