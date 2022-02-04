function deleteEmployee() 
{
	var tid = document.getElementById("ID").value;
	
	let employeeData = 
	{
		id: tid
	};
	doDelete(employeeData);
	getEmployees();
}

function doDelete(employeeData)
{
	$.ajax(
	{
		url: `http://localhost:8080/api/employees/${employeeData.id}`,
    	type: 'DELETE',
    	dataType: 'json',
    	data: JSON.stringify(employeeData),
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