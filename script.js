const catalog = {
"blox-fruits": {title:"Blox Fruits", subtitle:"Farm de itens", image:"https://tr.rbxcdn.com/180DAY-5304fe8fb874c7244eb4fe24ff324b17/500/280/Image/Jpeg/noFilter", items:[["Item comum","Consultar"],["Item raro","Consultar"],["Item muito raro","Consultar"]]},
"roube-um-ovo": {title:"Roube um Ovo", subtitle:"Pets 100M+ e 1B+", image:"https://tr.rbxcdn.com/180DAY-d242991b00219200fb6b4ad45fec79f3/500/280/Image/Jpeg/noFilter", items:[["Pet 100M+","Consultar"],["Pet 1B+","Consultar"],["+1 Speed / velo","Consultar"]]},
"murder-mystery-2": {title:"Murder Mystery 2", subtitle:"Emotes", image:"https://tr.rbxcdn.com/180DAY-87bec0a99ceeb6d711871ed32e51e153/500/280/Image/Jpeg/noFilter", items:[["Emotes","Consultar"]]},
"rivals": {title:"RIVALS", subtitle:"Up de armas", image:"https://tr.rbxcdn.com/180DAY-4fcb22e252c188f45577246217cca4b7/500/280/Image/Jpeg/noFilter", items:[["Up de armas","Consultar"]]},
"99-noites": {title:"99 Noites", subtitle:"Farm por tempo", image:"https://tr.rbxcdn.com/180DAY-b326856ea20ac1e3c3c8810c6e932b70/500/280/Image/Jpeg/noFilter", items:[["30 minutos","R$ 5"],["1 hora","R$ 10"],["1h30","R$ 15"],["2 horas","R$ 20"]]},
"mais-1-speed": {title:"+1 Speed", subtitle:"Farm de velo", image:"https://tr.rbxcdn.com/180DAY-e576f7eff116cf5a941b3e7b46e69c7f/500/280/Image/Jpeg/noFilter", items:[["Velo / Speed","Consultar"]]}
};
const key = new URLSearchParams(location.search).get("jogo");
const g = catalog[key] || catalog["blox-fruits"];
document.getElementById("gameDetails").innerHTML = `
  <div class="price-hero" style="background-image:url('${g.image}')">
    <div><span class="eyebrow">SERVIÇO</span><h1>${g.title}</h1><p>${g.subtitle}</p></div>
  </div>
  <div class="price-list">
    ${g.items.map(([name,price])=>`<div class="price-row"><strong>${name}</strong><span>${price}</span></div>`).join("")}
  </div>
  <p class="chat-note">Para consultar ou fazer um pedido, abra o chat no canto da tela e fale com a equipe.</p>`;
