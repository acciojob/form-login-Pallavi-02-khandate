function getFormvalue() {
    //Write your code here

	let first=document.getElementByTagName('input')[0]
	let last=document.getElementByTagName('input')[1]
	let btn=document.getElementById('input')[2]

	let fullName =`${first.value} ${last.value}`

		

	btn.addEventListener("click", function(){
		
		alert(fullName)
	})

	
}
