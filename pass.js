function marks(){
    var name= document.getElementById("name").value;
    var usn=document.getElementById("usn");
    var no= document.getElementById("no").value;
    var p= document.getElementById("p");
    
    if(no>=35){
        p.innerHTML=name+" you are pass";
    }
    else
    {
        p.innerHTML=name+" you are failed";
    }
}
