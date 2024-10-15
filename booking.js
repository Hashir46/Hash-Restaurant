document.getElementById('bookBtn').addEventListener('click', function(event) {
  
  event.preventDefault();

  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const dateTime = document.getElementById('date-time').value;
  const people = document.getElementById('people').value;
  const special = document.getElementById('special').value;

  if (!name || !email || !number || !dateTime || !people || !special) {
      alert('Please fill in all required fields.');
  } else {

      alert('Booking successful!');

  }
});