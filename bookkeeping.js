function submit_bookkeeping(){
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbxKDJW3X5lYaVQfzTwe9zjj71M0B83RIVp-uB1GXP518Vfqlm-A/exec",
		data:{
			"date":3,
			"kind":"早餐",
			"spend":"50",
			"description":"三明治"
		},
		success:function(response){
			if (response == "bookkeeping success"){
				alert("成功");
			}
		},
	});
}


function XMLHttpRequest_event(url){
    var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			alert("成功");
		}
		else if (this.status != 200 && this.status != 0){
			
        }
        else if (this.readyState == 4 && this.response.length==0){
            
        }
	};
	xhr.open('get', url);
	xhr.send();
}
