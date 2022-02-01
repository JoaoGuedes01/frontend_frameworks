const path = require('path');
const express = require('express');
const app = express();

//Allowing css to be readable
app.use(express.static(path.join(__dirname, 'public')));


// Routing
app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'HTML', 'index.html'));
});

app.get('/page2', (req, res) => {
    return res.sendFile(path.join(__dirname, 'HTML', 'page2.html'));
});

app.get('/page3', (req, res) => {
    return res.sendFile(path.join(__dirname, 'HTML', 'page3.html'));
});

app.get('/dashboard', (req, res) => {
    return res.sendFile(path.join(__dirname, 'HTML', 'dashboard.html'));
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
})