fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const names = data.map(user => user.name);
    console.log('Daftar nama:');
    names.forEach(name => console.log(name));
  })
  .catch(error => {
    console.log('Error:', error);
  });
