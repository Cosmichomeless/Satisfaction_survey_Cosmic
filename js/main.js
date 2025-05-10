// Este archivo contiene la lógica principal de JavaScript para la encuesta. Maneja la navegación entre las vistas, la actualización de la barra de progreso y el almacenamiento de respuestas en el almacenamiento local.

function updateProgressView1() {
    const groups = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
    let filled = 0;
    groups.forEach(group => {
        const radios = document.getElementsByName(group);
        if ([...radios].some(radio => radio.checked)) filled++;
    });
    const percentage = (filled / groups.length) * 50;
    document.getElementById('progressBar').style.width = percentage + '%';
}

function updateProgressView2() {
    const groups = ['p7', 'p8', 'p9', 'p10', 'p11', 'p12'];
    let filled = 0;
    groups.forEach(group => {
        const radios = document.getElementsByName(group);
        if ([...radios].some(radio => radio.checked)) filled++;
    });
    const percentage = 50 + ((filled / groups.length) * 50);
    document.getElementById('progressBar').style.width = percentage + '%';
}

// Agregar event listener a los radios de la vista 1
document.querySelectorAll('#formView1 input[type="radio"]').forEach(input => {
    input.addEventListener('change', updateProgressView1);
});
// Agregar event listener a los radios de la vista 2
document.querySelectorAll('#formView2 input[type="radio"]').forEach(input => {
    input.addEventListener('change', updateProgressView2);
});

function nextView1() {
    const groups = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
    let valid = true;
    groups.forEach(group => {
        const radios = document.getElementsByName(group);
        if (![...radios].some(radio => radio.checked)) valid = false;
    });
    if (!valid) {
        alert("Por favor, completa todas las filas de la Vista 1.");
    } else {
        groups.forEach(group => {
            const radios = document.getElementsByName(group);
            const checked = [...radios].find(radio => radio.checked);
            localStorage.setItem(group, checked.value);
        });
        document.getElementById('view1').style.display = 'none';
        document.getElementById('view2').style.display = 'block';
        document.getElementById('progressBar').style.width = '50%';
    }
}

function submitSurvey() {
    const groups = ['p7', 'p8', 'p9', 'p10', 'p11', 'p12'];
    let valid = true;
    groups.forEach(group => {
        const radios = document.getElementsByName(group);
        if (![...radios].some(radio => radio.checked)) valid = false;
    });
    if (!valid) {
        alert("Por favor, completa todas las filas de la Vista 2.");
    } else {
        groups.forEach(group => {
            const radios = document.getElementsByName(group);
            const checked = [...radios].find(radio => radio.checked);
            localStorage.setItem(group, checked.value);
        });
        document.getElementById('progressBar').style.width = '100%';
        document.getElementById('view2').style.display = 'none';
        document.getElementById('chartContainer').style.display = 'block';
        showChart();
    }
}