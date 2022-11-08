function expandStats(event) {
  console.log(event.target)
  if (event.target.parentElement.id === 'btn-attempts') {
      Array.from(document.querySelectorAll('.attempts')).forEach(el => el.classList.toggle('show'))
      changeChevron(event.target.className, 'btn-attempts')
    }

  else if (event.target.parentElement.id === 'btn-possession') {
    Array.from(document.querySelectorAll('.possession')).forEach(el => el.classList.toggle('show'));
    changeChevron(event.target.className, 'btn-possession')
  }

  else if (event.target.parentElement.id === 'btn-crosses') {
    Array.from(document.querySelectorAll('.crosses')).forEach(el => el.classList.toggle('show'));
    changeChevron(event.target.className, 'btn-crosses')
  }

  else if (event.target.parentElement.id === 'btn-corners') {
    Array.from(document.querySelectorAll('.corners')).forEach(el => el.classList.toggle('show'));
    changeChevron(event.target.className, 'btn-corners')
  }

  else if (event.target.parentElement.id === 'btn-cards') {
    Array.from(document.querySelectorAll('.cards')).forEach(el => el.classList.toggle('show'));
    changeChevron(event.target.className, 'btn-cards')
  }
}


const changeChevron = (e, idea) => {
  document.querySelector(`#${idea}`).innerHTML = '';
  if(e === 'fa-solid fa-chevron-down') {
    renderChevronUp(idea);
  } else {
    renderChevronDown(idea);
  }
}

const renderChevronUp = (idea) => {
  const chev = `
  <i class="fa-solid fa-chevron-up" ></i>
  `
  document.querySelector(`#${idea}`).insertAdjacentHTML('beforeend', chev)
}

const renderChevronDown = (idea) => {
  const chev = `
  <i class="fa-solid fa-chevron-down" ></i>
  `
  document.querySelector(`#${idea}`).insertAdjacentHTML("beforeend", chev)
}


/* 
Initialisation Function
*/

function init() {
  const arr = Array.from(document.querySelectorAll('#btn-attempts, #btn-possession, #btn-crosses, #btn-corners, #btn-cards'));
  arr.forEach(cur => cur.addEventListener('click', expandStats))
}

init();











