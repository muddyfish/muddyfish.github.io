var current_project = location.pathname.split("/")[1];
var corsproxy = "http://crossorigin.me/";
var github_url = "https://github.com/cancerit/".concat(current_project, "/raw/master/README.md");
var final_url = corsproxy.concat(github_url);
$.get(final_url)
    .success(function (response) {
	    var converter = new showdown.Converter(),
		html = converter.makeHtml(response);
	    $("#content").html(html);
	})
    .error(function () {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', 'https://api.github.com/repos/cancerit/'.concat(current_project, '/readme?ref=master'));
	    xhr.setRequestHeader("Accept", "application/vnd.github.3.html");
	    xhr.setRequestHeader("User-Agent", "CancerIT")
		xhr.send();

	    xhr.onload = function(e){
		$('#content').replaceWith(xhr.response);
	    }
	});
