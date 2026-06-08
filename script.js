// Tab switching
function switchTab(tab) {
  document.getElementById('page-home').classList.toggle('hidden', tab !== 'home');
  document.getElementById('page-education').classList.toggle('hidden', tab !== 'education');
  document.getElementById('page-experience').classList.toggle('hidden', tab !== 'experience');

  document.getElementById('tab-home').className = tab === 'home' 
    ? 'tab-active pb-2 text-sm font-medium tracking-wide uppercase transition-all' 
    : 'tab-inactive pb-2 text-sm font-medium tracking-wide uppercase transition-all';
  
  document.getElementById('tab-education').className = tab === 'education' 
    ? 'tab-active pb-2 text-sm font-medium tracking-wide uppercase transition-all' 
    : 'tab-inactive pb-2 text-sm font-medium tracking-wide uppercase transition-all';
  
  document.getElementById('tab-experience').className = tab === 'experience' 
    ? 'tab-active pb-2 text-sm font-medium tracking-wide uppercase transition-all' 
    : 'tab-inactive pb-2 text-sm font-medium tracking-wide uppercase transition-all';
}

// Element SDK (mantido para compatibilidade com Canva ou similar)
const defaultConfig = {
  full_name: 'Seu Nome Completo',
  phone: '(00) 00000-0000',
  email: 'seu@email.com',
  address: 'Sua cidade/estado',
  age: '-- anos',
  education_1: 'Cursando o terceiro ano do ensino médio com técnico integrado de análise de desenvolvimento de sistemas - Júlio Szymanski',
  education_2: 'Curso Senac - Informática Básica (96h)',
  education_3: '',
  experience_1: '1º lugar - Hackathon Araucária (Agronegócio)',
  experience_2: '1º lugar - Hackathon Araucária (Indústria)',
  experience_3: 'Curso SENAC - Informática Básica (96h)',
  future_title: 'Futuras Oportunidades de Mercado',
  future_description: 'Busco oportunidades desafiadoras na área de desenvolvimento de sistemas, onde possa aplicar meus conhecimentos técnicos, criatividade e experiência em soluções inovadoras para contribuir com excelência no mercado.',
  background_color: '#0f0a1a',
  card_color: '#1a1228',
  text_color: '#f3e8ff',
  accent_color: '#a855f7',
  secondary_color: '#6b21a8',
  font_family: 'Outfit',
  font_size: 16
};

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };

  document.getElementById('el-name').textContent = c.full_name;
  document.getElementById('el-phone').textContent = c.phone;
  document.getElementById('el-email').textContent = c.email;
  document.getElementById('el-address').textContent = c.address;
  document.getElementById('el-age').textContent = c.age;

  // Education
  document.getElementById('el-edu1').textContent = c.education_1;
  document.getElementById('el-edu2').textContent = c.education_2;
  
  const edu3El = document.getElementById('el-edu3');
  if (c.education_3) {
    edu3El.textContent = c.education_3;
    edu3El.classList.remove('opacity-50', 'italic');
  } else {
    edu3El.textContent = 'Adicione mais formações...';
    edu3El.classList.add('opacity-50', 'italic');
  }

  // Experiences
  document.getElementById('el-exp1').textContent = c.experience_1;
  document.getElementById('el-exp2').textContent = c.experience_2;
  document.getElementById('el-exp3').textContent = c.experience_3;

  // Academic experiences (new)
  if (document.getElementById('el-acad-exp1')) {
    document.getElementById('el-acad-exp1').textContent = c.experience_1;
  }
  if (document.getElementById('el-acad-exp2')) {
    document.getElementById('el-acad-exp2').textContent = c.experience_2;
  }

  document.getElementById('el-future-title').textContent = c.future_title;
  document.getElementById('el-future-desc').textContent = c.future_description;

  // Colors
  document.body.style.backgroundColor = c.background_color;
  document.getElementById('app').style.background = `radial-gradient(ellipse at top, ${c.card_color} 0%, ${c.background_color} 60%)`;
  
  document.querySelectorAll('.card-glow').forEach(el => {
    el.style.backgroundColor = c.card_color;
    el.style.borderColor = c.accent_color + '30';
  });

  document.getElementById('el-name').style.color = c.text_color;
  document.querySelectorAll('[data-lucide]').forEach(el => el.style.color = c.accent_color);

  // Font
  const font = c.font_family + ', sans-serif';
  document.body.style.fontFamily = font;
  document.getElementById('el-name').style.fontFamily = `'Playfair Display', ${font}`;

  // Font size
  const base = c.font_size;
  document.getElementById('el-name').style.fontSize = `${base * 2.5}px`;
  
  document.querySelectorAll('#el-phone, #el-email, #el-address, #el-age, #el-edu1, #el-edu2, #el-edu3, #el-exp1, #el-exp2, #el-exp3, #el-acad-exp1, #el-acad-exp2').forEach(el => {
    if (el) el.style.fontSize = `${base}px`;
  });
}

window.elementSdk = window.elementSdk || {
  init: function(config) {
    console.log('Element SDK initialized (mock)', config);
    applyConfig(config.defaultConfig || {});
  },
  setConfig: function() {}
};

window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => applyConfig(config),
  mapToCapabilities: (config) => ({
    recolorables: [
      { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
      { get: () => config.card_color || defaultConfig.card_color, set: (v) => { config.card_color = v; window.elementSdk.setConfig({ card_color: v }); } },
      { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
      { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); } },
      { get: () => config.secondary_color || defaultConfig.secondary_color, set: (v) => { config.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); } }
    ],
    borderables: [],
    fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
    fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
  }),
  mapToEditPanelValues: (config) => new Map([
    ['full_name', config.full_name || defaultConfig.full_name],
    ['phone', config.phone || defaultConfig.phone],
    ['email', config.email || defaultConfig.email],
    ['address', config.address || defaultConfig.address],
    ['age', config.age || defaultConfig.age],
    ['education_1', config.education_1 || defaultConfig.education_1],
    ['education_2', config.education_2 || defaultConfig.education_2],
    ['education_3', config.education_3 || defaultConfig.education_3],
    ['experience_1', config.experience_1 || defaultConfig.experience_1],
    ['experience_2', config.experience_2 || defaultConfig.experience_2],
    ['experience_3', config.experience_3 || defaultConfig.experience_3],
    ['future_title', config.future_title || defaultConfig.future_title],
    ['future_description', config.future_description || defaultConfig.future_description]
  ])
});

lucide.createIcons();
