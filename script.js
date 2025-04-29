document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    const meter = document.getElementById("strength-meter");
    const label = document.getElementById("strength-label");
    
    const strength = getPasswordStrength(password);

    meter.style.width = strength.width;
    meter.className = `meter-bar ${strength.class}`;
    label.textContent = strength.label;
});

function getPasswordStrength(password) {
    let strength = 0;
    let label = 'Weak';
    let className = 'weak';
    
    
    if (password.length >= 8) strength += 1;
    
    // Check for lowercase letters
    if (/[a-z]/.test(password)) strength += 1;
    
    //  uppercase letters
    if (/[A-Z]/.test(password)) strength += 1;
    
    //  numbers
    if (/\d/.test(password)) strength += 1;
    
    //  special characters
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

    // Define strength levels
    switch (strength) {
        case 1:
        case 2:
            label = 'Weak';
            className = 'weak';
            break;
        case 3:
            label = 'Medium';
            className = 'medium';
            break;
        case 4:
        case 5:
            label = 'Strong';
            className = 'strong';
            break;
    }

    return {
        width: `${(strength/5 ) * 100}%`,
        class: className,
        label: label
    };
}
