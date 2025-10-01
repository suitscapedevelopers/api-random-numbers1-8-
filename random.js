// La función 'handler' se ejecuta cada vez que alguien visita la URL /api/random
export default function handler(request, response) {
    // 1. Obtener parámetros de la URL (query string)
    // Ejemplo de URL: /api/random?min=1&max=100
    const { min, max } = request.query;

    // 2. Validar y convertir a números enteros (Parsing)
    // Usamos parseInt para asegurarnos de que sean números
    const minVal = parseInt(min) || 0; // Si no se pone 'min', usa 0 por defecto
    const maxVal = parseInt(max) || 10; // Si no se pone 'max', usa 10 por defecto

    // 3. Validar errores (Control de errores)
    if (isNaN(minVal) || isNaN(maxVal)) {
        return response.status(400).json({ 
            error: "Parámetros inválidos",
            mensaje: "Asegúrate de que 'min' y 'max' sean números."
        });
    }

    if (minVal >= maxVal) {
        return response.status(400).json({ 
            error: "Rango inválido",
            mensaje: "El valor de 'min' debe ser menor que 'max'."
        });
    }

    // 4. Generar el número aleatorio
    // Fórmula: Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;

    // 5. Devolver la respuesta en formato JSON
    response.status(200).json({
        success: true,
        rango_min: minVal,
        rango_max: maxVal,
        numero_aleatorio: randomNumber
    });
    }
