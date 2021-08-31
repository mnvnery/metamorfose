document.querySelector("#english").addEventListener("click", english);
document.querySelector("#portuguese").addEventListener("click", portuguese);


function portuguese(){
	var en = document.querySelectorAll('.en');
	var pt = document.querySelectorAll('.pt');

	for(var i=0; i< en.length; i++){
		en[i].classList.add('disable');
	}

	for(var j=0; j< pt.length; j++){
		pt[j].classList.remove('disable');
	}

}

function english(){
	var en = document.querySelectorAll('.en');
	var pt = document.querySelectorAll('.pt');

	for(var i=0; i< en.length; i++){
		en[i].classList.remove('disable');
	}

	for(var j=0; j< pt.length; j++){
		pt[j].classList.add('disable');
	}
}
