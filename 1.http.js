const http = require('node:http')
const fs = require('node:fs')
const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>500 Internal Server Error</h1>')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }else if (req.url === '/contacto') {
        res.statusCode = 200 // ok
        res.end('<h1>contacto</h1>')
    }else if (req.url === '/nuestra-historia.jpeg') {
        fs.readFile('./vale-hernan.jpeg', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1> 500 internal server error </h1>')
            } else{
                res.setHeader('content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    }else if (req.url === '/nuestra-historia') {
        fs.readFile('./nuestra-historia.html', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end('<h1>500 Internal Server Error</h1>')
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            }
        })
    }
    else {
        res.statusCode = 404 // ok
        res.end('<h1>404</h1>')
    }
})

server.listen(desirePort, () => {
    console.log(`server listening on port http://localhost:${desirePort}`)
})
