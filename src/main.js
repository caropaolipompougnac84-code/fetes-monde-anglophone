import './style.css'

document.querySelector('#app').innerHTML = `
<header>
  <h1>Ressources Anglais & Lettres</h1>
  <p class="slogan">Accompagner chaque élève, dans toutes les matières.</p>
</header>
<nav>
  <a href="#anglais">Anglais</a>
  <a href="#francais">Français</a>
  <a href="#cfa">CFA</a>
  <a href="#cap">CAP</a>
  <a href="#segpa">SEGPA</a>
  <a href="#gerex">GEREX</a>
</nav>
<main>
  <section class="block anglais" id="anglais">
    <h2>Anglais</h2>
    <p>Lycée général et professionnel</p>
    <div class="links">
      <a href="https://trame-anglais-lycee.netlify.app">Trames</a>
      <a href="https://prononciation-anglaise.netlify.app">Prononciation</a>
      <a href="https://elements-civilisation-anglophone.netlify.app">Civilisation</a>
    </div>
  </section>

  <section class="block francais" id="francais">
    <h2>Français</h2>
    <p>Première générale</p>
    <div class="links">
      <a href="/francais-rimbaud.html">Rimbaud</a>
      <a href="/francais-ponge.html">Ponge</a>
      <a href="/francais-la-boetie.html">La Boétie</a>
      <a href="/francais-theatre.html">Théâtre</a>
    </div>
  </section>

  <section class="block cfa" id="cfa">
    <h2>CFA</h2>
    <p>Français et anglais professionnel — CAP, bac pro, BTS, BP</p>
    <div class="links">
      <a href="/cfa-anglais-professionnel.html">Anglais professionnel</a>
      <a href="/cfa-francais-professionnel.html">Français professionnel</a>
    </div>
  </section>

  <section class="block cap" id="cap">
    <h2>CAP</h2>
    <div class="links">
      <a href="/cap-anglais-professionnel.html">Anglais professionnel</a>
    </div>
  </section>

  <section class="block segpa" id="segpa">
    <h2>SEGPA</h2>
    <div class="links">
      <a href="/segpa.html">Activités</a>
    </div>
  </section>

  <section class="block gerex" id="gerex">
    <h2>GEREX</h2>
    <div class="links">
      <a href="https://fiches-gerex.netlify.app">Fiches</a>
    </div>
  </section>
</main>
<footer>
  <p>© ${new Date().getFullYear()} — Talence — Lycée Michel de Montaigne</p>
</footer>
`
