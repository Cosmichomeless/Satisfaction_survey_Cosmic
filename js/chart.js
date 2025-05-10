const preguntas = [
    'Claridad de la explicación',
    'Organización de la clase',
    'Utilidad del material',
    'Interacción con el docente',
    'Aplicabilidad de los contenidos',
    'Satisfacción general',
    'Innovación en el contenido',
    'Calidad de las actividades',
    'Uso de ejemplos prácticos',
    'Accesibilidad del docente',
    'Recursos tecnológicos',
    'Atención a dudas'
];

function showChart() {
    const respuestas = [];
    for (let i = 1; i <= 12; i++) {
        const valor = localStorage.getItem('p' + i);
        respuestas.push(valor ? parseInt(valor) : 0);
    }

    const ctx = document.getElementById('resultChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: preguntas,
            datasets: [{
                label: 'Puntuación',
                data: respuestas,
                backgroundColor: 'rgba(255, 153, 102, 0.7)',
                borderColor: 'rgba(255, 153, 102, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    ticks: { stepSize: 1 }
                }
            },
            plugins: {
                legend: { display: false },
                title: { display: true, text: 'Resumen de la Encuesta' }
            }
        }
    });
}