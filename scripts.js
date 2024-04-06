document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var client = {
        name: name,
        email: email,
        phone: phone,
        selected: false
    };

    var clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));

    clearClientForm();
    displayClientList();
});

function displayClientList() {
    var clients = JSON.parse(localStorage.getItem('clients')) || [];
    var tableBody = document.getElementById('clientList');
    tableBody.innerHTML = '';

    clients.forEach(function(client, index) {
        var row = tableBody.insertRow();
        row.innerHTML = `
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td><input type="checkbox" onchange="toggleClientSelect(${index}, this)" ${client.selected ? 'checked' : ''}></td>
            <td>
                <button onclick="editClient(${index})">Edit</button>
                <button onclick="deleteClient(${index})">Delete</button>
            </td>
        `;
    });
}

function clearClientForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function toggleClientSelect(index, checkbox) {
    var clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients[index].selected = checkbox.checked;
    localStorage.setItem('clients', JSON.stringify(clients));
}

function editClient(index) {
    var clients = JSON.parse(localStorage.getItem('clients')) || [];
    var client = clients[index];

    document.getElementById('name').value = client.name;
    document.getElementById('email').value = client.email;
    document.getElementById('phone').value = client.phone;

    clients.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(clients));

    displayClientList();
}

function deleteClient(index) {
    var clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.splice(index, 1);
    localStorage.setItem('clients', JSON.stringify(clients));
    displayClientList();
}

// Property Management

document.getElementById('propertyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var address = document.getElementById('address').value;
    var type = document.getElementById('type').value;
    var price = document.getElementById('price').value;

    var property = {
        address: address,
        type: type,
        price: price,
        selected: false
    };

    var properties = JSON.parse(localStorage.getItem('properties')) || [];
    properties.push(property);
    localStorage.setItem('properties', JSON.stringify(properties));

    clearPropertyForm();
    displayPropertyList();
});

function displayPropertyList() {
    var properties = JSON.parse(localStorage.getItem('properties')) || [];
    var tableBody = document.getElementById('propertyList');
    tableBody.innerHTML = '';

    properties.forEach(function(property, index) {
        var row = tableBody.insertRow();
        row.innerHTML = `
            <td>${property.address}</td>
            <td>${property.type}</td>
            <td>${property.price}</td>
            <td><input type="checkbox" onchange="togglePropertySelect(${index}, this)" ${property.selected ? 'checked' : ''}></td>
            <td>
                <button onclick="editProperty(${index})">Edit</button>
                <button onclick="deleteProperty(${index})">Delete</button>
            </td>
        `;
    });
}

function clearPropertyForm() {
    document.getElementById('address').value = '';
    document.getElementById('type').value = '';
    document.getElementById('price').value = '';
}

function togglePropertySelect(index, checkbox) {
    var properties = JSON.parse(localStorage.getItem('properties')) || [];
    properties[index].selected = checkbox.checked;
    localStorage.setItem('properties', JSON.stringify(properties));
}

function editProperty(index) {
    var properties = JSON.parse(localStorage.getItem('properties')) || [];
    var property = properties[index];

    document.getElementById('address').value = property.address;
    document.getElementById('type').value = property.type;
    document.getElementById('price').value = property.price;

    properties.splice(index, 1);
    localStorage.setItem('properties', JSON.stringify(properties));

    displayPropertyList();
}

function deleteProperty(index) {
    var properties = JSON.parse(localStorage.getItem('properties')) || [];
    properties.splice(index, 1);
    localStorage.setItem('properties', JSON.stringify(properties));
    displayPropertyList();
}

document.getElementById('agreementForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var buyer = document.getElementById('buyer').value;
    var property = document.getElementById('property').value;
    var price = document.getElementById('price1').value;

    var agreement = {
        buyer: buyer,
        property: property,
        price: price,
        selected: false
    };

    var agreements = JSON.parse(localStorage.getItem('agreements')) || [];
    agreements.push(agreement);
    localStorage.setItem('agreements', JSON.stringify(agreements));

    clearAgreementForm();
    displayAgreementList();
});

function displayAgreementList() {
    var agreements = JSON.parse(localStorage.getItem('agreements')) || [];
    var tableBody = document.getElementById('agreementList');
    tableBody.innerHTML = '';

    agreements.forEach(function(agreement, index) {
        var row = tableBody.insertRow();
        row.innerHTML = `
            <td>${agreement.buyer}</td>
            <td>${agreement.property}</td>
            <td>${agreement.price}</td>
            <td><input type="checkbox" onchange="toggleAgreementSelect(${index}, this)" ${agreement.selected ? 'checked' : ''}></td>
            <td>
                <button onclick="editAgreement(${index})">Edit</button>
                <button onclick="deleteAgreement(${index})">Delete</button>
            </td>
        `;
    });
}

function clearAgreementForm() {
    document.getElementById('buyer').value = '';
    document.getElementById('property').value = '';
    document.getElementById('price').value = '';
}

function deleteAgreement(index) {
    var agreements = JSON.parse(localStorage.getItem('agreements')) || [];
    agreements.splice(index, 1);
    localStorage.setItem('agreements', JSON.stringify(agreements));
    displayAgreementList();
}

function deleteSelectedAgreements() {
    var agreements = JSON.parse(localStorage.getItem('agreements')) || [];
    agreements = agreements.filter(agreement => !agreement.selected);
    localStorage.setItem('agreements', JSON.stringify(agreements));
    displayAgreementList();
}

// Initial display of client, property, and agreement lists
displayClientList();
displayPropertyList();
displayAgreementList();