const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('users.db');
const fs = require('fs');

// files with data
const usersFile = 'users.json';
const usersStatisticFile = 'users_statistic.json';

//tables name
const usersTable = 'users_list';
const usersStatisticTable = 'users_stats';

const getDataFromJson = (filename) => {
    const data = fs.readFileSync(filename);
    return JSON.parse(data);
};

// user data
const usersList = getDataFromJson(usersFile);
const usersStatistic = getDataFromJson(usersStatisticFile);

const generateValues = async (tableName, array) => {
    await array.forEach((item) => {
        const values = Object.values(item)
            .map((item) => `"${item}"`)
            .join(', ');
        db.run(`INSERT INTO ${tableName} VALUES (${values})`);
    });
};

const generateKeys = async (tableName, array) => {
    const arrayElememnt = array.slice(0, 1)[0];
    const keys = Object.keys(arrayElememnt)
        .map((item) => `${item} TEXT`)
        .join(', ');
    console.log('table success created');

    db.run(`CREATE TABLE ${tableName} (${keys})`);
};

const checkTable = (tableName, tableData) => {
    db.serialize(() => {
        db.run(`DROP TABLE ${tableName}`, (err) => {
            // if table not exists , create table and insert data from file.json
            if (err) {
                return console.log(err);
            } else {
                console.log('table already exists, deleting...');
            }
        });
        // create new database table
        generateKeys(tableName, tableData);
        generateValues(tableName, tableData);
    });
};

checkTable(usersTable, usersList);
checkTable(usersStatisticTable, usersStatistic);
