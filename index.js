const express = require('express');
const exphbs  = require('express-handlebars');
const Counter= require("./counter");

const app = express();
const counter = Counter();

const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine("handlebars",exphbs({
    partialsDir: "./views/partials",
    viewPath:  './views',
    layoutsDir : './views/layouts'
}));
app.set('view engine', 'handlebars');

//let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {result: counter.result()})
});

app.post('/count', function(req, res) {
	//counter++;
    counter.counter()
	//res.redirect('/')
    console.log("req.body")

    res.redirect("/")
});

const reminders =[];

app.post("/reminder",function(req,res){
    reminders.push(req.body);
    res.redirect("/reminder");
    // counter.setInfo({
    //     firstName: req.body.firstName,
    //     bookCount: req.body.bookCount,
    //     dayCount: req.body.dayCount
    // });
});


app.get("/reminder",function(req,res){
    res.render("reminder", {
        //count:reminders.length,
        //data: counter.data()
        reminders
    });
});

app.get("/reminder/:dayCount/days",function(req,res){
    const filteredReminders= reminders.filter(function(reminder){
        return reminder.dayCount==Number(req.params.dayCount)
    })

    res.render("reminder",{
        reminders: filteredReminders
    })
});


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});