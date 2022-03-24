const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("error.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let nombre=data.name;
            document.getElementById("nombre").textContent=nombre;
            let tipo=data.types[0].type.name;
            document.getElementById("tipo").textContent="Tipo de pokemon:  "+tipo;
            let estadistica=data.stats[0].base_stat;
            document.getElementById("stat-vida").textContent="vida:  "+estadistica;
            let estadistica1=data.stats[1].base_stat;
            document.getElementById("stat-ataque").textContent="Ataque: "+estadistica1;
            let estadistica2=data.stats[2].base_stat;
            document.getElementById("stat-defensa").textContent="Defensa: "+estadistica2;
            let estadistica3=data.stats[3].base_stat;
            document.getElementById("stat-ataque-especial").textContent="Ataque especial: "+estadistica3;
            let estadistica4=data.stats[4].base_stat;
            document.getElementById("stat-defensa-especial").textContent="Defensa especial: "+estadistica4;
            let estadistica5=data.stats[5].base_stat;
            document.getElementById("stat-velocidad").textContent="Velocidad: "+estadistica5;
            
            let habilidades=data.abilities;
            console.log(habilidades);
            let listahabilidades="";
            for (var i = 0; i < habilidades.length; i+=1) {
                listahabilidades +="<li>"+ habilidades[i].ability.name + "</li>";
              }
              document.getElementById("lista-habilidades").innerHTML="Habilidades:<br><br> "+listahabilidades;
            let movimiento=data.moves;
            console.log(movimiento);
            let movimientos="";
            for (var i = 0; i < movimiento.length; i+=1) {
                movimientos +="<li>"+ movimiento[i].move.name + "</li>";
              }
              document.getElementById("lista-movimiento").innerHTML="Movimientos:<br><br> "+movimientos;
           
        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
var nombre = document.getElementById('pokeName');
nombre.addEventListener('keyup', function(e) {
  var keycode = e.keyCode || e.which;
  if (keycode == 13) {
    fetchPokemon()
  }
});

