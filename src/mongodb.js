const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/infoData')
.then(()=>{
    console.log('connected to database');
})
.catch(()=>{
    console.log('error connecting to database');
})

//creating a schema
const roadmapSchema = new mongoose.Schema({
    road_title:{
        type:String,
        required:true
    },
    info_title:{
        type:String,
        required:true
    },
    info_description:{
        type:String,
        required:true
    },
    job_title:{
        type:String,
        required:true
    },
    job_role:{
        type:String,
        required:true
    },
    avg_salary:{
        type:String,
        required:true
    }

})

//collection
const collection = new mongoose.model('RoadmapCollection',roadmapSchema);

module.exports = collection;