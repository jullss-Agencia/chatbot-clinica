(function() {
  var CE_WEBHOOK    = 'https://odrsto.app.n8n.cloud/webhook/clinica-chatbot';
  var CE_CALENDLY_A = 'https://calendly.com/tu-link-perfil-a';
  var CE_CALENDLY_B = 'https://calendly.com/tu-link-perfil-b';
  var CE_GUIA_URL   = 'https://tu-web.com/guia-gratuita';

  function ceInit() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&display=swap';
    document.head.appendChild(link);

    var style = document.createElement('style');
    style.textContent = ':root{--ceg:#C9A96E;--ced:#1A1614;--cec:#F9F5F0}'
    +' #ce-launcher{position:fixed;bottom:32px;right:32px;width:64px;height:64px;background:linear-gradient(135deg,#C9A96E,#A0784A);border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 32px rgba(201,169,110,0.4);z-index:9999;animation:cepulse 3s infinite;transition:transform .3s}'
    +' #ce-launcher:hover{transform:scale(1.08)}'
    +' #ce-launcher svg{transition:transform .3s}'
    +' #ce-launcher.open svg{transform:rotate(45deg)}'
    +' @keyframes cepulse{0%,100%{box-shadow:0 8px 32px rgba(201,169,110,0.4),0 0 0 0 rgba(201,169,110,0.3)}50%{box-shadow:0 8px 32px rgba(201,169,110,0.4),0 0 0 12px rgba(201,169,110,0)}}'
    +' #ce-widget{position:fixed;bottom:112px;right:32px;width:400px;max-height:620px;background:#F9F5F0;border-radius:24px;box-shadow:0 24px 64px rgba(26,22,20,0.18);display:flex;flex-direction:column;overflow:hidden;z-index:9998;transform:scale(.85) translateY(20px);opacity:0;pointer-events:none;transition:all .35s cubic-bezier(.34,1.56,.64,1);transform-origin:bottom right;font-family:"DM Sans",sans-serif}'
    +' #ce-widget.visible{transform:scale(1) translateY(0);opacity:1;pointer-events:all}'
    +' .ce-hdr{background:linear-gradient(135deg,#1A1614,#2D2420);padding:20px 24px;position:relative;overflow:hidden}'
    +' .ce-hdr-top{display:flex;align-items:center;gap:12px;margin-bottom:6px}'
    +' .ce-av{width:40px;height:40px;background:linear-gradient(135deg,#C9A96E,#A0784A);border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:"Cormorant Garamond",serif;font-size:18px;color:#fff;font-weight:600;flex-shrink:0}'
    +' .ce-hdr-name{font-family:"Cormorant Garamond",serif;font-size:16px;font-weight:600;color:#fff}'
    +' .ce-hdr-st{display:flex;align-items:center;gap:6px;font-size:11px;color:#E8D5B0;margin-top:2px}'
    +' .ce-dot{width:6px;height:6px;background:#4CAF50;border-radius:50%;animation:ceblink 2s infinite}'
    +' @keyframes ceblink{0%,100%{opacity:1}50%{opacity:.4}}'
    +' .ce-hdr-sub{font-size:12px;color:rgba(255,255,255,0.5)}'
    +' .ce-pw{padding:12px 24px 0;background:#F9F5F0;border-bottom:1px solid rgba(201,169,110,0.15)}'
    +' .ce-pl{font-size:10px;color:#6B6460;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;font-weight:500}'
    +' .ce-pb{height:3px;background:rgba(201,169,110,0.2);border-radius:2px;overflow:hidden;margin-bottom:12px}'
    +' .ce-pf{height:100%;background:linear-gradient(90deg,#C9A96E,#D4A5A0);border-radius:2px;transition:width .6s;width:0}'
    +' .ce-msgs{flex:1;overflow-y:auto;padding:20px 20px 8px;display:flex;flex-direction:column;gap:12px;max-height:340px;scrollbar-width:thin}'
    +' .ce-msg{display:flex;gap:8px;animation:ceslide .3s ease}'
    +' @keyframes ceslide{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}'
    +' .ce-mav{width:28px;height:28px;background:linear-gradient(135deg,#C9A96E,#A0784A);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;color:#fff;font-weight:600;flex-shrink:0;margin-top:2px}'
    +' .ce-bbl{background:#fff;border-radius:16px 16px 16px 4px;padding:12px 16px;max-width:85%;font-size:13.5px;line-height:1.55;color:#1A1614;box-shadow:0 2px 8px rgba(26,22,20,0.07)}'
    +' .ce-bbl strong{font-weight:600}'
    +' .ce-opts{padding:8px 20px 16px;display:flex;flex-direction:column;gap:6px}'
    +' .ce-opt{background:#fff;border:1.5px solid rgba(201,169,110,0.3);border-radius:12px;padding:10px 16px;font-family:"DM Sans",sans-serif;font-size:13px;color:#1A1614;cursor:pointer;text-align:left;transition:all .2s;display:flex;align-items:center;gap:10px}'
    +' .ce-opt:hover{background:#F5EDE0;border-color:#C9A96E;transform:translateX(4px)}'
    +' .ce-tw{padding:8px 20px 16px}'
    +' .ce-ti{display:flex;gap:8px;background:#fff;border:1.5px solid rgba(201,169,110,0.3);border-radius:14px;padding:8px 8px 8px 16px}'
    +' .ce-ti:focus-within{border-color:#C9A96E}'
    +' .ce-inp{flex:1;border:none;outline:none;font-family:"DM Sans",sans-serif;font-size:13.5px;color:#1A1614;background:transparent}'
    +' .ce-inp::placeholder{color:rgba(107,100,96,0.6)}'
    +' .ce-snd{width:34px;height:34px;background:linear-gradient(135deg,#C9A96E,#A0784A);border:none;border-radius:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0}'
    +' .ce-mf{padding:8px 20px 16px;display:flex;flex-direction:column;gap:8px}'
    +' .ce-fld{background:#fff;border:1.5px solid rgba(201,169,110,0.3);border-radius:12px;padding:10px 14px;font-family:"DM Sans",sans-serif;font-size:13px;color:#1A1614;outline:none;width:100%;box-sizing:border-box}'
    +' .ce-fld:focus{border-color:#C9A96E}'
    +' .ce-fld::placeholder{color:rgba(107,100,96,0.5)}'
    +' .ce-sub{background:linear-gradient(135deg,#1A1614,#2D2420);color:#C9A96E;border:none;border-radius:12px;padding:12px 20px;font-family:"DM Sans",sans-serif;font-size:13.5px;font-weight:500;cursor:pointer;width:100%;margin-top:4px}'
    +' .ce-rw{padding:8px 20px 20px}'
    +' .ce-rc{background:linear-gradient(135deg,#1A1614,#2D2420);border-radius:16px;padding:20px}'
    +' .ce-bdg{display:inline-flex;align-items:center;background:rgba(201,169,110,0.15);border:1px solid rgba(201,169,110,0.3);border-radius:20px;padding:4px 12px;font-size:11px;color:#E8D5B0;text-transform:uppercase;margin-bottom:12px}'
    +' .ce-rt{font-family:"Cormorant Garamond",serif;font-size:20px;color:#fff;font-weight:500;line-height:1.3;margin-bottom:10px}'
    +' .ce-rd{font-size:12.5px;color:rgba(255,255,255,0.65);line-height:1.6;margin-bottom:16px}'
    +' .ce-cta{display:block;width:100%;background:linear-gradient(135deg,#C9A96E,#A0784A);color:#fff;border:none;border-radius:12px;padding:13px 20px;font-family:"DM Sans",sans-serif;font-size:13.5px;font-weight:500;cursor:pointer;text-align:center;text-decoration:none;box-sizing:border-box}'
    +' .ce-typ{display:flex;gap:8px;align-items:center;padding:0 20px 8px}'
    +' .ce-tds{background:#fff;border-radius:12px;padding:10px 16px;display:flex;gap:4px;align-items:center;box-shadow:0 2px 8px rgba(26,22,20,0.07)}'
    +' .ce-td{width:6px;height:6px;background:#C9A96E;border-radius:50%;animation:cetyp 1.2s infinite}'
    +' .ce-td:nth-child(2){animation-delay:.2s}.ce-td:nth-child(3){animation-delay:.4s}'
    +' @keyframes cetyp{0%,100%{transform:translateY(0);opacity:.5}50%{transform:translateY(-4px);opacity:1}}'
    +' @media(max-width:480px){#ce-widget{width:calc(100vw - 32px);right:16px;bottom:96px}#ce-launcher{right:16px;bottom:16px}}';
    document.head.appendChild(style);

    var launcher = document.createElement('button');
    launcher.id = 'ce-launcher';
    launcher.setAttribute('onclick','ceToggle()');
    launcher.innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="8" x2="12" y2="16" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="8" y1="12" x2="16" y2="12" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>';
    document.body.appendChild(launcher);

    var widget = document.createElement('div');
    widget.id = 'ce-widget';
    widget.innerHTML = '<div class="ce-hdr"><div class="ce-hdr-top"><div class="ce-av">A</div><div><div class="ce-hdr-name">Asistente Est\u00e9tica</div><div class="ce-hdr-st"><div class="ce-dot"></div> En l\u00ednea ahora</div></div></div><div class="ce-hdr-sub">Diagn\u00f3stico gratuito \u00b7 3 minutos</div></div><div class="ce-pw"><div class="ce-pl">Progreso del diagn\u00f3stico</div><div class="ce-pb"><div class="ce-pf" id="ce-prog"></div></div></div><div class="ce-msgs" id="ce-msgs"></div><div id="ce-input"></div>';
    document.body.appendChild(widget);
  }

  var ceOpen=false, ceStep='inicio', ceData={}, ceId='ce_'+Date.now();

  var ceFlow={
    inicio:{msg:'👋 Hola, soy el asistente de diagn\u00f3stico.\n\n\u00bfTienes una cl\u00ednica est\u00e9tica y quieres generar <strong>pacientes nuevos cada mes de forma predecible</strong>?',type:'options',progress:0,options:[{icon:'✅',text:'S\u00ed, quiero m\u00e1s pacientes',value:'si',next:'q1'},{icon:'🔍',text:'Solo estoy investigando',value:'inv',next:'investigando'},{icon:'❓',text:'Tengo una duda puntual',value:'duda',next:'investigando'}]},
    q1:{msg:'💰 <strong>Bloque 1</strong>\n\n\u00bfCu\u00e1l es la <strong>facturaci\u00f3n mensual</strong> aproximada de tu cl\u00ednica?',type:'options',progress:9,key:'facturacion',options:[{text:'Menos de 10.000\u20ac',value:'menos_10k',next:'q2'},{text:'10.000\u20ac \u2013 25.000\u20ac',value:'10k_25k',next:'q2'},{text:'25.000\u20ac \u2013 50.000\u20ac',value:'25k_50k',next:'q2'},{text:'M\u00e1s de 50.000\u20ac',value:'mas_50k',next:'q2'}]},
    q2:{msg:'2\ufe0f\u20e3 \u00bfQu\u00e9 porcentaje proviene de <strong>tratamientos de alto ticket</strong>?',type:'options',progress:18,key:'alto_ticket',options:[{text:'0\u201325%',value:'0_25',next:'q3'},{text:'25\u201350%',value:'25_50',next:'q3'},{text:'50%+',value:'50_mas',next:'q3'},{text:'No lo s\u00e9',value:'no_se',next:'q3'}]},
    q3:{msg:'3\ufe0f\u20e3 \u00bfActualmente inviertes en <strong>publicidad digital</strong>?',type:'options',progress:27,key:'publicidad',options:[{text:'No',value:'no',next:'q4'},{text:'Menos de 500\u20ac/mes',value:'menos_500',next:'q4'},{text:'500\u20ac \u2013 1.500\u20ac/mes',value:'500_1500',next:'q4'},{text:'M\u00e1s de 1.500\u20ac/mes',value:'mas_1500',next:'q4'}]},
    q4:{msg:'📊 <strong>Bloque 2</strong>\n\n\u00bfDe d\u00f3nde vienen la mayor\u00eda de tus pacientes?',type:'options',progress:36,key:'origen',options:[{icon:'🗣️',text:'Recomendaciones',value:'recomendaciones',next:'q5'},{icon:'📸',text:'Instagram org\u00e1nico',value:'instagram',next:'q5'},{icon:'📱',text:'Meta Ads',value:'meta_ads',next:'q5'},{icon:'🔍',text:'Google Ads',value:'google_ads',next:'q5'},{icon:'❓',text:'No lo tengo claro',value:'no_claro',next:'q5'}]},
    q5:{msg:'5\ufe0f\u20e3 \u00bfTienes un sistema de <strong>seguimiento autom\u00e1tico</strong> de leads?',type:'options',progress:45,key:'crm',options:[{icon:'✅',text:'S\u00ed, CRM',value:'crm',next:'q6'},{icon:'💬',text:'Solo WhatsApp',value:'whatsapp',next:'q6'},{icon:'📋',text:'Excel b\u00e1sico',value:'excel',next:'q6'},{icon:'❌',text:'No tengo sistema',value:'sin_sistema',next:'q6'}]},
    q6:{msg:'6\ufe0f\u20e3 \u00bfCu\u00e1ntos <strong>leads nuevos</strong> recibes al mes?',type:'options',progress:54,key:'leads_mes',options:[{text:'0\u201310 leads',value:'0_10',next:'q7'},{text:'10\u201330 leads',value:'10_30',next:'q7'},{text:'30+ leads',value:'30_mas',next:'q7'}]},
    q7:{msg:'🧠 <strong>Bloque 3</strong>\n\n\u00bfCu\u00e1l es tu <strong>mayor problema</strong> ahora mismo?',type:'options',progress:63,key:'problema',options:[{icon:'😰',text:'Falta de pacientes',value:'falta_pacientes',next:'q8'},{icon:'🗑️',text:'Leads de baja calidad',value:'leads_calidad',next:'q8'},{icon:'❌',text:'Cancelaciones',value:'cancelaciones',next:'q8'},{icon:'📈',text:'No escalo la facturaci\u00f3n',value:'no_escala',next:'q8'},{icon:'🎲',text:'Sin previsibilidad',value:'sin_prev',next:'q8'}]},
    q8:{msg:'8\ufe0f\u20e3 \u00bfEn qu\u00e9 <strong>plazo</strong> te gustar\u00eda mejorar esto?',type:'options',progress:72,key:'plazo',options:[{icon:'🔥',text:'Inmediatamente',value:'inmediato',next:'q9'},{icon:'📅',text:'1\u20133 meses',value:'1_3',next:'q9'},{icon:'🗓️',text:'3\u20136 meses',value:'3_6',next:'q9'},{icon:'🔭',text:'Solo evaluando',value:'evaluando',next:'q9'}]},
    q9:{msg:'🏢 <strong>Bloque 4</strong>\n\n\u00bfEn qu\u00e9 <strong>ciudad o pa\u00eds</strong> operas?',type:'text',progress:81,key:'ciudad',next:'q10',placeholder:'Ej: Madrid, Barcelona, M\u00e9xico DF...'},
    q10:{msg:'🔟 \u00bfCu\u00e1ntos <strong>empleados</strong> tiene tu cl\u00ednica?',type:'options',progress:90,key:'empleados',options:[{icon:'👤',text:'Solo yo',value:'solo',next:'q11'},{icon:'👥',text:'2\u20135 personas',value:'2_5',next:'q11'},{icon:'🏥',text:'5\u201310 personas',value:'5_10',next:'q11'},{icon:'🏢',text:'M\u00e1s de 10',value:'mas_10',next:'q11'}]},
    q11:{msg:'📞 <strong>\u00a1Casi listo!</strong>\n\nPara enviarte una <strong>propuesta personalizada</strong>, d\u00e9jame tus datos:',type:'multifield',progress:99,next:'resultado'},
    investigando:{msg:'👋 No hay problema.\n\nCuando quieras dar el siguiente paso, aqu\u00ed estar\u00e9. 😊',type:'end_soft',progress:10}
  };

  window.ceToggle=function(){ceOpen=!ceOpen;document.getElementById('ce-widget').classList.toggle('visible',ceOpen);document.getElementById('ce-launcher').classList.toggle('open',ceOpen);if(ceOpen&&document.getElementById('ce-msgs').children.length===0)setTimeout(function(){ceShow('inicio')},300)};
  function ceProgress(p){document.getElementById('ce-prog').style.width=p+'%'}
  function ceAddBot(h){var c=document.getElementById('ce-msgs'),d=document.createElement('div');d.className='ce-msg';d.innerHTML='<div class="ce-mav">A</div><div class="ce-bbl">'+h.replace(/\n/g,'<br>')+'</div>';c.appendChild(d);c.scrollTop=c.scrollHeight}
  function ceAddUser(t){var c=document.getElementById('ce-msgs'),d=document.createElement('div');d.className='ce-msg';d.style.justifyContent='flex-end';d.innerHTML='<div class="ce-bbl" style="background:linear-gradient(135deg,#2D2420,#1A1614);color:white;border-radius:16px 16px 4px 16px">'+t+'</div>';c.appendChild(d);c.scrollTop=c.scrollHeight}
  function ceTyping(){var c=document.getElementById('ce-msgs'),d=document.createElement('div');d.className='ce-typ';d.id='ce-typing';d.innerHTML='<div class="ce-mav">A</div><div class="ce-tds"><div class="ce-td"></div><div class="ce-td"></div><div class="ce-td"></div></div>';c.appendChild(d);c.scrollTop=c.scrollHeight}
  function ceRT(){var t=document.getElementById('ce-typing');if(t)t.remove()}
  function ceClear(){document.getElementById('ce-input').innerHTML=''}
  function ceShow(key){var s=ceFlow[key];if(!s)return;ceStep=key;ceProgress(s.progress);ceClear();ceTyping();setTimeout(function(){ceRT();ceAddBot(s.msg);setTimeout(function(){ceRender(s)},200)},700)}

  function ceRender(s){
    var a=document.getElementById('ce-input');
    if(s.type==='options'){
      var d=document.createElement('div');d.className='ce-opts';
      s.options.forEach(function(o){var b=document.createElement('button');b.className='ce-opt';b.innerHTML=(o.icon?'<span>'+o.icon+'</span>':'')+'<span>'+o.text+'</span>';b.onclick=function(){if(s.key)ceData[s.key]=o.value;ceAddUser((o.icon?o.icon+' ':'')+o.text);ceClear();setTimeout(function(){ceShow(o.next)},400)};d.appendChild(b)});a.appendChild(d);
    } else if(s.type==='text'){
      var d=document.createElement('div');d.className='ce-tw';d.innerHTML='<div class="ce-ti"><input type="text" class="ce-inp" id="ce-ta" placeholder="'+(s.placeholder||'Escribe aqu\u00ed...')+'"/><button class="ce-snd" onclick="ceST()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><line x1="22" y1="2" x2="11" y2="13" stroke="white" stroke-width="2.5" stroke-linecap="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="white" stroke-width="2" fill="none" stroke-linejoin="round"/></svg></button></div>';a.appendChild(d);
      setTimeout(function(){var el=document.getElementById('ce-ta');if(el){el.focus();el.addEventListener('keydown',function(e){if(e.key==='Enter')ceST()})}},100);
    } else if(s.type==='multifield'){
      var d=document.createElement('div');d.className='ce-mf';d.innerHTML='<input type="text" class="ce-fld" id="ce-f1" placeholder="Nombre de la cl\u00ednica"/><input type="text" class="ce-fld" id="ce-f2" placeholder="Tu nombre"/><input type="email" class="ce-fld" id="ce-f3" placeholder="Email de contacto"/><input type="tel" class="ce-fld" id="ce-f4" placeholder="Tel\u00e9fono (con prefijo)"/><button class="ce-sub" onclick="ceSF()">Enviar y ver mi propuesta \u2192</button>';a.appendChild(d);
    }
  }

  window.ceST=function(){var v=document.getElementById('ce-ta')&&document.getElementById('ce-ta').value.trim();if(!v)return;var s=ceFlow[ceStep];if(s.key)ceData[s.key]=v;ceAddUser(v);ceClear();setTimeout(function(){ceShow(s.next)},400)};
  window.ceSF=function(){
    var f1=document.getElementById('ce-f1').value.trim(),f2=document.getElementById('ce-f2').value.trim(),f3=document.getElementById('ce-f3').value.trim(),f4=document.getElementById('ce-f4').value.trim();
    if(!f1||!f2||!f3||!f4){alert('Por favor completa todos los campos.');return}
    ceData.nombre_clinica=f1;ceData.nombre_responsable=f2;ceData.email=f3;ceData.telefono=f4;
    ceAddUser(f1+' \u00b7 '+f2+' \u00b7 '+f3+' \u00b7 '+f4);ceClear();
    var p=cePerfil();ceData.perfil=p;ceEnviar(ceData);setTimeout(function(){ceResultado(p)},600);
  };

  function cePerfil(){var f=ceData.facturacion,p=ceData.publicidad,pl=ceData.plazo;if((['25k_50k','mas_50k'].indexOf(f)>-1)&&(['500_1500','mas_1500'].indexOf(p)>-1)&&pl==='inmediato')return'A';if(f==='10k_25k'||['500_1500','mas_1500'].indexOf(p)>-1)return'B';return'C'}

  function ceResultado(perfil){
    ceProgress(100);document.getElementById('ce-input').innerHTML='';
    var c={A:{badge:'⭐ Perfil prioritario',title:'Puedes escalar de forma estructurada',desc:'Tu perfil indica capacidad real de crecimiento. Cl\u00ednicas similares logran +40% de leads en 60 d\u00edas.',cta:'📅 Agendar sesi\u00f3n estrat\u00e9gica',url:CE_CALENDLY_A},B:{badge:'💡 Potencial de crecimiento',title:'Podemos estructurar tu captaci\u00f3n',desc:'Tu cl\u00ednica est\u00e1 en el punto ideal para un sistema de captaci\u00f3n predecible en menos de 90 d\u00edas.',cta:'🔍 Agendar diagn\u00f3stico gratuito',url:CE_CALENDLY_B},C:{badge:'📚 Recursos gratuitos',title:'Empieza con nuestra gu\u00eda gratuita',desc:'Gu\u00eda con los 5 pasos para conseguir tus primeros 10 pacientes al mes con publicidad digital.',cta:'📧 Descargar gu\u00eda gratuita',url:CE_GUIA_URL}};
    var cfg=c[perfil];
    ceTyping();
    setTimeout(function(){
      ceRT();ceAddBot('✅ <strong>\u00a1Gracias, '+ceData.nombre_responsable+'!</strong>\n\nHe analizado tu perfil. Aqu\u00ed tienes mi recomendaci\u00f3n:');
      setTimeout(function(){var d=document.createElement('div');d.className='ce-rw';d.innerHTML='<div class="ce-rc"><div class="ce-bdg">'+cfg.badge+'</div><div class="ce-rt">'+cfg.title+'</div><div class="ce-rd">'+cfg.desc+'</div><a href="'+cfg.url+'" target="_blank" class="ce-cta">'+cfg.cta+'</a></div>';document.getElementById('ce-input').appendChild(d);document.getElementById('ce-msgs').scrollTop=99999},400);
    },900);
  }

  function ceEnviar(data){try{fetch(CE_WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.assign({sessionId:ceId,timestamp:new Date().toISOString()},data))})}catch(e){}}

  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',ceInit)}else{ceInit()}
})();
