var pos = 20;
    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png'],
        
    ];
    var direction = 0;
    var focus = 0;

    function Run() {
        let img = document.getElementById("PacMan");
        let imgWidth = img.width
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth);
        img.src = pacArray[direction][focus];
        if (direction) {
            pos -= 30;
            img.style.left = pos + "px";
        } else {
            pos += 30;
            img.style.left = pos + 'px';
        }

        setTimeout(Run, 250);
    }

    function checkPageBounds(direction, imgWidth) {
        let pageWidth = window.innerWidth;
        if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
        if (direction == 1 && pos < 0) direction = 0;

        return direction;
    }

   