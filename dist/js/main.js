// Select DOM Items
const toggleBtn = document.querySelector('.toggle_btn');
const toggleIcon = document.querySelector('.toggle_btn i');
const dropDown = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  dropDown.classList.toggle('open');
  const isOpen = dropDown.classList.contains('open');

  toggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-header');
  
    accordions.forEach(accordion => {
      accordion.addEventListener('click', () => {
        // Close all accordions
        accordions.forEach(item => {
          const content = item.nextElementSibling;
          if (item !== accordion) {
            item.classList.remove('active');
            content.style.maxHeight = 0;
          }
        });
  
        // Toggle the clicked accordion
        accordion.classList.toggle('active');
        const content = accordion.nextElementSibling;
        if (accordion.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = 0;
        }
      });
    });
  });