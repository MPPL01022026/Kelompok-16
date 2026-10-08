// Script Interaktif untuk Mochi & Lukchup Customizer
document.addEventListener('DOMContentLoaded', () => {
    console.log("Aplikasi Mochi & Lukchup berhasil dimuat!");

    const saveButton = document.querySelector('.btn');
    const canvasArea = document.querySelector('.canvas-area');

    if (saveButton) {
        saveButton.addEventListener('click', () => {
            alert('Yeay! Desain Mochi & Lukchup kamu berhasil disimpan!');
            
            if (canvasArea) {
                canvasArea.innerHTML = "✨ Mochi Spesialmu Berhasil Dibuat! ✨";
                canvasArea.style.backgroundColor = "#ffe4e6";
            }
        });
    }
});