function pierre() {
    let possibilite = ["Ciseaux" , "Pierre" , "Feuille"]
    let rand = Math.floor(Math.random()*possibilite.length)
    let PCchoix = possibilite[rand]
    if (PCchoix ==="Pierre") {
        document.getElementById("resultat").innerHTML = `match nul !  l'ordinateur avait choisit ${PCchoix} `
    } if (PCchoix ==="Feuille") {
        document.getElementById("resultat").innerHTML = `Tu as perdu !  l'ordinateur avait choisit ${PCchoix} `
    } if (PCchoix === "Ciseaux") {
        document.getElementById("resultat").innerHTML = `Tu as gagné !  l'ordinateur avait choisit ${PCchoix} `
    }
    console.log(PCchoix)
}

function feuille() {
    let possibilite = ["Ciseaux" , "Pierre" , "Feuille"]
    let rand = Math.floor(Math.random()*possibilite.length)
    let PCchoix = possibilite[rand]
    if (PCchoix ==="Feuille") {
        document.getElementById("resultat").innerHTML = `match nul !  l'ordinateur avait choisit ${PCchoix} `
    } if (PCchoix ==="Ciseaux") {
        document.getElementById("resultat").innerHTML = `Tu as perdu !  l'ordinateur avait choisit ${PCchoix} `
    } if (PCchoix === "Pierre") {
        document.getElementById("resultat").innerHTML = `Tu as gagné !  l'ordinateur avait choisit ${PCchoix} `
    }
    console.log(PCchoix)
}

function ciseaux() {
    let possibilite = ["Ciseaux" , "Pierre" , "Feuille"]
    let rand = Math.floor(Math.random()*possibilite.length)
    let PCchoix = possibilite[rand]
    if (PCchoix ==="Ciseaux") {
        document.getElementById("resultat").innerHTML = `match nul ! l'ordinateur avait choisit ${PCchoix} `
    } if (PCchoix ==="Pierre") {
        document.getElementById("resultat").innerHTML = ` Tu as perdu !  l'ordinateur avait choisit ${PCchoix} `
    } if (PCchoix === "Feuille") {
        document.getElementById("resultat").innerHTML = ` Tu as gagné !  l'ordinateur avait choisit ${PCchoix} `
    }
    console.log(PCchoix)
}