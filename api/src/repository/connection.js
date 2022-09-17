import myqsl from 'mysql2/promise'

const con = await myqsl.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PWD,
    database: process.env.MYSQL_BD
})

console.log('DB conectado')

export {con}