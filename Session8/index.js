const isArmStrong=()=>{
	let userInput=document.getElementById('input').value
	 let digits=userInput.split('').Map(digits=>parseInt(digit))
	 let digitCube=digits.map(digit=>math.pow(digit,3))
	 let sum=0
	 for (let digit of digitCube) {
	 sum+=digit
	 }
	 console.log(sum);
	 if(sum===userInput){
	 	alert('is armStrong')
	 }
	 else
	 	alert('not armStrong')

}
const onUserIn=(element)=>{
	element.value
	console.log("inputed something");
}