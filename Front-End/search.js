loadCustomer();
function loadCustomer() {
    let name = document.getElementById("txtName").value.trim();

    fetch(`http://localhost:8080/customer/search-by-address/${encodeURIComponent(name)}`)
    .then(res => res.json())
// }catch (error) {
//         console.error('Fetch error (name):', error);
//         alert(error.message);
//     }
//     try{ fetch(`http://localhost:8080/customer/search-by-salary/${encodeURIComponent(name)}`)}catch (error) {
//         console.error('Fetch error (name):', error);
//         alert(error.message);
//     }
//     try{fetch(`http://localhost:8080/customer/search-by-name/${encodeURIComponent(name)}`)}catch (error) {
//         console.error('Fetch error (name):', error);
//         alert(error.message);
//     }
    
            let tableRow = `
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Salary</th>
                </tr>
        `;

            data.forEach(customer => {
                tableRow += `    
                <tr>
                    <td>${customer.id}</td>
                    <td>${customer.name}</td>
                    <td>${customer.address}</td>
                    <td>${customer.salary}</td>
                </tr>
            `;
            });


            tblCustomer.innerHTML = tableRow;
        
}