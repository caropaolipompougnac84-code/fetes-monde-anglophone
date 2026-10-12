import './style.css'

const siteName = import.meta.env.VITE_SITE_NAME || 'Fêtes du monde anglophone'
const description = import.meta.env.VITE_SITE_DESCRIPTION || 'Célébrations du monde anglophone'
const email = import.meta.env.VITE_CONTACT_EMAIL || ''
const facebookUrl = 'https://www.facebook.com/410547534736449/'
const siteUrl = 'https://fetes-monde-anglophone.netlify.app'
const shareText = encodeURIComponent('Découvrez les fêtes du monde anglophone : ' + siteUrl)

const festivals = [
  { name: 'Halloween', date: '31 octobre', img: 'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?w=400', desc: 'Fête des déguisements, citrouilles sculptées et bonbons. Très populaire aux USA, UK et Canada.' },
  { name: 'Thanksgiving', date: '4e jeudi de novembre', img: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=400', desc: 'Repas familial et expression de gratitude. Célébré aux États-Unis et au Canada.' },
  { name: 'Christmas', date: '25 décembre', img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400', desc: 'Traditions variées selon les pays : sapin, cadeaux, repas. UK, USA, Australie, Canada.' },
  { name: "St Patrick's Day", date: '17 mars', img: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400', desc: 'Fête irlandaise célébrée dans le monde anglophone. Vert, parades et festivités.' },
  { name: 'Bonfire Night', date: '5 novembre', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400', desc: 'Commémoration de Guy Fawkes au Royaume-Uni. Feux de joie et feux d\'artifice.' },
  { name: 'Australia Day', date: '26 janvier', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400', desc: 'Fête nationale australienne. Barbecues, feux d\'artifice et débats sur l\'histoire.' },
  { name: 'Independence Day', date: '4 juillet', img: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?w=400', desc: 'Fête nationale américaine. Feux d\'artifice, barbecues et célébrations patriotiques.' },
  { name: 'Diwali', date: 'Octobre-novembre', img: 'https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?w=400', desc: 'Fête des lumières. Célébrée en Inde et dans les communautés du Commonwealth.' },
  { name: 'Canada Day', date: '1er juillet', img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400', desc: 'Fête nationale canadienne. Feux d\'artifice, parades et symboles du pays.' },
  { name: 'Anzac Day', date: '25 avril', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', desc: 'Commémoration des soldats en Australie et Nouvelle-Zélande. Cérémonies à l\'aube.' },
  { name: 'Boxing Day', date: '26 décembre', img: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400', desc: 'Lendemain de Noël. Soldes et traditions au UK, Canada et Australie.' },
  { name: 'Guy Fawkes Night', date: '5 novembre', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', desc: 'Version britannique de Bonfire Night. Histoire de la Conspiration des poudres.' }
]

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
      ${festivals.map(f => `
        <div class="card">
          <img src="${f.img}" alt="${f.name}" class="card-img">
          <h2>${f.name}</h2>
          <div class="date">${f.date}</div>
          <p>${f.desc}</p>
        </div>
      `).join('')}
    </div>
  </section>
  <section class="share">
    <h2>Partager</h2>
    <a class="share-btn whatsapp" href="https://wa.me/?text=${shareText}" target="_blank">WhatsApp</a>
    <a class="share-btn facebook" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}" target="_blank">Facebook</a>
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
