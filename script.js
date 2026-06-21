const PASSWORD="FOXTHREE";

function login(){

let pass=document.getElementById("password").value;

let user=document.getElementById("username").value;

if(user==="ADMIN" && pass===PASSWORD){

document.getElementById("loginPage").style.display="none";

document.getElementById("terminalPage").style.display="block";

}else{

document.getElementById("message").innerHTML=
"ACCESS DENIED";

}

}

let output=document.getElementById("terminalOutput");

document.addEventListener("keydown",function(e){

if(e.key!="Enter") return;

if(document.activeElement.id!="terminalInput") return;

let cmd=document.getElementById("terminalInput").value.toLowerCase();

output.innerHTML+="<br>> "+cmd+"<br>";

switch(cmd){

case "help":

output.innerHTML+=`
help

list

open warning.txt

open personnel.db

open incident.log

clear
`;

break;

case "list":

output.innerHTML+=`

audio/

camera/

logs/

warning.txt

personnel.db

incident.log

`;

break;

case "open warning.txt":

output.innerHTML+=`

======================

WARNING

DO NOT TRUST COMMAND.

FOX-2 NEVER RETURNED.

======================

`;

break;

case "open personnel.db":

output.innerHTML+=`

FOX-1 STATUS: MIA

FOX-2 STATUS: KIA

FOX-3 STATUS: UNKNOWN

FOX-4 STATUS: MIA

FOX-5 STATUS: MIA

`;

break;

case "open incident.log":

output.innerHTML+=`

03:12

Entered Sector C.

03:19

Heavy interference.

03:26

Unknown biological movement.

03:31

Command no longer responding.

03:33

...

`;

break;

case "open recovered.wav":

output.innerHTML+=`

FILE NOT FOUND

`;

break;

case "clear":

output.innerHTML="";

break;

default:

output.innerHTML+="Unknown command.<br>";

}

document.getElementById("terminalInput").value="";

output.scrollTop=output.scrollHeight;

});