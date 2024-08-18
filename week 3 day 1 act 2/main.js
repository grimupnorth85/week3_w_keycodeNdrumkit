const webImg = document.getElementById(webImg); //the image being searched for in the box
const webImgBtn = document.getElementById(webImgBtn); // the button to be listened on/for
const showPic = document.getElementById(showPic);

webImgBtn.addEventListener('input', function(){
    const imgUrl = webImgBtn.value;
    showPic.src = imgUrl;
});