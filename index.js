const express = require ('express');
//const bodyparse = require ('body-parse');
//const cors = require ('cors');

const app = express();

app.listen(3000, () => {
    console.log('server listening ar port 3000: http://localhost:3000');
});

module.exports = app
