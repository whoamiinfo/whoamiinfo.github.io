function check() {
  $.getJSON('https://api.ipregistry.co/?key=r60pabe6t9t859&pretty=true', function(data) {
    var hide = document.createElement('button');
    hide.onclick = 'hide()'
    hide.id='hideinfo'
    hide.innerHTML = 'Hide Info';
    document.body.appendChild(hide)
    var basics = document.createElement('h1');
    basics.innerHTML = 'Basic Info';
    basics.id='header1'
    document.body.appendChild(basics);
    var ip = document.createElement('p');
    ip.innerHTML = 'IP: ' + data.ip;
    ip.id='ip'
    document.body.appendChild(ip);
    var type = document.createElement('p');
    type.id = 'type'
    type.innerHTML = 'TYPE: ' + data.type;
    document.body.appendChild(type);
    if(data.hostname !== null) {
         var hostname = document.createElement('p');
         hostname.innerHTML = 'HOSTNAME: ' + data.hostname;
         document.body.appendChild(hostname);
    } else {
         var hostname = document.createElement('p');
         hostname.innerHTML = 'Hostanme unknown.';
         document.body.appendChild(hostname);
    }
    document.getElementById('title').remove()
    document.getElementById('check').remove()
  });
}
