angular.module("listaTelefonica").filter("upper", function(){
	return function(input){
		if (!input){
			return;
		}

		return input.toUpperCase();
	};
});