document.querySelectorAll('.album').forEach(album => {
    album.addEventListener('click', function() {
        const albumName = this.getAttribute('data-album');
        fetchAlbumSongs(albumName);
    });
});

function fetchAlbumSongs(albumName) {
    const albumInfoDiv = document.getElementById('albumInfo');
    albumInfoDiv.innerHTML = '<div class="loader"></div>';  // Mostrar cargando mientras se fetch.

    fetch(`ALBUMES/${albumName}.html`)
        .then(response => response.text())
        .then(data => {
            albumInfoDiv.innerHTML = data;
            albumInfoDiv.style.display = 'block';  // Mostrar la lista de canciones
        })
        .catch(error => {
            console.error('Error al cargar el archivo:', error);
            albumInfoDiv.innerHTML = '<p>No se pudo cargar la lista de canciones.</p>';
            albumInfoDiv.style.display = 'block';
        });
}
