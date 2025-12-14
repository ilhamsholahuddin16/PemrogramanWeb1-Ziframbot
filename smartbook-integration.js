// SmartBook Integration Script
// Handles SmartBook credentials display and copy functionality

// Global variable to store selected plan
let selectedPlan = '';

// Override openModal function to store plan name
const originalOpenModal = window.openModal;
window.openModal = function(planName, planPrice) {
    selectedPlan = planName;
    if (originalOpenModal) {
        originalOpenModal(planName, planPrice);
    }
};

// Override openSuccessModal to show SmartBook credentials for Pro/Enterprise
const originalOpenSuccessModal = window.openSuccessModal;
window.openSuccessModal = function() {
    if (originalOpenSuccessModal) {
        originalOpenSuccessModal();
    }
    
    // Show SmartBook credentials only for Pro and Enterprise packages
    const smartbookCredentials = document.getElementById('smartbookCredentials');
    const smartbookAccessBtn = document.getElementById('smartbookAccessBtn');
    const successPlanName = document.getElementById('successPlanName');
    
    if (smartbookCredentials && smartbookAccessBtn && successPlanName) {
        successPlanName.textContent = selectedPlan;
        
        if (selectedPlan === 'Pro' || selectedPlan === 'Enterprise') {
            smartbookCredentials.classList.remove('hidden');
            smartbookAccessBtn.classList.remove('hidden');
        } else {
            smartbookCredentials.classList.add('hidden');
            smartbookAccessBtn.classList.add('hidden');
        }
    }
};

// Function to copy SmartBook credentials to clipboard
function copyCredentials() {
    const email = document.getElementById('smartbookEmail').value;
    const password = document.getElementById('smartbookPassword').value;
    
    const credentialsText = `SmartBook Login Credentials:\nEmail: ${email}\nPassword: ${password}\n\nLink: https://app.ziframebot.web.id`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(credentialsText).then(() => {
        // Change button text temporarily
        const copyButton = document.getElementById('copyButtonText');
        const originalText = copyButton.textContent;
        copyButton.textContent = '✓ Tersalin!';
        
        setTimeout(() => {
            copyButton.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Gagal menyalin. Silakan salin manual.');
    });
}

// Make copyCredentials available globally
window.copyCredentials = copyCredentials;
