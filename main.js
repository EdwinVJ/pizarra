function elementos() {
    let click = false;
    let x = 0;
    let y = 0;

    const pizarra = document.getElementById('pizarra');
    const context = pizarra.getContext('2d');

    pizarra.width = window.innerWidth;
    pizarra.height = window.innerHeight;

    pizarra.addEventListener('mousedown', (e) => {
        x = e.offsetX;
        y = e.offsetY;
        click = true;
    });


    //cuando el usuario mumeve de un lugar a otro
    pizarra.addEventListener('mousemove', (e) => {

        if (click === true) {
            dibuja(context, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        }
    });

    window.addEventListener('mouseup', (e) => {

        dibuja(context, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        click = false;
    });

    function dibuja(context, x1, y1, x2, y2) {

        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }

}

document.addEventListener('DOMContentLoaded', elementos);