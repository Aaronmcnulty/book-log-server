const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function getUsers(){
    const users = await prisma.users.findMany()
    return users[0].username
}

async function getUserByUsername(username){
    const user = await prisma.users.findUnique({
        where: {
            username: username
        }
    })
    return user
}

async function findUserById(id){
    const user = await prisma.users.findUnique({
        where: {
            id: id
        }
    })
    return user
}


module.exports = {
    getUsers,
    getUserByUsername,
    findUserById,
}

