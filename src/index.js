fetch(`http://localhost:3000/pups`)
.then(r => r.json())
.then(pups => {
    renderPups(pups)
})

function renderPups(pups){
    let pupsList = document.getElementById('dog-bar')
    pups.forEach( pup => {
        let pupsSpan = document.createElement('span')
        pupsSpan.innerText = pup.name

        pupsList.append(pupsSpan)

    pupsSpan.addEventListener('click', () => {
        let dogInfo = document.querySelector('#dog-info')
        dogInfo.innerHTML = `
        <img src = ${pup.image}>
        <h2> ${pup.name} </h2>
        <button> ${pup.isGoodDog} </button>
        `
        })
    
    //     const button = dogInfo.querySelector("button")
    // if (pup.isGoodDog === true){
    //     button.innerText = "Good Dog!"
    // }else{
    //     button.innerText = "Bad Dog!"
    // }

    button.addEventListener('click', () => {
        pup.isGoodDog =!pup.isGoodDog
        const updatedDogInfo = { isGoodDog: pup.isGoodDog}
       // const button = dogInfo.querySelector("button")
        fetch(`http://localhost:3000/pups/${pup.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedDogInfo)
        })
        if(pup.isGoodDog === true){
            button.innerText = "Good Dog!"
        }else{
            button.innerText = "Bad Dog!"
        }
    })
    })
}
