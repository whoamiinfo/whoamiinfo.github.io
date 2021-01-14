function check() {
  $.getJSON('https://api.ipregistry.co/?key=r60pabe6t9t859&pretty=true', function(data) {
    var basics = document.createElement('h1');
    basics.innerHTML = 'Basic Info';
    document.body.appendChild(basics);
    var ip = document.createElement('p');
    ip.innerHTML = 'IP: ' + data.ip;
    document.body.appendChild(ip);
    var type = document.createElement('p');
    type.innerHTML = 'TYPE: ' + data.type;
    document.body.appendChild(type);
    var hostname = document.createElement('p');
    hostname.innerHTML = 'HOSTNAME: ' + data.hostname;
    document.body.appendChild(hostname);
    document.getElementById('title').remove()
    document.getElementById('check').remove()
  });
}
