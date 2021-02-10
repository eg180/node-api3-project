// require your server and launch it
const server = require('./api/server.js');

server.listen(6667, () => {
    console.log('\n* Server Running on http://localhost:6667 *\n')
})

