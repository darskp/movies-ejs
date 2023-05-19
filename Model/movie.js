let mongoose = require('mongoose');
let movieScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})
// let movies=mongoose.model('movies',movieScheme)
// module.exports=movies;

// exporting along with the mongoose.model
module.exports=mongoose.model('movies',movieScheme);
