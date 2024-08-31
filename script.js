const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', function() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('open');
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add('open');
    }
  });
});
