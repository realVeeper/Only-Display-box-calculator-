function clearScreen() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function caL()
{
  var num1;
  var num2;
  var operator;

  num1 = parseFloat(document.getElementById('num1').value);
  num2 = parseFloat(document.getElementById('num2').value); 
  
  operator = document.getElementById('oper').value;

  switch(operator) {
    case '*': 
        document.getElementById('res').value = num1+num2;                       
      break;
    case '-':
        document.getElementById('res').value = num1+num2;
      break;
      case '/':
        document.getElementById('res').value = num1+num2;
        break;
        case '+':
            document.getElementById('res').value = num1+num2;
            break;
    default:
      alert('Wrong Operator')
  }
/*
  if (operator === '+')
  {
     document.getElementById('res').value = num1+num2;
  }
  if (operator === '-')
  {
    document.getElementById('res').value = num1-num2;
  }
  if (operator === '/')
  {
    document.getElementById('res').value = num1/num2;
  }
  if (operator === '*')
  {
    document.getElementById('res').value = num1*num2;
  }
*/
}


