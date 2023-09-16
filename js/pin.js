function getpin(){
    const pin=genaretPIn();
    const pinstring=pin + '';

  if(pinstring.length===4)
  {
    return pin;
  }
  else{
    return getpin();
  }

}

function genaretPIn(){

    const randomNO= Math.round(Math.random()*10000);
    
 return randomNO;   
}

document.getElementById('genareteBtn').addEventListener('click',function(){
const displayPin=document.getElementById('displayPin');
displayPin.value= getpin();


})