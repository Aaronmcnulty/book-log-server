const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function getUsers(){
    const users = await prisma.users.findMany()
    return users[0].username
}

module.exports = {getUsers}