function check() {
  $.getJSON('https://api.ipregistry.co/?key=r60pabe6t9t859&pretty=true', function(data) {
    var hide = document.createElement('button');
    hide.id='hideinfo'
    hide.innerHTML = 'Hide Info';
    hide.title = 'Hide text on the screen for screen sharing.'
    document.body.appendChild(hide)
    hide.addEventListener("click", hideinfo);
    var show = document.createElement('button');
    show.id='showinfo'
    show.innerHTML = 'Show Info';
    show.title = 'Make your info come back.'
    document.body.appendChild(show)
    show.addEventListener("click", showinfo);
    var basics = document.createElement('h1');
    basics.innerHTML = 'Basic Info';
    basics.id='header1'
    basics.title = 'basic'
    document.body.appendChild(basics);
    var ip = document.createElement('p');
    ip.innerHTML = 'IP: ' + data.ip;
    ip.id='ip'
    ip.title = 'ip'
    document.body.appendChild(ip);
    var type = document.createElement('p');
    type.id = 'type'
    type.title = 'type'
    type.innerHTML = 'TYPE: ' + data.type;
    document.body.appendChild(type);
    if(data.hostname !== null) {
         var hostname = document.createElement('p');
         hostname.innerHTML = 'HOSTNAME: ' + data.hostname;
         document.body.appendChild(hostname);
    } else {
         var hostname = document.createElement('p');
         hostname.innerHTML = 'Hostname unknown.';
         document.body.appendChild(hostname);
    }
    hostname.title = 'hostname'
    hostname.id = 'hostname';
    setTimeout(function(){
        hostname.style.color = 'red';
        hostname.style.textDecoration = 'underline'
    }, 100)
    document.getElementById('title').remove()
    document.getElementById('check').remove();
  });
}

function hideinfo() {
    var elementid = prompt('What would you like to hide?', 'ip')
    var elem = document.getElementById(elementid);
    if(elem === null || elementid === "hideinfo" || elementid === "showinfo") {
        alert('Failed to find info.')
    } else {
        elem.style.display = 'none'
    }
}

function showinfo() {
    var elementid = prompt('What would you like to show?', 'ip')
    var elem = document.getElementById(elementid);
    if(elem === null || elementid === "hideinfo" || elementid === "showinfo") {
        alert('Failed to find info.')
    } else {
        elem.style.display = 'block'
}
}
