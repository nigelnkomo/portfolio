document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[data-page]');

  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetPage = this.getAttribute('data-page');
      document.getElementById('viewer').src = targetPage;
    });
  });
});
