const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');
const items = document.getElementById('list');

axios.get('https://crudcrud.com/api/601df07f5af24178a6eeb2b7404a9d7e/mydata')
  .then(res => {
    for (let ele of res.data) {
      const li = document.createElement('li');
      const p = document.createElement('p');
      const del = document.createElement('button');
      const edit = document.createElement('button');

      p.appendChild(document.createTextNode(ele.email));

      del.appendChild(document.createTextNode('delete'));
      del.className = "delete";

      edit.appendChild(document.createTextNode('edit'));
      edit.className = "edit";

      li.appendChild(document.createTextNode(ele.name));
      li.appendChild(p);
      li.appendChild(del);
      li.appendChild(edit);

      li.className = "item";

      items.appendChild(li);

    }
  })
  .catch(err => console.log(err))

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    name: name.value,
    email: email.value
  }

  // has already registered
  axios.get('https://crudcrud.com/api/601df07f5af24178a6eeb2b7404a9d7e/mydata')
    .then(res => {
      for (let ele of res.data) {
        if (email.value === ele.email) {
          alert("email is already registered!");
          return;
        }
      }
    })
    .catch(err => console.log(err))

  // putting data into axios
  axios.post('https://crudcrud.com/api/601df07f5af24178a6eeb2b7404a9d7e/mydata', obj)
    .then(res => console.log(res))
    .catch(err => console.log(err))

  // putting data on the screen
  const li = document.createElement('li');
  const p = document.createElement('p');

  const del = document.createElement('button');
  const edit = document.createElement('button');

  p.appendChild(document.createTextNode(email.value));

  del.appendChild(document.createTextNode('delete'));
  del.className = "delete";

  edit.appendChild(document.createTextNode('edit'));
  edit.className = "edit";

  li.appendChild(document.createTextNode(name.value));
  li.appendChild(p);
  li.appendChild(del);
  li.appendChild(edit);

  li.className = "item";

  items.appendChild(li);
})

// delete button
items.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {

      // targetting particular list
      var li = e.target.parentElement;
      items.removeChild(li);

      //variable storing target ID
      let ID;
      axios.get('https://crudcrud.com/api/601df07f5af24178a6eeb2b7404a9d7e/mydata')
        .then(res => {
          for (let ele of res.data) {
            if (ele.email === li.firstElementChild.innerText) {
              ID = ele._id;
              // removing from axios
              axios.delete(`https://crudcrud.com/api/601df07f5af24178a6eeb2b7404a9d7e/mydata/${ID}`)
              .then(res => console.log(res))
              .catch(err => console.log(err))
            }
          }
        })
        .catch(err => console.log(err))
    }
  }
});

// edit button
items.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;

      //variable storing target ID
      let ID;
      axios.get('https://crudcrud.com/api/601df07f5af24178a6eeb2b7404a9d7e/mydata')
        .then(res => {
          for (let ele of res.data) {
            if (ele.email === li.firstElementChild.innerText) {
              ID = ele._id;
              // removing from axios
              axios.delete(`https://crudcrud.com/api/601df07f5af24178a6eeb2b7404a9d7e/mydata/${ID}`)
              .then(res => console.log(res))
              .catch(err => console.log(err))
            }
          }
        })
        .catch(err => console.log(err))

      // putting data in fields
      name.value = data.name;
      email.value = data.email;

      items.removeChild(li);
    }
  }
});
