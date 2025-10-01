exports.handler = async (event, context) => {
    const { min, max } = event.queryStringParameters;
    const minVal = parseInt(min) || 0;
    const maxVal = parseInt(max) || 10;
    
    if (isNaN(minVal) || isNaN(maxVal) || minVal >= maxVal) {
        return { 
            statusCode: 400, 
            body: "ERROR: Rango invalido" 
        };
    }
    
    const randomNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;

    return {
        statusCode: 200,
        body: String(randomNumber),
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    };
};
