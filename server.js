const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;
const jsonParser = bodyParser.json();

app.use('/static', express.static(path.join(__dirname, '../contactlist/build/static')));
app.use('/images', express.static(path.join(__dirname, '../contactlist/build/images')));

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../contactlist/build/index.html'));
});
app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'contacts.json'));
});
app.get('/:filename', (req, res) => {
    res.sendFile(path.join(__dirname, '../contactlist/build/', req.params.filename));
});

app.post('/contacts', jsonParser, (req, res) => {
    const contacts = JSON.parse(fs.readFileSync(path.join(__dirname, 'contacts.json'), 'utf8'));
    const key = contacts.length;
    contacts.push(Object.assign(req.body, { key }));
    fs.writeFileSync(path.join(__dirname, 'contacts.json'), JSON.stringify(contacts, null, '\t'));
    res.json(req.body);
});

app.listen(port, () => console.log(`App runs on port ${port}!`));