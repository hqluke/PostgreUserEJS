const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [
        username,
    ]);
}

async function getUsername(username) {
    console.log("looking for username: ", username);
    const { rows } = await pool.query(
        "SELECT * FROM usernames WHERE username ILIKE $1",
        [`%${username}%`], // % wildcards for partial matching
    );
    console.log("Query returned:", rows); // Debug log
    return rows;
}

async function deleteAllUsernames() {
    await pool.query("DELETE FROM usernames");
}

module.exports = {
    getAllUsernames,
    insertUsername,
    getUsername,
    deleteAllUsernames,
};
