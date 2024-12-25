// Accordion funksiyasi
const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    // Boshqalarni yopish
    accordions.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    // Joriy accordionni ochish/yopish
    item.classList.toggle('active');
  });
});