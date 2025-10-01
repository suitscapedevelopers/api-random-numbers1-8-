exports.handler = async (event, context) => {
    // 1. Obtener parámetros de la URL
    // event.queryStringParameters contiene { min: '1', max: '100' }
    const { min, max } = event.queryStringParameters;

    // 2. Validar y convertir a números
    const minVal = parseInt(min) || 0;
    const maxVal = parseInt(max) || 10;

    // 3. Control de errores
    if (isNaN(minVal) || isNaN(maxVal) || minVal >= maxVal) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                error: "Parámetros inválidos",
                mensaje: "Asegúrate de usar min y max válidos."
            })
        };
    }

    // 4. Generar el número aleatorio
    const randomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;

    // 5. Devolver la respuesta en formato JSON
    return {
        statusCode: 200, // Código HTTP de éxito
        body: JSON.stringify({
            success: true,
            rango_min: minVal,
            rango_max: maxVal,
            numero_aleatorio: randomNumber
        })
    };
};
