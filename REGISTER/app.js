
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const { handleError } = require('./middleware/errorMiddleware');


app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);


app.use(handleError);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
