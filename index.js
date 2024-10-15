

  document.getElementById('item-5').addEventListener('click', () => {
    window.location.href = "booking.html"; 
  });

  document.getElementById('read').addEventListener('click', () => {
    window.location.href = "about.html"; 
  });
  
  function toggleMenu() {
    const navItems = document.querySelector('.nav');
    navItems.classList.toggle('active');
}