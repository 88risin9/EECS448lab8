document.addEventListener('DOMContentLoaded', () => {
    main();
});

function main() {
    // dummy text
    let a = document.getElementById('dummyText');

    //function
    let range = (low, high) => {
        return ((i) => {
            if (i >high || i <low) {
                return false;
            }
            return true;
        });
    };
    //set the range of the colors and the width
    let RGBmixed = range(0, 255);
    let widthRange = range(1, 100);

    //setup the border
    document.getElementById('borderInput').addEventListener('click', () => {
        
        let r = document.getElementById('borderRed').value;
        let g = document.getElementById('borderGreen').value;
        let b = document.getElementById('borderBlue').value;
        let w = document.getElementById('borderWidth').value;


        //if the values are out the range, through the error
        if (!(RGBmixed(r) & RGBmixed(g) & RGBmixed(b) & widthRange(w))) {
            alert('the value(s) are empty or out of the range!');
            return;
        }

        a.style.borderColor = 'rgb(' + r + ',' + g + ',' + b + ', 1)';
        a.style.borderWidth = w;

    });

    document.getElementById('backgroundInput').addEventListener('click', () => {
        
        let r = document.getElementById('backgroundRed').value;
        let g = document.getElementById('backgroundGreen').value;
        let b = document.getElementById('backgroundBlue').value;

        //if the values are out the range, through the error
        if (!(RGBmixed(r)&& RGBmixed(g) && RGBmixed(b))) {
            alert('the value(s) are empty or out of the range');
            return;
        }

        
        a.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ', 1)';
    });
}