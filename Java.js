let f = document.querySelector('.top-form');

const fff = function(evt) {
	let a = 'color-' + evt.target.value;
	document.querySelector('main').classList.remove('color-white');
	document.querySelector('main').classList.remove('color-black');
	document.querySelector('main').classList.remove('color-rgb');
	document.querySelector('main').classList.add(a);
};

addEventListener('change', fff);






			<form class="top-form">
			<input type="radio" value="white" name="tema" checked="checked"/>Светлая
			<input type="radio" value="black" name="tema"/>Тёмная
			<input type="radio" value="rgb" name="tema"/>Авторская
			</form>
			
			
			
			
			
			
			
			.top-form {
	background-color: #222222;
}

.color-white {
	background-color: black;
	color: black;
}

.color-black {
	background-color: black;
	color: black;
}


.color-rgb {
	background-color: green;
	color: #000000;
}