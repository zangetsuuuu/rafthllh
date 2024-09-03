function openModal(target) {
    const targetSrc = target.getAttribute('design-id');
    const targetTitle = target.getAttribute('design-title');

    if (targetSrc && targetTitle) {
        const modalImage = document.getElementById('modal-image');
        if (modalImage) {
            modalImage.src = `/images/gallery/${targetSrc}.webp`;
            modalImage.alt = targetTitle;
        }
    }

    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.replace('hidden', 'flex');
        setTimeout(() => {
            modal.classList.replace('opacity-0', 'opacity-100');
        }, 100);
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');

    if (modal) {
        modal.classList.replace('opacity-100', 'opacity-0');
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

document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('#modal-btn')) {
        openModal(target);
    } else if (target.matches('#modal-close')) {
        closeModal();
    }
});
