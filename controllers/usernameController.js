const db = require("../db/queries");

async function getUsernames(req, res) {
    const searchTerm = req.query.search; // Access query param with req.query
    console.log("searched username: ", searchTerm);

    if (!searchTerm) {
        const AllUsernames = await db.getAllUsernames();
        console.log("Usernames: ", AllUsernames);
        res.render("displayAll", { usernames: AllUsernames });
        return;
    }

    const DisplayUsername = await db.getUsername(searchTerm);
    console.log("DisplayUsername: ", DisplayUsername);
    res.render("displayUser", { Title: "Req.Query.Search Results", usernames: DisplayUsername });
}

async function createUsernameGet(req, res) {
    res.render("submitUser");
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");
}

async function getUsername(req, res) {
    const { search } = req.body;
    const DisplayUsername = await db.getUsername(search);
    console.log("DisplayUsername: ", DisplayUsername);
    res.render("displayUser", {
        Title: "Normal Search Results",
        usernames: DisplayUsername,
    });
}

async function deleteAllUsernames(req, res) {
    await db.deleteAllUsernames();
    res.redirect("/");
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    getUsername,
    deleteAllUsernames,
};
