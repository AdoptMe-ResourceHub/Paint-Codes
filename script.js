document.addEventListener('DOMContentLoaded', () => {
    const codeElements = document.querySelectorAll('.code');

    codeElements.forEach(codeElement => {
        codeElement.addEventListener('click', () => {
            const code = codeElement.textContent;
            navigator.clipboard.writeText(code).then(() => {
                // User feedback for successful copy
                codeElement.textContent = 'Copied!';
                setTimeout(() => {
                    codeElement.textContent = code; // Reset text after a delay
                }, 1000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
});
