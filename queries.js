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

async function getUserById(id){
    const user = await prisma.users.findUnique({
        where: {
            id: id
        }
    })
    return user
}

async function updateSingleBook(bookDetails, currentTitle){
    const userId = 1
   const updatedBook = await prisma.book.update({
        where:{
            title: currentTitle,
            user_id: userId
        },
        data:{
              title: bookDetails.title,
              author: bookDetails.author, 
              year: parseInt(bookDetails.year),
              description: bookDetails.description,
              pages: parseInt(bookDetails.pages),
        }
    })
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

async function createList(listDetails){
    const userId = 1
    const newList = await prisma.book_list.create({
        data:{
            name: listDetails.name,
            list_owner_id: parseInt(userId)
        }
    })
}

async function addBookToList(bookDetails){
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

async function removeBookFromList(bookDetails, listDetails){
    const book = await prisma.book.findUnique({
        where:{
            user_id: 1, 
            title: bookDetails
        }

    })
    await prisma.book_list.update({
        where:{
            name: listDetails, 
            list_owner_id: 1
        }, data:{
            books:{
                disconnect: {book_id: book.book_id}
        },
            },
        include:{
            books:true,
        }
    })

}

async function getListById(listDetails) {
    const userId = 1
    const listBooks = await prisma.book_list.findUnique({
        where: {
            list_owner_id: userId,
            name: listDetails.name
        },
        select: {
            books: 
                true
            
        }
    })
    return listBooks
}  

module.exports = {
    getUsers,
    getUserByUsername,
    getUserById,
    findBookByUser,
    addBookToList,
    createList,
    getListById,
    updateSingleBook,
    removeBookFromList
}

