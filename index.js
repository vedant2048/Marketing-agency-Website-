const card1 = document.querySelector('.card1');  // Correctly selecting element by class
const targetElement = document.querySelector('.whatwedo');  // Correctly selecting element by class

card1.addEventListener('mouseenter', () => {
    targetElement.style.filter = 'blur(10px)';  // Apply blur filter when hovered
});

card1.addEventListener('mouseleave', () => {
    targetElement.style.filter = 'none';  // Remove blur when mouse leaves
});

card1.addEventListener('mouseenter',() => {
    targetElement.style.zindex = '-1';
});
card1.addEventListener('mouseenter',() => {
    targetElement.style.zindex = '1';
});

card1.addEventListener('mouseenter',() => {
    card1.style.zindex = '10';
});
card1.addEventListener('mouseenter',() => {
    card1.style.zindex = '1';
});