// Remove Image Script

let myStoryNav = document.getElementById('myStoryNav');
let alexsImage = document.getElementById('alexsImage');
let aboutMeText = document.getElementById('aboutMeText');

function hideImg() {
  alexsImage.style.display = 'none';
  aboutMeText.style.display = 'none';
}

myStoryNav.addEventListener('mousedown', hideImg);

function showImg() {
    alexsImage.style.display = 'block';
    aboutMeText.style.display = 'inline';
}

myStoryNav.addEventListener('mouseup', showImg);


// Box Hover Display



// beTheChange -> ifYouBuildItTheyWillCome

let h1Element = document.getElementById("h1Element");
let beTheChangeText = document.getElementById("beTheChangeText")

function activateBeTheChange (){
  h1Element.innerHTML = `<span class="jt__row">
  <span class="jt__text">if You Build It, They Will Come</span>
</span>
<span class="jt__row jt__row--sibling" aria-hidden="true">
  <span class="jt__text">if You Build It, They Will Come</span>
</span>
<span class="jt__row jt__row--sibling" aria-hidden="true">
  <span class="jt__text">if You Build It, They Will Come</span>
</span>
<span class="jt__row jt__row--sibling" aria-hidden="true">
  <span class="jt__text">if You Build It, They Will Come</span>
</span>`;
}

function deactivateBeTheChange (){
  h1Element.innerHTML = `if You Build It, They Will Come`;
}

beTheChangeText.onmouseover = activateBeTheChange;
beTheChangeText.onmouseout = deactivateBeTheChange;
