import './style.css'

const LINKS = {
  linkedin: 'https://www.linkedin.com/in/nurcan-do%C4%9Fan/',
  github: 'https://github.com/nurcandogan',
  githubApi: 'https://api.github.com/users/nurcandogan/repos?sort=updated&per_page=7',
  medium: 'https://medium.com/@nurcan.d00',
  mediumRss: 'https://medium.com/feed/@nurcan.d00',
  email: 'mailto:nurcan.d00@gmail.com',
} as const

interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  updated_at: string
  language: string | null
  homepage: string | null
  topics: string[]
}

interface MediumArticle {
  title: string
  link: string
  pubDate: string
  description: string
}

const translations = {
  tr: {
    nav: {
      about: 'Hakkımda',
      projects: 'Projeler',
      blog: 'Blog',
      contact: 'İletişim',
    },
    hero: {
      greeting: 'Merhaba, ben',
      subtitle: 'Ürün odaklı, kullanıcı dostu arayüzler tasarlarım.',
      bio: 'React ve React Native ekosisteminde uzmanlaşmış bir Mobil & Frontend Geliştiriciyim. Bu teknolojileri kullanarak performanslı, ölçeklenebilir ve kullanıcı deneyimi odaklı dijital çözümler üretiyorum. Figma tasarımlarını piksel hassasiyetinde işlevsel arayüzlere dönüştürme ve karmaşık uygulama süreçlerini yönetme konusunda deneyim sahibiyim. İş dünyasındaki operasyonel geçmişimden gelen çözüm odaklı yaklaşımımı, yazılım dünyasının dinamikleriyle birleştirerek projelere değer katmayı hedefliyorum.',
      cta: 'Bir proje fikrin mi var? Beraber havalı bir şeyler çıkaralım.',
    },
    sections: {
      about: {
        title: 'Hakkımda',
        subtitle: 'Ben kimim, ne yaparım, nasıl çalışırım?',
        content: 'React ve React Native ekosisteminde uzmanlaşmış bir Mobil & Frontend Geliştirici olarak, performanslı ve ölçeklenebilir dijital çözümler üretiyorum. Figma tasarımlarını piksel hassasiyetinde işlevsel arayüzlere dönüştürme ve karmaşık uygulama süreçlerini yönetme konusunda deneyim sahibiyim. İş dünyasındaki operasyonel geçmişimden gelen çözüm odaklı yaklaşımımı, yazılım dünyasının dinamikleriyle birleştirerek projelere değer katmayı hedefliyorum.',
      },
      skills: {
        title: 'Yetenekler',
        subtitle: 'Kullandığım teknolojiler ve güçlü yanlarım',
      },
      projects: {
        title: 'Projeler',
        subtitle: 'Seçili işler (yer tutucu)',
        viewAll: 'Tüm projeler için GitHub\'a git',
      },
      writing: {
        title: 'Yazılar',
        subtitle: 'Medium\'da paylaştıklarım (yer tutucu)',
      },
      blog: {
        title: 'Teknoloji Günlüğü',
        subtitle: 'Yazılım dünyasının hızla değişen dinamiklerini, üretken yapay zekadaki gelişmeleri ve modern web/mobil mimarileri teknik bir perspektifle yorumluyorum. Karmaşık konuları basit ve uygulanabilir anlatımlarla Medium\'da paylaşıyorum.',
        readArticles: 'Tüm yazıları gör',
      },
      contact: {
        title: 'İletişim',
        subtitle: 'Bir proje fikrin mi var? Beraber havalı bir şeyler çıkaralım.',
        email: 'E-posta gönder',
        linkedin: 'LinkedIn\'den yaz',
      },
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      subtitle: 'I design product-focused, user-friendly interfaces.',
      bio: 'I am a Mobile & Frontend Developer specialized in the React and React Native ecosystem. Using these technologies, I create performant, scalable, and user-experience-focused digital solutions. I have experience in converting Figma designs into functional interfaces with pixel precision and managing complex application processes. I aim to add value to projects by combining my solution-oriented approach from my business background with the dynamics of the software world.',
      cta: 'Have a project idea? Let\'s create something cool together.',
    },
    sections: {
      about: {
        title: 'About',
        subtitle: 'Who I am, what I do, how I work',
        content: 'As a Mobile & Frontend Developer specialized in the React and React Native ecosystem, I create performant and scalable digital solutions. I have experience in converting Figma designs into functional interfaces with pixel precision and managing complex application processes. I aim to add value to projects by combining my solution-oriented approach from my business background with the dynamics of the software world.',
      },
      skills: {
        title: 'Skills',
        subtitle: 'Technologies I use and my strengths',
      },
      projects: {
        title: 'Projects',
        subtitle: 'Selected works (placeholder)',
        viewAll: 'View all projects on GitHub',
      },
      writing: {
        title: 'Writing',
        subtitle: 'What I share on Medium (placeholder)',
      },
      blog: {
        title: 'Technology Journal',
        subtitle: 'I interpret the rapidly changing dynamics of the software world, developments in productive AI, and modern web/mobile architectures from a technical perspective. I share complex topics with simple and applicable explanations on Medium.',
        readArticles: 'See all articles',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Have a project idea? Let\'s create something cool together.',
        email: 'Send email',
        linkedin: 'Write on LinkedIn',
      },
    },
  },
}

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
        <button id="home-link" class="btn-shine">
          &lt;nurcandogan/&gt;
        </button>

        <nav class="hidden items-center gap-1 md:flex">
          <button data-route="projects" data-i18n-nav="projects" class="nav-link rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-slate-100">Projeler</button>
          <button data-route="blog" data-i18n-nav="blog" class="nav-link rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-slate-100">Blog</button>
          <button data-route="about" data-i18n-nav="about" class="nav-link rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-slate-100">Hakkımda</button>
        </nav>

        <div class="flex items-center gap-3">
          <button
            id="theme-toggle"
            class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-white/20 hover:bg-white/10"
            aria-label="Toggle theme"
          >
            <svg id="sun-icon" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
            <svg id="moon-icon" class="h-5 w-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>
          <div class="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 p-1">
            <button
              id="lang-tr"
              class="lang-btn active rounded-lg px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-white/10"
            >
              TR
            </button>
            <button
              id="lang-en"
              class="lang-btn rounded-lg px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-white/10 hover:text-slate-200"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>

    <main id="top" class="relative flex flex-col min-h-screen">
      <div id="app-content" class="flex-1">
        <!-- Hero -->
        <section class="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:pt-32 min-h-[80vh] flex items-center">
          <div class="flex flex-col items-center text-center w-full">
            <div class="max-w-4xl">
             
              <h1 class="mt-0 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <span data-i18n-hero-greeting>Merhaba, ben</span> <span class="bg-gradient-to-tr from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Nurcan</span>.
                <span class="block text-slate-300 mt-2" data-i18n-hero-subtitle>Ürün odaklı, kullanıcı dostu arayüzler tasarlarım.</span>
              </h1>

              <p class="mt-8 mx-auto max-w-3xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl" data-i18n-hero-bio>
                React ve React Native ekosisteminde uzmanlaşmış bir Mobil & Frontend Geliştiriciyim. Bu teknolojileri kullanarak performanslı,
                ölçeklenebilir ve kullanıcı deneyimi odaklı dijital çözümler üretiyorum. Figma tasarımlarını piksel hassasiyetinde işlevsel
                arayüzlere dönüştürme ve karmaşık uygulama süreçlerini yönetme konusunda deneyim sahibiyim. İş dünyasındaki operasyonel geçmişimden
                gelen çözüm odaklı yaklaşımımı, yazılım dünyasının dinamikleriyle birleştirerek projelere değer katmayı hedefliyorum.
              </p>

              <div class="mt-16 flex justify-center">
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
              
              <p class="mt-16 text-center text-lg text-slate-300 max-w-2xl mx-auto sm:text-xl" data-i18n-hero-cta>
                Bir proje fikrin mi var? Beraber havalı bir şeyler çıkaralım.
              </p>
            </div>
          </div>
        </section>
      </div>
      ${renderFooter()}
    </main>
  </div>
`

function renderFooter() {
  return `
    <footer class="border-t border-white/10 mt-auto">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© ${new Date().getFullYear()} Nurcan Doğan</p>
        <div class="flex flex-wrap gap-4">
          <a class="transition hover:text-slate-200" href="${LINKS.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="transition hover:text-slate-200" href="${LINKS.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a class="transition hover:text-slate-200" href="${LINKS.medium}" target="_blank" rel="noreferrer">Medium</a>
        </div>
      </div>
    </footer>
  `
}

function sectionTitle(title: string, subtitle: string, sectionKey?: string) {
  const titleAttr = sectionKey ? `data-i18n-section-title="${sectionKey}"` : ''
  const subtitleAttr = sectionKey ? `data-i18n-section-subtitle="${sectionKey}"` : ''
  return `
    <div class="flex flex-col gap-2">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-100" ${titleAttr}>${title}</h2>
      <p class="text-sm text-slate-300" ${subtitleAttr}>${subtitle}</p>
    </div>
  `
}


function getProjectType(repo: GitHubRepo): 'web' | 'mobile' | 'other' {
  const name = repo.name.toLowerCase()
  const topics = repo.topics.map(t => t.toLowerCase())
  
  if (topics.includes('react-native') || topics.includes('mobile') || name.includes('mobile') || name.includes('app')) {
    return 'mobile'
  }
  if (topics.includes('react') || topics.includes('web') || topics.includes('frontend') || name.includes('web') || repo.homepage) {
    return 'web'
  }
  return 'other'
}

function getTechnologies(repo: GitHubRepo): string[] {
  const techs: string[] = []
  const topics = repo.topics || []
  const language = repo.language
  
  if (language) techs.push(language)
  
  // Framework ve teknolojileri topics'den al
  const commonTechs = ['React', 'TypeScript', 'JavaScript', 'React Native', 'Node.js', 'Vite', 'Tailwind CSS', 'Next.js']
  commonTechs.forEach(tech => {
    if (topics.some(t => t.toLowerCase().includes(tech.toLowerCase()))) {
      if (!techs.includes(tech)) techs.push(tech)
    }
  })
  
  return techs.slice(0, 4) // Max 4 teknoloji göster
}

function projectCard(repo: GitHubRepo) {
  const projectType = getProjectType(repo)
  const technologies = getTechnologies(repo)
  const liveUrl = repo.homepage || null
  const isWeb = projectType === 'web'
  
  return `
    <div class="project-card p-6 flex flex-col">
      <div class="flex items-start justify-between gap-4 mb-4">
        <div class="flex-1">
          <h3 class="text-base font-semibold text-slate-100 mb-2">${repo.name}</h3>
          <p class="text-sm text-slate-300 line-clamp-2">${repo.description || 'No description available'}</p>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          ${projectType === 'web' 
            ? '<svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>'
            : projectType === 'mobile'
            ? '<svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>'
            : ''
          }
        </div>
      </div>
      
      ${technologies.length > 0 ? `
        <div class="flex flex-wrap gap-2 mb-4">
          ${technologies.map(tech => `
            <span class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
              ${tech}
            </span>
          `).join('')}
        </div>
      ` : ''}
      
      <div class="flex items-center gap-3 mt-auto">
        <a
          href="${repo.html_url}"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-slate-100"
          onclick="event.stopPropagation()"
        >
          <span>🔗</span>
          <span>GitHub</span>
        </a>
        ${isWeb && liveUrl ? `
          <a
            href="${liveUrl}"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-slate-100"
            onclick="event.stopPropagation()"
          >
            <span>👁️</span>
            <span>Canlı Gör</span>
          </a>
        ` : ''}
      </div>
    </div>
  `
}

function articleCard(title: string, desc: string, year: string, href: string) {
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
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <h3 class="text-base font-semibold text-slate-100 group-hover:text-fuchsia-300 transition">${title}</h3>
              <svg class="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </div>
            <p class="mt-2 text-sm text-slate-300">${desc}</p>
          </div>
          <span class="text-xs text-slate-400 whitespace-nowrap">${year}</span>
        </div>
      </div>
    </a>
  `
}

// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle')
  const sunIcon = document.getElementById('sun-icon')
  const moonIcon = document.getElementById('moon-icon')
  
  if (!themeToggle || !sunIcon || !moonIcon) return
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark'
  document.documentElement.classList.toggle('light', currentTheme === 'light')
  
  if (currentTheme === 'light') {
    sunIcon.classList.add('hidden')
    moonIcon.classList.remove('hidden')
  } else {
    sunIcon.classList.remove('hidden')
    moonIcon.classList.add('hidden')
  }
  
  themeToggle.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light')
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
    
    if (isLight) {
      sunIcon.classList.add('hidden')
      moonIcon.classList.remove('hidden')
    } else {
      sunIcon.classList.remove('hidden')
      moonIcon.classList.add('hidden')
    }
  })
}

// Update content based on language
function updateContent(lang: 'tr' | 'en') {
  const t = translations[lang]
  
  // Update navigation
  const navLinks = document.querySelectorAll('[data-i18n-nav]')
  navLinks.forEach((el) => {
    const key = el.getAttribute('data-i18n-nav') as keyof typeof t.nav
    if (el.textContent && key) {
      el.textContent = t.nav[key]
    }
  })
  
  // Update hero section
  const heroGreeting = document.querySelector('[data-i18n-hero-greeting]')
  if (heroGreeting) heroGreeting.textContent = t.hero.greeting
  
  const heroSubtitle = document.querySelector('[data-i18n-hero-subtitle]')
  if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle
  
  const heroBio = document.querySelector('[data-i18n-hero-bio]')
  if (heroBio) heroBio.textContent = t.hero.bio
  
  // Update section titles
  const sectionTitles = document.querySelectorAll('[data-i18n-section-title]')
  sectionTitles.forEach((el) => {
    const section = el.getAttribute('data-i18n-section-title') as keyof typeof t.sections
    if (el.textContent && section) {
      el.textContent = t.sections[section].title
    }
  })
  
  const sectionSubtitles = document.querySelectorAll('[data-i18n-section-subtitle]')
  sectionSubtitles.forEach((el) => {
    const section = el.getAttribute('data-i18n-section-subtitle') as keyof typeof t.sections
    if (el.textContent && section) {
      el.textContent = t.sections[section].subtitle
    }
  })
  
  // Update contact section
  const contactEmail = document.querySelector('[data-i18n-contact-email]')
  if (contactEmail) contactEmail.textContent = t.sections.contact.email
  
  const contactLinkedin = document.querySelector('[data-i18n-contact-linkedin]')
  if (contactLinkedin) contactLinkedin.textContent = t.sections.contact.linkedin
  
  // Update projects link
  const projectsLink = document.querySelector('[data-i18n-projects-link]')
  if (projectsLink) projectsLink.textContent = t.sections.projects.viewAll
  
  // Update about content
  const aboutContent = document.querySelector('[data-i18n-section-content="about"]')
  if (aboutContent) aboutContent.textContent = t.sections.about.content
  
  // Update blog content
  const blogRead = document.querySelector('[data-i18n-blog-read]')
  if (blogRead) blogRead.textContent = t.sections.blog.readArticles
}

// Language toggle functionality
function initLanguageToggle() {
  const langTr = document.getElementById('lang-tr')
  const langEn = document.getElementById('lang-en')
  
  if (!langTr || !langEn) return
  
  const currentLang = (localStorage.getItem('lang') || 'tr') as 'tr' | 'en'
  updateContent(currentLang)
  
  if (currentLang === 'en') {
    langTr.classList.remove('active', 'text-slate-200')
    langTr.classList.add('text-slate-400')
    langEn.classList.add('active', 'text-slate-200')
    langEn.classList.remove('text-slate-400')
  } else {
    langTr.classList.add('active', 'text-slate-200')
    langTr.classList.remove('text-slate-400')
    langEn.classList.remove('active', 'text-slate-200')
    langEn.classList.add('text-slate-400')
  }
  
  langTr.addEventListener('click', () => {
    localStorage.setItem('lang', 'tr')
    langTr.classList.add('active', 'text-slate-200')
    langTr.classList.remove('text-slate-400')
    langEn.classList.remove('active', 'text-slate-200')
    langEn.classList.add('text-slate-400')
    updateContent('tr')
  })
  
  langEn.addEventListener('click', () => {
    localStorage.setItem('lang', 'en')
    langEn.classList.add('active', 'text-slate-200')
    langEn.classList.remove('text-slate-400')
    langTr.classList.remove('active', 'text-slate-200')
    langTr.classList.add('text-slate-400')
    updateContent('en')
  })
}

// Page content functions
function renderHomePage() {
  return `
    <!-- Hero -->
    <section class="mx-auto max-w-6xl px-4 pb-20 pt-24 sm:pt-32 min-h-[80vh] flex items-center">
      <div class="flex flex-col items-center text-center w-full">
        <div class="max-w-4xl">
         
          <h1 class="mt-0 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span data-i18n-hero-greeting>Merhaba, ben</span> <span class="bg-gradient-to-tr from-fuchsia-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Nurcan</span>.
            <span class="block text-slate-300 mt-2" data-i18n-hero-subtitle>Ürün odaklı, kullanıcı dostu arayüzler tasarlarım.</span>
          </h1>

          <p class="mt-8 mx-auto max-w-3xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl" data-i18n-hero-bio>
            React ve React Native ekosisteminde uzmanlaşmış bir Mobil & Frontend Geliştiriciyim. Bu teknolojileri kullanarak performanslı,
            ölçeklenebilir ve kullanıcı deneyimi odaklı dijital çözümler üretiyorum. Figma tasarımlarını piksel hassasiyetinde işlevsel
            arayüzlere dönüştürme ve karmaşık uygulama süreçlerini yönetme konusunda deneyim sahibiyim. İş dünyasındaki operasyonel geçmişimden
            gelen çözüm odaklı yaklaşımımı, yazılım dünyasının dinamikleriyle birleştirerek projelere değer katmayı hedefliyorum.
          </p>

          <div class="mt-16 flex justify-center">
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
          
          <p class="mt-16 text-center text-lg text-slate-300 max-w-2xl mx-auto sm:text-xl" data-i18n-hero-cta>
            Bir proje fikrin mi var? Beraber havalı bir şeyler çıkaralım.
          </p>
        </div>
      </div>
    </section>
  `
}

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(LINKS.githubApi)
    const repos = await response.json()
    
    if (Array.isArray(repos)) {
      // Evim projesini özel olarak ekle (gizli repo)
      const evimProject: GitHubRepo = {
        name: 'evim',
        description: 'Ev yönetim uygulaması',
        html_url: 'https://github.com/nurcandogan/evim',
        updated_at: new Date().toISOString(),
        language: 'TypeScript',
        homepage: null,
        topics: ['react-native', 'mobile', 'typescript'],
      }
      
      const filteredRepos = repos
        .filter((repo: any) => !repo.fork && repo.name !== 'nurcandogan' && repo.name !== 'portfolyo') // Fork'ları, profil ve portfolyo'yu filtrele
        .slice(0, 6) // 6 repo al, evim'i ekleyince 7 olacak
        .map((repo: any) => ({
          name: repo.name || '',
          description: repo.description || null,
          html_url: repo.html_url || LINKS.github,
          updated_at: repo.updated_at || '',
          language: repo.language || null,
          homepage: repo.homepage || null,
          topics: repo.topics || [],
        }))
      
      // Evim projesini başa ekle
      return [evimProject, ...filteredRepos]
    }
    return []
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

function renderProjectsPage(repos: GitHubRepo[] = []) {
  const reposHtml = repos.length > 0
    ? repos.map(repo => projectCard(repo)).join('')
    : `
      <div class="text-center py-8 text-slate-400 col-span-3">
        <p>Projeler yükleniyor...</p>
      </div>
    `
  
  return `
    <section class="mx-auto max-w-6xl px-4 py-14 sm:pt-20">
      <div class="mt-8 grid gap-x-10 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" id="projects-container">
        ${reposHtml}
      </div>
      <div class="mt-10 flex justify-center">
        <a
          href="${LINKS.github}"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10"
        >
          <span data-i18n-projects-link>Tüm projeler için GitHub'a git</span>
          <span class="text-slate-400">→</span>
        </a>
      </div>
    </section>
  `
}

function renderAboutPage() {
  return `
    <section class="mx-auto max-w-6xl px-4 py-14 sm:pt-20">
      ${sectionTitle('Hakkımda', 'Ben kimim, ne yaparım, nasıl çalışırım?', 'about')}
      <div class="mt-8">
        <p class="text-base leading-7 text-slate-300" data-i18n-section-content="about">
          React ve React Native ekosisteminde uzmanlaşmış bir Mobil & Frontend Geliştirici olarak, performanslı ve ölçeklenebilir dijital çözümler üretiyorum. Figma tasarımlarını piksel hassasiyetinde işlevsel arayüzlere dönüştürme ve karmaşık uygulama süreçlerini yönetme konusunda deneyim sahibiyim. İş dünyasındaki operasyonel geçmişimden gelen çözüm odaklı yaklaşımımı, yazılım dünyasının dinamikleriyle birleştirerek projelere değer katmayı hedefliyorum.
    </p>
  </div>
    </section>
  `
}

async function fetchMediumArticles(): Promise<MediumArticle[]> {
  try {
    // Use CORS proxy to fetch Medium RSS feed
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(LINKS.mediumRss)}`
    const response = await fetch(proxyUrl)
    const data = await response.json()
    
    if (data.status === 'ok' && data.items) {
      return data.items.slice(0, 3).map((item: any) => ({
        title: item.title || '',
        link: item.link || LINKS.medium,
        pubDate: item.pubDate || '',
        description: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : '',
      }))
    }
    return []
  } catch (error) {
    console.error('Error fetching Medium articles:', error)
    return []
  }
}



function renderBlogPage(articles: MediumArticle[] = []) {
  const articlesHtml = articles.length > 0
    ? articles.map(article => {
        const year = article.pubDate ? new Date(article.pubDate).getFullYear().toString() : '2024'
        return articleCard(article.title, article.description || '', year, article.link)
      }).join('')
    : `
      <div class="text-center py-8 text-slate-400">
        <p>Yazılar yükleniyor...</p>
  </div>
`

  return `
    <section class="mx-auto max-w-6xl px-4 py-14 sm:pt-20 text-center ">
      <div class="flex flex-col gap-2 mx-auto max-w-3xl">
        <h2 class="text-3xl mb-4 font-semibold tracking-tight text-slate-100" data-i18n-section-title="blog">Teknoloji Günlüğü</h2>
        <p class="text-base leading-7 text-slate-300 max-w-3xl" data-i18n-section-subtitle="blog">
          Yazılım dünyasının hızla değişen dinamiklerini, üretken yapay zekadaki gelişmeleri ve modern web/mobil mimarileri teknik bir perspektifle yorumluyorum. Karmaşık konuları basit ve uygulanabilir anlatımlarla Medium'da paylaşıyorum.
        </p>
      </div>
      <div class="mt-8 grid gap-4" id="blog-articles">
        ${articlesHtml}
      </div>
      <div class="mt-14 flex justify-center">
        <a
          href="${LINKS.medium}"
          target="_blank"
          rel="noreferrer"
          class="email-button"
        >
          <span data-i18n-blog-read>Tüm yazıları gör</span>
        </a>
      </div>
    </section>
  `
}

// Router system
function navigateTo(route: string) {
  const contentEl = document.getElementById('app-content')
  if (!contentEl) return

  // Update active nav link
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('bg-white/10', 'text-slate-100')
    link.classList.add('text-slate-300')
  })
  const activeLink = document.querySelector(`[data-route="${route}"]`)
  if (activeLink) {
    activeLink.classList.add('bg-white/10', 'text-slate-100')
    activeLink.classList.remove('text-slate-300')
  }

  // Render page content
  switch (route) {
    case 'home':
      contentEl.innerHTML = renderHomePage()
      break
    case 'projects':
      contentEl.innerHTML = renderProjectsPage()
      // Fetch GitHub repos asynchronously
      fetchGitHubRepos().then((repos: GitHubRepo[]) => {
        const projectsContainer = document.getElementById('projects-container')
        if (projectsContainer && repos.length > 0) {
          projectsContainer.innerHTML = repos.map((repo: GitHubRepo) => projectCard(repo)).join('')
        }
      })
      break
    case 'blog':
      contentEl.innerHTML = renderBlogPage()
      // Fetch Medium articles asynchronously
      fetchMediumArticles().then(articles => {
        const articlesContainer = document.getElementById('blog-articles')
        if (articlesContainer && articles.length > 0) {
          articlesContainer.innerHTML = articles.map(article => {
            const year = article.pubDate ? new Date(article.pubDate).getFullYear().toString() : '2024'
            return articleCard(article.title, article.description || '', year, article.link)
          }).join('')
        }
      })
      break
    case 'about':
      contentEl.innerHTML = renderAboutPage()
      break
    case 'contact':
      contentEl.innerHTML = renderHomePage()
      // Scroll to contact section after a short delay
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return
    default:
      contentEl.innerHTML = renderHomePage()
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
  
  // Re-initialize content after render
  setTimeout(() => {
    const currentLang = (localStorage.getItem('lang') || 'tr') as 'tr' | 'en'
    updateContent(currentLang)
  }, 0)
}

// Initialize router
function initRouter() {
  // Add click handlers to nav links
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const route = (e.target as HTMLElement).getAttribute('data-route')
      if (route) {
        navigateTo(route)
      }
    })
  })

  // Home link handler
  const homeLink = document.getElementById('home-link')
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault()
      navigateTo('home')
    })
  }

  // Initial page load
  navigateTo('home')
}

// Initialize theme and language toggles
setTimeout(() => {
  initThemeToggle()
  initLanguageToggle()
  initRouter()
}, 0)
