// install espress server
const espress = require('espress');
const path = require('path');

const app = express();

//Serve only the static files form the dist directory
app.use(express.static('./dist/CL3OrtegaDiego'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: './dist/CL3OrtegaDiego' })
);

//Start the app by listening on the default heroku port
app.listen(process.env.PORT || 8080);