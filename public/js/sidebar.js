function closebar(id) {
    document.getElementById('navmenu').classList.add('hidden')
    document.getElementById('openbutton').classList.remove('hidden')
    document.getElementById('closebutton').classList.add('hidden')
    
  }
  function closeright(id) {
    document.getElementById(id).style.width = 0;
    
    document.getElementsById("main").style.marginRight=0;
  }

  function openbar(id) {
    document.getElementById('navmenu').classList.remove('hidden')
    document.getElementById('openbutton').classList.add('hidden')
    document.getElementById('closebutton').classList.remove('hidden')
   
  }

function showElement() {
    element = document.querySelector('.navitem');
    element.style.visibility = 'visible';
}

function hideElement() {
    element = document.querySelector('.navitem');
    element.style.visibility = 'hidden';
}