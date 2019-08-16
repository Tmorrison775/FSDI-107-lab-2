var http = require('http');
var express = require('express'); //require express

var app = express(); //create express app
app.get('/', (req, res) => {
    res.send("This is root page");
});

app.get('/contact', (req, res) => {
    res.send("This is the contact page");
});


app.get('/homework', (req, res) => {

        app.get('/homework', (req, res) => {
            /** 1 find the most common used number in a given array */
            var numbers = [12, 23, 98, 23, 12, 89, 0, 43, 0, 12, 77, 89, 34, 0, 1, 23, 32, 0, 89];
        
            /** 2 find the vowels in an give text  */
            var text = "This is just Another Exercise For You TO PRacTiCe codING soluti0Ns to probl3ms";
        
        });
        
});



app.get('/about', (req, res) => {
    res.send("<h1> Hello I am the developer</h1> My name is Travis")
});
app.listen(8080, () => {
    console.log('server running at http://localhost:8080');
});