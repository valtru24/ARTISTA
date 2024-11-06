document.addEventListener('DOMContentLoaded', function () {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const gallerySection = document.querySelector('#gallery .gallery');

    loadMoreBtn.addEventListener('click', function () {
        fetch('galeria.html')
            .then(response => response.text())
            .then(data => {
                gallerySection.innerHTML += data; 
                loadMoreBtn.style.display = 'none'; 
            })
            .catch(error => {
                console.error('Error al cargar más imágenes:', error);
            });
    });
});
