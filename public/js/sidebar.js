function closebar(id) {
    document.getElementById('sidebar').classList.add('hidden')
    document.getElementById('openbutton').classList.remove('hidden')
    document.getElementById('closebutton').classList.add('hidden')
    ocument.getElementById('feed').classList.add('left')
  }
  function closeright(id) {
    document.getElementById(id).style.width = 0;
    
    document.getElementsById("main").style.marginRight=0;
  }

  function openbar(id) {
    document.getElementById('sidebar').classList.remove('hidden')
    document.getElementById('openbutton').classList.add('hidden')
    document.getElementById('closebutton').classList.remove('hidden')
    document.getElementById('feed').classList.remove('left')
  }