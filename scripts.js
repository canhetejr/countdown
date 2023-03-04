// Define a data e hora final para a contagem regressiva
const countDownDate = new Date("Mar 10, 2023 00:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const x = setInterval(function() {

  // Obtém a data e hora atual
  const now = new Date().getTime();

  // Calcula a diferença entre a data e hora final e a data e hora atual
  const distance = countDownDate - now;

  // Calcula os dias, horas, minutos e segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe a contagem regressiva na tela
  document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
  document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

  // Verifica se a contagem regressiva chegou ao fim
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("data").innerHTML = "LANÇADO!";
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
