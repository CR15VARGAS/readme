let app = document.getElementById('desc');

let typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('\u2661 Estudiante de preparatoria / Diseñador en sistemas computacionales / Amo las plantas y animales \u2661  ')
  
  .pauseFor(1000)
  .deleteChars(30)
  .pauseFor(1000)
  .start();





 