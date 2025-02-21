
function searchCustomer() {
    let id = document.getElementById("txtId").value.trim();
    fetch(`http://localhost:8080/customer/search-by-id/${encodeURIComponent(id)}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById("txtName").value = data.name;
            document.getElementById("txtAddress").value = data.address; 
            document.getElementById("txtSalary").value = data.salary; 
        })
    
}

function deleteCustomer(){
    let id = document.getElementById("txtId").value.trim();
    fetch(`http://localhost:8080/customer/delete/${encodeURIComponent(id)}`, {
        method: 'DELETE' // Specify the DELETE method
    })
    .then(data => {
        console.log("Customer deleted:", data);
        document.getElementById("txtId").value = '';
        document.getElementById("txtName").value = '';
        document.getElementById("txtAddress").value = '';
        document.getElementById("txtSalary").value = '';
    })
}