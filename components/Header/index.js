// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const header = document.querySelector('.header-container')

function Header() {

const mainHead = document.createElement('div')
const sDate = document.createElement('span')
const titleMain = document.createElement('h1')
const sTemp = document.createElement('span')


mainHead.classList.add('header')
sDate.classList.add('date')
sTemp.classList.add('temp')


sDate.textContent = 'March 28, 2019';
titleMain.textContent = 'Lambda Times';
sTemp.textContent = '98°';


mainHead.appendChild(sDate)
mainHead.appendChild(titleMain)
mainHead.appendChild(sTemp)


return mainHead

}

header.append(Header())
