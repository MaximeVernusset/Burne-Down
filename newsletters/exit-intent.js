document.addEventListener('DOMContentLoaded', function () {
    const modalHTML = `
        <div class="exit-modal" id="exitModal">
            <div class="modal-content">
                <h2>🎮 Partez pas si vite !</h2>
                <p>Avant de nous quitter, que diriez-vous d'évaluer votre niveau de burnitude ?</p>
                <div class="modal-buttons">
                    <a href="../../burnometer/" target="_blank" class="modal-button primary">🔥 Mesurer ma burnitude</a>
                    <button class="modal-button secondary" id="closeModal">Non merci</button>
                </div>
            </div>
        </div>  
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('exitModal');
    const closeBtn = document.getElementById('closeModal');
    let hasShownModal = false;

    function showExitModal() {
        if (!hasShownModal) {
            modal.style.display = 'block';
            hasShownModal = true;
        }
    }

    function handleMouseLeave(e) {
        if (e.clientY <= 0) {
            showExitModal();
        }
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    document.addEventListener('mouseleave', handleMouseLeave);
    closeBtn.addEventListener('click', closeModal);
});