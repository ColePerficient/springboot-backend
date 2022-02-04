window.onload = () => 
{
	getEmployees()
};

function getEmployees()
{
	$.ajax(
	{
  		url: "http://localhost:8080/api/employees",
    	type: 'GET',
    	dataType: 'json',
    	success: function(res) 
    	{
     		loadTableData(res);
      	},
   		error: function (xhr, ajaxOptions, thrownError) 
   		{
   			alert(xhr.status);
  			alert(thrownError);
  		}
 	});
}

function loadTableData(employeeData)
{
	const tableBody = document.getElementById('tableData');
	let dataHtml = '';
		
	for (let employee of employeeData)
	{
		dataHtml += `<tr><td>${employee.id}</td><td>${employee.email}</td><td>${employee.firstName}</td><td>${employee.lastName}</td></tr>`;
	}
	
	tableBody.innerHTML = dataHtml;
}