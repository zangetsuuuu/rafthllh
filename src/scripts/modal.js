document.querySelectorAll('#modal-btn').forEach((modal) => {
    modal.addEventListener('click', (e) => {
        const target = e.target;
        const targetSrc = target.getAttribute('design-id');
        const targetTitle = target.getAttribute('design-title');

        if (targetSrc && targetTitle) {
            const modalImage = document.getElementById('modal-image');
            modalImage.src = `/images/gallery/${targetSrc}.webp`;
            modalImage.alt = targetTitle;
        }

        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.replace('hidden', 'flex');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modal.classList.add('opacity-100');
            }, 100);
        }
    });
});

const closeModalBtn = document.getElementById('modal-close');
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.replace('flex', 'hidden');
            }, 150);
        }
    });
}