function randomColor(){
    let body = document.body;

    let palletes = [];
    for (let i = 1; i <= document.querySelector('#colorizer1').childElementCount; i++){
        palletes.push(document.querySelector(`#pallete${i}`));
    }

    let colors = [];

    palletes.forEach((pallete, i)=>{
        let random = Math.floor(Math.random() * 16777215).toString(16);
        pallete.innerHTML = '#'+random;
        colors.push(random);
    })

    let randomizer = {}
    colors.forEach((color,i)=>{
        randomizer[`random${i+1}`] = '#' + color;
    })

    body.style.background = `linear-gradient(to right, ${randomizer['random1']} 0%, ${randomizer['random1']} 20%,  
   ${randomizer['random2']} 20%, ${randomizer['random2']} 40%,  
   ${randomizer['random3']} 40%, ${randomizer['random3']} 60%,  
   ${randomizer['random4']} 60%, ${randomizer['random4']} 80%,  
   ${randomizer['random5']} 80%, ${randomizer['random5']} 100%)`;  
}

function copyToClipboard(containerid) {
    if(document.selection){
        var range = document.body.createTextRange();
        range.moveToElementText(document.querySelector(containerid));
        range.select().createTextRange();
    } else if(window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid))
        window.getSelection().addRange(range);
        navigator.clipboard.writeText(document.getElementById(containerid).innerText);
        alert("Cor copiada com sucesso!")
    }
}

