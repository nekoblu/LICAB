window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Animación de aparición suave al bajar
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});
// Validación de Privacidad mejorada
const checkPrivacidad = document.getElementById('check-privacidad');
const calendarioDiv = document.getElementById('calendario-real');
const avisoClick = document.getElementById('aviso-click');
const privacidadWrapper = document.getElementById('privacidad-wrapper');

if (checkPrivacidad) {
    checkPrivacidad.addEventListener('change', function() {
        if (this.checked) {
            // Mostramos el calendario y ocultamos los avisos
            calendarioDiv.style.display = 'block';
            avisoClick.style.display = 'none';
            privacidadWrapper.style.backgroundColor = '#e8f5e9'; // Cambia a verde suave al aceptar
            privacidadWrapper.style.borderColor = '#4caf50';
        } else {
            // Si lo desmarcan, se vuelve a ocultar
            calendarioDiv.style.display = 'none';
            avisoClick.style.display = 'block';
            privacidadWrapper.style.backgroundColor = '#f4f7f6';
            privacidadWrapper.style.borderColor = '#ddd';
        }
    });
}
