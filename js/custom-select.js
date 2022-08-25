const defaultSelect = () => {
  const element = document.querySelector('.default');
  const choices = new Choices(element, {
    // searchEnabled: false,
    noResultsText: 'Ничего не найдено'
  });

  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choises').setAttribute('aria-label', ariaLabel);
};

defaultSelect();

