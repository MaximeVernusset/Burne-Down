function getCompanyNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('company');
    return name ? decodeURIComponent(name) : "[Nom de l'entreprise]";
}

document.addEventListener('DOMContentLoaded', () => {
    const companyName = getCompanyNameFromURL();
    document.querySelectorAll('#company-name').forEach(el => {
        el.textContent = companyName;
    });
});