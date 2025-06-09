function getBurnitudeLevel() {
    const params = new URLSearchParams(window.location.search);
    return params.get('burnitude') || 'medium';
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.burnometer-button');
    
    function updateContent(level) {
        const content = burnometerContent[level];
        document.body.setAttribute('data-burnitude', level);
        
        // Update quotes
        const quotesContainer = document.querySelector('.quotes');
        quotesContainer.innerHTML = content.quotes.map(quote => `
            <div class="quote">
                "${quote.text}"<br>
                — ${quote.author}, <em>${quote.role}</em>
            </div>
        `).join('');
        
        // Update symptoms
        const symptomsList = document.querySelector('.symptoms');
        symptomsList.innerHTML = content.symptoms.map(symptom => `
            <li>${symptom}</li>
        `).join('');
        
        // Update recommendations
        const recommendationsList = document.querySelector('.recommendations');
        recommendationsList.innerHTML = content.recommendations.map(rec => `
            <li>${rec}</li>
        `).join('');

        // Update button states
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.level === level);
        });
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            updateContent(button.dataset.level);
        });
    });
    
    // Initialize with medium level
    updateContent('low');
});