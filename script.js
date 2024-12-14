const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    cursorDot.style.left = x + 'px';
    cursorDot.style.top = y + 'px';

    cursorOutline.animate(
        {
            left: x + 'px',
            top: y + 'px'
        }, {
            duration:500, fill:"forwards"
        }
    );

});
