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

async function findBookByUser(bookDetails){
    const username = 1
    const usersBook = await prisma.book.findUnique({
        where: {
            title: bookDetails.title,
            user_id: 1
        }
    })
    console.log(usersBook)
    return usersBook
}

async function createBookEntry(bookDetails){
    const username = 1
    const booko = await findBookByUser(bookDetails)
    console.log(booko)
    if(!booko){
        const newBook = await prisma.book.create({ 
            data: {
              title: bookDetails.title,
              author: bookDetails.author, 
              year: parseInt(bookDetails.year),
              description: bookDetails.description,
              pages: parseInt(bookDetails.pages) ,
             
              user_id: username, 
              cover_url: bookDetails.coverUrl,
              lists: {
                connectOrCreate: {
                  where: {
                    name: 'read_books',
                    list_owner_id: 1,
                  },
                  create: {
                    name: 'read_books',
                    list_owner_id: 1,
                  },
                },
              },
            }
        })
    } else {
        const addBook = await prisma.book.update({
            where: {
                title: bookDetails.title,
                user_id: username
            },
            data:{
                lists: {
                    connectOrCreate: {
                      where: {
                        name: 'read_books',
                        list_owner_id: username,
                      },
                      create: {
                        name: 'read_books',
                        list_owner_id: username,
                      },
                    },
                  },
            }
        })  
    }
    
}

async function createList(listDetails){
    const newList = await prisma.book_list.create({
        data:{
            name: listDetails.name,
            list_owner_id: parseInt(listDetails.userId)
        }
    })
}
  

module.exports = {
    getUsers,
    getUserByUsername,
    findUserById,
    findBookByUser,
    createBookEntry,
    createList,
}

