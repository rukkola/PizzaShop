function som()
	{

		var x = window.localStorage.getItem('b');
		x = x * 1 + 1
		window.localStorage.setItem('b', x)
		alert(x);

	}

function add_to_cart(id)
	{	
		var key = 'product_' + id;

		var x = window.localStorage.getItem(key);
		x = x * 1 + 1;
		window.localStorage.setItem(key, x);
		alert('Yoy add pizza' + id);
	}