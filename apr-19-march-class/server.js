const express = require('express');
const studentRouter = require('./routes/student');


const app = express();

// localhost:4000/pjk
app.use((req,res,next) => {
    console.log(req.url.toString());
    next();
})
app.use('/api/', studentRouter);

app.use("*", (req, res) => {
    console.log(req)
})

const PORT = 9000 || process.env.NODE_ENV
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})


// ENVIRONMENT
// Development
// Testing
// Staging 
// Production
