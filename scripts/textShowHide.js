

// Change Header Background Image When Hovering Over Nav Buttons
let headerImage = document.getElementById('headerImage');
let myStoryNav = document.getElementById('myStoryNav');
let mySkillsNav = document.getElementById('mySkillsNav');
let mySelfNav = document.getElementById('mySelfNav');

function showMyStoryImage() {
  headerImage.style.backgroundImage = "url('images/headers/alberto-zanetti-I4WSyUKvJ2U-unsplash2.jpg')"
};

function showMySkillsImage() {
    headerImage.style.backgroundImage = "url('images/headers/jake-walker-MPKQiDpMyqU-unsplash2.jpg')"
};

function hideMySkillsImage() {
  headerImage.style.backgroundImage = "url('images/headers/alberto-zanetti-I4WSyUKvJ2U-unsplash2.jpg')"
};

function showMySelfImage() {
  headerImage.style.backgroundImage = "url('images/headers/mark-teachey-TfIQZ2gFEvI-unsplash.jpg')"
};

function hideMySelfImage() {
  headerImage.style.backgroundImage = "url('images/headers/alberto-zanetti-I4WSyUKvJ2U-unsplash2.jpg')"
};

myStoryNav.addEventListener('mouseover', showMyStoryImage);
mySkillsNav.addEventListener('mouseover', showMySkillsImage);
mySkillsNav.addEventListener('mouseout', hideMySkillsImage);
mySelfNav.addEventListener('mouseover', showMySelfImage);
mySelfNav.addEventListener('mouseout', hideMySelfImage);


// Show and hide text in each Box
let aboutMeBox = document.getElementById('aboutMeBox');
let myBackgroundBox = document.getElementById('myBackgroundBox');
let theFutureBox = document.getElementById('theFutureBox');
let myExperienceBox = document.getElementById('myExperienceBox');
let mySkillsBox = document.getElementById('mySkillsBox');
let mySelfBox = document.getElementById('mySelfBox');

let aboutMeText = document.getElementById('aboutMeText');
let alexsImage = document.getElementById('alexsImage');
let myBackgroundText = document.getElementById('myBackgroundText');
let theFutureText = document.getElementById('theFutureText');
let myExperienceText = document.getElementById('myExperienceText');
let mySkillsText = document.getElementById('mySkillsText');
let mySelfText = document.getElementById('mySelfText');
let myMusicVid = document.getElementById('myMusicVid');


function showAlexsImg() {
    alexsImage.style.display = 'block';
    aboutMeText.style.display = 'inline';
    aboutMeBox.style.justifyContent = 'flex-start'
}

function hideAlexsImg() {
    alexsImage.style.display = 'none';
    aboutMeText.style.display = 'none';
    aboutMeBox.style.justifyContent = 'center'
}

aboutMeBox.addEventListener('mouseover', showAlexsImg);
aboutMeBox.addEventListener('mouseout', hideAlexsImg);


function showMyBackgroundText () {
    myBackgroundText.style.display = 'inline'
};

function hideMyBackgroundText () {
    myBackgroundText.style.display = 'none'
};

myBackgroundBox.addEventListener('mouseover', showMyBackgroundText);
myBackgroundBox.addEventListener('mouseout', hideMyBackgroundText);


function showTheFutureText () {
  theFutureText.style.display = 'inline'
};

function hideTheFutureText () {
    theFutureText.style.display = 'none'
};

theFutureBox.addEventListener('mouseover', showTheFutureText);
theFutureBox.addEventListener('mouseout', hideTheFutureText);


function showMyExperienceText () {
  myExperienceText.style.display = 'inline'
};

function hideMyExperienceText () {
    myExperienceText.style.display = 'none'
};

myExperienceBox.addEventListener('mouseover', showMyExperienceText);
myExperienceBox.addEventListener('mouseout', hideMyExperienceText);


function showMySkillsText () {
  mySkillsText.style.display = 'inline'
};

function hideMySkillsText () {
    mySkillsText.style.display = 'none'
};

mySkillsBox.addEventListener('mouseover', showMySkillsText);
mySkillsBox.addEventListener('mouseout', hideMySkillsText);



function showMySelfText () {
  mySelfText.style.display = 'inline';
  myMusicVid.style.display = 'inline';
};

function hideMySelfText () {
    mySelfText.style.display = 'none';
    myMusicVid.style.display = 'none';
};

mySelfBox.addEventListener('mouseover', showMySelfText);
mySelfBox.addEventListener('mouseout', hideMySelfText);



// Bring My Skills to the top


// beTheChange -> ifYouBuildItTheyWillCome

let h1Element = document.getElementById("h1Element");
let beTheChangeText = document.getElementById("beTheChangeText");

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
};

function deactivateBeTheChange (){
  h1Element.innerHTML = `if You Build It, They Will Come`;
};

beTheChangeText.onmouseover = activateBeTheChange;
beTheChangeText.onmouseout = deactivateBeTheChange;

//TRANSITION BASED ON MY STORY:
/*
mySkillsNav.onclick = function () {
  aboutMeBox.style.gridArea = '2 / 1 / span 2 / span 2';
  myBackgroundBox.style.gridArea = '2 / 3 / span 1 / span 1';
  theFutureBox.style.gridArea = '2 / 4 / span 1 / span 1';
  myExperienceBox.style.gridArea = '1 / 1 / span 1 / span 1';
  mySkillsBox.style.gridArea = '1 / 2 / span 1 / span 1';
  mySelfBox.style.gridArea = '1 / 3 / span 1 / span 2';
}

myStoryNav.onclick = function () {
  aboutMeBox.style.gridArea = '1 / 1 / span 2 / span 2';
  myBackgroundBox.style.gridArea = '1 / 3 / span 1 / span 1';
  theFutureBox.style.gridArea = '1 / 4 / span 1 / span 1';
  myExperienceBox.style.gridArea = '2 / 1 / span 1 / span 1';
  mySkillsBox.style.gridArea = '2 / 2 / span 1 / span 1';
  mySelfBox.style.gridArea = '2 / 3 / span 1 / span 2';
}
*/