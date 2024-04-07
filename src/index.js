const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const templatePath = path.join(__dirname, '../templates');
const collection = require('./mongodb');

app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('roadmap');
});

app.post('/roadmap', async (req, res) => {
    try {
        const data = {
            road_title: req.body.road_title,
            info_title: req.body.info_title,
            info_description: req.body.info_description,
            job_title: req.body.job_title,
            job_role: req.body.job_role,
            avg_salary: req.body.avg_salary,
        };
        await collection.create(data);
        res.redirect('/home');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/home', async (req, res) => {
    try {
        const dataFromDB = await collection.find().lean();
        res.render('home', { dataFromDB });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
