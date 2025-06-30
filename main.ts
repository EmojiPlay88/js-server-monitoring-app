async function fetchstatus(): Promise<any> {
    return fetch("http://localhost:5000/status").then((response) => response.json());
}

function hostname(name: string){
    let element = document.getElementById("hostname");
    if (element) {
        element.innerHTML = name;
    }
}

function playercount(playercount: number, botcount: number, maxplayercount: number){
    if(botcount > 0){
        playercount = playercount - botcount;
    }
    let playercountstr: string = `Players online: ${playercount}+${botcount}/${maxplayercount}`;
    let element = document.getElementById("playercount");
    if (element){
        element.innerHTML = playercountstr;
    }
}

async function serverconnect(){
    const serverip = await fetchstatus();
    window.open(`steam://connect/${serverip["connect"]}`)
}

async function onLoad(){
    let status = await fetchstatus();
    console.log(status)
    hostname(status["name"]);
    playercount(status["numplayers"], status["raw"]["numbots"], status["maxplayers"]);
}