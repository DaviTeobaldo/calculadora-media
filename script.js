var notas = []
var materias = ['Matemática', 'Física', 'Química', 'Português', 'Inglês', 'História', 'Geografia']
var c = 0
var quant = materias.length
materia = document.getElementById("materia")
  var frase = 'Digite sua nota de ' + materias[c]
  materia.innerHTML = frase
  console.log(frase)
function Adicionar(){
  var notao = document.getElementById("valor");
  n = notao.value;
  nota = parseFloat(n)
  notas.push(nota)
  if( c < materias.length-1){
    c += 1  
    var frase = 'Digite sua nota de ' + materias[c]
    materia.innerHTML = frase
    console.log(frase)
  }else{
    var s = 0
    var m = s/quant
    var quant = materias.length
    for (var a=0; a<notas.length; a++){
      console.log(notas)
      s += notas[a]
      console.log(s)
      console.log(quant)
    }
    m = s / quant
    mfinal = m.toFixed(2)
    media = document.getElementById("media")
    var final = 'A sua média foi de ' + mfinal
    media.innerHTML = final
    
  }
}

  