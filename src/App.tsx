import { useState } from 'react'
import './App.css'

type Screen = 'home' | 'dicas' | 'desafios' | 'progresso'

function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('home')

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

      {/* Screen Content - Conditional Rendering based on activeScreen */}
      <div className="screen-container">
        {activeScreen === 'home' && <HomeScreen />}
        {activeScreen === 'dicas' && <DicasScreen />}
        {activeScreen === 'desafios' && <DesafiosScreen />}
        {activeScreen === 'progresso' && <ProgressoScreen />}
      </div>

      {/* Bottom Navigation - Task 6 */}
      <nav className="bottom-nav">
        <button 
          className={`nav-item ${activeScreen === 'home' ? 'active' : ''}`}
          onClick={() => setActiveScreen('home')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Início</span>
        </button>

        <button 
          className={`nav-item ${activeScreen === 'dicas' ? 'active' : ''}`}
          onClick={() => setActiveScreen('dicas')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3V17M9 17L5 13M9 17L13 13M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 8C20 9.65685 18.6569 11 17 11C15.3431 11 14 9.65685 14 8C14 6.34315 15.3431 5 17 5C18.6569 5 20 6.34315 20 8Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <span>Dicas</span>
        </button>

        <button 
          className={`nav-item ${activeScreen === 'desafios' ? 'active' : ''}`}
          onClick={() => setActiveScreen('desafios')}
        >
          <svg width="24"  height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 12V19C21 19.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Desafios</span>
        </button>

        <button 
          className={`nav-item ${activeScreen === 'progresso' ? 'active' : ''}`}
          onClick={() => setActiveScreen('progresso')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.240 11.8996 1.76463 14.1003 1.98806 16.07 2.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Progresso</span>
        </button>
      </nav>
    </div>
  )
}

// Home Screen Component
function HomeScreen() {
  return (
    <main className="screen-content">
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

        {/* Quick Stats */}
        <section className="quick-stats">
          <div className="stat-card">
            <div className="stat-icon">🌍</div>
            <div className="stat-content">
              <div className="stat-value">350</div>
              <div className="stat-label">Pontos Totais</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-content">
              <div className="stat-value">7</div>
              <div className="stat-label">Dias de Sequência</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// Dicas Screen Component  
function DicasScreen() {
  return (
    <main className="screen-content">
      <div className="container">
        <h2 className="screen-title">Dicas Sustentáveis</h2>
        <p className="screen-subtitle">Aprenda práticas sustentáveis para o dia a dia</p>
        
        <div className="tips-categories">
          <div className="tip-category-card">
            <div className="tip-cat-icon">💧</div>
            <h3>Água</h3>
            <p>12 dicas para economizar água</p>
          </div>
          <div className="tip-category-card">
            <div className="tip-cat-icon">⚡</div>
            <h3>Energia</h3>
            <p>15 dicas para economizar energia</p>
          </div>
          <div className="tip-category-card">
            <div className="tip-cat-icon">♻️</div>
            <h3>Desperdício</h3>
            <p>18 dicas para reduzir desperdício</p>
          </div>
        </div>
      </div>
    </main>
  )
}

// Desafios Screen Component
function DesafiosScreen() {
  return (
    <main className="screen-content">
      <div className="container">
        <h2 className="screen-title">Meus Desafios</h2>
        <p className="screen-subtitle">Complete desafios e ganhe pontos</p>
        
        <div className="desafios-list">
          <div className="desafio-item">
            <div className="desafio-icon">💧</div>
            <div className="desafio-content">
              <h4>Feche a Torneira</h4>
              <p>Economize água ao escovar os dentes</p>
              <div className="desafio-points">+50 pontos</div>
            </div>
            <button className="btn btn-primary btn-small">Concluir</button>
          </div>

          <div className="desafio-item">
            <div className="desafio-icon">💡</div>
            <div className="desafio-content">
              <h4>Apague as Luzes</h4>
              <p>Desligue luzes ao sair do cômodo</p>
              <div className="desafio-points">+30 pontos</div>
            </div>
            <button className="btn btn-primary btn-small">Concluir</button>
          </div>

          <div className="desafio-item completed">
            <div className="desafio-icon">🌱</div>
            <div className="desafio-content">
              <h4>Use Sacola Reutilizável</h4>
              <p>Leve sacola ao fazer compras</p>
              <div className="desafio-points">+35 pontos</div>
            </div>
            <div className="completed-badge">✓ Concluído</div>
          </div>
        </div>
      </div>
    </main>
  )
}

// Progresso Screen Component
function ProgressoScreen() {
  return (
    <main className="screen-content">
      <div className="container">
        <h2 className="screen-title">Meu Impacto</h2>
        <p className="screen-subtitle">Veja sua contribuição para o planeta</p>
        
        {/* Impact Counters */}
        <div className="impact-counters-compact">
          <div className="impact-counter-compact water">
            <div className="counter-icon-compact">💧</div>
            <div className="counter-value-compact">120L</div>
            <div className="counter-label-compact">Água Economizada</div>
          </div>

          <div className="impact-counter-compact energy">
            <div className="counter-icon-compact">⚡</div>
            <div className="counter-value-compact">4 kWh</div>
            <div className="counter-label-compact">Energia Economizada</div>
          </div>

          <div className="impact-counter-compact waste">
            <div className="counter-icon-compact">♻️</div>
            <div className="counter-value-compact">2kg</div>
            <div className="counter-label-compact">Desperdício Evitado</div>
          </div>
        </div>

        {/* Level Section */}
        <div className="level-section">
          <h3>Nível de Impacto</h3>
          <div className="current-level-display">
            <span className="level-icon-large">🌿</span>
            <div>
              <div className="level-name-large">Consciente</div>
              <div className="level-desc">Você está no caminho certo!</div>
            </div>
          </div>

          <div className="level-bar-wrapper">
            <div className="level-bar-compact">
              <div className="level-fill-compact" style={{width: '65%'}}></div>
            </div>
            <div className="level-text">65% para Guardião do Planeta</div>
          </div>

          <div className="levels-list">
            <div className="level-item achieved">
              <span className="level-emoji">🌱</span>
              <span>Iniciante</span>
            </div>
            <div className="level-item current">
              <span className="level-emoji">🌿</span>
              <span>Consciente</span>
            </div>
            <div className="level-item locked">
              <span className="level-emoji">🌳</span>
              <span>Guardião do Planeta</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
