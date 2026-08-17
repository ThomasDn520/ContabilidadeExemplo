import { useState } from 'react';
import './index.css';

export default function App() {
  const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    
    try {
      const response = await fetch('http://localhost:3000/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      } else {
        setStatus('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      setStatus('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="app-container">
      {/* CABEÇALHO */}
      <header className="header">
        <div className="logo">Contábil<span>Pro</span></div>
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#contato" className="btn-primary">Fale Conosco</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Contabilidade inteligente para o crescimento do seu negócio</h1>
          <p>Simplificamos a burocracia para que você possa focar no que realmente importa: fazer sua empresa lucrar.</p>
          <div className="hero-buttons">
            <a href="#contato" className="btn-primary">Solicitar Orçamento</a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="btn-whatsapp">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="services">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Abertura de Empresas</h3>
            <p>Cuidamos de todo o processo de legalização do seu negócio de forma rápida e segura.</p>
          </div>
          <div className="service-card">
            <h3>Assessoria Fiscal e Tributária</h3>
            <p>Planejamento tributário para reduzir seus impostos dentro da lei.</p>
          </div>
          <div className="service-card">
            <h3>Gestão de RH e Departamento Pessoal</h3>
            <p>Folha de pagamento, admissões, rescisões e cumprimento de obrigações trabalhistas.</p>
          </div>
        </div>
      </section>

      {/* SOBRE O CONTADOR */}
      <section id="sobre" className="about">
        <div className="about-text">
          <h2>Sobre o Contador</h2>
          <p>Com mais de 10 anos de experiência, nosso escritório é liderado por profissionais apaixonados por finanças e organização. Nosso objetivo é ser um parceiro estratégico para a sua empresa, oferecendo clareza nos números e segurança nas tomadas de decisão.</p>
          <p><strong>CRC:</strong> 123456/O-7</p>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="contact">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Entre em Contato</h2>
            <p>Pronto para transformar a contabilidade da sua empresa?</p>
            <ul>
              <li><strong>Email:</strong> contato@contabilpro.com.br</li>
              <li><strong>Telefone:</strong> (00) 1234-5678</li>
              <li><strong>Endereço:</strong> Av. Empresarial, 1000 - Centro</li>
            </ul>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="nome" placeholder="Seu Nome / Empresa" value={formData.nome} onChange={handleChange} required />
            <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
            <input type="tel" name="telefone" placeholder="Telefone / WhatsApp" value={formData.telefone} onChange={handleChange} required />
            <textarea name="mensagem" placeholder="Como podemos ajudar?" rows="4" value={formData.mensagem} onChange={handleChange} required></textarea>
            <button type="submit" className="btn-primary">Enviar Mensagem</button>
            {status && <p className="status-msg">{status}</p>}
          </form>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} ContábilPro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}