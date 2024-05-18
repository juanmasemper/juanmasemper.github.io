document.getElementById('downloadBtn').addEventListener('click', function() {
    // URL del archivo PDF que deseas descargar
    const pdfUrl = 'CV-Juan-Manuel-Semper.pdf';
    
    // Crear un elemento <a> temporal
    const link = document.createElement('a');
    link.href = pdfUrl;
    
    // Asignar el atributo download con el nombre del archivo
    link.download = 'CV-Juan-Manuel-Semper.pdf';
    
    // Añadir el elemento <a> al documento
    document.body.appendChild(link);
    
    // Simular un clic en el enlace
    link.click();
    
    // Eliminar el elemento <a> del documento
    document.body.removeChild(link);
});
