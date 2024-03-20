/* global bootstrap: false */
/* eslint no-redeclare: 0 */
(() => {
  'use strict';
  const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]'),
  );
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
})();
