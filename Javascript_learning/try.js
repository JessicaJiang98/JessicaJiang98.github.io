// const content={
//   title:"Hello there!",
//   text:"I am glad to see you here",
//   message:"This is a trial",
//   Rick_property:{
//     first:"sick",
//     second:"stupid",
//     thrid:"dumbass"
//   }
// }
//
// console.log(content);

// window.alert('Please enter your user information')

// const btn=document.getElementsByClassName('btn');
// console.log(btn);
// console.log(document.querySelector('.msg'));

//
// const form=getElementById('loginfo');
// form.firstElementChild.textContent='Hello';
// const btn=document.querySelector('btn');
// btn.style.background='red';
//
// function myFunction() {
//   var x = document.getElementById("loginfo");
//   var text = "";
//   var i;
//   for (i = 0; i < x.length ;i++) {
//     text += x.elements[i].value + "<br>";
//   }
//   document.getElementById("demo").innerHTML = text;
// }

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}
var age=getUrlVars()['age'];
var name =  getUrlVars()['name'];
document.getElementById('age').innerHTML='原来你今年已经'+age+'岁了，按卦象你还能活'
+ (180-age)+"年～ Enjoy your life!";
document.getElementById('name').innerHTML='啊，果然是'+name ;
