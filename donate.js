// Donation form functionality
document.addEventListener('DOMContentLoaded', function() {
    const donationOptions = document.querySelectorAll('.donation-option');
    const customAmountInput = document.getElementById('custom-amount');
    const summaryAmount = document.getElementById('summary-amount');
    const summaryFrequency = document.getElementById('summary-frequency');
    const summaryTotal = document.getElementById('summary-total');
    const frequencyRadios = document.querySelectorAll('input[name="frequency"]');
    const donationForm = document.getElementById('donation-form');
    
    let selectedAmount = 25;
    let selectedFrequency = 'one-time';

    // Handle donation option selection
    donationOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            donationOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update selected amount
            selectedAmount = parseInt(this.dataset.amount);
            customAmountInput.value = '';
            updateSummary();
        });
    });

    // Handle custom amount input
    customAmountInput.addEventListener('input', function() {
        const customAmount = parseInt(this.value);
        if (customAmount && customAmount > 0) {
            // Remove active class from all options
            donationOptions.forEach(opt => opt.classList.remove('active'));
            selectedAmount = customAmount;
            updateSummary();
        }
    });

    // Handle frequency selection
    frequencyRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            selectedFrequency = this.value;
            updateSummary();
        });
    });

    // Update donation summary
    function updateSummary() {
        summaryAmount.textContent = `$${selectedAmount.toLocaleString()}`;
        
        const frequencyText = selectedFrequency === 'one-time' ? 'One-time' : 
                            selectedFrequency === 'monthly' ? 'Monthly' : 'Yearly';
        summaryFrequency.textContent = frequencyText;
        
        // Calculate total based on frequency
        let total = selectedAmount;
        if (selectedFrequency === 'monthly') {
            total = selectedAmount * 12;
        } else if (selectedFrequency === 'yearly') {
            total = selectedAmount;
        }
        
        summaryTotal.textContent = `$${total.toLocaleString()}`;
    }

    // Form submission
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(donationForm);
        const donorName = document.getElementById('donor-name').value;
        const donorEmail = document.getElementById('donor-email').value;
        const donorPhone = document.getElementById('donor-phone').value;
        const donorAddress = document.getElementById('donor-address').value;
        const donorCity = document.getElementById('donor-city').value;
        const donorState = document.getElementById('donor-state').value;
        const donorZip = document.getElementById('donor-zip').value;
        const donorCountry = document.getElementById('donor-country').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        const termsAccepted = document.querySelector('input[type="checkbox"][required]').checked;
        
        // Basic validation
        if (!donorName || !donorEmail) {
            alert('Please fill in all required fields.');
            return;
        }
        
        if (!isValidEmail(donorEmail)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        if (!termsAccepted) {
            alert('Please accept the Terms of Service and Privacy Policy.');
            return;
        }
        
        // Simulate donation processing
        const submitBtn = donationForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        // Simulate processing delay
        setTimeout(() => {
            // Show success message
            showSuccessMessage(selectedAmount, selectedFrequency);
            
            // Reset form
            donationForm.reset();
            donationOptions.forEach(opt => opt.classList.remove('active'));
            customAmountInput.value = '';
            selectedAmount = 25;
            selectedFrequency = 'one-time';
            updateSummary();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 3000);
    });

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show success message
    function showSuccessMessage(amount, frequency) {
        const successModal = document.createElement('div');
        successModal.className = 'success-modal';
        successModal.innerHTML = `
            <div class="success-content">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Thank You for Your Donation!</h2>
                <p>Your donation of $${amount.toLocaleString()} ${frequency === 'one-time' ? '' : `(${frequency})`} has been processed successfully.</p>
                <p>You will receive a confirmation email shortly with your tax receipt.</p>
                <button onclick="this.parentElement.parentElement.remove()" class="btn btn-primary">Close</button>
            </div>
        `;
        
        document.body.appendChild(successModal);
        
        // Auto-remove after 10 seconds
        setTimeout(() => {
            if (successModal.parentElement) {
                successModal.remove();
            }
        }, 10000);
    }

    // Initialize summary
    updateSummary();
});

// Add CSS for success modal
const successModalStyle = document.createElement('style');
successModalStyle.textContent = `
    .success-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .success-content {
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 500px;
        margin: 20px;
        animation: slideUp 0.3s ease;
    }
    
    .success-icon {
        font-size: 4rem;
        color: #27ae60;
        margin-bottom: 20px;
    }
    
    .success-content h2 {
        color: #333;
        margin-bottom: 15px;
    }
    
    .success-content p {
        color: #666;
        margin-bottom: 10px;
        line-height: 1.6;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    .donation-option.active {
        background: #e74c3c;
        color: white;
        transform: scale(1.05);
    }
    
    .donation-option {
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .donation-option:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
`;
document.head.appendChild(successModalStyle);
