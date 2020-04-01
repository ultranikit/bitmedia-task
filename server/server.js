const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('users.db');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/api/users', (req, res) => {
    db.all('SELECT * FROM users_list', (err, rows) => {
        const usersData = rows;
        res.send(usersData);
    });
});

app.get('/api/users_statistic', (req, res) => {
    db.all('SELECT * FROM users_stats', (err, rows) => {
        const usersData = rows;
        res.send(usersData);
    });
});

app.listen(port, () => {
    console.log('server start ar port: ' + port);
});
