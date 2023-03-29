
fetch('results.JSON')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error));