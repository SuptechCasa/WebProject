const imageInput = document.getElementById('image');
const previewImage = document.getElementById('preview');

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
