const catalog={
'blox-fruits':{title:'Blox Fruits',subtitle:'Farm de itens',image:'https://tr.rbxcdn.com/180DAY-5304fe8fb874c7244eb4fe24ff324b17/500/280/Image/Jpeg/noFilter',items:[['Item comum','Consultar'],['Item raro','Consultar'],['Item muito raro','Consultar']],note:'O valor depende do item. Para consultar e fazer o pedido, fale pelo chat privado.'},
'roube-um-ovo':{title:'Roube um Ovo',subtitle:'Pets 100M+ e 1B+',image:'https://tr.rbxcdn.com/180DAY-d242991b00219200fb6b4ad45fec79f3/500/280/Image/Jpeg/noFilter',items:[['Pet 100M+','Consultar'],['Pet 1B+','Consultar'],['+1 Speed / velo','Consultar']],note:'Os valores variam conforme o pet, item ou quantidade. Fale pelo chat privado.'},
'murder-mystery-2':{title:'Murder Mystery 2',subtitle:'Emotes',image:'https://tr.rbxcdn.com/180DAY-87bec0a99ceeb6d711871ed32e51e153/500/280/Image/Jpeg/noFilter',items:[['Emotes','Consultar']],note:'Detalhes e valores são tratados pelo chat privado.'},
'rivals':{title:'RIVALS',subtitle:'Up de armas',image:'https://tr.rbxcdn.com/180DAY-4fcb22e252c188f45577246217cca4b7/500/280/Image/Jpeg/noFilter',items:[['Up de armas','Consultar']],note:'Detalhes e valores são tratados pelo chat privado.'},
'99-noites':{title:'99 Noites',subtitle:'Farm por tempo',image:'https://tr.rbxcdn.com/180DAY-b326856ea20ac1e3c3c8810c6e932b70/500/280/Image/Jpeg/noFilter',items:[['30 minutos','R$ 5'],['1 hora','R$ 10'],['1h30','R$ 15'],['2 horas','R$ 20']],note:'R$ 5 a cada 30 minutos.'},
'mais-1-speed':{title:'+1 Speed',subtitle:'Farm de velo',image:'https://tr.rbxcdn.com/180DAY-e576f7eff116cf5a941b3e7b46e69c7f/500/280/Image/Jpeg/noFilter',items:[['Velo / Speed','Consultar']],note:'Aqui é velocidade/velo, não pet. Fale pelo chat privado para o valor.'}
};

const details=document.getElementById('gameDetails');
if(details){
  const game=catalog[new URLSearchParams(location.search).get('jogo')]||catalog['blox-fruits'];
  details.innerHTML=`<div class="selected-game" style="--bg:url('${game.image}')"><div class="selected-overlay"><span class="eyebrow">PREÇOS</span><h1>${game.title}</h1><p>${game.subtitle}</p></div></div><div class="price-list">${game.items.map(([name,price])=>`<div class="price-row"><div><span class="mini-label">SERVIÇO</span><h2>${name}</h2></div><button class="price-action" type="button" onclick="openChat()">${price==='Consultar'?'Falar no chat':price}</button></div>`).join('')}</div><p class="price-note">${game.note}</p><button class="main-button wide" type="button" onclick="openChat()">💬 Fazer pedido pelo chat privado</button>`;
}

function openChat(){
  const panel=document.getElementById('chatPanel');
  if(panel){ panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); }
}

function closeChat(){
  const panel=document.getElementById('chatPanel');
  if(panel){ panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); }
}

function openTawk(){
  if(window.Tawk_API && typeof window.Tawk_API.maximize === 'function'){
    window.Tawk_API.maximize();
  }else{
    alert('O chat privado ainda precisa do código do Tawk.to. Quando você me mandar o código do Widget, eu coloco ele no site.');
  }
}

document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeChat(); });
