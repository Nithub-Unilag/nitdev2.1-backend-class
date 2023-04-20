const express = require('express');

const courseRouter = require("./routes/course")
const studentRouter = require('./routes/student');



const db = require("./database/connection")


const app = express();
app.use(express.json());

app.use('/api/students', studentRouter);
app.use("/api/courses", courseRouter);


db.connectToDatabaseServer()
.then(() => {
    console.log("Database connection established")
    const PORT = 9000 || process.env.NODE_ENV
    app.listen(PORT, () => {
        console.log(`Server is up and running on port ${PORT}`)
    })
})
.catch(console.log)



// ENVIRONMENT
// Development
// Testing
// Staging 
// Production
