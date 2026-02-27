<!-- ============================================================ -->
<!-- CHATBOT CLÍNICA ESTÉTICA — pegar en "End of <body> tag"     -->
<!-- ANTES DE PUBLICAR: cambia las 3 URLs marcadas con 🔧        -->
<!-- ============================================================ -->

<style>
  :root {
    --cream: #F9F5F0;
    --gold: #C9A96E;
    --gold-light: #E8D5B0;
    --dark: #1A1614;
    --warm-gray: #6B6460;
    --rose: #D4A5A0;
    --shadow: 0 24px 64px rgba(26,22,20,0.18);
  }

  #chat-launcher {
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, var(--gold) 0%, #A0784A 100%);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 32px rgba(201,169,110,0.4);
    transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
    z-index: 9999;
    animation: ce-pulse 3s infinite;
  }
  #chat-launcher:hover { transform: scale(1.08); box-shadow: 0 12px 40px rgba(201,169,110,0.6); }
  #chat-launcher svg { transition: transform 0.3s ease; }
  #chat-launcher.open svg { transform: rotate(45deg); }
  @keyframes ce-pulse {
    0%,100% { box-shadow: 0 8px 32px rgba(201,169,110,0.4), 0 0 0 0 rgba(201,169,110,0.3); }
    50% { box-shadow: 0 8px 32px rgba(201,169,110,0.4), 0 0 0 12px rgba(201,169,110,0); }
  }

  #chat-widget {
    position: fixed;
    bottom: 112px;
    right: 32px;
    width: 400px;
    max-height: 620px;
    background: var(--cream);
    border-radius: 24px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 9998;
    transform: scale(0.85) translateY(20px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
    transform-origin: bottom right;
    font-family: 'DM Sans', sans-serif;
  }
  #chat-widget.visible { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }

  .ce-header {
    background: linear-gradient(135deg, var(--dark) 0%, #2D2420 100%);
    padding: 20px 24px;
    position: relative;
    overflow: hidden;
  }
  .ce-header::before {
    content: '';
    position: absolute;
    top: -30px; right: -30px;
    width: 120px; height: 120px;
    background: radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%);
    border-radius: 50%;
  }
  .ce-header-top { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
  .ce-avatar {
    width: 40px; height: 40px;
    background: linear-gradient(135deg, var(--gold) 0%, #A0784A 100%);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px; color: white; font-weight: 600; flex-shrink: 0;
  }
  .ce-header-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px; font-weight: 600; color: white; letter-spacing: 0.5px;
  }
  .ce-header-status { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--gold-light); font-weight: 300; margin-top: 2px; }
  .ce-status-dot { width: 6px; height: 6px; background: #4CAF50; border-radius: 50%; animation: ce-blink 2s infinite; }
  @keyframes ce-blink { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
  .ce-header-sub { font-size: 12px; color: rgba(255,255,255,0.5); font-weight: 300; letter-spacing: 0.3px; }

  .ce-progress-wrap { padding: 12px 24px 0; background: var(--cream); border-bottom: 1px solid rgba(201,169,110,0.15); }
  .ce-progress-label { font-size: 10px; color: var(--warm-gray); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: 500; }
  .ce-progress-bar { height: 3px; background: rgba(201,169,110,0.2); border-radius: 2px; overflow: hidden; margin-bottom: 12px; }
  .ce-progress-fill { height: 100%; background: linear-gradient(90deg, var(--gold) 0%, var(--rose) 100%); border-radius: 2px; transition: width 0.6s cubic-bezier(.4,0,.2,1); width: 0%; }

  .ce-messages {
    flex: 1; overflow-y: auto; padding: 20px 20px 8px;
    display: flex; flex-direction: column; gap: 12px;
    scrollbar-width: thin; scrollbar-color: rgba(201,169,110,0.3) transparent;
    max-height: 340px;
  }
  .ce-messages::-webkit-scrollbar { width: 4px; }
  .ce-messages::-webkit-scrollbar-thumb { background: rgba(201,169,110,0.3); border-radius: 2px; }

  .ce-msg { display: flex; gap: 8px; animation: ce-slide 0.3s cubic-bezier(.4,0,.2,1); }
  @keyframes ce-slide { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .ce-msg-av {
    width: 28px; height: 28px;
    background: linear-gradient(135deg, var(--gold) 0%, #A0784A 100%);
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 11px; color: white; font-weight: 600; flex-shrink: 0; margin-top: 2px;
  }
  .ce-bubble {
    background: white; border-radius: 16px 16px 16px 4px;
    padding: 12px 16px; max-width: 85%; font-size: 13.5px;
    line-height: 1.55; color: var(--dark);
    box-shadow: 0 2px 8px rgba(26,22,20,0.07);
  }
  .ce-bubble strong { font-weight: 600; color: var(--dark); }

  .ce-options { padding: 8px 20px 16px; display: flex; flex-direction: column; gap: 6px; animation: ce-slide 0.3s cubic-bezier(.4,0,.2,1) 0.15s both; }
  .ce-opt {
    background: white; border: 1.5px solid rgba(201,169,110,0.3);
    border-radius: 12px; padding: 10px 16px;
    font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--dark);
    cursor: pointer; text-align: left;
    transition: all 0.2s ease; display: flex; align-items: center; gap: 10px;
  }
  .ce-opt:hover { background: linear-gradient(135deg,#FBF8F4,#F5EDE0); border-color: var(--gold); transform: translateX(4px); box-shadow: 0 4px 16px rgba(201,169,110,0.15); }

  .ce-text-wrap { padding: 8px 20px 16px; animation: ce-slide 0.3s ease 0.15s both; }
  .ce-text-inner { display: flex; gap: 8px; background: white; border: 1.5px solid rgba(201,169,110,0.3); border-radius: 14px; padding: 8px 8px 8px 16px; transition: border-color 0.2s; }
  .ce-text-inner:focus-within { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,169,110,0.1); }
  .ce-input { flex: 1; border: none; outline: none; font-family: 'DM Sans', sans-serif; font-size: 13.5px; color: var(--dark); background: transparent; }
  .ce-input::placeholder { color: rgba(107,100,96,0.6); }
  .ce-send { width: 34px; height: 34px; background: linear-gradient(135deg, var(--gold) 0%, #A0784A 100%); border: none; border-radius: 10px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform 0.2s; flex-shrink: 0; }
  .ce-send:hover { transform: scale(1.08); }

  .ce-multifield { padding: 8px 20px 16px; display: flex; flex-direction: column; gap: 8px; animation: ce-slide 0.3s ease 0.15s both; }
  .ce-field { background: white; border: 1.5px solid rgba(201,169,110,0.3); border-radius: 12px; padding: 10px 14px; font-family: 'DM Sans', sans-serif; font-size: 13px; color: var(--dark); outline: none; transition: border-color 0.2s; }
  .ce-field:focus { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,169,110,0.1); }
  .ce-field::placeholder { color: rgba(107,100,96,0.5); }
  .ce-submit { background: linear-gradient(135deg, var(--dark) 0%, #2D2420 100%); color: var(--gold); border: none; border-radius: 12px; padding: 12px 20px; font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 500; cursor: pointer; margin-top: 4px; transition: transform 0.2s, box-shadow 0.2s; }
  .ce-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(26,22,20,0.25); }

  .ce-result-wrap { padding: 8px 20px 20px; animation: ce-slide 0.4s ease; }
  .ce-result-card { background: linear-gradient(135deg, var(--dark) 0%, #2D2420 100%); border-radius: 16px; padding: 20px; position: relative; overflow: hidden; }
  .ce-result-card::before { content: ''; position: absolute; top: -20px; right: -20px; width: 100px; height: 100px; background: radial-gradient(circle, rgba(201,169,110,0.2) 0%, transparent 70%); }
  .ce-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(201,169,110,0.15); border: 1px solid rgba(201,169,110,0.3); border-radius: 20px; padding: 4px 12px; font-size: 11px; color: var(--gold-light); letter-spacing: 0.5px; font-weight: 500; text-transform: uppercase; margin-bottom: 12px; }
  .ce-result-title { font-family: 'Cormorant Garamond', serif; font-size: 20px; color: white; font-weight: 500; line-height: 1.3; margin-bottom: 10px; }
  .ce-result-desc { font-size: 12.5px; color: rgba(255,255,255,0.65); line-height: 1.6; margin-bottom: 16px; font-weight: 300; }
  .ce-cta { display: block; width: 100%; background: linear-gradient(135deg, var(--gold) 0%, #A0784A 100%); color: white; border: none; border-radius: 12px; padding: 13px 20px; font-family: 'DM Sans', sans-serif; font-size: 13.5px; font-weight: 500; cursor: pointer; text-align: center; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
  .ce-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,169,110,0.4); }

  .ce-typing { display: flex; gap: 8px; align-items: center; padding: 0 20px 8px; animation: ce-slide 0.2s ease; }
  .ce-typing-dots { background: white; border-radius: 12px; padding: 10px 16px; display: flex; gap: 4px; align-items: center; box-shadow: 0 2px 8px rgba(26,22,20,0.07); }
  .ce-dot { width: 6px; height: 6px; background: var(--gold); border-radius: 50%; animation: ce-typing 1.2s infinite; }
  .ce-dot:nth-child(2) { animation-delay: 0.2s; }
  .ce-dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes ce-typing { 0%,100% { transform: translateY(0); opacity: 0.5; } 50% { transform: translateY(-4px); opacity: 1; } }

  @media (max-width: 480px) {
    #chat-widget { width: calc(100vw - 32px); right: 16px; bottom: 96px; }
    #chat-launcher { right: 16px; bottom: 16px; }
  }
</style>

<!-- BOTÓN FLOTANTE -->
<button id="chat-launcher" onclick="ceToggle()">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="12" y1="8" x2="12" y2="16" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <line x1="8" y1="12" x2="16" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>
</button>

<!-- WIDGET -->
<div id="chat-widget">
  <div class="ce-header">
    <div class="ce-header-top">
      <div class="ce-avatar">A</div>
      <div>
        <div class="ce-header-name">Asistente Estética</div>
        <div class="ce-header-status"><div class="ce-status-dot"></div> En línea ahora</div>
      </div>
    </div>
    <div class="ce-header-sub">Diagnóstico gratuito · 3 minutos</div>
  </div>
  <div class="ce-progress-wrap">
    <div class="ce-progress-label">Progreso del diagnóstico</div>
    <div class="ce-progress-bar"><div class="ce-progress-fill" id="ce-progress"></div></div>
  </div>
  <div class="ce-messages" id="ce-messages"></div>
  <div id="ce-input"></div>
</div>

<script>
// ============================================================
// 🔧 CAMBIA ESTAS 3 URLs ANTES DE PUBLICAR
// ============================================================
const CE_WEBHOOK    = 'https://TU-N8N.com/webhook/clinica-chatbot'; // URL de n8n
const CE_CALENDLY_A = 'https://calendly.com/tu-link-perfil-a';       // Perfil A
const CE_CALENDLY_B = 'https://calendly.com/tu-link-perfil-b';       // Perfil B
const CE_GUIA_URL   = 'https://tu-web.com/guia-gratuita';            // Perfil C
// ============================================================

let ceOpen = false, ceStep = 'inicio', ceData = {};
const ceId = 'ce_' + Date.now();

const ceFlow = {
  inicio: {
    msg: '👋 Hola, soy el asistente de diagnóstico.\n\n¿Tienes una clínica estética y quieres generar <strong>pacientes nuevos cada mes de forma predecible</strong>?',
    type: 'options', progress: 0,
    options: [
      { icon:'✅', text:'Sí, quiero más pacientes', value:'si', next:'q1' },
      { icon:'🔍', text:'Solo estoy investigando', value:'investigando', next:'investigando' },
      { icon:'❓', text:'Tengo una duda puntual', value:'duda', next:'investigando' }
    ]
  },
  q1: {
    msg: '💰 <strong>Bloque 1 — Diagnóstico Financiero</strong>\n\n¿Cuál es la <strong>facturación mensual</strong> aproximada de tu clínica?',
    type: 'options', progress: 9, key: 'facturacion',
    options: [
      { text:'Menos de 10.000€', value:'menos_10k', next:'q2' },
      { text:'10.000€ – 25.000€', value:'10k_25k', next:'q2' },
      { text:'25.000€ – 50.000€', value:'25k_50k', next:'q2' },
      { text:'Más de 50.000€', value:'mas_50k', next:'q2' }
    ]
  },
  q2: {
    msg: '2️⃣ ¿Qué porcentaje proviene de <strong>tratamientos de alto ticket</strong>?',
    type: 'options', progress: 18, key: 'alto_ticket',
    options: [
      { text:'0–25%', value:'0_25', next:'q3' },
      { text:'25–50%', value:'25_50', next:'q3' },
      { text:'50%+', value:'50_mas', next:'q3' },
      { text:'No lo sé', value:'no_se', next:'q3' }
    ]
  },
  q3: {
    msg: '3️⃣ ¿Actualmente inviertes en <strong>publicidad digital</strong>?',
    type: 'options', progress: 27, key: 'publicidad',
    options: [
      { text:'No', value:'no', next:'q4' },
      { text:'Menos de 500€/mes', value:'menos_500', next:'q4' },
      { text:'500€ – 1.500€/mes', value:'500_1500', next:'q4' },
      { text:'Más de 1.500€/mes', value:'mas_1500', next:'q4' }
    ]
  },
  q4: {
    msg: '📊 <strong>Bloque 2 — Marketing actual</strong>\n\n¿De dónde vienen la mayoría de tus pacientes?',
    type: 'options', progress: 36, key: 'origen',
    options: [
      { icon:'🗣️', text:'Recomendaciones', value:'recomendaciones', next:'q5' },
      { icon:'📸', text:'Instagram orgánico', value:'instagram', next:'q5' },
      { icon:'📱', text:'Meta Ads', value:'meta_ads', next:'q5' },
      { icon:'🔍', text:'Google Ads', value:'google_ads', next:'q5' },
      { icon:'❓', text:'No lo tengo claro', value:'no_claro', next:'q5' }
    ]
  },
  q5: {
    msg: '5️⃣ ¿Tienes un sistema de <strong>seguimiento automático</strong> de leads?',
    type: 'options', progress: 45, key: 'crm',
    options: [
      { icon:'✅', text:'Sí, CRM', value:'crm', next:'q6' },
      { icon:'💬', text:'Solo WhatsApp', value:'whatsapp', next:'q6' },
      { icon:'📋', text:'Excel básico', value:'excel', next:'q6' },
      { icon:'❌', text:'No tengo sistema', value:'sin_sistema', next:'q6' }
    ]
  },
  q6: {
    msg: '6️⃣ ¿Cuántos <strong>leads nuevos</strong> recibes al mes?',
    type: 'options', progress: 54, key: 'leads_mes',
    options: [
      { text:'0–10 leads', value:'0_10', next:'q7' },
      { text:'10–30 leads', value:'10_30', next:'q7' },
      { text:'30+ leads', value:'30_mas', next:'q7' }
    ]
  },
  q7: {
    msg: '🧠 <strong>Bloque 3 — Dolor real</strong>\n\n¿Cuál es tu <strong>mayor problema</strong> ahora mismo?',
    type: 'options', progress: 63, key: 'problema',
    options: [
      { icon:'😰', text:'Falta de pacientes', value:'falta_pacientes', next:'q8' },
      { icon:'🗑️', text:'Leads de baja calidad', value:'leads_calidad', next:'q8' },
      { icon:'❌', text:'Cancelaciones frecuentes', value:'cancelaciones', next:'q8' },
      { icon:'📈', text:'No escalo la facturación', value:'no_escala', next:'q8' },
      { icon:'🎲', text:'Sin previsibilidad de ingresos', value:'sin_prev', next:'q8' }
    ]
  },
  q8: {
    msg: '8️⃣ ¿En qué <strong>plazo</strong> te gustaría mejorar esto?',
    type: 'options', progress: 72, key: 'plazo',
    options: [
      { icon:'🔥', text:'Inmediatamente', value:'inmediato', next:'q9' },
      { icon:'📅', text:'1–3 meses', value:'1_3', next:'q9' },
      { icon:'🗓️', text:'3–6 meses', value:'3_6', next:'q9' },
      { icon:'🔭', text:'Solo evaluando opciones', value:'evaluando', next:'q9' }
    ]
  },
  q9: {
    msg: '🏢 <strong>Bloque 4 — Tu negocio</strong>\n\n¿En qué <strong>ciudad o país</strong> operas?',
    type: 'text', progress: 81, key: 'ciudad', next: 'q10',
    placeholder: 'Ej: Madrid, Barcelona, México DF...'
  },
  q10: {
    msg: '🔟 ¿Cuántos <strong>empleados</strong> tiene tu clínica?',
    type: 'options', progress: 90, key: 'empleados',
    options: [
      { icon:'👤', text:'Solo yo', value:'solo', next:'q11' },
      { icon:'👥', text:'2–5 personas', value:'2_5', next:'q11' },
      { icon:'🏥', text:'5–10 personas', value:'5_10', next:'q11' },
      { icon:'🏢', text:'Más de 10', value:'mas_10', next:'q11' }
    ]
  },
  q11: {
    msg: '📞 <strong>¡Casi listo!</strong>\n\nPara enviarte una <strong>propuesta personalizada</strong>, déjame tus datos:',
    type: 'multifield', progress: 99, next: 'resultado'
  },
  investigando: {
    msg: '👋 No hay problema, entiendo que estás explorando.\n\nCuando quieras dar el siguiente paso para conseguir más pacientes de forma predecible, aquí estaré. 😊',
    type: 'end_soft', progress: 10
  }
};

function ceToggle() {
  ceOpen = !ceOpen;
  document.getElementById('chat-widget').classList.toggle('visible', ceOpen);
  document.getElementById('chat-launcher').classList.toggle('open', ceOpen);
  if (ceOpen && document.getElementById('ce-messages').children.length === 0) {
    setTimeout(() => ceShow('inicio'), 300);
  }
}

function ceProgress(p) { document.getElementById('ce-progress').style.width = p + '%'; }

function ceAddBot(html) {
  const c = document.getElementById('ce-messages');
  const d = document.createElement('div');
  d.className = 'ce-msg';
  d.innerHTML = `<div class="ce-msg-av">A</div><div class="ce-bubble">${html.replace(/\n/g,'<br>')}</div>`;
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}

function ceAddUser(text) {
  const c = document.getElementById('ce-messages');
  const d = document.createElement('div');
  d.className = 'ce-msg';
  d.style.justifyContent = 'flex-end';
  d.innerHTML = `<div class="ce-bubble" style="background:linear-gradient(135deg,#2D2420,#1A1614);color:white;border-radius:16px 16px 4px 16px;box-shadow:0 2px 8px rgba(26,22,20,0.2)">${text}</div>`;
  c.appendChild(d);
  c.scrollTop = c.scrollHeight;
}

function ceTyping() {
  const c = document.getElementById('ce-messages');
  const d = document.createElement('div');
  d.className = 'ce-typing'; d.id = 'ce-typing';
  d.innerHTML = `<div class="ce-msg-av">A</div><div class="ce-typing-dots"><div class="ce-dot"></div><div class="ce-dot"></div><div class="ce-dot"></div></div>`;
  c.appendChild(d); c.scrollTop = c.scrollHeight;
}

function ceRemoveTyping() { const t = document.getElementById('ce-typing'); if(t) t.remove(); }
function ceClearInput() { document.getElementById('ce-input').innerHTML = ''; }

function ceShow(key) {
  const step = ceFlow[key];
  if (!step) return;
  ceStep = key;
  ceProgress(step.progress);
  ceClearInput();
  ceTyping();
  setTimeout(() => {
    ceRemoveTyping();
    ceAddBot(step.msg);
    setTimeout(() => ceRender(step), 200);
  }, 700);
}

function ceRender(step) {
  const area = document.getElementById('ce-input');
  if (step.type === 'options') {
    const div = document.createElement('div');
    div.className = 'ce-options';
    step.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'ce-opt';
      btn.innerHTML = `${opt.icon ? `<span>${opt.icon}</span>` : ''}<span>${opt.text}</span>`;
      btn.onclick = () => { if(step.key) ceData[step.key]=opt.value; ceAddUser((opt.icon?opt.icon+' ':'')+opt.text); ceClearInput(); setTimeout(()=>ceShow(opt.next),400); };
      div.appendChild(btn);
    });
    area.appendChild(div);
  } else if (step.type === 'text') {
    const div = document.createElement('div');
    div.className = 'ce-text-wrap';
    div.innerHTML = `<div class="ce-text-inner"><input type="text" class="ce-input" id="ce-text-ans" placeholder="${step.placeholder||'Escribe aquí...'}"/><button class="ce-send" onclick="ceSendText()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><line x1="22" y1="2" x2="11" y2="13" stroke="white" stroke-width="2.5" stroke-linecap="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="white" stroke-width="2" fill="none" stroke-linejoin="round"/></svg></button></div>`;
    area.appendChild(div);
    setTimeout(()=>document.getElementById('ce-text-ans')?.focus(),100);
    document.getElementById('ce-text-ans').addEventListener('keydown',e=>{if(e.key==='Enter')ceSendText();});
  } else if (step.type === 'multifield') {
    const div = document.createElement('div');
    div.className = 'ce-multifield';
    div.innerHTML = `
      <input type="text"  class="ce-field" id="ce-f1" placeholder="Nombre de la clínica"/>
      <input type="text"  class="ce-field" id="ce-f2" placeholder="Tu nombre"/>
      <input type="email" class="ce-field" id="ce-f3" placeholder="Email de contacto"/>
      <input type="tel"   class="ce-field" id="ce-f4" placeholder="Teléfono (con prefijo)"/>
      <button class="ce-submit" onclick="ceSendForm()">Enviar y ver mi propuesta →</button>`;
    area.appendChild(div);
  }
}

function ceSendText() {
  const val = document.getElementById('ce-text-ans')?.value?.trim();
  if (!val) return;
  const step = ceFlow[ceStep];
  if (step.key) ceData[step.key] = val;
  ceAddUser(val); ceClearInput();
  setTimeout(()=>ceShow(step.next),400);
}

function ceSendForm() {
  const f1 = document.getElementById('ce-f1').value.trim();
  const f2 = document.getElementById('ce-f2').value.trim();
  const f3 = document.getElementById('ce-f3').value.trim();
  const f4 = document.getElementById('ce-f4').value.trim();
  if (!f1||!f2||!f3||!f4) { alert('Por favor completa todos los campos.'); return; }
  ceData.nombre_clinica=f1; ceData.nombre_responsable=f2; ceData.email=f3; ceData.telefono=f4;
  ceAddUser(`${f1} · ${f2} · ${f3} · ${f4}`);
  ceClearInput();
  const perfil = cePerfil();
  ceData.perfil = perfil;
  ceEnviar(ceData);
  setTimeout(()=>ceResultado(perfil),600);
}

function cePerfil() {
  const { facturacion, publicidad, plazo } = ceData;
  if (['25k_50k','mas_50k'].includes(facturacion) && ['500_1500','mas_1500'].includes(publicidad) && plazo==='inmediato') return 'A';
  if (facturacion==='10k_25k' || ['500_1500','mas_1500'].includes(publicidad)) return 'B';
  return 'C';
}

function ceResultado(perfil) {
  ceProgress(100);
  document.getElementById('ce-input').innerHTML = '';
  const cfgs = {
    A: { badge:'⭐ Perfil prioritario', title:'Puedes escalar de forma estructurada', desc:'Tu perfil indica capacidad real de crecimiento. Trabajamos con clínicas similares logrando +40% de leads cualificados en 60 días.', cta:'📅 Agendar sesión estratégica', url: CE_CALENDLY_A },
    B: { badge:'💡 Potencial de crecimiento', title:'Podemos estructurar tu captación', desc:'Tu clínica está en el punto ideal para un sistema de captación predecible. Resultados visibles en menos de 90 días.', cta:'🔍 Agendar diagnóstico gratuito', url: CE_CALENDLY_B },
    C: { badge:'📚 Recursos gratuitos', title:'Empieza con nuestra guía gratuita', desc:'Te hemos preparado una guía con los 5 pasos para conseguir tus primeros 10 pacientes al mes con publicidad digital.', cta:'📧 Descargar guía gratuita', url: CE_GUIA_URL }
  };
  const cfg = cfgs[perfil];
  ceTyping();
  setTimeout(()=>{
    ceRemoveTyping();
    ceAddBot(`✅ <strong>¡Gracias, ${ceData.nombre_responsable}!</strong>\n\nHe analizado tu perfil. Aquí tienes mi recomendación:`);
    setTimeout(()=>{
      const div = document.createElement('div');
      div.className = 'ce-result-wrap';
      div.innerHTML = `<div class="ce-result-card"><div class="ce-badge">${cfg.badge}</div><div class="ce-result-title">${cfg.title}</div><div class="ce-result-desc">${cfg.desc}</div><a href="${cfg.url}" target="_blank" class="ce-cta">${cfg.cta}</a></div>`;
      document.getElementById('ce-input').appendChild(div);
      document.getElementById('ce-messages').scrollTop = 99999;
    },400);
  },900);
}

async function ceEnviar(data) {
  try {
    await fetch(CE_WEBHOOK, {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ sessionId: ceId, timestamp: new Date().toISOString(), ...data })
    });
  } catch(e) { console.warn('Webhook no disponible:', e.message); }
}
</script>
