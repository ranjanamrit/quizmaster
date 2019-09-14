document.getElementById("name").innerHTML += localStorage.getItem("username")

function submitAnswer() 
{
let radios = document.getElementsByName('choice');

let val= [];

for (let i = 0, length = radios.length; i < length; i++) 
{
    if (radios[i].checked) 
    {
      val.push(radios[i].value);
    }
} 

let c=0;
const question1 = document.getElementById('q1');
if (val[0] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[0] === "Scripting" ) 
{
  c++;    
}

const question2 = document.getElementById('q2');
if (val[1] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[1] == "RAM" ) 
{
  c++;
    
}
const question3 = document.getElementById('q3');
if (val[2] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[2] == "local area network" ) 
{
  c++;
    
}
const question4 = document.getElementById('q4');
if (val[3] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[3] == "ip address" ) 
{
  c++;
    
}
const question5 = document.getElementById('q5');
if (val[4] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[4] == "Electronic Numerical Integrator and Computer" ) 
{
  c++;
    
}
const question6 = document.getElementById('q6');
if (val[5] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[5] == "1 KB = 1024 bytes" ) 
{
  c++;
    
}
const question7 = document.getElementById('q7');
if (val[6] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[6] == "Dynamic RAM" ) 
{
  c++;
    
}
const question8 = document.getElementById('q8');
if (val[7] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[7] == "Image file" ) 
{
  c++;
    
}
const question9 = document.getElementById('q9');
if (val[8] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[8] == "Universal Serial Bus" ) 
{
  c++;
    
}
const question10 = document.getElementById('q10');
if (val[9] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[9] == "VoIP" ) 
{
  c++;
    
}
const question11 = document.getElementById('q11');
if (val[10] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[10] == "Ping" ) 
{
  c++;
    
}
const question12 = document.getElementById('q12');
if (val[11] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[11] == "Grayware" ) 
{
  c++;
    
}
const question13 = document.getElementById('q13');
if (val[12] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[12] == "Microsoft Windows" ) 
{
  c++;
    
}
const question14 = document.getElementById('q14');
if (val[13] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[13] == " 1024 MB" ) 
{
  c++;
}
const question15 = document.getElementById('q15');
if (val[14] == "" ) 
{
  alert('please select choice answer');
}
else if ( val[14] == "VLSI microprocessor" ) 
{
  c++;
}

localStorage.setItem("marks", c)

};