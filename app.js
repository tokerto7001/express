const express = require('express'); // importing
const fs = require('fs');

const app = express();  // define a variable named app in order to use the methods of express framework

// app.use(express.json()); // middleware is a function that modifies the incoming request data


// next thing will be defining routes(routing is basically the way the app responds to the requests coming from the client)
app.get('/', (req, res) => { // get method is the method taking the request sending through get method and do what the callback function says
    // console.log(req) // huge request object
    // console.log(res) // huge response object
    // res.send('Hello from the server side!!'); // sending a response
    // res.status(200).send('Hello with a status code of 200'); // sending a reponse with a status code
    res.status(200).json({ message: 'Hello from the server side with an object response', name: 'Hasan' }) // this automatically converts the content type to application/json. Otherwise we have to do that manually

})
app.post('/', (req, res) => {
    res.send('sa')
})
// -------------------------------------------------------------------------------------------
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`))
app.get('/tours', (req, res) => {
    res.status(200).json({
        status: 200,
        results: tours.length, // not necessary but good to use when sending multiple elements or an array
        data: {  // envelope
            tours: tours
        }
    })
})

app.post('/tours', (req, res) => { // it is possible to send data from the client side via post method. request carries this data
    // Express does not put that body data on the request, for this we should write a middleware on the top of the file
    console.log(req.body);
    res.send('Done')
})


const port = 3000;
app.listen(port, () => { // first method is listen. It takes two parameters. First one is the port number and the second one is call back function. Callback will be invoked as soon as the project becomes alive
    console.log(`App running on port ${port}`)
})
