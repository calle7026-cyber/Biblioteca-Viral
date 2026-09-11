'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Check, ChevronDown, Clock3, Instagram, Play, ShieldCheck, Sparkles, Star, Zap } from 'lucide-react'

const niches = [
  ['Viajes', 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80'],
  ['Fitness', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80'],
  ['Lifestyle', 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800&q=80'],
  ['Negocios', 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'],
  ['Comida', 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80'],
  ['Naturaleza', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80']
]

const faqs = [
  ['¿Cómo recibo los videos?', 'Después de la compra, recibís un email con un PDF que tiene los links de descarga organizados por nicho (Google Drive). El acceso es instantáneo.'],
  ['¿Los videos tienen marca de agua?', 'No. Los videos vienen sin marca de agua y están listos para publicar.'],
  ['¿En qué formato están los videos?', 'Todos están en MP4, en alta calidad y optimizados para formato vertical: Reels, TikTok y Shorts.'],
  ['¿Puedo usar los videos para mi negocio o marca?', 'Sí. Puedes usarlos en tus cuentas personales, en tu marca o para crear contenido para tu negocio.'],
  ['¿Puedo usar los videos para cuentas de clientes?', 'Sí. Puedes utilizarlos para tus clientes, tu agencia o proyectos de terceros.'],
  ['¿Tiene garantía?', 'Sí. Tienes 7 días para probar la biblioteca. Si no te sirve, puedes solicitar la devolución.'],
  ['¿Funciona en mi país?', 'Sí. Es un producto digital disponible desde cualquier país. Solo necesitas conexión a internet para descargarlo.']
]

const testimonialImages = [
  '/testimonios/testemunho1.webp',
  '/testimonios/testemunho2.webp',
  '/testimonios/testemunho3 (1).webp',
  '/testimonios/testemunho4.webp',
  '/testimonios/testemunho5.webp',
  '/testimonios/testemunho6 (1).webp'
]

const videoSlots = [
  ['clip-01.mp4', 'Frutinovelas'],
  ['clip-02.mp4', 'Películas'],
  ['clip-03.mp4', 'Recetas'],
  ['clip-04.mp4', 'Fitness'],
  ['clip-05.mp4', 'Novelas'],
  ['clip-06.mp4', 'Podcast']
]

const purchaseUrl = 'https://payhip.com/b/dyCfg'
const activityNotices: [string, string][] = [
  ['María', 'México'], ['Andrés', 'Costa Rica'], ['Sofía', 'Colombia'], ['Luis', 'Perú'], ['Camila', 'Ecuador'], ['Valentina', 'Chile']
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [toast, setToast] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [activityNotice, setActivityNotice] = useState<[string, string] | null>(null)
  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((current) => (current + 1) % testimonialImages.length), 3600)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setActivityNotice(activityNotices[index % activityNotices.length])
      index += 1
      setTimeout(() => setActivityNotice(null), 7000)
    }, 30000)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 850px)').matches
    if (!isMobile) return
    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('.video-card video'))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement
        if (entry.isIntersecting) void video.play()
        else { video.pause(); video.currentTime = 0 }
      })
    }, { threshold: 0.55 })
    videos.forEach((video) => observer.observe(video))
    return () => observer.disconnect()
  }, [])
  const buy = () => { window.location.href = purchaseUrl }

  return <main>
    {toast && <div className="toast"><Check size={17} /> Oferta seleccionada · continúa abajo para completar tu pedido</div>}
    {activityNotice && <div className="activity-popup"><button aria-label="Cerrar aviso" onClick={() => setActivityNotice(null)}>×</button><div className="activity-avatar">{activityNotice[0].slice(0, 1)}</div><div><b>Interés reciente</b><p><strong>{activityNotice[0]}</strong> está explorando La Biblioteca Viral</p><small>📍 {activityNotice[1]} · hace unos segundos</small></div></div>}
    <nav className="nav"><div className="brand"><span className="brand-mark"><Sparkles size={17}/></span> La Biblioteca <span>Viral</span></div><div className="nav-links"><a href="#incluye">Incluye</a><a href="#bonos">Bonos</a><a href="#faq">FAQ</a></div><button className="nav-cta" onClick={buy}>Quiero La Biblioteca Viral <ArrowRight size={16}/></button></nav>

    <section className="hero section-pad">
      <div className="hero-copy"><div className="eyebrow"><span className="pulse-dot"/> Biblioteca viral lista para publicar</div><h1>Más de 250.000 Videos Virales Sin Rostro — Listos Para Publicar en Tus Redes Hoy Mismo</h1><p className="lead">Contenido vertical de alta calidad para publicar todos los días sin grabar, editar ni mostrar tu cara.</p><div className="hero-actions"><button className="button primary" onClick={buy}>Ver la oferta especial <ArrowRight size={18}/></button><a className="play-link" href="#videos"><span className="play"><Play size={13} fill="currentColor"/></span> Mira la calidad</a></div><div className="mini-proof"><div className="avatars"><span>LM</span><span>CA</span><span>VR</span><span>+4k</span></div><div><div className="stars">★★★★★ <small>4.9/5</small></div><p>Creadores publicando mejor cada semana</p></div></div></div>
      <div className="hero-art"><div className="art-glow"/><div className="phone"><div className="phone-top">La Biblioteca Viral <span>•••</span></div><div className="phone-img"/><div className="phone-caption"><strong>Videos virales listos para publicar.</strong><span>contenido · claridad · conexión</span></div><div className="phone-actions"><span>♡</span><span>◌</span><span>↗</span></div></div><div className="float-card card-one"><span className="icon-coral"><Zap size={16}/></span><div><b>+38%</b><small>más interacción</small></div></div><div className="float-card card-two"><span className="icon-blue"><Clock3 size={16}/></span><div><b>12h</b><small>ahorradas / mes</small></div></div></div>
    </section>

    <section className="logo-strip"><span>HECHO PARA PUBLICAR EN</span><b><Instagram size={16}/> INSTAGRAM</b><b>tiktok</b><b>◉ YOUTUBE</b><b>pinterest</b></section>

    <section id="incluye" className="section-pad intro"><div className="section-label">La biblioteca completa</div><h2>De “no sé qué publicar” a <span>tengo contenido.</span></h2><p className="center-copy">La Biblioteca Viral reúne videos listos para publicar, organizados por nicho para que crear contenido deje de sentirse como otra tarea pendiente.</p><div className="stats"><div><strong>250k+</strong><span>videos virales</span></div><div><strong>50+</strong><span>categorías de contenido</span></div><div><strong>100%</strong><span>listos para publicar</span></div></div></section>

    <section className="feature-grid section-pad"><div className="feature-feature"><div className="feature-visual"><div className="visual-caption">BIBLIOTECA VIRAL <b>01</b></div></div><div className="feature-text"><div className="section-label">01 / publicar</div><h3>Videos virales listos para publicar hoy.</h3><p>Clips verticales, dinámicos y organizados por nicho para que tengas contenido nuevo sin grabar, editar ni mostrar tu cara.</p><a href="#videos">Ver la biblioteca <ArrowRight size={16}/></a></div></div><div className="feature-list"><div><span className="number">02</span><div><h4>Contenido que detiene el scroll</h4><p>Videos visualmente potentes para captar atención desde el primer segundo.</p></div></div><div><span className="number">03</span><div><h4>Listos para Reels, TikTok y Shorts</h4><p>Formato vertical y alta calidad para publicar en tus redes favoritas.</p></div></div><div><span className="number">04</span><div><h4>Publica todos los días</h4><p>Una biblioteca completa para dejar de improvisar y mantener tu cuenta activa.</p></div></div></div></section>

    <section className="section-pad niches"><div className="section-head"><div><div className="section-label">Elige tu universo</div><h2>Contenido para cualquier <span>dirección.</span></h2></div><p>Explora los temas más buscados y construye una identidad visual que se sienta propia.</p></div><div className="niche-grid">{niches.map(([name,img]) => <div className="niche" key={name} style={{backgroundImage:`linear-gradient(0deg, rgba(15,32,45,.76), transparent 65%), url(${img})`}}><span>{name}</span><ArrowRight size={18}/></div>)}</div></section>

    <section id="videos" className="video-showcase section-pad"><div className="section-head"><div><div className="section-label">Mira la calidad</div><h2>Videos que hacen <span>parar el scroll.</span></h2></div><p>Pasa el cursor por encima para reproducirlos y comprueba la calidad del contenido que recibirás.</p></div><div className="video-grid">{videoSlots.map(([file, label]) => <div className="video-card" key={file}><video src={`/videos/${file}`} muted playsInline preload="metadata" onMouseEnter={(event) => { void event.currentTarget.play() }} onMouseLeave={(event) => { event.currentTarget.pause(); event.currentTarget.currentTime = 0 }} /><div className="video-overlay"><Play size={18} fill="currentColor"/><span>Pasar el cursor para reproducir</span></div><span>{label}</span></div>)}</div><p className="upload-hint">Contenido vertical listo para publicar en Reels, TikTok y Shorts.</p></section>

    <section className="testimonials section-pad"><div className="section-head"><div><div className="section-label">Prueba social</div><h2>Lo que están <span>creando.</span></h2></div><p>Capturas reales de personas que ya están usando el sistema para publicar con más seguridad.</p></div><div className="testimonial-slider"><div className="testimonial-track" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>{testimonialImages.map((image, index) => <div className="testimonial-slide" key={image}><img src={image} alt={`Testimonio de cliente ${index + 1}`} /></div>)}</div></div><div className="slider-controls"><div className="slider-dots">{testimonialImages.map((image, index) => <button aria-label={`Ver testimonio ${index + 1}`} className={activeTestimonial === index ? 'active' : ''} onClick={() => setActiveTestimonial(index)} key={image}/>)}</div><span>Desliza automáticamente · {activeTestimonial + 1} / {testimonialImages.length}</span></div></section>

    <section id="bonos" className="bonus-section section-pad"><div className="bonus-heading"><div className="section-label">Además recibes</div><h2>Cuatro extras para<br/><span>avanzar más rápido.</span></h2></div><div className="bonus-grid"><article><span className="bonus-icon">✦</span><small>BONO 01</small><h3>Calendario de publicación</h3><p>30 días de ideas accionables para mantener tu energía creativa en movimiento.</p></article><article><span className="bonus-icon">◒</span><small>BONO 02</small><h3>Pack de audio en tendencia</h3><p>Una selección de sonidos y ambientes para darle ritmo a tus piezas.</p></article><article><span className="bonus-icon">◎</span><small>BONO 03</small><h3>Guía de storytelling</h3><p>La fórmula para contar algo breve y que tu audiencia quiera quedarse.</p></article><article><span className="bonus-icon">↗</span><small>BONO 04</small><h3>Checklist de lanzamiento</h3><p>Publica tu próxima campaña con una ruta clara y sin olvidar ningún detalle.</p></article></div></section>

    <section className="testimonial section-pad"><div className="quote-mark">“</div><blockquote>Dejó de darme miedo abrir el editor. Ahora tengo un sistema, una estética y contenido que se siente mío.</blockquote><div className="quote-person"><div className="person-avatar">MS</div><div><b>María Solís</b><span>Consultora & creadora de contenido</span></div></div></section>

    <section id="checkout" className="checkout section-pad"><div className="offer-copy"><div className="section-label">Acceso inmediato</div><h2>Haz espacio para<br/><span>crear más.</span></h2><p>Una sola compra. Todo el contenido. Sin cuotas mensuales.</p><ul>{['La Biblioteca Viral completa','250.000+ videos en MP4','50+ nichos organizados','Acceso inmediato de por vida','Garantía de 7 días'].map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul></div><div className="price-card"><div className="ribbon">OFERTA DE LANZAMIENTO</div><div className="price-top"><span>Valor real <s>$49</s></span><div><strong>$7</strong><small>USD / pago único</small></div></div><div className="price-divider"/><p className="card-note">Acceso de por vida · Entrega digital inmediata</p><button className="button primary full" onClick={buy}>Quiero La Biblioteca Viral <ArrowRight size={18}/></button><div className="safe"><ShieldCheck size={18}/><span><b>Compra protegida</b><small>Garantía simple de 7 días</small></span></div></div></section>

    <section id="faq" className="faq section-pad"><div className="section-label">Preguntas frecuentes</div><h2>Lo que necesitas <span>saber.</span></h2><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?'open':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i && <p>{a}</p>}</div>)}</div></section>

    <footer><div className="brand"><span className="brand-mark"><Sparkles size={17}/></span> La Biblioteca <span>Viral</span></div><p>Videos virales listos para publicar.</p><div className="footer-right">© 2026 La Biblioteca Viral · Términos · Privacidad</div></footer>
  </main>
}
