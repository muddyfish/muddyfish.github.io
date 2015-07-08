window.addEvent("domready",function(){
	var readmeRequest = new Request({
		url:"https://github.com/cancerit/cgpPindel/blob/master/README.md",
    	onSuccess:function(response){
    		alert("Success");
    		var converter = new showdown.Converter(),
    		text = '#hello, markdown!',
    		html = converter.makeHtml(text);
			alert(html);
    	}
    }).send(); //Don't forget to send our request!
});


