function getCompanyNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('company');
    return name ? decodeURIComponent(name) : "[Nom de l'entreprise]";
}

function getNavigationURL(path) {
    const urlParams = new URLSearchParams(window.location.search);
    const company = urlParams.get('company');
    return company ? `${path}?company=${encodeURIComponent(company)}` : path;
}

document.addEventListener('DOMContentLoaded', () => {
    const companyName = getCompanyNameFromURL();
    document.querySelectorAll('#company-name').forEach(el => {
        el.textContent = companyName;
    });

    document.querySelectorAll('.newsletter-nav a').forEach(link => {
        const href = link.getAttribute('href');
        link.href = getNavigationURL(href);
    });
});