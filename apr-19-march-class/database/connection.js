const mysql = require('mysql2/promise');

// mysql://<user>:<user-password>@<host>:<port>/name_of_database
// mysql://root:rootpassword@localhost:3306/bidemiyetundeuniversity?other-options

const connection = mysql.createConnection({
    user: "root",
    password: "rootpassword",
    host: "localhost",
    port: "3306",
    database: "schooldb"
});

// const connection = mysql.createConnection("mysql://root:rootpassword@localhost:3306/schooldb")

async function connectToDatabaseServer() {
    (await connection).connect()
}

// OR


module.exports = {
    connection,
    connectToDatabaseServer
};