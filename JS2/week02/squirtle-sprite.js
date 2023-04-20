const pokeObj = JSON.parse(fetchPokemonData());
console.log(pokeObj)

console.log(pokeObj.name)

const container = document.querySelector('.container');
  //const spriteImg = document.createElement('img');
  //container.append(spriteImg);
  //spriteImg.setAttribute('class', 'sprite_img');
  //let address = pokeObj.sprites
  //spriteImg.src = address.back_default;

pokeList = Object.values(pokeObj.sprites)

allSprites =  (value) => {
    const spriteImg = document.createElement('img');
    container.appendChild(spriteImg);
    spriteImg.setAttribute('class', 'sprite_img');
    spriteImg.src = value;  
}

pokeList.filter(n => n).map(allSprites)
