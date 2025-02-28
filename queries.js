const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function getUsers(){
    const users = await prisma.users.findMany()
    console.log(users[0].username)
}

module.exports = {getUsers}