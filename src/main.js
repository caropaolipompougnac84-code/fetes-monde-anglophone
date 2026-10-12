import './style.css'

document.querySelector('#app').innerHTML = `
<header>
  <h1>Ressources Anglais & Lettres</h1>
  <p>Portail pédagogique — Talence</p>
</header>
<nav>
  <a href="#portail">Portail</a>
  <a href="https://www.facebook.com/410547534736449/" target="_blank">Facebook</a>
</nav>
<main id="portail">
  <section class="block anglais">
    <h2>Anglais</h2>
    <p>Lycée général, professionnel et CFA</p>
    <div class="links">
      <a href="https://trame-anglais-lycee.netlify.app">Trames & Séquences</a>
      <a href="https://prononciation-anglaise.netlify.app">Prononciation</a>
      <a href="https://hors-manuel.netlify.app">Hors manuel</a>
    </div>
  </section>

  <section class="block gerex">
    <h2>GEREX</h2>
    <p>Ressources pédagogiques transversales</p>
    <div class="links">
      <a href="https://fiches-gerex.netlify.app">Fiches GEREX</a>
    </div>
  </section>

  <section class="block culture">
    <h2>Fêtes & Culture</h2>
    <p>Célébrations du monde anglophone</p>
    <div class="links">
      <a href="https://fetes-monde-anglophone.netlify.app">Fêtes du monde anglophone</a>
    </div>
  </section>
</main>
<footer>
  <p>© ${new Date().getFullYear()} — Talence — Lycée Michel de Montaigne</p>
</footer>
`
