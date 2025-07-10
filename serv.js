require("http").createServer((req, res) => {

    console.log(require("url").parse(req.url,true))
    res.end()

}).listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

