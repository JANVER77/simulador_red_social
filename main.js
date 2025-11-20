const publicacion = document.getElementById("publicacion");


publicacion.addEventListener('submit', function(e) {
    e.preventDefault();

    const tittle = document.getElementById("tittle").value;
    const descrip = document.getElementById("description").value;
    const fileInput = document.getElementById("file").value;
    
    if(!fileInput){
        alert("No has seleccionado una imagen")
    }else{
        createPublicacion(tittle, descrip, fileInput);
        publicacion.reset();
    }
})


function createPublic(t, d, f){
    const urlImg = URL.createObjectURL(f);
    const publicaciones = document.getElementById("card");

    const publicacionCard =  `
        <div class="card w-75 mx-auto mb-4">
            <img src="${urlTemporal}" class="card-img-top" style="height: 300px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${t}</h5>
                <p class="card-text">${d}</p>                
                <a href="#" class="btn btn-outline-dark"><i class="bi bi-balloon-heart"></i></a>
                <button class="btn btn-outline-danger btn-sm float-end" onclick="eliminarPublicacion(this)">Eliminar</button>
            </div>
        </div>
    `;

    publicaciones.innerHTML = publicacionCard + publicaciones.innerHTML
}

