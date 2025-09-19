const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

app.get('/api/home', (req, res) => {
    res.json({
        blog: [
            {
                id: 1,
                title: "Lateralus - Tool",
                content: "Espiritualidad, matematica y expansion."
            },
            {
                id: 2,
                title: "Jambi - Tool",
                content: "Deseo, sacrificio, transformacion."
            },
            {
                id: 3,
                title: "Pneuma - Tool",
                content: "Somos mas que carne."
            },
            {
                id: 4,
                title: "The Pot - Tool",
                content: "Hipocresia, poder y doble moral."
            },
            {
                id: 5,
                title: "Parabola - Tool",
                content: "Existencia, conciencia y reverencia."
            },
            {
                id: 6,
                title: "The Patient - Tool",
                content: "Resistencia, fe y el arte de esperar."
            }
        ]
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});