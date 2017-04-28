/*var a = prompt('wpisz wielkość podstawy a');
	h = prompt('wpisz wysokość h');
	triangle1Area = getTriangleArea(10, 15);
function getTriangleArea(a, h) {
	
	if ( (a <= 0) || (h <= 0) ) {
		alert('nieprawidłowe dane');
	
}	else {
		triangle1Area = a*h/2;
		alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangle1Area)
			console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangle1Area);

		return (triangle1Area)
			
	}
		
} 
console.log( getTriangleArea(10,6) )
console.log( getTriangleArea(11,6) )
console.log( getTriangleArea(18,8) )
*/


// nie do końca rozumiem zadanie, ma być wersja zakomentowana czy ta odkomentowana? a moze ma być połączone? :)



var a = prompt('wpisz wielkość podstawy a');
	h = prompt('wpisz wysokość h');
	triangle1Area = getTriangleArea(a, h);

function getTriangleArea(a, h) {
	
	if ( (a <= 0) || (h <= 0) ) {
		alert('nieprawidłowe dane');
	
}	else {
		triangle1Area = a*h/2;
		alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangle1Area)
			console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangle1Area);

		return (triangle1Area)
			
	}
		
} 