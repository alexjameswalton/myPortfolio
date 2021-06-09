// Remove Image Script
/*
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
*/

// Change Header Background Image When Hovering Over Nav Buttons
let headerImage = document.getElementById('headerImage');
let aboutMeText = document.getElementById('aboutMeText');
let myBackgroundText = document.getElementById('myBackgroundText');
let theFutureText = document.getElementById('theFutureText');
let myStoryNav = document.getElementById('myStoryNav');
let mySkillsNav = document.getElementById('mySkillsNav');
let mySelfNav = document.getElementById('mySelfNav');

function showMyStory() {
  headerImage.style.backgroundImage = "url('images/headers/alberto-zanetti-I4WSyUKvJ2U-unsplash2.jpg')"
  myBackgroundText.style.display = 'inline'
}

function hideMyStory() {
  myBackgroundText.style.display = 'none'
}

function showMySkillsImage() {
    headerImage.style.backgroundImage = "url('images/headers/jake-walker-MPKQiDpMyqU-unsplash2.jpg')"
}

function showMySelfImage() {
  headerImage.style.backgroundImage = "url('images/headers/mark-teachey-TfIQZ2gFEvI-unsplash.jpg')"
}

myStoryNav.addEventListener('mouseover', showMyStory)
myStoryNav.addEventListener('mouseout', hideMyStory)
mySkillsNav.addEventListener('mouseover', showMySkillsImage)
mySelfNav.addEventListener('mouseover', showMySelfImage)

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
