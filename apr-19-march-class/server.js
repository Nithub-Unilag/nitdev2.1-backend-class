const express = require('express');
const studentRouter = require('./routes/student');


const app = express();
app.use(express.json());

app.use('/api/students', studentRouter);

const PORT = 9000 || process.env.NODE_ENV
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})


// ENVIRONMENT
// Development
// Testing
// Staging 
// Production
