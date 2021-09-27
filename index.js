//container for our pokemons
const pokemonDiv = document.getElementById('pokemon');

//fetching the data from api 
async function fetchData( id ){
	let api = `https://pokeapi.co/api/v2/pokemon/${id}`;
	let res = await fetch(api);
	let pok = await res.json();
	createPokemonEle(pok);
}

//displaying data to our html page
function createPokemonEle( pokemon ){
	let pokdiv = document.createElement('div');
	pokdiv.classList.add('pokemon');
	let name = (pokemon.name)[0].toUpperCase() + (pokemon.name).slice(1);
	let prop = pokemon.abilities;
	let ab = '';
	prop.forEach((ele)=>{
		ab += "<p>"+ ele.ability.name + " </p>";
	});
	let sp = pokemon.sprites.back_default;
	pokdiv.innerHTML = `
		
			<p id="id">${pokemon.id}</p>
			<img src="${sp}"><br>
		
		<h2>${name}</h2><br>
		<div class="abilities">
			${ab}
		</div>
	`;
	pokemonDiv.appendChild(pokdiv);
}

//running a loop for the no of pokemons user wants
async function getPokemons( count ){
	for( let i = 1; i <= count; i++){
		await fetchData(i);
	}
}
//start
//asking user to enter the no of pokemons
let no = prompt('How many pokemons you want');
getPokemons(no);