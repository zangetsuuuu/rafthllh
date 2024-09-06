window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const info = document.getElementById('more-info');
    const isAtTop = window.scrollY === 0;

    nav.classList.toggle('translate-y-16', isAtTop);
    nav.classList.toggle('xl:translate-y-20', isAtTop);
    
    if (info && isAtTop) {
        info.classList.add('translate-y-80');
    }

    setupObserver();
});

// Observer
function setupObserver() {
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    sections.forEach(section => observer.observe(section));
}
  
// Modal functions
function openModal(target) {
    const targetSrc = target.getAttribute('design-id');
    const targetTitle = target.getAttribute('design-title');

    if (!targetSrc || !targetTitle) return;

    const modalImage = document.getElementById('modal-image');
    const modal = document.getElementById('modal');
    const nav = document.querySelector('nav');
    const info = document.getElementById('more-info');

    if (modalImage) {
        modalImage.src = `/images/gallery/${targetSrc}.webp`;
        modalImage.alt = targetTitle;
    }

    if (modal) {
        modal.classList.replace('hidden', 'flex');
        setTimeout(() => {
            modal.classList.replace('opacity-0', 'opacity-100');
            nav.classList.replace('opacity-100', 'opacity-0');
            info.classList.replace('opacity-100', 'opacity-0');;
        }, 150);
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const nav = document.querySelector('nav');
    const info = document.getElementById('more-info');

    if (modal) {
        modal.classList.replace('opacity-100', 'opacity-0');
        nav.classList.replace('opacity-0', 'opacity-100');
        info.classList.replace('opacity-0', 'opacity-100');;
        setTimeout(() => {
            modal.classList.replace('flex', 'hidden');
        }, 150);
    }

    if (modalImage) {
        setTimeout(() => {
            modalImage.src = '/';
            modalImage.alt = '';
        }, 300);
    }
}

// More info
function toggleInfo() {
    const info = document.getElementById('more-info');
    if (info) {
        info.classList.toggle('translate-y-80');
    }
}

document.addEventListener('click', (e) => {
    const { id } = e.target;

    if (id === 'modal-btn') {
        openModal(e.target);
    } else if (id === 'modal-close') {
        closeModal();
    } else if (id === 'more-icon') {
        toggleInfo();
    }
});

setupObserver();