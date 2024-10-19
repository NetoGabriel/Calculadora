function calculadora(n1,n2,operador){
    
    let resultado
    let num1 = parseInt(n1)
    let num2 = parseInt(n2)
    
    
    switch(operador){
        case " + ":
            resultado= num1 + num2
            break;
        case " - ":
            resultado= num1 - num2
            break;
        case " * ":
            resultado= num1 * num2
            break;
        case " / ":
            resultado= num1 / num2
            break;
        case "e":
            let contador = 1
            resultado= num1 * num2
            while(contador < num2 - 1){
                resultado = resultado * num1
                contador++
    
            }
            break;
      
    }
    if(resultado == undefined || resultado > 1000000)
        resultado = "Erro"
    return resultado
    }