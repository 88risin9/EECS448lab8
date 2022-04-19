document.addEventListener('DOMContentLoaded', () => {
	main();
});

function main(){
	let validate = document.getElementById('validate');
	
	validate.addEventListener('click', () => {
		
		let inputPassword = document.getElementById('inputPassword');
		let validatePassword = document.getElementById('validatePassword');

		if(inputPassword.value.length < 8 ){
			alert("error!The passwords are not at least 8 characters long ");
      return 0;
		}
		
		if(validatePassword.value!=inputPassword.value){
			alert("error!The passwords entered don't match ");
		}
		else{
			alert("Validated!");
		}
		
	});
}