let currentSlide = 0;
const contents = document.querySelectorAll('.content');
const timelineItems = document.querySelectorAll('.timeline-item');

function showContent(index) {
    contents[currentSlide].style.transform = 'translateX(100%)'; // Move current slide out
    contents[index].style.transform = 'translateX(0)'; // Move new slide in
    currentSlide = index;

    // Update active timeline item
    timelineItems.forEach(item => item.classList.remove('active'));
    timelineItems[index].classList.add('active');
}