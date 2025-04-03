const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

class Users{

    constructor(db){
        this.db = db
    }

    async getAllUsers(){
        return [1,2,3,4,5,6,7,8,9,10]
    }

    async getUserById(id){}

    async updateUser(){}

    async deleteUser(){}

}

module.exports = new Users(pool);