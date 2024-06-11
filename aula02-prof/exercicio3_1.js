const celsius = [22.20,25.30,32.00,40.00];

const temperaturaAleatoria = celsius[Math.floor(Math.random()*celsius.length)];

const Fahrenheit = (temperaturaAleatoria * 9/5) + 32;

const temperaturas = (temperatuaCelsius) => {

    console.log(`As temperaturas armazenadas são: ${celsius}`);

    //var fahrenheit = (C*9/5)+32;

   // temperaturas[Math.floor(Math.random()*temperaturas.length)];
   console.log(`A temperatura sorteada é ${temperaturaAleatoria}°C, que corresponde a ${Fahrenheit}°F`); 


}


temperaturas();
