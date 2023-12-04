


/* 

const buttonElement = document.querySelector('. js-headRightButton');
const eventListener = () => {

}

buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener)

buttonElement.addEventListener('click', () => {
 console.log('click2')
});
*/
const headCatalog = ['red', 'Green', 'blue'];
let headIndex = 0;
let color = '';

function UpdateHeadRightElement() {
  if (headIndex < headCatalog.length) {
    color = headCatalog[headIndex];
    headIndex++
  } else {
    headIndex = 1;
    color = headCatalog[0];
  }

let headColor = color;

  let htmlHeadRender = `<p class="head js-head" style="  margin-bottom: 0px;
  padding-bottom: 0px;">
  <img class="headImage" style="margin-top: -10px;" src="pseudo-model/${headColor}Square.png">
</p>`;

  document.querySelector('.js-renderHead')
  .innerHTML = htmlHeadRender;

};

/////////////////////////////////

const headLeftCatalog = ['Green', 'red', 'blue'];
let headLeftIndex = 0;
let headLeftColor = '';

function UpdateHeadLeftElement() {
  if (headLeftIndex < headLeftCatalog.length) {
    headLeftColor = headLeftCatalog[headLeftIndex];
    headLeftIndex++
  } else {
    headLeftIndex = 1;
    headLeftColor = headLeftCatalog[0];
  }

let headColor = headLeftColor;

  let htmlHeadRender = `<p class="head js-head" style="  margin-top: 0px;
  padding-top: 0px;">
  <img class="headImage" src="pseudo-model/${headLeftColor}Square.png">
</p>`;

  document.querySelector('.js-renderHead')
  .innerHTML = htmlHeadRender;

};

//////////////////

const RightTorsoCatalog = ['red', 'Green', 'blue'];
let RightTorsoIndex = 0;
let RightTorsoColor = '';

function UpdateTorsoRightElement() {
  if (RightTorsoIndex < RightTorsoCatalog.length) {
    RightTorsoColor = RightTorsoCatalog[RightTorsoIndex];
    RightTorsoIndex++
  } else {
    RightTorsoIndex = 1;
    RightTorsoColor = RightTorsoCatalog[0];
  }

let torsoColor = RightTorsoColor;

  let htmlHeadRender = ` <p class="torso js-torso js-renderTorso" style="  margin-top: 0px;
  padding-top: 0px;">
  <img class="torsoImage" src="pseudo-model/${torsoColor}Square.png">
</p>`;

  document.querySelector('.js-renderTorso')
  .innerHTML = htmlHeadRender;

};

/////////////////////////////////

const RightJacketCatalog = ['red', 'blue', 'Green'];
let RightJacketIndex = 0;
let RightJacketColor = '';

function UpdateJacketRightElement() {
  if (RightJacketIndex < RightJacketCatalog.length) {
    RightJacketColor = RightJacketCatalog[RightJacketIndex];
    RightJacketIndex++
  } else {
    RightJacketIndex = 1;
    RightJacketColor = RightJacketCatalog[0];
  }

let JacketColor = RightJacketColor;

  let htmlHeadRender = ` <p class="jacket js-jacket js-renderJacket">
  <img class="jacketImage" src="pseudo-model/${JacketColor}Square.png">
</p>`;

  document.querySelector('.jacket')
  .innerHTML = htmlHeadRender;

};

/////////////////////////////////

const TorsoLeftCatalog = ['Green', 'red', 'blue'];
let TorsoLeftIndex = 0;
let TorsoLeftColor = '';

function UpdateTorsoLeftElement() {
  if (TorsoLeftIndex < TorsoLeftCatalog.length) {
    TorsoLeftColor = TorsoLeftCatalog[TorsoLeftIndex];
    TorsoLeftIndex++
  } else {
    TorsoLeftIndex = 1;
    TorsoLeftColor = TorsoLeftCatalog[0];
  }

let torsoColor = TorsoLeftColor;

  let htmlHeadRender = ` <p class="torso js-torso js-renderTorso" style="  margin-top: 0px;
  padding-top: 0px;">
  <img class="torsoImage" src="pseudo-model/${torsoColor}Square.png">
</p>`;

  document.querySelector('.js-renderTorso')
  .innerHTML = htmlHeadRender;

};

//////////////////

const LegsRightCatalog = ['red', 'Green', 'blue'];
let LegsRightIndex = 0;
let LegsRightColor = '';

function UpdateLegsRightElement() {
  if (LegsRightIndex < LegsRightCatalog.length) {
    LegsRightColor = LegsRightCatalog[LegsRightIndex];
    LegsRightIndex++
  } else {
    LegsRightIndex = 1;
    LegsRightColor = LegsRightCatalog[0];
  }

let legsColor = LegsRightColor;

  let htmlHeadRender = ` <p class="legs js-legs js-renderLegs" style="  margin-top: 0px;
  padding-top: 0px;">
  <img class="legsImage" src="pseudo-model/${legsColor}Square.png">
</p>`;

  document.querySelector('.js-renderLegs')
  .innerHTML = htmlHeadRender;

};

/////////////////////////////////

const LegsLeftCatalog = ['Green', 'red', 'blue'];
let LegsLeftIndex = 0;
let LegsLeftColor = '';

function UpdateLegsLeftElement() {
  if (LegsLeftIndex < LegsLeftCatalog.length) {
    LegsLeftColor = LegsLeftCatalog[LegsLeftIndex];
    LegsLeftIndex++
  } else {
    LegsLeftIndex = 1;
    LegsLeftColor = LegsLeftCatalog[0];
  }

let legsColor = LegsLeftColor;

  let htmlHeadRender = ` <p class="legs js-legs js-renderLegs" style="  margin-top: 0px;
  padding-top: 0px;">
  <img class="legsImage" src="pseudo-model/${legsColor}Square.png">
</p>`;

  document.querySelector('.js-renderLegs')
  .innerHTML = htmlHeadRender;

};

//////////////////

const FeetRightCatalog = ['red', 'Green', 'blue'];
let FeetRightIndex = 0;
let FeetRightColor = '';

function UpdateFeetRightElement() {
  if (FeetRightIndex < FeetRightCatalog.length) {
    FeetRightColor = FeetRightCatalog[FeetRightIndex];
    FeetRightIndex++
  } else {
    FeetRightIndex = 1;
    FeetRightColor = FeetRightCatalog[0];
  }

let FeetColor = FeetRightColor;

  let htmlHeadRender = ` <p class="foot js-foot js-renderFeet" style="  margin-top: 0px;
  padding-top: 0px;">
  <img class="footImage" src="pseudo-model/${FeetColor}Square.png">
</p>`;

  document.querySelector('.js-renderFeet')
  .innerHTML = htmlHeadRender;

};

/////////////////////////////////

const FeetLeftCatalog = ['Green', 'red', 'blue'];
let FeetLeftIndex = 0;
let FeetLeftColor = '';

function UpdateFeetLeftElement() {
  if (FeetLeftIndex < FeetLeftCatalog.length) {
    FeetLeftColor = FeetLeftCatalog[FeetLeftIndex];
    FeetLeftIndex++
  } else {
    FeetLeftIndex = 1;
    FeetLeftColor = FeetLeftCatalog[0];
  }

let FeetColor = FeetLeftColor;

  let htmlHeadRender = ` <p class="foot js-foot js-renderFeet" style="  margin-top: 0px;
  padding-top: 0px;">
  <img class="footImage" src="pseudo-model/${FeetColor}Square.png">
</p>`;

  document.querySelector('.js-renderFeet')
  .innerHTML = htmlHeadRender;

};
