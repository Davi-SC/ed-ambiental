import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="url(#gradient1)" opacity="0.2"/>
                  <path d="M20 8C18 8 16 10 16 14C16 16 17 18 18 19C16 20 14 22 14 25C14 28 16 30 20 30C24 30 26 28 26 25C26 22 24 20 22 19C23 18 24 16 24 14C24 10 22 8 20 8Z" fill="url(#gradient2)"/>
                  <defs>
                    <linearGradient id="gradient1" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10b981"/>
                      <stop offset="1" stopColor="#3b82f6"/>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="14" y1="8" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10b981"/>
                      <stop offset="1" stopColor="#059669"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h1 className="logo-text">EcoFlow</h1>
            </div>
            
            <nav className="nav">
              <a href="#inicio" className="nav-link active">Início</a>
              <a href="#desafios" className="nav-link">Desafios</a>
              <a href="#progresso" className="nav-link">Meu Progresso</a>
              <a href="#dicas" className="nav-link">Dicas</a>
            </nav>
            
            <div className="header-actions">
              <button className="btn-icon" aria-label="Notificações">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2C7.8 2 6 3.8 6 6V9L4 11V13H16V11L14 9V6C14 3.8 12.2 2 10 2ZM11 16H9C9 17.1 9.9 18 11 18C12.1 18 13 17.1 11 16Z" fill="currentColor"/>
                </svg>
                <span className="notification-badge">3</span>
              </button>
              <button className="btn btn-primary">Entrar</button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge">🌱 Novos desafios toda semana</span>
            </div>
            <h2 className="hero-title">
              Transforme pequenos<br/>
              hábitos em <span className="gradient-text">grande impacto</span>
            </h2>
            <p className="hero-description">
              Descubra dicas práticas de sustentabilidade e complete desafios diários.
              Ganhe pontos, conquiste medalhas e faça a diferença para o planeta.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large">
                Começar Agora
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-secondary btn-large">Ver Como Funciona</button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-icon">🌍</div>
                <div className="stat-content">
                  <div className="stat-value">2.5K+</div>
                  <div className="stat-label">Usuários Ativos</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-content">
                  <div className="stat-value">15K</div>
                  <div className="stat-label">Desafios Completos</div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💧</div>
                <div className="stat-content">
                  <div className="stat-value">1.2M</div>
                  <div className="stat-label">Litros de Água Economizados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="container">
          {/* Dashboard Greeting */}
          <section className="dashboard-greeting">
            <div className="greeting-content">
              <div className="greeting-header">
                <h2 className="greeting-title">Olá! 👋</h2>
                <p className="greeting-message">Hoje você já ajudou o planeta!</p>
              </div>
              
              <div className="daily-progress">
                <div className="progress-header">
                  <span className="progress-label">Progresso do dia</span>
                  <span className="progress-value">60%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '60%'}}></div>
                </div>
                <p className="progress-subtitle">Continue assim! Mais 2 desafios para completar seu dia.</p>
              </div>
            </div>
          </section>

          {/* Daily Challenge Section */}
          <section className="section" id="desafios">
            <div className="section-header">
              <div>
                <h3 className="section-title">Desafio do Dia</h3>
                <p className="section-subtitle">Complete e ganhe 50 pontos</p>
              </div>
              <button className="btn btn-text">
                Ver Todos
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            
            <div className="challenge-card featured">
              <div className="challenge-badge">Desafio Diário</div>
              <div className="challenge-content">
                <div className="challenge-icon">💧</div>
                <h4 className="challenge-title">Feche a Torneira ao Escovar os Dentes</h4>
                <p className="challenge-description">
                  Deixar a torneira aberta durante 3 minutos desperdiça até 12 litros de água. Feche enquanto escova!
                </p>
                <div className="challenge-meta">
                  <div className="challenge-points">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2L9.5 6H13.5L10.5 8.5L11.5 12.5L8 10L4.5 12.5L5.5 8.5L2.5 6H6.5L8 2Z" fill="#f59e0b"/>
                    </svg>
                    <span>+50 pontos</span>
                  </div>
                  <div className="challenge-time">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>Expira em 18h</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-full">Concluir Desafio</button>
              </div>
            </div>
            
            {/* Additional Challenge Examples */}
            <div className="challenge-grid">
              <div className="challenge-card-small">
                <div className="challenge-icon-small">💡</div>
                <h5 className="challenge-title-small">Apague as Luzes ao Sair</h5>
                <p className="challenge-desc-small">Economize energia desligando as luzes</p>
                <button className="btn btn-secondary btn-small">Ver Desafio</button>
              </div>
              <div className="challenge-card-small">
                <div className="challenge-icon-small">🚰</div>
                <h5 className="challenge-title-small">Banho de 5 Minutos</h5>
                <p className="challenge-desc-small">Reduza seu tempo no chuveiro</p>
                <button className="btn btn-secondary btn-small">Ver Desafio</button>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="section">
            <div className="section-header">
              <div>
                <h3 className="section-title">Categorias</h3>
                <p className="section-subtitle">Escolha seu foco de sustentabilidade</p>
              </div>
            </div>
            
            <div className="categories-grid">
              <div className="category-card" data-category="water">
                <div className="category-icon">💧</div>
                <h4 className="category-title">Água</h4>
                <p className="category-count">12 desafios</p>
              </div>
              <div className="category-card" data-category="energy">
                <div className="category-icon">⚡</div>
                <h4 className="category-title">Energia</h4>
                <p className="category-count">15 desafios</p>
              </div>
              <div className="category-card" data-category="waste">
                <div className="category-icon">♻️</div>
                <h4 className="category-title">Resíduos</h4>
                <p className="category-count">18 desafios</p>
              </div>
              <div className="category-card" data-category="transport">
                <div className="category-icon">🚲</div>
                <h4 className="category-title">Transporte</h4>
                <p className="category-count">10 desafios</p>
              </div>
            </div>
          </section>

          {/* Sustainable Tips Showcase - Task 3 */}
          <section className="section tips-showcase" id="dicas">
            <div className="section-header">
              <div>
                <h3 className="section-title">Dicas Sustentáveis</h3>
                <p className="section-subtitle">Aprenda práticas sustentáveis para o dia a dia</p>
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="tips-filters">
              <button className="filter-btn active" data-category="all">
                🌍 Todas
              </button>
              <button className="filter-btn" data-category="water">
                💧 Água
              </button>
              <button className="filter-btn" data-category="energy">
                ⚡ Energia
              </button>
              <button className="filter-btn" data-category="waste">
                ♻️ Desperdício
              </button>
            </div>

            {/* Water Tips */}
            <div className="tips-category" data-category="water">
              <h4 className="category-header">
                <span className="category-icon-header">💧</span>
                Dicas para Economia de Água
              </h4>
              <div className="tips-grid-enhanced">
                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">💧</div>
                    <span className="tip-category-label">Água</span>
                  </div>
                  <h5 className="tip-title-enhanced">Feche a Torneira</h5>
                  <p className="tip-text-enhanced">
                    Ao escovar os dentes ou ensaboar a louça, mantenha a torneira fechada. Você pode economizar até 80 litros de água por dia.
                  </p>
                  <div className="tip-impact">Impacto: Alto 🌟</div>
                </div>

                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">🚿</div>
                    <span className="tip-category-label">Água</span>
                  </div>
                  <h5 className="tip-title-enhanced">Banhos Curtos</h5>
                  <p className="tip-text-enhanced">
                    Reduza seu tempo de banho para 5 minutos. Um chuveiro comum gasta de 6 a 10 litros por minuto.
                  </p>
                  <div className="tip-impact">Impacto: Alto 🌟</div>
                </div>

                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">🪣</div>
                    <span className="tip-category-label">Água</span>
                  </div>
                  <h5 className="tip-title-enhanced">Reutilize Água</h5>
                  <p className="tip-text-enhanced">
                    Use a água da máquina de lavar ou do enxágue para limpar o quintal e regar plantas. Água de cozimento (sem sal) também pode ser usada.
                  </p>
                  <div className="tip-impact">Impacto: Médio ⭐</div>
                </div>

                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">🔧</div>
                    <span className="tip-category-label">Água</span>
                  </div>
                  <h5 className="tip-title-enhanced">Conserte Vazamentos</h5>
                  <p className="tip-text-enhanced">
                    Uma torneira pingando desperdiça até 46 litros de água por dia. Verifique e conserte vazamentos regularmente.
                  </p>
                  <div className="tip-impact">Impacto: Alto 🌟</div>
                </div>
              </div>
            </div>

            {/* Energy Tips */}
            <div className="tips-category" data-category="energy">
              <h4 className="category-header">
                <span className="category-icon-header">⚡</span>
                Dicas para Economia de Energia
              </h4>
              <div className="tips-grid-enhanced">
                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">💡</div>
                    <span className="tip-category-label energy">Energia</span>
                  </div>
                  <h5 className="tip-title-enhanced">Lâmpadas LED</h5>
                  <p className="tip-text-enhanced">
                    Substitua lâmpadas incandescentes por LED. Elas duram até 25 vezes mais e consomem até 80% menos energia.
                  </p>
                  <div className="tip-impact">Impacto: Alto 🌟</div>
                </div>

                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">🔌</div>
                    <span className="tip-category-label energy">Energia</span>
                  </div>
                  <h5 className="tip-title-enhanced">Desligue da Tomada</h5>
                  <p className="tip-text-enhanced">
                    Aparelhos em stand-by consomem energia. Desligue completamente ou use réguas com interruptor para economizar até 12% na conta.
                  </p>
                  <div className="tip-impact">Impacto: Médio ⭐</div>
                </div>

                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">❄️</div>
                    <span className="tip-category-label energy">Energia</span>
                  </div>
                  <h5 className="tip-title-enhanced">Geladeira Eficiente</h5>
                  <p className="tip-text-enhanced">
                    Mantenha a geladeira longe do fogão, regule a temperatura corretamente (3°C a 5°C) e evite abrir a porta desnecessariamente.
                  </p>
                  <div className="tip-impact">Impacto: Médio ⭐</div>
                </div>

                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">☀️</div>
                    <span className="tip-category-label energy">Energia</span>
                  </div>
                  <h5 className="tip-title-enhanced">Luz Natural</h5>
                  <p className="tip-text-enhanced">
                    Aproveite ao máximo a luz natural durante o dia. Abra cortinas e persianas para reduzir o uso de luz artificial.
                  </p>
                  <div className="tip-impact">Impacto: Médio ⭐</div>
                </div>
              </div>
            </div>

            {/* Waste Tips */}
            <div className="tips-category" data-category="waste">
              <h4 className="category-header">
                <span className="category-icon-header">♻️</span>
                Dicas para Redução de Desperdício
              </h4>
              <div className="tips-grid-enhanced">
                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">♻️</div>
                    <span className="tip-category-label waste">Desperdício</span>
                  </div>
                  <h5 className="tip-title-enhanced">Recicle Corretamente</h5>
                  <p className="tip-text-enhanced">
                    Separe o lixo em orgânico e reciclável. Lave embalagens antes de descartar e conheça os pontos de coleta da sua cidade.
                  </p>
                  <div className="tip-impact">Impacto: Alto 🌟</div>
                </div>

                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">�</div>
                    <span className="tip-category-label waste">Desperdício</span>
                  </div>
                  <h5 className="tip-title-enhanced">Compostagem</h5>
                  <p className="tip-text-enhanced">
                    Transforme restos orgânicos em adubo rico. Uma composteira caseira reduz até 50% do lixo doméstico.
                  </p>
                  <div className="tip-impact">Impacto: Alto 🌟</div>
                </div>

                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">🛍️</div>
                    <span className="tip-category-label waste">Desperdício</span>
                  </div>
                  <h5 className="tip-title-enhanced">Sacolas Reutilizáveis</h5>
                  <p className="tip-text-enhanced">
                    Leve sua própria sacola ao fazer compras. Uma sacola de pano substitui centenas de sacolas plásticas ao longo do ano.
                  </p>
                  <div className="tip-impact">Impacto: Alto 🌟</div>
                </div>

                <div className="tip-card-enhanced">
                  <div className="tip-card-header">
                    <div className="tip-icon-enhanced">🍱</div>
                    <span className="tip-category-label waste">Desperdício</span>
                  </div>
                  <h5 className="tip-title-enhanced">Evite Descartáveis</h5>
                  <p className="tip-text-enhanced">
                    Use garrafas reutilizáveis, canudos de metal/vidro e marmitas. Descartáveis demoram centenas de anos para se decompor.
                  </p>
                  <div className="tip-impact">Impacto: Alto 🌟</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <div className="logo-icon">
                  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 8C18 8 16 10 16 14C16 16 17 18 18 19C16 20 14 22 14 25C14 28 16 30 20 30C24 30 26 28 26 25C26 22 24 20 22 19C23 18 24 16 24 14C24 10 22 8 20 8Z" fill="url(#gradient3)"/>
                    <defs>
                      <linearGradient id="gradient3" x1="14" y1="8" x2="26" y2="30" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#10b981"/>
                        <stop offset="1" stopColor="#059669"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="logo-text">EcoFlow</span>
              </div>
              <p className="footer-description">Transformando hábitos em impacto positivo para o planeta.</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-column">
                <h6 className="footer-heading">Plataforma</h6>
                <a href="#" className="footer-link">Desafios</a>
                <a href="#" className="footer-link">Dicas</a>
                <a href="#" className="footer-link">Comunidade</a>
              </div>
              <div className="footer-column">
                <h6 className="footer-heading">Suporte</h6>
                <a href="#" className="footer-link">FAQ</a>
                <a href="#" className="footer-link">Contato</a>
                <a href="#" className="footer-link">Ajuda</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 EcoFlow. Projeto acadêmico de sustentabilidade.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
