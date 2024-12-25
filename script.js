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

 // Accordion funksiyasi
 const accordionBlocks = document.querySelectorAll('.accordion-block');

 accordionBlocks.forEach(block => {
   const title = block.querySelector('.accordion-title');

   title.addEventListener('click', () => {
     // Boshqalarni yopish
     accordionBlocks.forEach(item => {
       if (item !== block) item.classList.remove('is-active');
     });

     // Joriy accordionni ochish/yopish
     block.classList.toggle('is-active');
   });
 });