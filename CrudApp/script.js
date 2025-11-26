const openModalButton = document.querySelector(".btn");
const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#close-modal");
const overlay = document.querySelector("#overlay");
const btnAjouter=document.querySelector(".btn-ajouter");
const productForm=document.querySelector("#product-form");
const tableBody=document.querySelector("#table-body");
const noneContainer=document.querySelector(".none-container");
const confirmModal=document.querySelector("#confirmModal");
const ouiBtn=document.querySelector(".ouiBtn");
const nonBtn=document.querySelector(".nonBtn");

const imageInput = document.getElementById('image');
const previewImage = document.getElementById('preview');

let ligne=null;

openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
 overlay.style.display = "block";
})

const closeModal=() => {
  modal.style.display = "none";
  overlay.style.display = "none";
}
closeModalButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

btnAjouter.addEventListener("click", (e) => {
   e.preventDefault();
   const formData=new FormData(productForm);
   const productData=Object.fromEntries(formData.entries());
   console.log(productData.image.name);
   toTable(productData);
   productForm.reset();
   closeModal();
   noneContainer.style.display="none";
});

const toTable=(product)=>{
  const row=document.createElement("tr");
  row.innerHTML=`
    <td>${product.id}</td>
    <td class="td-nom">${product.nom}</td>
    <td>${product.prix}</td>
    <td>${product.image.name}</td>
    <td>
      <button class="table_btn edit">Edit</button>
      <button class="table_btn delete">Delete</button>
    </td>
  `;
  tableBody.appendChild(row);
  
  const deleteButton=row.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
  confirmModal.style.display="block";
  ligne=row;
  });

  localStorage.setItem(product.id, JSON.stringify(product));
  //sessionStorage.setItem(product.id, JSON.stringify(product));
}
ouiBtn.addEventListener("click", () => {
  ligne.remove();
  localStorage.removeItem(ligne.children[0].textContent);
  confirmModal.style.display="none";
  if (tableBody.children.length===0){
    noneContainer.style.display="block";
  }
});
nonBtn.addEventListener("click", () => {
  confirmModal.style.display="none";
});!

// Load products from localStorage on page load
window.addEventListener("load", () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const product = JSON.parse(localStorage.getItem(key));
    toTable(product);
  }
    if (tableBody.children.length===0){
    noneContainer.style.display="block";
  }else{
    noneContainer.style.display="none";
  }
});

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };
}  
}      
);