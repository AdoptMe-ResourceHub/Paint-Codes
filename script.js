document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('li.ugly-animated-element');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const currentColor = item.style.color;
            // Cycle through some ugly colors on click
            if (currentColor === 'rgb(0, 255, 0)') {
                item.style.color = 'rgb(255, 255, 0)'; // Yellow
            } else if (currentColor === 'rgb(255, 255, 0)') {
                item.style.color = 'rgb(255, 0, 0)'; // Red
            } else {
                item.style.color = 'rgb(0, 255, 0)'; // Back to green
            }
        });
    });
});
