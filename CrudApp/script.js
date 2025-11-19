const openModalButton = document.querySelector(".btn");
const modal = document.querySelector("#modal");
const closeModalButton = document.querySelector("#close-modal");
const overlay = document.querySelector("#overlay");
const btnAjouter=document.querySelector(".btn-ajouter");
const productForm=document.querySelector("#product-form");
const tableBody=document.querySelector("#table-body");
const noneContainer=document.querySelector(".none-container");
const confirmModal=document.querySelector("#confirmModal");

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
    <td>
      <button class="table_btn edit">Edit</button>
      <button class="table_btn delete">Delete</button>
    </td>
  `;
  tableBody.appendChild(row);
  
  const deleteButton=row.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
  confirmModal.style.display="block";
    //row.remove();
  });
}
