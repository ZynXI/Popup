document.write("<head>\r\n    \r\n    <link rel=\"stylesheet\" href=\"https:\/\/cdn.jsdelivr.net\/gh\/ZynXI\/Popup@main\/Popup.css\">\r\n    <link rel=\"stylesheet\" href=\"https:\/\/sibforms.com\/forms\/end-form\/build\/sib-styles.css\">\r\n\r\n<\/head>\r\n\r\n\r\n<body>\r\n\r\n    <!-- Trigger\/Open The Modal -->\r\n<button id=\"myBtn\">Open Modal<\/button>\r\n\r\n\r\n<!-- The Modal -->\r\n<div id=\"myModal\" class=\"modal\">\r\n          <!-- Message de validation -->\r\n<div id=\"sib-form-container\" class=\"sib-form-container\" style=\"text-align: center;\">\r\n    <div id=\"error-message\" class=\"sib-form-message-panel\" style=\"font-size:16px; text-align:left; font-family:; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;\">\r\n      <div class=\"sib-form-message-panel__text sib-form-message-panel__text--center\">\r\n        <svg viewBox=\"0 0 512 512\" class=\"sib-icon sib-notification__icon\">\r\n          <path d=\"M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z\"\r\n          \/>\r\n        <\/svg>\r\n        <span class=\"sib-form-message-panel__inner-text\">\r\n                          Nous n&#039;avons pas pu confirmer votre inscription.\r\n                      <\/span>\r\n      <\/div>\r\n    <\/div>\r\n    <div><\/div>\r\n    <div id=\"success-message\" class=\"sib-form-message-panel\" style=\"font-size:16px; text-align:left; font-family:; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;\">\r\n      <div class=\"sib-form-message-panel__text sib-form-message-panel__text--center\">\r\n        <svg viewBox=\"0 0 512 512\" class=\"sib-icon sib-notification__icon\">\r\n          <path d=\"M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z\"\r\n          \/>\r\n        <\/svg>\r\n        <span class=\"sib-form-message-panel__inner-text\">\r\n                          Votre inscription est confirm\u00e9e, vous allez recevoir votre code par email.\r\n                      <\/span>\r\n      <\/div>\r\n    <\/div>\r\n\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\">\r\n    <div class=\"gauche\">\r\n        \r\n    <\/div>\r\n    <div class=\"droite\">\r\n        <h1> Ma Newsletter Universpara<\/h1>\r\n        <form id=\"sib-form\" method=\"POST\" action=\"https:\/\/24d35c4f.sibforms.com\/serve\/MUIEAFyMHDtHHiQJaYIvi5lo_UtciwEingJKZL9gZ07tw5Mnq6NJWSVC5LmhGWpZd460IQDw9cVO5NIhhW3gUOCD19A4snGqzr-vVaaohHoZ20YR4Z7A98g8PvLCV1FJ-wypPiWA564hIqvp5gGYYrQZ-LnLVTRpRL4z0Bn91iAUZaN_tAu3quw54coRw8_mIG5PpUQvlLyRli7H\"\r\n        data-type=\"subscription\" >\r\n            <input class=\"input\" maxlength=\"200\" type=\"text\" id=\"PRENOM\" name=\"PRENOM\" autocomplete=\"off\" placeholder=\"Pr\u00e9nom\" data-required=\"true\"\/>\r\n            <input class=\"input\" type=\"email\" id=\"EMAIL\" name=\"EMAIL\" autocomplete=\"off\" placeholder=\"Adresse Email\" data-required=\"true\"\/>\r\n            <label>\r\n                    <input type=\"checkbox\" class=\"input_replaced\" value=\"1\" id=\"OPT-IN_AVENT\" name=\"OPT-IN_AVENT\" \/>\r\n                    <span class=\"checkbox checkbox_tick_positive\" ><p>&nbsp;En renseignant votre adresse e-mail, vous acceptez de recevoir des communications personnalis\u00e9es de la part d'Universpara<\/p><\/span>                    <\/label>\r\n                    <button class=\"sib-form-block__button sib-form-block__button-with-loader\" style=\"font-size:20px; text-align:center; font-family:; color:#FFFFFF; background-color:#ff6f61; border-radius:3px; border-width:0px;\" form=\"sib-form\"\r\n              type=\"submit\">\r\n              Je m'inscris !\r\n              <svg class=\"icon clickable__icon progress-indicator__icon sib-hide-loader-icon\" viewBox=\"0 0 512 512\">\r\n                <path d=\"M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z\"><\/path>\r\n              <\/svg>\r\n            <\/button>\r\n            <input type=\"text\" name=\"email_address_check\" value=\"\" class=\"input--hidden\">\r\n        <input type=\"hidden\" name=\"locale\" value=\"fr\">\r\n        <\/form>\r\n    <\/div>\r\n     <span class=\"close\">&times;<\/span>\r\n        \r\n\r\n<\/div><\/div>\r\n<script src=\"https:\/\/cdn.jsdelivr.net\/gh\/ZynXI\/Popup@main\/Popup.js\"><\/script>\r\n<script>\r\n  window.REQUIRED_CODE_ERROR_MESSAGE = 'Veuillez choisir un code pays';\r\n\r\n  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = \"Les informations que vous avez fournies ne sont pas valides. Veuillez v\u00e9rifier le format du champ et r\u00e9essayer.\";\r\n\r\n  window.REQUIRED_ERROR_MESSAGE = \"Vous devez renseigner ce champ. \";\r\n\r\n  window.GENERIC_INVALID_MESSAGE = \"Les informations que vous avez fournies ne sont pas valides. Veuillez v\u00e9rifier le format du champ et r\u00e9essayer.\";\r\n\r\n\r\n\r\n\r\n  window.translation = {\r\n    common: {\r\n      selectedList: '{quantity} liste s\u00e9lectionn\u00e9e',\r\n      selectedLists: '{quantity} listes s\u00e9lectionn\u00e9es'\r\n    }\r\n  };\r\n\r\n  var AUTOHIDE = Boolean(0);\r\n<\/script>\r\n<script src=\"https:\/\/sibforms.com\/forms\/end-form\/build\/main.js\">\r\n<\/script>\r\n\r\n<\/body>");
