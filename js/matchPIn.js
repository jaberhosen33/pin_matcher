document.getElementById('calculator').addEventListener('click',function(event){

    const button=event.target;
    const buttonValue=button.innerText;
    const typedNumber=document.getElementById('typedNumber');
    const previoustyped=typedNumber.value ;

    if (isNaN(buttonValue)) {
        if(buttonValue=== "<"){
            const digit=previoustyped.split('');
            digit.pop();
            typedNumber.value=digit.join('');
        }
        else if(buttonValue === "C")
        {
            typedNumber.value=''; 
        }
    }

    else{
        
        const newTyped=previoustyped+buttonValue;

        typedNumber.value=newTyped;



    }
})

document.getElementById('submitBtn').addEventListener('click',function(){
    const typedNumber=document.getElementById('typedNumber').value;
    const displayPin=document.getElementById('displayPin').value;
    const match=document.getElementById('match')
    const Notmatch=document.getElementById('matchNot')
 if(typedNumber===displayPin)
 {
    match.style.display='block';
    Notmatch.style.display='none';

 }
else{
    match.style.display='none';
    Notmatch.style.display='block';

 }
})