const express = require('express');
let app = express();

app.set('view engine', 'ejs');

//body parser
app.use(express.urlencoded())
const Movie = require('./Model/movie')

//mongoodb connection
const mongoose = require('mongoose');
const dburl = 'mongodb://localhost:27017/movies';
mongoose.connect(dburl).then(() => {
    console.log('connection established');
}).catch((err)=>{
console.log('error',err);
})

mongoose.set('strictQuery', false);
app.get('/', async (req, res) => {
    let movies = await Movie.find()
    // console.log(movies);
    res.render('home', { movies });
})

app.get('/addmovies', (req, res) => {
    res.render('addmovies');
})

app.get('/:_id', async (req, res) => {
     let data = await Movie.findById(req.params._id);
    //  console.log(data);
    res.render('readmovies', { data });
})

//form - add async
app.post('/', async (req, res) => {
    let movieData = new Movie({
        title: req.body.title,
        rating: req.body.rating,
        description: req.body.description,
        url: req.body.url
    })
    // try {
    //     await movieData.save()
    //     res.redirect('/');
    // } catch (e) {
    //     res.render('addmovies');
    // }
    movieData.save((err,data)=>{
        if(err){
         res.render('addmovies');
        }else{
         res.redirect('/');
         console.log(data);
        }
    })
});

let portnumber = 7000;
app.listen(portnumber, 'localhost', () => {
    console.log(`http://localhost:${portnumber}`);
})