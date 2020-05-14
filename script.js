var A= document.querySelectorAll('.block');
var turn=document.getElementsByClassName('.turn');
L=[];
var index;
var p="",q="";
var temp1=[],temp2=[];
var places=["012","345","678","036","147","258","048","246"];

//Adding functionality to blocks
for(var i=0;i<A.length;i++){
  A[i].addEventListener('click',function(){
    if (L.length%2===0 && this.innerHTML==="<span>&nbsp;&nbsp;</span>"){
      this.innerHTML="<span>x</span>";
      this.style.color="red";
      var P=this.classList;
      index=Number(P[1][6])-1;
      L.push("x");
      store("x",index);
    }
    else if(L.length%2!==0 && this.innerHTML==="<span>&nbsp;&nbsp;</span>"){
      this.innerHTML="<span>o</span>";
      var P=this.classList;
      this.style.color="blue";
      index=Number(P[1][6])-1;
      L.push("o");
      store("o",index);
    }
  });
}

function store(str,index){
  if (str==='x'){
    p=p+String(index);
  }else if (str==='o'){
    q=q+String(index);
  }
  p=p.split('').sort().join('');
  q=q.split('').sort().join('');
  temp1=combine(p);
  temp2=combine(q);

  check(temp1,temp2);
}

//Function to check if the x or y wins the game
function check(a,b){
  for(var i=0;i<a.length;i++){
    if (places.includes(a[i])){
      messageDisplay("X");
      return;
    }
  }
  for(var j=0;j<b.length;j++){
    if (places.includes(b[j])){
      messageDisplay("O");
      return;
    }
  }
}

//Making Substrings StackoverFlow
function combine(string){
  var result = [];
   var loop = function (start,depth,prefix)
   {
       for(var i=start; i<string.length; i++){
           var next = prefix+string[i];
           if (depth > 0)
               loop(i+1,depth-1,next);
           else
               result.push(next);
       }
   }
   for(var i=0; i<string.length; i++){
       loop(0,i,'');
   }
   return result;
}

//Message Display Function

function messageDisplay(str){
  document.querySelector('.bg-modal').style.display='flex';
  document.querySelector('.winning-message').textContent=str+"  WINS!!";
}

document.querySelector('.close').addEventListener('click',function(){
  document.querySelector('.bg-modal').style.display='none';
  document.querySelector('.winning-message').textContent='&nbsp;';
  L=[];
  var temp1=[],temp2=[];
  p="",q="";
  for(var i=0;i<A.length;i++){
    A[i].innerHTML="<span>&nbsp;&nbsp;</span>";
  }
});
