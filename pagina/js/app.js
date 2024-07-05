document.addEventListener('DOMContentLoaded', () => {
    const asientosContainer = document.getElementById('asientos-container');
    const resultado = document.getElementById('resultado');
    const form = document.getElementById('venta-pasajes');
    const fechaInput = document.getElementById('fecha');
    const servicioSelect = document.getElementById('servicio');
    


    const asientosPrimerPiso = 12;
    const asientosSegundoPiso = 34;
    const costoPorAsiento = {
        ARS: 26890,
        CLP: 27170,
        USD: 30
    };

    const servicios = [
        // Buenos Aires a Santiago
        { fecha: '2024-07-30', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-29', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-28', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-27', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-26', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-25', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-24', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-23', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-22', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-21', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-20', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-19', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-18', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-17', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-16', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-15', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-14', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-13', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-12', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-11', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-10', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-09', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-08', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-07', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-06', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-05', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-04', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-03', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-02', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
        { fecha: '2024-07-01', origen: 'Buenos Aires', destino: 'Santiago', hora: '08:00' },
    
        // Buenos Aires a Montevideo
        { fecha: '2024-07-30', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-29', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-28', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-27', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-26', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-25', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-24', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-23', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-22', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-21', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-20', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-19', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-18', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-17', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-16', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-15', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-14', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-13', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-12', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-11', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-10', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-09', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-08', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-07', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-06', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-05', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-04', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-03', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-02', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
        { fecha: '2024-07-01', origen: 'Buenos Aires', destino: 'Montevideo', hora: '09:00' },
    
        // Santiago a Mendoza
        { fecha: '2024-07-30', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-29', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-28', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-27', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-26', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-25', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-24', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-23', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-22', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-21', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-20', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-19', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-18', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-17', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-16', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-15', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-14', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-13', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-12', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-11', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-10', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-09', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-08', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-07', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-06', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-05', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-04', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-03', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-02', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
        { fecha: '2024-07-01', origen: 'Santiago', destino: 'Mendoza', hora: '10:00' },
    
        // Montevideo a Santiago
        { fecha: '2024-07-30', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-29', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-28', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-27', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-26', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-25', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-24', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-23', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-22', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-21', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-20', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-19', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-18', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-17', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-16', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-15', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-14', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-13', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-12', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-11', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-10', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-09', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-08', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-07', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-06', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-05', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-04', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-03', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-02', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' },
        { fecha: '2024-07-01', origen: 'Montevideo', destino: 'Santiago', hora: '11:00' }
    ];
    
    fechaInput.addEventListener('change', () => {
        const fechaSeleccionada = fechaInput.value;
        const serviciosDisponibles = servicios.filter(servicio => servicio.fecha === fechaSeleccionada);

        servicioSelect.innerHTML = '<option value="">Seleccione un Servicio</option>';
        serviciosDisponibles.forEach(servicio => {
            const option = document.createElement('option');
            option.value = `${servicio.origen}-${servicio.destino}-${servicio.hora}`;
            option.textContent = `${servicio.origen} a ${servicio.destino} - ${servicio.hora}`;
            servicioSelect.appendChild(option);
        });

        servicioSelect.disabled = serviciosDisponibles.length === 0;
    });

    const asientos = [];

    for (let i = 1; i <= asientosPrimerPiso; i++) {
        asientos.push({ piso: 1, numero: i });
    }

    for (let i = 13; i <= asientosSegundoPiso; i++) {
        asientos.push({ piso: 2, numero: i });
    }

    asientos.forEach(asiento => {
        const div = document.createElement('div');
        div.classList.add(`asiento`);
        div.textContent = `|A${asiento.numero}|`;
        div.dataset.piso = asiento.piso;
        div.dataset.numero = asiento.numero;
        asientosContainer.appendChild(div);

        div.addEventListener('click', () => {
            if (document.querySelectorAll('.asiento.selected').length < document.getElementById('cantidad').value) {
                div.classList.toggle('selected');
            } else if (div.classList.contains('selected')) {
                div.classList.remove('selected');
            }
            updatePrice();
        });
    });

    form.addEventListener('submit', event => {
        event.preventDefault();
        const serviciodia = document.getElementById('servicio').value;
        const cantidad = document.getElementById('cantidad').value;
        const moneda = document.getElementById('moneda').value;
        const selectedAsientos = document.querySelectorAll('.asiento.selected');
        const asientosSeleccionados = Array.from(selectedAsientos).map(asiento => asiento.textContent);      
        const costoTotal = cantidad * costoPorAsiento[moneda];
        const fecha2 = document.getElementById('fecha').value.toUpperCase().split('').reverse().join('');
        const fecha3 = document.getElementById('fecha').value;
        const dnirut = document.getElementById('DNIRUT').value.toUpperCase();
        const codigo = `${costoTotal}${dnirut}${fecha3}${fecha2}`;

        resultado.innerHTML = `
            <br>
  
            <p>&nbsp;&nbsp;  Servicio: ${serviciodia}-${fecha3}</p>
            <p>&nbsp;&nbsp;  Cantidad de Pasajes: ${cantidad}</p>
            <p>&nbsp;&nbsp;  Moneda: ${moneda}</p>
            <p>&nbsp;&nbsp;  Costo Total: ${costoTotal} ${moneda}</p>
            <p>&nbsp;&nbsp;  Asientos Seleccionados: ${asientosSeleccionados.join(', ')}</p>
            <p>&nbsp;&nbsp; Codigo: ${codigo}</p>
        `;
    });
    const preCompra = document.getElementById('preCompra');

    function updatePrice() {
        const moneda = document.getElementById('moneda').value;
        const selectedAsientos = document.querySelectorAll('.asiento.selected').length;
        const costoTotal = selectedAsientos * costoPorAsiento[moneda];
        preCompra.innerHTML = `<p>${costoTotal} ${moneda}</p>`;
    }
});
