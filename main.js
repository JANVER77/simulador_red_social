const publicacion = document.getElementById("publicacion");

document.addEventListener('click', function(e) {
    const form = document.getElementById("publicacion");
    const icono = document.getElementById("tuIcono");
    
    if (!form.contains(e.target) && e.target !== icono) {
        ocultarForm();
    }
});

document.getElementById("t-form").addEventListener('click', function(e) {
    e.stopPropagation();
});


publicacion.addEventListener('submit', function(e) {
    e.preventDefault();

    const tittle = document.getElementById("tittle").value;
    const descrip = document.getElementById("description").value;
    const fileInput = document.getElementById("file").files[0];
    
    if(!fileInput){
        alert("No has seleccionado una imagen")
    }else{
        createPublic(tittle, descrip, fileInput);
        publicacion.reset();
    }
})

let cardId = 0;

function createPublic(t, d, f){
    cardId++
    const urlImg = URL.createObjectURL(f);
    const publicaciones = document.getElementById("publicaciones");

const publicacionCard =  `
    <div class="card w-50 mx-auto mb-4" id="card${cardId}">
        <img src="${urlImg}" class="card-img-top" style="width: 100%; height: auto; object-fit: contain;">

        <div class="card-body">
            <h5 class="card-title">${t}</h5>
            <p class="card-text">${d}</p>                
            <a href="#" class="btn btn-outline-dark" onclick="likes(${cardId})">
            <i class="bi bi-balloon-heart" id="corazon${cardId}"></i>
            <span id="contLikes${cardId}" class="ms-1">0</span></a>
            <button class="btn btn-outline-danger btn-sm float-end" onclick="delPublicacion(${cardId})">Eliminar</button>
        </div>
    </div>
`;


    publicaciones.innerHTML = publicacionCard + publicaciones.innerHTML
    ocultarForm();
}

function delPublicacion(id) {
    const card = document.getElementById('card' + id);
    const img = document.getElementById('corazon' + id);
    URL.revokeObjectURL(img.src);
    card.remove();
}

function likes(id) {
    const span = document.getElementById('contLikes' + id);
    const corazon = document.getElementById('corazon' + id);
    const botonLike = document.querySelector(`[onclick="likes(${id})"]`);
    let contador = parseInt(span.textContent);
    span.textContent = contador + 1;
    corazon.classList.add('text-danger');
    botonLike.classList.remove('btn-outline-dark');
    botonLike.classList.add('btn-outline-danger');
}

function mostrarForm(){
    const form = document.getElementById("publicacion");
    form.style.display = "block";
}
function ocultarForm(){
    const form = document.getElementById("publicacion");
    form.style.display = "none";
}
