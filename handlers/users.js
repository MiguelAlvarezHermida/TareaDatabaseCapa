import { Request, Response, NextFunction } from 'express';
import users from '.../controllers/users';

const UserController = new UserController();

class UserHttpHandler {

    async getUsers(req = Request, res = Response, next = NextFunction) {
        try {
            const users = await this.getUsers();
            res.json(users);
        } catch (error) {
            next(error);
        }
    }

    async getUserById(req = Request, res = Response, next = NextFunction) {

}

    async updateUser(req = Request, res = Response, next = NextFunction) {

    }

    async deleteuser(req = Request, res = Response, next = NextFunction) {

    }

}

module.exports = new UserHttpHandler();