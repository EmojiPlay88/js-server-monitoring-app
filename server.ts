const {GameDig} = require('gamedig');
const express = require('express');
const cors = require("cors");
const app = express();
const port: number = 5000;

app.use(cors());

async function getstatus(){
    return await GameDig.query({
        type: 'teamfortress2',
        host: 'your ip here',
        port: 27015,
        givenPortOnly: true
    }).then((state: any) => {
        return state;
    });
}

app.get('/', (req: any, res: any) => {
    res.send('The application is running');
});

app.get('/status', async (req: any, res: any) =>{
    const status: any = await getstatus();
    console.log("got a request to status");
    res.send(status);
});

app.listen(port, () => {
   console.log(`Application is running at http://localhost:${port}`);
});