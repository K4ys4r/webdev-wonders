/**
 * function get element and truncate its text content
 * @param {HTMLElement} element
 * @param {number} length defines the number of characters after truncation
 */
function truncateText(element, length) {
  let text = element.innerText;
  if (text.length > length) text = text.substring(0, length) + "...";
  element.innerText = text;
}

// select the element that contains the text to truncate
let p = document.querySelector(".js-truncated");
// call truncate function with a max length of 100 characters
truncateText(p, 100);
