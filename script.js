//const api_url = "<heroku_app_url>"
const api_url = "https://flaskcharlie.herokuapp.com/users"

function loadData(records = []) {
	var table_data = "";
	for(let i=0; i<records.length; i++) {
		table_data += `<tr>`;
		table_data += `<td>${records[i].place}</td>`;
		table_data += `<td>${records[i].city}</td>`;
		table_data += `<td>${records[i].duration}</td>`;
		table_data += `<td>${records[i].traveling_by}</td>`;
		table_data += `<td>${records[i].price}</td>`;

		table_data += `<td>`;
		table_data += `<a href="edit.html?id=${records[i].id}"><button class="btn btn-primary">Edit</button></a>`;
		table_data += '&nbsp;&nbsp;';
		table_data += `<button class="btn btn-danger" onclick=deleteData('${records[i].id}')>Delete</button>`;
		table_data += `</td>`;
		table_data += `</tr>`;
	}
	//console.log(table_data);
	document.getElementById("tbody").innerHTML = table_data;
}

function getData() {
	fetch(api_url)
	.then((response) => response.json())
	.then((data) => { 
		console.table(data); 
		loadData(data);
	});
}

