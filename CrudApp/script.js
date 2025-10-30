const items=document.querySelectorAll('li');
items.forEach((li)=>{
li.addEventListener('click',(event)=>{
    const blocId=event.target.textContent.toLowerCase();
    document.querySelector('#bloc').style.display="none";
    document.querySelectorAll('.villeBloc').forEach((bloc)=>{
        bloc.style.display="none";
    });
   document.querySelector("#location").textContent=event.target.textContent;
   document.querySelector("#"+blocId).style.display="block";
});
})
