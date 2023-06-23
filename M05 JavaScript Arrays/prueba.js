function breakStatement(num) {
    let aux = [];
    let aux2 = false;
 
    for(let i = 0; i < 10; i++) {
        num += 2;
        aux.push(num);
 
        if(num === i) {
            aux2 = true;
            break;
        }
    }
 
    if(aux2) {
        return "Se interrumpió la ejecución";
    }
    return aux;
}


function continueStatement(num) {

    let aux = [];
 
    for(let i = 0; i < 10; i++) {
        if(i === 5) {
            continue;
        }
 
        num += 2;
        aux.push(num);
    }
 
    return aux;
}

function multiplicarArgumentos() {
    
    let prod = 1;
    if(arguments.length == 0) {
       return 0;
    } else if(arguments.length == 1) {
       return arguments[0];
    } else {
       for(let i = 0; i < arguments.length; i++) {
          prod *= arguments[i];
       }
       return prod;
    }
}