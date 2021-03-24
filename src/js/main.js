import "./_vars";
import "./functions/webp";
import intlTelInput from 'intl-tel-input';


const select = document.querySelector('.form__select'),
      selectBody = document.querySelector('.form__select-body'),
      selectOptions = document.querySelectorAll('.form__list-item'),
      header = document.querySelector('.form__select-header');

select.addEventListener('click', () => {
  selectBody.classList.toggle('form__select-body_active');
  header.classList.toggle('form__select-header_active');
});

selectOptions.forEach(item => {
  item.addEventListener('click', (e) => {
    header.textContent = e.target.textContent;
  });
});

const input = document.querySelector("#phone");
intlTelInput(input, {
  // any initialisation options go here
});
