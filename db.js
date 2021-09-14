const { pool, client } = require('pg');

const pool = new pool();

// uses env variables to connect
// something tells me it will break to shit on windows. or on linux. either way, it's going to screw me somehow
pool.query('SELECT NOW()', (err, res) => {
    console.log("buggitybug");
    console.log(err, res);
    pool.end();
});
