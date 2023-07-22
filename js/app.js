const profileSquare = document.querySelector('.profile-square');
const profileText = document.getElementById('profileText');
const profileImage = document.getElementById('profileImage');
const uploadInput = document.getElementById('uploadInput');

profileSquare.addEventListener('click', function() {
  if (!profileImage.src || profileImage.src === '#') {
    uploadInput.click();
  } else {
    // If an image is already selected, allow the user to change it again
    uploadInput.onchange = handleImageUpload;
    uploadInput.click();
  }
});

uploadInput.addEventListener('change', handleImageUpload);

function handleImageUpload() {
  const file = uploadInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      profileImage.src = reader.result;
      profileText.style.display = 'none';
      profileImage.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }