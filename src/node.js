const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// Event Delegation
app.get('/', (req, res) => {
    res.send(eventDelegationHTML());
});

function eventDelegationHTML() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Event Delegation Example</title>
        <style>
            .item {
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <ul id="item-list">
            <li class="item">Item 1</li>
            <li class="item">Item 2</li>
            <li class="item">Item 3</li>
        </ul>
        <script>
            document.getElementById('item-list').addEventListener('click', function(event) {
                if (event.target.classList.contains('item')) {
                    event.target.style.color = 'red'; // Change color on click
                }
            });
        </script>
    </body>
    </html>
    `;
}

// Server-side Programming
app.get('/home', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/json-example', (req, res) => {
    const movieData = {
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        genre: 'Science Fiction',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page']
    };
    res.json(movieData);
});

// HTTP Protocol - Five Additional Status Codes
const additionalStatusCodes = [
    { name: 'I\'m a teapot', code: 418, purpose: 'The server refuses the attempt to brew coffee with a teapot.', situation: 'Silly request or misuse of server.' },
    { name: 'Too Many Requests', code: 429, purpose: 'The user has sent too many requests in a given amount of time.', situation: 'Rate limiting to prevent abuse.' },
    { name: 'Unavailable For Legal Reasons', code: 451, purpose: 'The server is denying access to the resource as a consequence of a legal demand.', situation: 'Legal restrictions such as censorship or copyright issues.' },
    { name: 'Network Authentication Required', code: 511, purpose: 'The client needs to authenticate to gain network access.', situation: 'Access to restricted network resources.' },
    { name: 'Unused', code: 418, purpose: 'This code was defined but never used in a previous version of the specification.', situation: 'Historical artifact or future use.' }
];

app.get('/status-codes', (req, res) => {
    res.json(additionalStatusCodes);
});

// Handling Cookies
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'John Doe', { maxAge: 900000, httpOnly: true });
    res.send('Cookie set');
});

app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username;
    if (username) {
        res.send(`Welcome back, ${username}`);
    } else {
        res.send('No cookie found');
    }
});

// Error Handling - 404 Page Not Found
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
