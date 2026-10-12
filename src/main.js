import './style.css'

const siteName = 'Ressources Anglais & Lettres'
const facebookUrl = 'https://www.facebook.com/410547534736449/'
const email = 'paolicarole@yahoo.fr'

document.querySelector('#app').innerHTML = `
<header>
  <h1>${siteName}</h1>
  <p>Lycée professionnel, général, CFA, SEGPA, FLE — Talence</p>
</header>
<nav>
  <a href="#categories">Ressources</a>
  <a href="/inscription.html">Inscription</a>
  <a href="${facebookUrl}" target="_blank">Facebook</a>
</nav>
<main>
  <section id="categories">
    <h2>Choisir une catégorie</h2>
    <div class="grid">
      <a href="https://fetes-monde-anglophone.netlify.app" class="card">
        <h3>Fêtes du monde anglophone</h3>
        <p>Halloween, Thanksgiving, Christmas, Diwali et autres célébrations.</p>
      </a>
      <a href="https://trame-anglais-lycee.netlify.app" class="card">
        <h3>Trames & Séquences Anglais</h3>
        <p>Progressions pour le lycée général, professionnel et CFA.</p>
      </a>
      <a href="https://fiches-gerex.netlify.app" class="card">
        <h3>Fiches GEREX</h3>
        <p>Fiches pédagogiques anglais et lettres — tous niveaux.</p>
      </a>
      <a href="https://prononciation-anglaise.netlify.app" class="card">
        <h3>Prononciation anglaise</h3>
        <p>Exercices oraux A2 à B2 pour francophones.</p>
      </a>
      <a href="https://hors-manuel.netlify.app" class="card">
        <h3>Hors manuel</h3>
        <p>Atelier d'anglais vivant — activités du vendredi.</p>
      </a>
      <div class="card">
        <h3>SEGPA & FLE</h3>
        <p>Ressources adaptées — en cours de réorganisation.</p>
      </div>
    </div>
  </section>
</main>
<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-brand">
      <div class="footer-logo">📚</div>
      <div>
        <strong>${siteName}</strong>
        <p>Talence — Lycée Michel de Montaigne</p>
      </div>
    </div>
    <div class="footer-links">
      <a href="/inscription.html">Inscription</a>
      <a href="${facebookUrl}" target="_blank">Facebook</a>
      <a href="mailto:${email}">Contact</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} — Ressources pédagogiques</span>
  </div>
</footer>
`
