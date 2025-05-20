
  // Select all elements with class 'tap'
  const tabs = document.querySelectorAll('.tap');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove the active classes from all tabs
      tabs.forEach(t => {
        t.classList.remove('font-semibold', 'border-b-2', 'border-black');
      });

      // Add the active classes to the clicked tab
      tab.classList.add('font-semibold', 'border-b-2', 'border-black');
    });
  });


function toggleDropdown() {
    var menu = document.getElementById('dropdownMenu');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  } 