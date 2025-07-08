// Declare references to input, button, and list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Correct selector for <ul id="list">

button.addEventListener('click', () => {
  // Ignore empty input
  if (input.value.trim() === '') return;

  // Create list item and delete button
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  // Fill content
  li.textContent = input.value;
  deleteButton.textContent = '❌';

  // Append delete button to li
  li.append(deleteButton);

  // Append li to the list
  list.append(li);

  // Clear and refocus input
  input.value = '';
  input.focus();

  // Handle delete functionality
  deleteButton.addEventListener('click', () => {
    list.removeChild(li);
  });
});
