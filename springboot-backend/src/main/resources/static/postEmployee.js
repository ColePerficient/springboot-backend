function postEmployee() 
{
	var fn = document.forms["newEmployee"]["firstName"].value.trim();
	var ln = document.forms["newEmployee"]["lastName"].value.trim();
	var em = document.forms["newEmployee"]["email"].value.trim();
	
	if (stringCheck(fn) && stringCheck(ln) && stringCheck(em))
	{
		let employeeData = 
		{
			first_name: fn, 
			last_name: ln, 
			email: em
		};
		doPost(employeeData);
	}
}

function stringCheck(str)
{
	return (str != null & str.length != 0);
}

function doPost(employeeData)
{
	$.ajax(
	{
		headers: 
		{ 
        	'Accept': 'application/json',
        	'Content-Type': 'application/json' 
    	},
    	'type': 'POST',
    	'url': "http://localhost:8080/api/employees",
    	'data': JSON.stringify(employeeData),
    	'success': function(res)
    	{
			window.location.href = "index.html";
        },
        error: function (xhr, ajaxOptions, thrownError) 
   		{
   			alert(xhr.status + " " + ajaxOptions + " " + thrownError);
  		}
 	});
}