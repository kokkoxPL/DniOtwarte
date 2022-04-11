const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const Quiz = require('./views/models/quiz');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT))
    .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/quiz', (req, res) => {
    res.render('quiz');
});

app.post('/quiz', (req, res) => {
    req.body.wynik = 0;
    for (let i = 1; i <= 10; i++)
        if ((req.body["answer" + i]) == "1")
            req.body.wynik++;
    const quiz = new Quiz(req.body);

    quiz.save()
        .then(result => res.redirect('/wynik/?id=' + encodeURIComponent(quiz.id)))
        .catch(err => res.render('404', { err }));
});

app.get('/wynik', (req, res) => {
    Quiz.findById(req.query.id)
        .then(result => res.render('wynik', { quiz: result }))
        .catch(err => res.render('404', { err }));
});

app.get('/wyniki', (req, res) => {
    Quiz.find().sort({ wynik: -1 })
        .then(result => res.render('wyniki', { quiz: result }))
        .catch(err => res.render('404', { err }));
});

app.use((req, res) => {
    res.status(404).render('404', { err: "Nie znaleziono strony" });
});