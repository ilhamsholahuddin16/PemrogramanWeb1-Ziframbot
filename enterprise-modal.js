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

    // Show Enterprise success modal
    setTimeout(() => {
        openEnterpriseSuccessModal();
    }, 300);
}

// Function to open Enterprise success modal
function openEnterpriseSuccessModal() {
    document.getElementById('enterpriseSuccessModal').classList.remove('hidden');
}

// Function to close Enterprise success modal
function closeEnterpriseSuccessModal() {
    document.getElementById('enterpriseSuccessModal').classList.add('hidden');
}

// Make functions available globally
window.openEnterpriseModal = openEnterpriseModal;
window.closeEnterpriseModal = closeEnterpriseModal;
window.submitEnterpriseForm = submitEnterpriseForm;
window.openEnterpriseSuccessModal = openEnterpriseSuccessModal;
window.closeEnterpriseSuccessModal = closeEnterpriseSuccessModal;
