/* JavaScript for FAQ Toggle */
/* Note: Add this script to your HTML or separate JS file */
document.querySelectorAll('.faq dt').forEach(item => {
    item.addEventListener('click', () => {
        item.nextElementSibling.style.display = item.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    });
});