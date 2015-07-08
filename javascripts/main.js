var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/repos/cancerit/cgpPindel/readme?ref=master');
xhr.setRequestHeader("Accept", "application/vnd.github.3.html");
xhr.setRequestHeader("User-Agent", "CancerIT")
xhr.send();

xhr.onload = function(e){
    $('#content').replaceWith(xhr.response);
}