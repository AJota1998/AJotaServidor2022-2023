let objetoAExportarAlFinal = {}

objetoAExportarAlFinal.validarDNI = function(DNI) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (DNI !== '77924936Q') {
                resolve('OK: DNI no existente');
            } else {
                reject('ERROR: DNI ya existente');
            }
        }, 2000)
    });
}

module.exports = objetoAExportarAlFinal;