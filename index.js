function minusculas(){
    var texto = document.getElementById("texto").value;
    var contieneMayuscula = /[A-Z]/.test(texto);

    if (contieneMayuscula) {
      alert("El texto contiene letras mayúsculas. Por favor, ingresa solo letras minúsculas.");
      return;
    }
}

function encriptar() {
    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("parrafo").innerHTML = textoCifrado;
      titulo.textContent = "Texto encriptado con éxito"; 
    document.getElementById("muñeco").style.display="none"; 
    document.getElementById("titulo").style.display="none";
    document.getElementById("btn-copiar").style.display="block";
    document.getElementById("mensaje-encriptado").style.top = "15%";
    } else {
      muñeco.src = "Muñeco.png";
      document.getElementById("muñeco").style.display="block"; 
      document.getElementById("titulo").style.display="block";
      document.getElementById("btn-copiar").style.display="none";
      document.getElementById("mensaje-encriptado").style.top = "60%";
      titulo.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("muñeco").style.display="none"; 
        document.getElementById("titulo").style.display="none";
        document.getElementById("btn-copiar").style.display="block";
        document.getElementById("mensaje-encriptado").style.top = "15%";
        document.getElementById("parrafo").innerHTML = textoCifrado;
        titulo.textContent = "Texto desencriptado con éxito";
      } else {    
        muñeco.src = "Muñeco.png";
        document.getElementById("muñeco").style.display="block"; 
        document.getElementById("titulo").style.display="block";
        document.getElementById("btn-copiar").style.display="none";
        document.getElementById("mensaje-encriptado").style.top = "60%";
        titulo.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      
      }
  }
  
  function copiar() {
    var texto = document.getElementById("parrafo").innerHTML;
    
    // Intentar copiar el texto al portapapeles
    navigator.clipboard.writeText(texto)
        .then(function() {
            alert("¡Texto copiado al portapapeles!");
        })
      }

