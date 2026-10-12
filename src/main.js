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
      <div class="card"><h2>Halloween</h2><div class="date">31 octobre</div><p>Déguisements, citrouilles et bonbons. UK, USA, Canada.</p></div>
      <div class="card"><h2>Thanksgiving</h2><div class="date">4e jeudi de novembre (USA)</div><p>Traditions culinaires et gratitude. États-Unis et Canada.</p></div>
      <div class="card"><h2>Christmas</h2><div class="date">25 décembre</div><p>Traditions UK / USA / Australie / Canada.</p></div>
      <div class="card"><h2>St Patrick's Day</h2><div class="date">17 mars</div><p>Irlande, USA, Canada. Vert et festivités.</p></div>
      <div class="card"><h2>Bonfire Night</h2><div class="date">5 novembre (UK)</div><p>Guy Fawkes, feux d'artifice et histoire britannique.</p></div>
      <div class="card"><h2>Australia Day</h2><div class="date">26 janvier</div><p>Histoire et débats contemporains en Australie.</p></div>
      <div class="card"><h2>Independence Day</h2><div class="date">4 juillet (USA)</div><p>Fête nationale américaine, feux d'artifice et barbecues.</p></div>
      <div class="card"><h2>Diwali</h2><div class="date">Octobre-novembre</div><p>Fête des lumières célébrée en Inde et dans le Commonwealth.</p></div>
      <div class="card"><h2>Canada Day</h2><div class="date">1er juillet</div><p>Fête nationale canadienne.</p></div>
      <div class="card"><h2>Anzac Day</h2><div class="date">25 avril</div><p>Commémoration en Australie et Nouvelle-Zélande.</p></div>
      <div class="card"><h2>Boxing Day</h2><div class="date">26 décembre</div><p>Lendemain de Noël, UK, Canada, Australie.</p></div>
      <div class="card"><h2>Guy Fawkes Night</h2><div class="date">5 novembre</div><p>Version alternative de Bonfire Night, Royaume-Uni.</p></div>
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
