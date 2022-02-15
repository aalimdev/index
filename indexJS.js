const renkler = () => {
    const r = Math.floor(Math.random() * 255) + 100;
    const g = Math.floor(Math.random() * 255) + 50;
    const b = Math.floor(Math.random() * 255 + 100);
    return `rgb(${r}, ${g}, ${b})`;
};

const duymeler = document.querySelectorAll('button');
for (let duyme of duymeler) {
        duyme.addEventListener('click', function(){
        
        duyme.style.backgroundColor = renkler();
        // duyme.style.fontSize = '31px';
    })
}

const github = document.querySelector('#github');
github.addEventListener('click', function(){
    github.style.backgroundColor="black";
    github.style.color = "blue";
})

const udemy = document.querySelector('#udemy');
github.addEventListener('click', function(){
    github.style.backgroundColor="black";
    github.style.color = "violet";
})
   

function toogleIsbank(){
    var x  = document.getElementById("isbank")
    if(x.style.display === "none"){
        x.style.display="flex";
    } else {
        x.style.display = "none";
    }
}

function tooglePrivate(){
    var x  = document.getElementById("ali")
    if(x.style.display === "none"){
        x.style.display="flex";
    } else {
        x.style.display = "none";
    }
}
function toogleInfo(){
    var x  = document.getElementById("info")
    if(x.style.display === "none"){
        x.style.display="flex";
    } else {
        x.style.display = "none";
    }
}



function toogleBackend(){
    var x  = document.getElementById("backend");
    var y  = document.getElementById("h2_backend");
    if(x.style.display === "none"){
        x.style.display="flex";
        y.style.color = "mediumseagreen";
    } else {
        x.style.display = "none";
        y.style.color = "black";
    }
}

function toogleFrontend(){
    var x  = document.getElementById("frontend");
    var y  = document.getElementById("h2_frontend");
    if(x.style.display === "none"){
        x.style.display="flex";
        y.style.color = "mediumseagreen";
    } else {
        x.style.display = "none";
        y.style.color = "black";
    }
}
function toogleCareer(){
    var x  = document.getElementById("career");
    var y  = document.getElementById("h2_career");
    if(x.style.display === "none"){
        x.style.display="flex";
        y.style.color = "mediumseagreen";
    } else {
        x.style.display = "none";
        y.style.color = "black";
    }
}



