function addCustomer() {
    let name = document.getElementById("txtName").value.trim();
    let address = document.getElementById("txtAddress").value.trim();
    let salary = document.getElementById("txtSalary").value.trim();

    if (!name || !address || !salary) {
        alert("Please fill all fields before submitting.");
        return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        name: name,
        address: address,
        salary: salary
    });

    fetch("http://localhost:8080/customer/add", {
        method: "POST",
        headers: myHeaders,
        body: raw
    })
    .then(result => {
        console.log(result);
        alert("Customer added successfully!");

        document.getElementById("txtName").value = "";
        document.getElementById("txtAddress").value = "";
        document.getElementById("txtSalary").value = "";

    })
    .catch(error => {
        console.error("Error:", error);
        alert("Failed to add customer. Check console for details.");
    });
}
