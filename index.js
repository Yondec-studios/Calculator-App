document.addEventListener("DOMContentLoaded", () => {

    
    const inputArray = [];
    let count = 0;

    document.onkeydown = function(e){
        var keyPress = e.key;

        switch(keyPress){
            case '1':
                displayValues(document.querySelector('#btn-1').innerHTML);
                break;
            case '2':
                displayValues(document.querySelector('#btn-2').innerHTML);
                break;
            case '3':
                displayValues(document.querySelector('#btn-3').innerHTML);
                break;
            case '+':
                displayValues(document.querySelector('#btn-sum').innerHTML);
                break;
            case '4':
                displayValues(document.querySelector('#btn-4').innerHTML);
                break;
            case '5':
                displayValues(document.querySelector('#btn-5').innerHTML);
                break;
            case '6':
                displayValues(document.querySelector('#btn-6').innerHTML);
                break;
            case '-':
                displayValues(document.querySelector('#btn-substract').innerHTML);
                break;
            case '7':
                displayValues(document.querySelector('#btn-7').innerHTML);
                break;
            case '8':
                displayValues(document.querySelector('#btn-8').innerHTML);
                break;
            case '9':
                displayValues(document.querySelector('#btn-9').innerHTML);
                break;
            case '*':
                displayValues(document.querySelector('#btn-multiply').innerHTML);
                break;
            case '/':
                displayValues(document.querySelector('#btn-divide').innerHTML);
                break;
            case '.':
                displayValues(document.querySelector('#btn-point').innerHTML);
                break;
            case '(':
                displayValues(document.querySelector('#btn-bracket-in').innerHTML);
                break;
            case ')':
                displayValues(document.querySelector('#btn-bracket-out').innerHTML);
                break;
            case '0':
                displayValues(document.querySelector('#btn-0').innerHTML);
                break;
            case '=':
                try{
                    document.querySelector('#bottomPart').innerHTML = eval(document.querySelector('#topPart').innerHTML);
                }
                catch(err){
                    if(err.constructor === SyntaxError){
                        document.querySelector('#bottomPart').innerHTML = "Syntax Error";
                    }
                    else{
                        document.querySelector('#bottomPart').innerHTML = "Error";
                    }    
                }
                break;
            case 'Enter':
                try{
                    document.querySelector('#bottomPart').innerHTML = eval(document.querySelector('#topPart').innerHTML);
                }
                catch(err){
                    if(err.constructor === SyntaxError){
                        document.querySelector('#bottomPart').innerHTML = "Syntax Error";
                    }
                    else{
                        document.querySelector('#bottomPart').innerHTML = "Error";
                    }    
                }
                break;
            case 'c':
                document.querySelector('#topPart').innerHTML = '';
                document.querySelector('#bottomPart').innerHTML = '';
                for(let i = 0; i < count;i++){
                    inputArray[i] = '';
                }
                count = 0
                break;
            case 'Backspace':
                document.querySelector('#topPart').innerHTML = '';
                for(let i = 0; i < count - 1; i++){
                    document.querySelector('#topPart').innerHTML += inputArray[i];
                }
                count--;
                break;    
        }
    }

    document.querySelector('#btn-1').onclick = () => displayValues(document.querySelector('#btn-1').innerHTML);
    document.querySelector('#btn-2').onclick = () =>  displayValues(document.querySelector('#btn-2').innerHTML);
    document.querySelector('#btn-3').onclick = () =>  displayValues(document.querySelector('#btn-3').innerHTML);
    document.querySelector('#btn-sum').onclick = () =>  displayValues(document.querySelector('#btn-sum').innerHTML);
    document.querySelector('#btn-4').onclick = () =>  displayValues(document.querySelector('#btn-4').innerHTML);
    document.querySelector('#btn-5').onclick = () =>  displayValues(document.querySelector('#btn-5').innerHTML);
    document.querySelector('#btn-6').onclick = () =>  displayValues(document.querySelector('#btn-6').innerHTML);
    document.querySelector('#btn-substract').onclick = () => displayValues(document.querySelector('#btn-substract').innerHTML);
    document.querySelector('#btn-7').onclick = () =>  displayValues(document.querySelector('#btn-7').innerHTML);
    document.querySelector('#btn-8').onclick = () =>  displayValues(document.querySelector('#btn-8').innerHTML);
    document.querySelector('#btn-9').onclick = () =>  displayValues(document.querySelector('#btn-9').innerHTML);
    document.querySelector('#btn-multiply').onclick = () =>  displayValues(document.querySelector('#btn-multiply').innerHTML);
    document.querySelector('#btn-0').onclick = () =>  displayValues(document.querySelector('#btn-0').innerHTML);
    document.querySelector('#btn-point').onclick = () =>  displayValues(document.querySelector('#btn-point').innerHTML);
    document.querySelector('#btn-divide').onclick = () =>  displayValues(document.querySelector('#btn-divide').innerHTML);
    document.querySelector('#btn-bracket-in').onclick = () =>  displayValues(document.querySelector('#btn-bracket-in').innerHTML);
    document.querySelector('#btn-bracket-out').onclick = () =>  displayValues(document.querySelector('#btn-bracket-out').innerHTML);

    document.querySelector('#btn-equal').onclick = () =>  {
        try{
            document.querySelector('#bottomPart').innerHTML = eval(document.querySelector('#topPart').innerHTML);
        }
        catch(err){
            if(err.constructor === SyntaxError){
                document.querySelector('#bottomPart').innerHTML = "Syntax Error";
            }
            else{
                document.querySelector('#bottomPart').innerHTML = "Error";
            }    
        }    
    }
    document.querySelector('#btn-clear').onclick = () =>  {
        document.querySelector('#topPart').innerHTML = '';
        document.querySelector('#bottomPart').innerHTML = '';
        for(let i = 0; i < count;i++){
            inputArray[i] = '';
        }
        count = 0
    }
    document.querySelector('#btn-back').onclick = () => {
        document.querySelector('#topPart').innerHTML = '';
        for(let i = 0; i < count - 1; i++){
            document.querySelector('#topPart').innerHTML += inputArray[i];
        }
        count--;
    }


    function displayValues(value){
        if(count < 20){
            document.querySelector('#topPart').innerHTML += value;
            inputArray[count] = value;
            count++;
        }
        else{
            document.querySelector('#topPart').innerHTML = 'Error: Out of Limit';
        }
    }
})
