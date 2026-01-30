function getFormvalue() {
    //Write your code here

	let first=document.getElementByTagName('input')[0]
	let last=document.getElementByTagName('input')[1]
	// let form=document.getElementById('form1')

	let fullName =`${first.value} ${last.value}`

	alert(fullName)	;

	document.getElementById('form1').addEventListener('submit', getFormvalue)

	
}
