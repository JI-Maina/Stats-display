function expandStats(event) {
  if (event.target.parentElement.id === 'btn-attempts') {
    Array.from(document.querySelectorAll('.attempts')).forEach(el => el.classList.toggle('show'))
  }

  else if (event.target.parentElement.id === 'btn-possession') {
    Array.from(document.querySelectorAll('.possession')).forEach(el => el.classList.toggle('show'));
  }

  else if (event.target.parentElement.id === 'btn-crosses') {
    Array.from(document.querySelectorAll('.crosses')).forEach(el => el.classList.toggle('show'));
  }

  else if (event.target.parentElement.id === 'btn-corners') {
    Array.from(document.querySelectorAll('.corners')).forEach(el => el.classList.toggle('show'));
  }
}




function init() {
  const arr = Array.from(document.querySelectorAll('.fa-chevron-down'));
  
  arr.forEach(cur => cur.addEventListener('click', expandStats))
}

init();








// switch (event.target.parentElement.id) {
//   case 'btn-attempts':
    
//   case 'btn-possession':
//     return

//   case 'btn-crosses':
//     return

//   case 'btn-corners' :
//     return 
// }









