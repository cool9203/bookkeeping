


function XMLHttpRequest_event(url, data_name){
    show = get_show_function(data_name);
    var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			
		}
		else if (this.status != 200 && this.status != 0){
			
        }
        else if (this.readyState == 4 && this.response.length==0){
            
        }
	};
	xhr.open('get', url);
	xhr.send();
}
