import './style.css'

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/nurcan-do%C4%9Fan/',
  github: 'https://github.com/nurcandogan',
  medium: 'https://medium.com/@nurcan.d00',
  email: 'mailto:nurcan.d00@gmail.com',
} as const

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('Missing #app element')

app.innerHTML = `
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <!-- Background -->
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
      <div class="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-cyan-400/20 to-emerald-400/20 blur-3xl"></div>
      <div class="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/15 to-rose-400/20 blur-3xl"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.10),transparent_55%)]"></div>
    </div>

    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#top" class="btn-shine">
          &lt;nurcandogan/&gt;
        </a>

        <nav class="hidden items-center gap-1 md:flex">
          ${navLink('#about', 'Hakkımda')}
          ${navLink('#skills', 'Yetenekler')}
          ${navLink('#projects', 'Projeler')}
          ${navLink('#writing', 'Yazılar')}
          ${navLink('#contact', 'İletişim')}
        </nav>

        <div class="flex items-center gap-2">
          <a
            href="${LINKS.github}"
            target="_blank"
            rel="noreferrer"
            class="hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/10 md:inline-flex"
          >
            GitHub
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            İletişime geç
          </a>
        </div>
      </div>
    </header>

    <main id="top" class="relative">
      <!-- Hero -->
      <section class="mx-auto max-w-6xl px-4 pb-14 pt-14 sm:pt-20">
        <div class="flex flex-col items-center text-center">
          <div class="max-w-4xl">
           
            <h1 class="mt-10 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Merhaba, ben <span class="bg-gradient-to-tr from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Nurcan</span>.
              <span class="block text-slate-300">Ürün odaklı, kullanıcı dostu arayüzler tasarlarım.</span>
            </h1>

            <p class="mt-5 mx-auto max-w-3xl text-pretty text-base leading-7 text-slate-300">
              React ve React Native ekosisteminde uzmanlaşmış bir Mobil & Frontend Geliştiriciyim. Bu teknolojileri kullanarak performanslı,
              ölçeklenebilir ve kullanıcı deneyimi odaklı dijital çözümler üretiyorum. Figma tasarımlarını piksel hassasiyetinde işlevsel
              arayüzlere dönüştürme ve karmaşık uygulama süreçlerini yönetme konusunda deneyim sahibiyim. İş dünyasındaki operasyonel geçmişimden
              gelen çözüm odaklı yaklaşımımı, yazılım dünyasının dinamikleriyle birleştirerek projelere değer katmayı hedefliyorum.
            </p>

            <div class="mt-10 flex justify-center">
              <ul class="example-2">
                <li class="icon-content">
                  <a
                    data-social="linkedin"
                    aria-label="LinkedIn"
                    href="${LINKS.linkedin}"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="filled"></div>
                    <svg viewBox="0 0 100 100" version="1.1">
                      <path fill="currentColor" d="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M35.2,72.5H22.5V38.2h12.7V72.5z M28.8,32.5c-4.1,0-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4C36.2,29.2,32.9,32.5,28.8,32.5z M77.5,72.5H64.8V56.1c0-4.8,0-11-6.7-11c-6.7,0-7.7,5.2-7.7,10.6v16.8H36.7V38.2h12.2v4.6h0.2c1.4-2.7,4.9-5.6,10.1-5.6c10.8,0,12.8,7.1,12.8,16.4v18.5H77.5z"/>
                    </svg>
                  </a>
                  <div class="tooltip">LinkedIn</div>
                </li>
                <li class="icon-content">
                  <a
                    data-social="github"
                    aria-label="GitHub"
                    href="${LINKS.github}"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="filled"></div>
                    <svg viewBox="0 0 100 100" version="1.1">
                      <path fill="currentColor" d="M50,4C24.7,4,4,24.7,4,50c0,22.1,14.3,40.8,34.1,47.4c2.5,0.5,3.4-1.1,3.4-2.4c0-1.2,0-4.3-0.1-8.4c-13.9,3-16.8-6.7-16.8-6.7c-2.3-5.8-5.6-7.3-5.6-7.3c-4.5-3.1,0.3-3,0.3-3c5,0.4,7.7,5.1,7.7,5.1c4.5,7.7,11.7,5.5,14.6,4.2c0.5-3.3,1.7-5.5,3.1-6.8c-10.8-1.2-22.2-5.4-22.2-24.1c0-5.3,1.9-9.7,5-13.1c-0.5-1.2-2.2-6.1,0.5-12.7c0,0,4.1-1.3,13.4,5c3.9-1.1,8-1.6,12.1-1.6c4.1,0,8.2,0.6,12.1,1.6c9.3-6.3,13.4-5,13.4-5c2.7,6.6,1,11.5,0.5,12.7c3.1,3.4,5,7.8,5,13.1c0,18.7-11.4,22.9-22.2,24.1c1.7,1.5,3.3,4.5,3.3,9.1c0,6.6-0.1,11.9-0.1,13.5c0,1.3,0.9,2.9,3.4,2.4C81.7,90.8,96,72.1,96,50C96,24.7,75.4,4,50,4z"/>
                    </svg>
                  </a>
                  <div class="tooltip">GitHub</div>
                </li>
                <li class="icon-content">
                  <a
                    data-social="medium"
                    aria-label="Medium"
                    href="${LINKS.medium}"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="filled"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <path fill="currentColor" d="M15 12A13 13 0 1015 38 13 13 0 1015 12zM35.5 13c-3.59 0-6.5 5.373-6.5 12 0 1.243.102 2.441.292 3.568.253 1.503.662 2.879 1.192 4.065.265.593.56 1.138.881 1.627.642.978 1.388 1.733 2.202 2.201C34.178 36.811 34.827 37 35.5 37s1.322-.189 1.933-.539c.814-.468 1.56-1.223 2.202-2.201.321-.489.616-1.034.881-1.627.53-1.185.939-2.562 1.192-4.065C41.898 27.441 42 26.243 42 25 42 18.373 39.09 13 35.5 13zM45.5 14c-.259 0-.509.173-.743.495-.157.214-.307.494-.448.833-.071.169-.14.353-.206.551-.133.395-.257.846-.37 1.343-.226.995-.409 2.181-.536 3.497-.063.658-.112 1.349-.146 2.065C43.017 23.499 43 24.241 43 25s.017 1.501.051 2.217c.033.716.082 1.407.146 2.065.127 1.316.31 2.501.536 3.497.113.498.237.948.37 1.343.066.198.135.382.206.551.142.339.292.619.448.833C44.991 35.827 45.241 36 45.5 36c1.381 0 2.5-4.925 2.5-11S46.881 14 45.5 14z"/>
                    </svg>
                  </a>
                  <div class="tooltip">Medium</div>
                </li>
                <li class="icon-content">
                  <a
                    data-social="email"
                    aria-label="Email"
                    href="${LINKS.email}"
                  >
                    <div class="filled"></div>
                    <svg viewBox="0 0 100 100" version="1.1">
                      <path fill="currentColor" d="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M75.5,35.5L50,55.5L24.5,35.5H75.5z M22.5,37.5l27.5,20l27.5-20v27.5H22.5V37.5z"/>
                    </svg>
                  </a>
                  <div class="tooltip">Email</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Sections -->
      <section id="about" class="mx-auto max-w-6xl px-4 py-14">
        ${sectionTitle('Hakkımda', 'Ben kimim, ne yaparım, nasıl çalışırım?')}
        <div class="mt-8 grid gap-6 md:grid-cols-12">
          <div class="md:col-span-7">
            ${glassCard(`
              <p class="text-slate-300 leading-7">
                React ve React Native ekosisteminde uzmanlaşmış bir Mobil & Frontend Geliştirici olarak, 
                performanslı ve ölçeklenebilir dijital çözümler üretiyorum. Figma tasarımlarını piksel 
                hassasiyetinde işlevsel arayüzlere dönüştürme ve karmaşık uygulama süreçlerini yönetme 
                konusunda deneyim sahibiyim. İş dünyasındaki operasyonel geçmişimden gelen çözüm odaklı 
                yaklaşımımı, yazılım dünyasının dinamikleriyle birleştirerek projelere değer katmayı hedefliyorum.
              </p>
              <div class="mt-6 grid gap-3 sm:grid-cols-2">
                ${pill('React & React Native')}
                ${pill('UI/UX Odaklı Geliştirme')}
                ${pill('Performans Optimizasyonu')}
                ${pill('Çözüm Odaklı Yaklaşım')}
              </div>
            `)}
          </div>
          <div class="md:col-span-5">
            ${glassCard(`
              <div class="flex items-start justify-between gap-4">
  <div>
                  <p class="text-sm font-semibold text-slate-200">Sosyal</p>
                  <p class="mt-1 text-sm text-slate-300">Güncel işler ve yazılar</p>
                </div>
                <span class="rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">Linkler</span>
              </div>
              <div class="mt-4 grid gap-3">
                ${socialLink(LINKS.linkedin, 'LinkedIn', 'Profesyonel profil')}
                ${socialLink(LINKS.github, 'GitHub', 'Kod ve projeler')}
                ${socialLink(LINKS.medium, 'Medium', 'Yazılar')}
              </div>
            `)}
          </div>
        </div>
      </section>

      <section id="skills" class="mx-auto max-w-6xl px-4 py-14">
        ${sectionTitle('Yetenekler', 'Kullandığım teknolojiler ve güçlü yanlarım')}
        <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${hoverCard('Frontend', ['React', 'TypeScript', 'Tailwind CSS', 'Vite'])}
          ${hoverCard('Mobil', ['React Native', 'Expo', 'Native Modules', 'Performance'])}
          ${hoverCard('UI/UX', ['Figma → Kod', 'Design System', 'Responsive', 'Accessibility'])}
        </div>
      </section>

      <section id="projects" class="mx-auto max-w-6xl px-4 py-14">
        ${sectionTitle('Projeler', 'Seçili işler (yer tutucu)')}
        <div class="mt-8 grid gap-4 md:grid-cols-2">
          ${projectCard('Project One', 'Kısa açıklama: problem → çözüm → etki.', LINKS.github)}
          ${projectCard('Project Two', 'Kısa açıklama: teknoloji, rol, çıktı.', LINKS.github)}
          ${projectCard('Project Three', 'Kısa açıklama: kullanıcı değeri, metrik.', LINKS.github)}
          ${projectCard('Project Four', 'Kısa açıklama: demo, repo, case study.', LINKS.github)}
        </div>
        <div class="mt-6">
          <a
            href="${LINKS.github}"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10"
          >
            Tüm projeler için GitHub’a git
            <span class="text-slate-400">→</span>
          </a>
        </div>
      </section>

      <section id="writing" class="mx-auto max-w-6xl px-4 py-14">
        ${sectionTitle('Yazılar', 'Medium’da paylaştıklarım (yer tutucu)')}
        <div class="mt-8 grid gap-4 md:grid-cols-3">
          ${articleCard('Modern UI tasarım notları', 'Okuma: 5 dk', LINKS.medium)}
          ${articleCard('Tailwind ile sistem kurmak', 'Okuma: 7 dk', LINKS.medium)}
          ${articleCard('UX: küçük detayların gücü', 'Okuma: 4 dk', LINKS.medium)}
        </div>
      </section>

      <section id="contact" class="mx-auto max-w-6xl px-4 py-16">
        <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40">
          <div class="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/15 via-cyan-400/10 to-emerald-400/10"></div>
          <div class="relative">
            <h2 class="text-2xl font-semibold tracking-tight text-slate-100">İletişim</h2>
            <p class="mt-2 max-w-2xl text-slate-300">
              Bir proje fikrin mi var? Beraber havalı bir şeyler çıkaralım.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              ${emailCta(LINKS.email, 'E-posta gönder')}
              ${secondaryCta(LINKS.linkedin, 'LinkedIn\'den yaz')}
              ${secondaryCta(LINKS.github, 'GitHub')}
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-white/10">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© ${new Date().getFullYear()} Nurcan Doğan</p>
        <div class="flex flex-wrap gap-4">
          <a class="transition hover:text-slate-200" href="${LINKS.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="transition hover:text-slate-200" href="${LINKS.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a class="transition hover:text-slate-200" href="${LINKS.medium}" target="_blank" rel="noreferrer">Medium</a>
        </div>
      </div>
    </footer>
  </div>
`

function navLink(href: string, label: string) {
  return `
    <a
      href="${href}"
      class="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-slate-100"
    >
      ${label}
    </a>
  `
}

function sectionTitle(title: string, subtitle: string) {
  return `
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-100">${title}</h2>
      <p class="text-sm text-slate-300">${subtitle}</p>
    </div>
  `
}

function glassCard(inner: string) {
  return `
    <div class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30">
      <div class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div class="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10"></div>
      </div>
      <div class="relative">${inner}</div>
    </div>
  `
}

function pill(text: string) {
  return `
    <span class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/10">
      ${text}
    </span>
  `
}

function emailCta(href: string, label: string) {
  return `
    <a
      href="${href}"
      class="email-button"
    >
      ${label}
    </a>
  `
}

function secondaryCta(href: string, label: string) {
  return `
    <a
      href="${href}"
      target="_blank"
      rel="noreferrer"
      class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-slate-100"
    >
      ${label}
    </a>
  `
}

function socialLink(href: string, title: string, subtitle: string) {
  return `
    <a
      href="${href}"
      target="_blank"
      rel="noreferrer"
      class="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
    >
      <div>
        <p class="text-sm font-semibold text-slate-100">${title}</p>
        <p class="mt-1 text-sm text-slate-300">${subtitle}</p>
      </div>
      <span class="rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300 transition group-hover:border-white/20 group-hover:bg-white/10">Aç →</span>
    </a>
  `
}

function hoverCard(title: string, items: string[]) {
  return `
    <div class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30 transition hover:border-white/20">
      <div class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div class="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10"></div>
      </div>
      <div class="relative">
        <p class="text-sm font-semibold text-slate-100">${title}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          ${items.map((x) => pill(x)).join('')}
        </div>
      </div>
  </div>
`
}

function projectCard(title: string, desc: string, href: string) {
  return `
    <a
      href="${href}"
      target="_blank"
      rel="noreferrer"
      class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
    >
      <div class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div class="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10"></div>
      </div>
      <div class="relative">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-slate-100">${title}</p>
            <p class="mt-2 text-sm text-slate-300">${desc}</p>
          </div>
          <span class="rounded-xl border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300 transition group-hover:border-white/20 group-hover:bg-white/10">Repo</span>
        </div>
      </div>
    </a>
  `
}

function articleCard(title: string, meta: string, href: string) {
  return `
    <a
      href="${href}"
      target="_blank"
      rel="noreferrer"
      class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/30 transition hover:border-white/20 hover:bg-white/10"
    >
      <div class="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div class="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10"></div>
      </div>
      <div class="relative">
        <p class="text-xs text-slate-400">${meta}</p>
        <p class="mt-2 text-sm font-semibold text-slate-100">${title}</p>
        <p class="mt-3 text-sm text-slate-300">Medium’da oku →</p>
      </div>
    </a>
  `
}
