import "./_vars";
import "./functions/webp";
import intlTelInput from  './vendor/intlTelInput';
import utils from './vendor/utils';

const input = document.querySelector("#phone");
intlTelInput(input, {
  utilsScript: utils,
  separateDialCode: true,
});
