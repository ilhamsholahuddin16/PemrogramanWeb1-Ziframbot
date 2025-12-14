// Enterprise Order Modal Script
// Handles Enterprise package custom order form

// Function to open Enterprise modal
function openEnterpriseModal() {
    document.getElementById('enterpriseModal').classList.remove('hidden');
}

// Function to close Enterprise modal
function closeEnterpriseModal() {
    document.getElementById('enterpriseModal').classList.add('hidden');
}

// Function to handle Enterprise form submission
function submitEnterpriseForm(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company'),
        users: formData.get('users'),
        requirements: formData.get('requirements')
    };

    // Log data (in production, send to server)
    console.log('Enterprise Order:', data);

    // Close Enterprise modal
    closeEnterpriseModal();

    // Show success modal with Enterprise plan
    setTimeout(() => {
        const successPlanName = document.getElementById('successPlanName');
        if (successPlanName) {
            successPlanName.textContent = 'Enterprise';
        }

        // Hide SmartBook credentials for Enterprise (will be provided after verification)
        const smartbookCredentials = document.getElementById('smartbookCredentials');
        const smartbookAccessBtn = document.getElementById('smartbookAccessBtn');
        if (smartbookCredentials) {
            smartbookCredentials.classList.add('hidden');
        }
        if (smartbookAccessBtn) {
            smartbookAccessBtn.classList.add('hidden');
        }

        // Open success modal
        if (typeof openSuccessModal === 'function') {
            openSuccessModal();
        }
    }, 300);
}

// Make functions available globally
window.openEnterpriseModal = openEnterpriseModal;
window.closeEnterpriseModal = closeEnterpriseModal;
window.submitEnterpriseForm = submitEnterpriseForm;
