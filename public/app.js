function som()
	{

		var x = window.localStorage.getItem('b');
		x = x * 1 + 1
		window.localStorage.setItem('b', x)
		alert(x);

	}