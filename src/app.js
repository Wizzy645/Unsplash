
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

   const grid = document.getElementById('image-grid');

  // Helper: get a random number between min and max
  const getRandomSize = () => {
    const width = Math.floor(Math.random() * 200) + 300;  // 300–500 px
    const height = Math.floor(Math.random() * 200) + 300; // 300–500 px
    return { width, height };
  };

  // Load a batch of random images
  function loadRandomImages(count = 9) {
    for (let i = 0; i < count; i++) {
      const { width, height } = getRandomSize();
      const img = document.createElement('img');
      img.src = `https://picsum.photos/${width}/${height}?random=${Date.now() + i}`;
      img.alt = `Random image ${i}`;
      img.className = "w-full object-cover rounded shadow"; // Tailwind styling
      const wrapper = document.createElement('div');
      wrapper.appendChild(img);
      grid.appendChild(wrapper);
    }
  }

  // Initial load
  loadRandomImages();

  // Infinite scroll
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      loadRandomImages();
    }
  });