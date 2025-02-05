const hoidi = (req, res) => {
    res.render("sampple.ejs");
};

const index = (req, res) => {
    res.send("indexlolo");
};

module.exports = { hoidi, index };
