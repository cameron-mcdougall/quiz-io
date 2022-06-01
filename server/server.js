const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

// body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log( `Listening on port ${port}` ));

app.get('/createuser', (req, res) => {
    setTimeout(() => {
        res.json({ message: `The account creator is live and connected on port: ${port}` });
    }, 2000);
})

app.post('/createuser', (req, res) => {
    console.log(req.body);
    res.json({ server: `Recieved data from username: ${JSON.stringify(req.body)}`});
})