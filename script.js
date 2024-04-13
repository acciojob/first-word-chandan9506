function firstWord(s1) {
  // your code here
	let s = s1.trim() ;
	if (s=="") {
		return s;
	}
	else if(s != ""){
		
		let str="";
		
		for (let t of s) {
			
			str += t;
			if (t == " ") {
				break;
			}
		}
		return str;
		
	}
	
}

// Do not change the code below

const s1 = prompt("Enter String:");
alert(firstWord(s1));

