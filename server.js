const express = require('express');
const app = express();
const alphabetData = require('./assets/json/alphabet.json').alphabetData;

function randomDice(){
    var dice = ['1','2','3','4','5','6'];
    return dice[Math.floor(Math.random() * dice.length)];
}

const randomid = Math.floor(Math.random() * Date.now()).toString(36)

const arrayT = alphabetData
const randomT = arrayT[Math.floor(Math.random() * arrayT.length)];

const randomNB = Math.floor(Math.random() * 100)

const DataAPI = [
    {
        id: 1,
        name: 'Dice🎲',
        value: `${randomDice()}`
    },
    {
        id: 2,
        name: 'Random alphabet',
        value: `${randomT}`
    },
    {
        id: 3,
        name: 'Random Number',
        value: `${randomNB}`
    },
    {
        id: 4,
        name: 'Random Text + Number',
        value: `${randomid}`
    }
    
]

app.get('/', (req, res) => {
    res.send({"author": "API Patrick-Bonnet", "version": "1.0.0"});
})
app.get('/api', (req, res) => {
    res.send(DataAPI);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

