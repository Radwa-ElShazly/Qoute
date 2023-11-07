let sentence=document.getElementById("sentence");
let writer=document.getElementById("writer");
let qoute=[
{  qoute:"'Do not take life too seriously. You will not get out alive.'",
    writer:"--Elbert Hubbard"
},
{  qoute:"'You miss 100% of the shots you don't take.'",
    writer:"--Wayne Gretzy"
},
{  qoute:"'The best revenge is massive success.'",
    writer:"--Frank Sinatra"
},
]

// Math.random() => method btTl3 number mn 0 l 1
// Math.floor() => method bt2rb l 22rb rqm 3shre
function getQoute(){
    // num =>index =>number object elle goh elArray 
    let num= Math.floor(Math.random()*qoute.length);
    
    sentence.innerHTML=qoute[num].qoute;
    writer.innerHTML=qoute[num].writer;
}
