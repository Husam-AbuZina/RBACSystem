import express from 'express';

const app = express();

const PORT = 4000;

console.log("I am working!");



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

