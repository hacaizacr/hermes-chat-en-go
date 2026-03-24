document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    const seccionesClaras = document.querySelectorAll('.seccion-clara');

    if(header && seccionesClaras.length > 0) {
        
        window.addEventListener('scroll', () => {
            let estoyEnSeccionClara = false;

            seccionesClaras.forEach(seccion => {
                const rect = seccion.getBoundingClientRect();
                
              
                if (rect.top <= 80 && rect.bottom >= 80) {
                    estoyEnSeccionClara = true;
                }
            });

            // quita
            if (estoyEnSeccionClara) {
                header.classList.add('modo-oscuro');
            } else {
                header.classList.remove('modo-oscuro');
            }
        });
    }
});