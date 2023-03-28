const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const mongoose = require('mongoose');     //db
// const config = require('./config/keys'); DB
// mongoose.connect(config.mongoURI, { useNewUrlParser: true });  //DB
app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // js and css files
    app.use(express.static('client/build'));

    // index.html for all page routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT);



