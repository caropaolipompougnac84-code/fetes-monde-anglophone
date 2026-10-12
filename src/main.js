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
  <a href="#cfa">CFA</a>
  <a href="#fle">FLE</a>
  <a href="#segpa">SEGPA</a>
  <a href="#gerex">GEREX</a>
  <a href="#culture">Fêtes</a>
  <a href="https://www.facebook.com/410547534736449/" target="_blank">Facebook</a>
</nav>
<main id="portail">
  <section class="block anglais" id="anglais">
    <h2>Anglais</h2>
    <p>Pour le lycée général, le professionnel et le CFA</p>
    <div class="links">
      <a href="https://trame-anglais-lycee.netlify.app">Trames et séquences</a>
      <a href="https://prononciation-anglaise.netlify.app">Prononciation</a>
      <a href="https://hors-manuel.netlify.app">Hors manuel</a>
      <a href="https://elements-civilisation-anglophone.netlify.app">Éléments de civilisation</a>
    </div>
  </section>

  <section class="block francais" id="francais">
    <h2>Français</h2>
    <p>Séquences pour la première, en lien avec le programme</p>
    <div class="links">
      <a href="/francais-rimbaud.html">Poésie — Rimbaud</a>
      <a href="/francais-ponge.html">Poésie — Ponge</a>
      <a href="/francais-la-boetie.html">Littérature d’idées — La Boétie</a>
      <a href="/francais-roman.html">Roman et récit</a>
      <a href="/francais-theatre.html">Théâtre</a>
      <a href="/francais-zatopek.html">Zátopek (terminale pro)</a>
    </div>
  </section>

  <section class="block cfa" id="cfa">
    <h2>CFA</h2>
    <p>Séquences en français et en anglais, centrées sur l’activité professionnelle</p>
    <div class="links">
      <a href="/cfa-anglais-professionnel.html">Anglais professionnel — électricité</a>
    </div>
  </section>

  <section class="block fle" id="fle">
    <h2>FLE</h2>
    <p>Ressources pour le français langue étrangère</p>
    <div class="links">
      <a href="#">Vocabulaire et dialogues</a>
    </div>
  </section>

  <section class="block segpa" id="segpa">
    <div class="icon">📚</div>
    <h2>SEGPA</h2>
    <p>Ressources adaptées</p>
    <div class="links">
      <a href="#">Fiches simples</a>
      <a href="#">Vocabulaire illustré</a>
    </div>
  </section>

  <section class="block gerex" id="gerex">
    <h2>GEREX</h2>
    <p>Un accompagnement personnalisé, quelle que soit la matière</p>
    <ul>
      <li>Des fiches adaptées à ce dont les élèves ont besoin</li>
      <li>Un soutien dans toutes les disciplines</li>
      <li>Un suivi qui respecte le rythme de chacun</li>
    </ul>
    <div class="links">
      <a href="https://fiches-gerex.netlify.app">Fiches GEREX</a>
    </div>
  </section>

  <section class="block culture" id="culture">
    <h2>Fêtes & Culture</h2>
    <p>Les célébrations du monde anglophone</p>
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
