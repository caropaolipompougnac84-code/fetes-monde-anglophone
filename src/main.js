import './style.css'

document.querySelector('#app').innerHTML = `
<header>
  <h1>Ressources Anglais & Lettres</h1>
  <p class="slogan">Accompagner chaque élève, dans toutes les matières.</p>
</header>
<nav>
  <a href="#portail">Portail</a>
  <a href="#anglais">Anglais</a>
  <a href="#francais">Français</a>
  <a href="#gerex">GEREX</a>
  <a href="#culture">Fêtes</a>
  <a href="https://www.facebook.com/410547534736449/" target="_blank">Facebook</a>
</nav>
<main id="portail">
  <section class="block anglais" id="anglais">
    <div class="icon">🇬🇧</div>
    <h2>Anglais</h2>
    <p>Lycée général, professionnel et CFA</p>
    <div class="links">
      <a href="https://trame-anglais-lycee.netlify.app">Trames & Séquences</a>
      <a href="https://prononciation-anglaise.netlify.app">Prononciation</a>
      <a href="https://hors-manuel.netlify.app">Hors manuel</a>
      <a href="https://elements-civilisation-anglophone.netlify.app">Éléments de civilisation</a>
    </div>
  </section>

  <section class="block francais" id="francais">
    <div class="icon">📚</div>
    <h2>Français</h2>
    <p>Première générale — Objets d’étude du Bulletin officiel</p>
    <div class="links">
      <a href="/francais-ponge.html">Poésie — Ponge</a>
      <a href="/francais-la-boetie.html">Littérature d’idées — La Boétie</a>
      <a href="/francais-roman.html">Roman et récit</a>
      <a href="/francais-theatre.html">Théâtre</a>
      <a href="/francais-zatopek.html">Zátopek / Courir (Bac Pro)</a>
    </div>
  </section>

  <section class="block gerex" id="gerex">
    <div class="icon">🎓</div>
    <h2>GEREX</h2>
    <p>Accompagnement personnalisé — toutes matières</p>
    <ul>
      <li>Fiches et ressources adaptées aux besoins des élèves</li>
      <li>Soutien dans toutes les disciplines</li>
      <li>Suivi individualisé pour progresser à son rythme</li>
    </ul>
    <div class="links">
      <a href="https://fiches-gerex.netlify.app">Fiches GEREX</a>
    </div>
  </section>

  <section class="block culture" id="culture">
    <div class="icon">🎉</div>
    <h2>Fêtes & Culture</h2>
    <p>Célébrations du monde anglophone</p>
    <div class="links">
      <a href="https://fetes-monde-anglophone.netlify.app">Fêtes du monde anglophone</a>
      <a href="https://elements-civilisation-anglophone.netlify.app">Civilisation : fêtes et traditions</a>
    </div>
  </section>
</main>
<footer>
  <p>© ${new Date().getFullYear()} — Talence — Lycée Michel de Montaigne</p>
</footer>
`
