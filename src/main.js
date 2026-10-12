import './style.css'

const siteName = import.meta.env.VITE_SITE_NAME || 'Fêtes du monde anglophone'
const description = import.meta.env.VITE_SITE_DESCRIPTION || 'Célébrations du monde anglophone'
const email = import.meta.env.VITE_CONTACT_EMAIL || ''
const facebookUrl = 'https://www.facebook.com/410547534736449/'

document.querySelector('#app').innerHTML = `
<header>
  <h1>${siteName}</h1>
  <p>${description}</p>
</header>
<nav>
  <a href="#fetes">Fêtes</a>
  <a href="/inscription.html">Inscription</a>
  <a href="${facebookUrl}" target="_blank">Facebook</a>
</nav>
<main>
  <section id="fetes">
    <div class="grid">
      <div class="card"><h2>Halloween</h2><div class="date">31 octobre</div><p>Déguisements, citrouilles et bonbons.</p></div>
      <div class="card"><h2>Thanksgiving</h2><div class="date">4e jeudi de novembre</div><p>Traditions culinaires et gratitude.</p></div>
      <div class="card"><h2>Christmas</h2><div class="date">25 décembre</div><p>Traditions UK / USA / Australie.</p></div>
      <div class="card"><h2>St Patrick's Day</h2><div class="date">17 mars</div><p>Irlande et festivités.</p></div>
      <div class="card"><h2>Bonfire Night</h2><div class="date">5 novembre</div><p>Guy Fawkes et feux d'artifice.</p></div>
      <div class="card"><h2>Australia Day</h2><div class="date">26 janvier</div><p>Histoire et débats.</p></div>
    </div>
  </section>
  <section class="links">
    <h2>Autres ressources</h2>
    <a href="https://fiches-gerex.netlify.app" target="_blank">→ Fiches GEREX</a>
    <a href="https://trame-anglais-lycee.netlify.app" target="_blank">→ Trames Anglais Lycée</a>
  </section>
</main>
<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-brand">
      <div class="footer-logo">🎉</div>
      <div>
        <strong>${siteName}</strong>
        <p>${description}</p>
      </div>
    </div>
    <div class="footer-links">
      <a href="/inscription.html">Inscription</a>
      <a href="${facebookUrl}" target="_blank">Facebook</a>
      <a href="mailto:${email}">${email || 'Contact'}</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} — Talence</span>
  </div>
</footer>
`
