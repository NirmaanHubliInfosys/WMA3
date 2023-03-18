function fillId(){
    var id=Math.floor(Math.random()*100000)
    document.getElementById('orderid').value=id;
}
function nameToUpper(){
    var fname=document.getElementById("firstname").value;
    fname=fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase();
    document.getElementById('firstname').value=fname;
}

function checkPassword(){
    var pwd=document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min length of password is 8";
            document.getElementById('ppout').style.display="block";
            document.getElementById('ppout').style.backgroundColor="red";
        }else{
            document.getElementById('pout').innerText="Max length of password is 15";
            document.getElementById('ppout').style.backgroundColor="black";
        }
    }
    else{
        document.getElementById("ppout").style.backgroundColor="green";
    }

}
