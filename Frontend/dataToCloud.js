let name = document.getElementById('fname');
let email = document.getElementById('email1');
let number = document.getElementById('phone');

window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:3000/admin/getUsers')
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                console.log(res.data[i]);
                showUserOnScreen(res.data[i]);
            }
        })
        .catch((err) => {
            console.log(err);
        });
})

function saveToDatabase() {
    const userDetails = {
        name: name.value,
        email: email.value,
        number: number.value,
    }
    axios.post('http://localhost:3000/add-user', userDetails)
        .then((res) => {
            console.log(res);
            showUserOnScreen(res.data);
            location.reload();
        })
        .catch((err) => {
            alert(err);
        })
}

function deleteDetails(dataId) {
    axios.delete(`http://localhost:3000/admin/deleteUser/${dataId}`)
        .then((res) => {
            alert('Deleted From Database');
        })
        .catch((err) => {
            alert('something went wrong');
            console.log('error in deleteDetails function')
        });
}

function addToInputAndUpdate(data) {
    name.value = data.name;
    email.value = data.email;
    number.value = data.number;

    deleteDetails(data.id);
}

function showUserOnScreen(data) {
    let ul = document.createElement('ul');
    let body = document.querySelector('.bg-img');
    let li = document.createElement('li');
    li.className = 'list-group-item';

    let details = document.createTextNode(`${data.name} - ${data.email} - ${data.number}`);
    console.log(details);
    li.appendChild(details);
    ul.appendChild(li);
    body.appendChild(ul);

    //adding delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    let delBtnName = document.createTextNode('delete');
    deleteBtn.appendChild(delBtnName);
    li.appendChild(deleteBtn);

    //adding edit button
    let editBtn = document.createElement('button');
    editBtn.classList = 'btn btn-success btn-sm float-right delete'
    let editBtnName = document.createTextNode('edit');
    editBtn.appendChild(editBtnName);
    li.appendChild(editBtn);

    // event for delete button
    deleteBtn.addEventListener('click', () => deleteDetails(data.id));
    deleteBtn.addEventListener('click', deleteFromScreen)

    // event for edit button
    editBtn.addEventListener('click', () => addToInputAndUpdate(data));
    editBtn.addEventListener('click', deleteFromScreen);


    function deleteFromScreen() {
        ul.remove(li);
    }

}

