// Referencias a los elementos
const epicLogoScreen = document.getElementById('epic-logo-screen');
const loadingScreen = document.getElementById('loading-screen');
const finalScreen = document.getElementById('final-screen');
const backgroundMusic = document.getElementById('background-music');
const finalButton = document.getElementById('final-button');

// Mostrar el logo de Epic Games
epicLogoScreen.style.display = 'flex';
setTimeout(() => {
    // Pasar a la pantalla de carga
    epicLogoScreen.style.display = 'none';
    loadingScreen.style.display = 'flex';

    // Reproducir música a los 15 segundos
    setTimeout(() => {
        backgroundMusic.play();
    }, 15000);

    // Pasar a la pantalla final después de 30 segundos
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        finalScreen.style.display = 'flex';
    }, 30000);
}, 15000);

// Configurar el botón final
finalButton.onclick = () => {
    window.location.href = 'https://www.example.com'; // Cambiar por tu URL personalizada
};
