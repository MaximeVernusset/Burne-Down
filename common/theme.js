function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.innerHTML = savedTheme === 'light' ? '🌙' : '☀️';
    button.setAttribute('aria-label', 'Toggle theme');
    
    button.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        button.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
    });
    
    document.body.appendChild(button);
}

document.addEventListener('DOMContentLoaded', initTheme);