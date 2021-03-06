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
		//alert('Items in your cart: ' + cart_get_number());
		update_orders_input();
		update_orders_button();
	}

function update_orders_input()
{
	var orders = cart_get_orders()
	$('#orders_input').val(orders); // #обращаемся по id, если .то атрибут клас // синтаксис jqwery
}

function update_orders_button()
{
	var text = 'Cart (' + cart_get_number() + ')';
	$('#orders_button').val(text); // установка текста
}

function cart_get_number()
{	
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);
		
		if(key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1;
		}
	}
	return cnt;
}

function cart_get_orders()
{	
	var orders = '';

	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);
		var value = window.localStorage.getItem(key);
		
		if(key.indexOf('product_') == 0)
		{
			orders = orders + key + '=' + value + ',';
		}
	}
	return orders;
}

function cancel_order()
{
	window.localStorage.clear();

	update_orders_input();
	update_orders_button();

	$('#cart').text('Your cart is now empty');

	return false;
}