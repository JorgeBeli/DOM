const tarjetasContenedor = document.querySelector('.tarjetas__wraper');
const debilidades = (array,i) =>{
    const debilidadesPokemon = array[i].weaknesses.reduce((acc,curr)=>{
        return acc +`
            <p>${curr}</p>
        `
    },'')
    return debilidadesPokemon
}
const tarjetas = POKEMON.pokemon.reduce((acc,curr,i) =>{
    return acc + `
    <div class='tarjeta'>
        <div class='tarjeta__img'>
            <img src=${curr.img} alt='${curr.name}'>
        </div>
        <div class='tarjeta__nombre'>
            <h2>${curr.name}</h2>
        </div>
        <div class='separator'></div>
        <div class='tarjeta__candy'>
            <p>Favorite candy: ${curr.candy}</p>
        </div>
        <div class='tarjeta__debilidades'>
            <p>Weakensses: ${debilidades(POKEMON.pokemon,i)}</p>
        </div>
    </div>
    `
},'')

tarjetasContenedor.innerHTML = tarjetas