const http = require('http')
const fs = require('fs')
// console.log(http);


http.createServer((req, res) => {

    if (req.url === '/') {
        res.end(`Welcome to Home Page\nurl : about - product - users`)
    } else if (req.url === '/about') {
        fs.readFile('about.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.end(data)
            }
        })
    } else if (req.url === '/product') {
        fs.readFile('product.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.end(data)
            }
        })
    } else if (req.url === '/users') {
        fs.readFile('users.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.end(data)
            }
        })
    }
    else {
        res.end('404 Page Not Found')
    }
}).listen(7000, () => {
    console.log('port 7000');
})
