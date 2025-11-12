import villes from "./data.js";

const listeVilles=document.querySelector('#villes');
const villesContainer=document.querySelector('#villesContainer');

villes.forEach((ville)=>{
 //Préparer le menu des villes
    const city=document.createElement("li")
    city.innerText=ville.name
    listeVilles.appendChild(city);

//Préparer les blocs des villes
    const villeBloc=document.createElement("div");
    villeBloc.classList.add("villeBloc");
    villeBloc.id=ville.name.toLowerCase();
    villeBloc.style.display="none";
    const imgVille=document.createElement("img");
    imgVille.src=ville.photo;
    imgVille.classList.add("ville");
    const descVille=document.createElement("p");
    descVille.classList.add("descriptionVille");
    descVille.innerText=ville.description;
    villeBloc.appendChild(descVille);
    villeBloc.appendChild(imgVille);
    
    villesContainer.appendChild(villeBloc);
});

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

document.querySelector('#home').addEventListener('click',()=>{
    document.querySelector('#bloc').style.display="block";
    document.querySelectorAll('.villeBloc').forEach((bloc)=>{
        bloc.style.display="none";
    }
);
   document.querySelector("#location").textContent="LE MAROC";
});
