document.addEventListener('DOMContentLoaded', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c6473f2568msh4090a16973cebc1p1e466djsnfa38ecded9a0',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    const btn1 = document.querySelector('.btn1');
    const bandeiraElement = document.querySelector('.bandeira'); 

    if (btn1) {
        btn1.addEventListener('click', async () => {
            var nome1 = document.getElementById('nomeInput1').value;
            var nome2 = document.getElementById('nomeInput2').value;
            var url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${nome1}&fname=${nome2}`;

            try {
                const response = await fetch(url, options);
                const result = await response.json();

                if (result) {
                    const lovePercentage = result.percentage;

                    bandeiraElement.classList.add('aparecer');


                    const resultadoElement = document.getElementById('Resultado');
                    resultadoElement.textContent = `${lovePercentage}%`;
                    
                }
            } catch (error) {
                console.error(error);
            }
        });
    } else {
        console.error("Element with class 'btn1' not found.");
    }

    const btnX = document.querySelector('.btnX')

    btnX.addEventListener('click', async () => {
        bandeiraElement.classList.remove("aparecer");
    });

    const btn2 = document.getElementById('btn2');

    if (btn2) {
        btn2.addEventListener('click', async () => {
            var nome3 = document.getElementById('nome1').value; 
            var nome4 = document.getElementById('nome2').value; 
            var url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${nome3}&fname=${nome4}`;

            try {
                const response = await fetch(url, options);
                const result = await response.json();

                if (result) {
                    const lovePercentage = result.percentage;

                    const resultadoElement = document.getElementById('Resultado-cell');
                    resultadoElement.textContent = `${lovePercentage}%`;
                }
            } catch (error) {
                console.error(error);
            }
        });
    } else {
        console.error("Element with ID 'btn2' not found.");
    }
});
