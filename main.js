/* ── DATA ── */
var CATALOG = [
  {id:"serene", name:"Serene", desc:"Pink and periwinkle blues — the quiet beauty of dawn light on still water.", collection:"lovely-ladies", image:"images/serene.jpg", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"reverie", name:"Reverie", desc:"Bold magenta meets deep indigo — a midnight daydream, luminous and restless.", collection:"lovely-ladies", image:"images/reverie.jpg", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"bloom", name:"Bloom", desc:"Soft purples and blush tones unfurl like petals — gentle, luminous, alive.", collection:"lovely-ladies", image:"images/bloom.jpg", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"soleil", name:"Soleil", desc:"Warm honey and amber tones — a sun-drenched afternoon caught in watercolour.", collection:"lovely-ladies", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f5e4b0'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23c4a030'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23b49020'%3ESoleil%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23b49020'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"dusk", name:"Dusk", desc:"Dusty rose fades into slate — the tender in-between of day and night.", collection:"lovely-ladies", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23e8d8e0'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23a07888'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23907078'%3EDusk%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23907078'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"echo", name:"Echo", desc:"Muted sage and bone — a whisper of form, quiet and considered.", collection:"lovely-ladies", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23dce8dc'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23789c78'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23688c68'%3EEcho%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23688c68'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"tide", name:"Tide", desc:"Oceanic teals wash over soft sand — movement and stillness in one breath.", collection:"lovely-ladies", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23c0d8e8'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%234088a0'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23307890'%3ETide%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23307890'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"ember", name:"Ember", desc:"Deep terracotta and burnt sienna — warmth that lingers long after the flame.", collection:"lovely-ladies", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f0d0b8'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23c06838'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23b05828'%3EEmber%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23b05828'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"flora", name:"Flora", desc:"Petal pinks and leafy greens — an ode to the garden in full bloom.", collection:"lovely-ladies", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f0e4ec'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23b870a0'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23a86090'%3EFlora%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23a86090'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"face-aurora", name:"Aurora", desc:"Iridescent dawn — soft, luminous, and full of quiet wonder.", collection:"faces", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f5c8c0'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23d4968c'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23c48c84'%3EAurora%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23c48c84'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"face-solstice", name:"Solstice", desc:"Golden warmth, freckled light — a face turned toward the summer sun.", collection:"faces", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f5e4c0'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23c4a060'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23b49050'%3ESolstice%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23b49050'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"face-mirage", name:"Mirage", desc:"Soft indigo and haze — beauty that shimmers at the edge of sight.", collection:"faces", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23c8d8f5'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%236888c4'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%235878b4'%3EMirage%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%235878b4'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"face-veil", name:"Veil", desc:"Translucent, layered, serene — a portrait through petals and mist.", collection:"faces", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23d8f0e4'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%2368b490'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%2358a480'%3EVeil%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%2358a480'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"face-ether", name:"Ether", desc:"Pale lavender and white — a presence more felt than seen.", collection:"faces", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23e8d8f5'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23987cc4'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23886cb4'%3EEther%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23886cb4'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"face-dusk", name:"Dusk", desc:"Dusty rose fades into slate — the tender in-between of day and night.", collection:"faces", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f0d8e4'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23c478a0'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23b46890'%3EDusk%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23b46890'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"fash-noir", name:"Noir", desc:"Ink-black silhouettes and bone white — sharp, editorial, unforgettable.", collection:"fashion", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23d8d4d0'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23a09c98'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23908c88'%3ENoir%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23908c88'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"fash-blush", name:"Blush", desc:"Soft pinks layered over cream — effortless femininity, dressed to feel.", collection:"fashion", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f5d8dc'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23c49098'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23b48088'%3EBlush%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23b48088'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"fash-cobalt", name:"Cobalt", desc:"Electric blue on near-black — the confidence of a woman who knows.", collection:"fashion", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23c0cce8'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%234868b4'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%233858a4'%3ECobalt%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%233858a4'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"fash-ivory", name:"Ivory", desc:"Warm whites and aged linen — classic, quiet, and entirely intentional.", collection:"fashion", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f0ece4'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23b0a890'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23a09880'%3EIvory%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23a09880'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"fash-ember", name:"Ember", desc:"Terracotta and rust — worn-in warmth, like a favourite coat in October.", collection:"fashion", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f0d4c0'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23c07848'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23b06838'%3EEmber%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23b06838'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]},
  {id:"fash-forest", name:"Forest", desc:"Deep hunter green with a thread of gold — richness, rooted and alive.", collection:"fashion", image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23c8d8c8'/%3E%3Ctext x='200' y='140' font-family='sans-serif' font-size='48' text-anchor='middle' fill='%23487848'%3E✦%3C/text%3E%3Ctext x='200' y='185' font-family='sans-serif' font-size='15' text-anchor='middle' fill='%23386838'%3EForest%3C/text%3E%3Ctext x='200' y='208' font-family='sans-serif' font-size='12' text-anchor='middle' fill='%23386838'%3EComing Soon%3C/text%3E%3C/svg%3E", products:[{type:"notebook",label:"Notebook",price:20},{type:"mug",label:"Ceramic Mug",price:20},{type:"poster",label:"Art Poster",price:16},{type:"tote",label:"Tote Bag",price:30}]}
];

var cart = {};

var PAGE = (function() {
  var p = window.location.pathname;
  if (p.indexOf("shop.html")        !== -1) return "shop";
  if (p.indexOf("collections.html") !== -1) return "collections";
  if (p.indexOf("collection.html")  !== -1) return "collection";
  if (p.indexOf("product.html")      !== -1) return "product";
  return "home";
})();

/* ── FEATURED CARD CYCLING ── */
var cycleIndex   = 0;   /* 0 = art, 1-4 = products */
var cycleTimer   = null;
var CYCLE_LAYERS = [1,2,3,4];   /* product layer indices */
var cyclePos     = 0;           /* position within CYCLE_LAYERS */

function showLayer(index) {
  /* hide all */
  for (var i = 0; i <= 4; i++) {
    var l = document.getElementById("layer-" + i);
    var d = document.getElementById("dot-"   + (i === 0 ? 0 : i - 1));
    if (l) l.classList.remove("active");
  }
  /* hide hovering state if back to 0 */
  var stack = document.getElementById("img-stack");
  if (index === 0) {
    stack.classList.remove("hovering");
    document.getElementById("layer-0").classList.add("active");
    setDot(0);
  } else {
    stack.classList.add("hovering");
    var el = document.getElementById("layer-" + index);
    if (el) el.classList.add("active");
    setDot(index - 1);
  }
}

function setDot(i) {
  for (var k = 0; k < 4; k++) {
    var d = document.getElementById("dot-" + k);
    if (d) d.classList.toggle("active", k === i);
  }
}

function startCycle() {
  cyclePos = 0;
  showLayer(CYCLE_LAYERS[cyclePos]);
  cycleTimer = setInterval(function() {
    cyclePos = (cyclePos + 1) % CYCLE_LAYERS.length;
    showLayer(CYCLE_LAYERS[cyclePos]);
  }, 1400);
}

function stopCycle() {
  clearInterval(cycleTimer);
  cycleTimer = null;
  showLayer(0);
}

/* ── CAROUSEL ── */
/*
 * Infinite loop via dual-clone + GSAP.
 *
 * Layout: [ clones of last CLONE_COUNT cards ][ real cards ][ clones of first CLONE_COUNT cards ]
 * carouselIndex starts at CLONE_COUNT so we're positioned over the real cards.
 *
 * When the user slides into clone territory the animation completes, then gsap.set()
 * snaps to the visually identical real position — completely invisible because both
 * positions render the exact same card content.
 */
var CLONE_COUNT = 3;

function getCarouselVisible() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 820) return 2;
  return 3;
}

function makeCarousel(gridId, viewportId, prevId, nextId, pieces) {
  var index  = CLONE_COUNT;
  var busy   = false;
  var touchX = 0;

  function buildClones() {
    var grid = document.getElementById(gridId);
    if (!grid) return;
    var old = grid.querySelectorAll(".carousel-clone");
    for (var i = 0; i < old.length; i++) old[i].parentNode.removeChild(old[i]);
    var real = grid.querySelectorAll(".piece-card:not(.carousel-clone)");
    var n = real.length, c = Math.min(CLONE_COUNT, n);
    var frag = document.createDocumentFragment();
    for (var j = 0; j < c; j++) { var h = real[n-c+j].cloneNode(true); h.classList.add("carousel-clone"); frag.appendChild(h); }
    grid.insertBefore(frag, grid.firstChild);
    for (var k = 0; k < c; k++) { var t = real[k].cloneNode(true); t.classList.add("carousel-clone"); grid.appendChild(t); }
  }

  function getStep(viewport) {
    var grid = document.getElementById(gridId);
    var card = grid && grid.querySelector(".piece-card:not(.carousel-clone)");
    if (card) return card.getBoundingClientRect().width + 28;
    var v = getCarouselVisible();
    return (viewport.offsetWidth - 16 - (v - 1) * 28) / v + 28;
  }

  function move(dir) {
    if (busy) return;
    var viewport = document.getElementById(viewportId);
    var grid     = document.getElementById(gridId);
    if (!grid || !viewport || pieces.length <= getCarouselVisible()) return;
    var step = getStep(viewport);
    index += dir;
    busy = true;
    gsap.to(grid, { x: -(index * step), duration: 0.38, ease: "power2.inOut",
      onComplete: function() {
        if      (index >= CLONE_COUNT + pieces.length) { index = CLONE_COUNT; }
        else if (index < CLONE_COUNT)                  { index = CLONE_COUNT + pieces.length - 1; }
        else { busy = false; return; }
        gsap.set(grid, { x: -(index * step) });
        busy = false;
      }
    });
  }

  function update() {
    var viewport = document.getElementById(viewportId);
    var grid     = document.getElementById(gridId);
    var prev     = document.getElementById(prevId);
    var next     = document.getElementById(nextId);
    if (!grid || !viewport) return;
    gsap.killTweensOf(grid);
    index = CLONE_COUNT;
    buildClones();
    gsap.set(grid, { x: -(index * getStep(viewport)) });
    var hidden = pieces.length <= getCarouselVisible();
    if (prev) prev.disabled = hidden;
    if (next) next.disabled = hidden;
  }

  function touchStart(e) { touchX = e.touches[0].clientX; }
  function touchEnd(e)   { var dx = e.changedTouches[0].clientX - touchX; if (Math.abs(dx) > 40) move(dx < 0 ? 1 : -1); }

  return { move: move, update: update, touchStart: touchStart, touchEnd: touchEnd };
}

var C1 = makeCarousel("pieces-grid",   "carousel-viewport",   "carousel-prev",   "carousel-next",   byCollection("lovely-ladies"));
var C2 = makeCarousel("pieces-grid-2", "carousel-viewport-2", "carousel-prev-2", "carousel-next-2", byCollection("fashion"));
var C3 = makeCarousel("pieces-grid-3", "carousel-viewport-3", "carousel-prev-3", "carousel-next-3", byCollection("faces"));

/* Shims so HTML onclick attributes keep working */
function carouselMove(d)        { C1.move(d); }
function carouselMove2(d)       { C2.move(d); }
function carouselMove3(d)       { C3.move(d); }
function carouselTouchStart(e)  { C1.touchStart(e); }
function carouselTouchEnd(e)    { C1.touchEnd(e); }
function carouselTouchStart2(e) { C2.touchStart(e); }
function carouselTouchEnd2(e)   { C2.touchEnd(e); }
function carouselTouchStart3(e) { C3.touchStart(e); }
function carouselTouchEnd3(e)   { C3.touchEnd(e); }

window.addEventListener("resize", function() { C1.update(); C2.update(); C3.update(); });
/* ── COLLECTIONS PAGE ── */
function renderCollectionsPage() {
  var grid = document.getElementById("collections-grid");
  if (!grid) return;
  var colls = [
    {id:"lovely-ladies", label:"Lovely Ladies", desc:"Portraits of women in bold, expressive colour.", img:byCollection("lovely-ladies")[0].image, count:byCollection("lovely-ladies").length},
    {id:"faces",         label:"Faces",         desc:"Studies of form, identity, and emotion.",      img:byCollection("faces")[0].image,         count:byCollection("faces").length},
    {id:"fashion",       label:"Fashion",       desc:"Wearable art inspired by style and movement.", img:byCollection("fashion")[0].image,       count:byCollection("fashion").length}
  ];
  var html = "";
  for (var i = 0; i < colls.length; i++) {
    var c = colls[i];
    html += "<a class=\"coll-group-card\" href=\"shop.html?collection=" + c.id + "\">"
          + "<img class=\"coll-group-img\" src=\"" + c.img + "\" alt=\"" + c.label + "\">"
          + "<div class=\"coll-group-body\">"
          + "<div class=\"coll-group-name\">" + c.label + "</div>"
          + "<div class=\"coll-group-desc\">" + c.desc + "</div>"
          + "<div class=\"coll-group-count\">" + c.count + " designs</div>"
          + "</div></a>";
  }
  grid.innerHTML = html;
}

/* ── SINGLE COLLECTION PAGE ── */
function renderCollectionPage() {
  var params = new URLSearchParams(window.location.search);
  var id = params.get("id");
  var piece = getPiece(id);
  var body = document.getElementById("collection-body");
  if (!piece) { if (body) body.innerHTML = "<p>Collection not found.</p>"; return; }

  document.getElementById("coll-name").textContent = piece.name;
  document.getElementById("coll-desc").textContent = piece.desc;
  document.getElementById("coll-breadcrumb").innerHTML =
    "<a href=\"index.html\">Home</a> &rsaquo; <a href=\"collections.html\">Collections</a> &rsaquo; " + esc(piece.name);
  document.title = piece.name + " \u2014 Krystal\u2019s Art Shop";

  var html = "";
  for (var j = 0; j < piece.products.length; j++) {
    var pr = piece.products[j];
    html += "<div class=\"variant-card\">"
          + "<img class=\"variant-img\" src=\"" + esc(piece.image) + "\" alt=\"" + esc(piece.name + " " + pr.label) + "\" loading=\"lazy\" onload=\"this.classList.add('loaded')\" onerror=\"this.classList.add('loaded')\">"
          + "<div class=\"variant-body\">"
          + "<div class=\"variant-piece\">" + esc(pr.label) + "</div>"
          + "<div class=\"variant-price\">$" + esc(pr.price) + "</div>"
          + "<button class=\"variant-add\" data-piece=\"" + esc(piece.id) + "\" data-type=\"" + esc(pr.type) + "\">Add to Cart</button>"
          + "</div></div>";
  }
  var collProducts = document.getElementById("coll-products");
  collProducts.innerHTML = html;
  collProducts.querySelectorAll(".variant-add").forEach(function(btn) {
    btn.addEventListener("click", function() {
      add(this.dataset.piece, this.dataset.type);
    });
  });
}

/* ── PRODUCT PAGE ── */
var _selectedProdPage = null;

function renderProductPage() {
  var params = new URLSearchParams(window.location.search);
  var id     = params.get("design");
  var piece  = getPiece(id);
  var body   = document.getElementById("product-body");
  if (!piece) {
    if (body) body.innerHTML = "<div class=\"product-not-found\">"
      + "<div class=\"shop-empty-symbol\">✦</div>"
      + "<div class=\"product-nf-title\">Design not found</div>"
      + "<div class=\"product-nf-sub\">This design may have moved or the link might be out of date.</div>"
      + "<div class=\"product-nf-actions\">"
      + "<a class=\"product-nf-btn\" href=\"shop.html\">Browse the Shop</a>"
      + "<a class=\"product-nf-btn product-nf-btn--ghost\" href=\"collections.html\">View Collections</a>"
      + "</div></div>";
    return;
  }

  document.title = piece.name + " — Krystal’s Art Shop";
  var bc = document.getElementById("product-breadcrumb");
  if (bc) bc.innerHTML =
    "<a href=\"index.html\" style=\"text-decoration:none;color:inherit\">Home</a>"
    + " &rsaquo; <a href=\"shop.html\" style=\"text-decoration:none;color:inherit\">Shop</a>"
    + " &rsaquo; " + esc(piece.name);

  var icons = "";
  for (var j = 0; j < piece.products.length; j++) {
    var pr = piece.products[j];
    icons += "<button class=\"prod-icon-btn\" data-type=\"" + esc(pr.type) + "\"><img class=\"prod-icon-img\" src=\"" + esc(PROD_ICON[pr.type]) + "\" alt=\"" + esc(PROD_SHORT[pr.type]) + "\" onload=\"this.classList.add('loaded')\" onerror=\"this.classList.add('loaded')\"><span class=\"prod-icon-label\">" + esc(PROD_SHORT[pr.type]) + "</span></button>";
  }

  if (body) {
    body.innerHTML =
      "<div class=\"product-layout\">"
      + "<img class=\"product-img\" src=\"" + esc(getImg(piece.id)) + "\" alt=\"" + esc(piece.name) + "\" onload=\"this.classList.add('loaded')\" onerror=\"this.classList.add('loaded')\">"
      + "<div class=\"product-meta\">"
      + "<div class=\"product-title\">" + esc(piece.name) + "</div>"
      + "<div class=\"product-desc\">"  + esc(piece.desc)  + "</div>"
      + "<div class=\"prod-carousel\" id=\"product-type-selector\">" + icons + "</div>"
      + "<div id=\"product-action\"></div>"
      + "</div></div>";
    body.querySelectorAll("#product-type-selector .prod-icon-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        selectProdPage(this.dataset.type);
      });
    });
  }
}

function renderProductPageAction() {
  var params = new URLSearchParams(window.location.search);
  var piece  = getPiece(params.get("design"));
  if (!piece) return;

  var btns = document.querySelectorAll("#product-type-selector .prod-icon-btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].classList.toggle("selected", piece.products[i].type === _selectedProdPage);
  }

  var action = document.getElementById("product-action");
  if (!action) return;
  if (_selectedProdPage) {
    var prod = null;
    for (var j = 0; j < piece.products.length; j++) {
      if (piece.products[j].type === _selectedProdPage) { prod = piece.products[j]; break; }
    }
    action.innerHTML = "<span class=\"card-price\">$" + esc(prod.price) + "</span>"
      + "<button class=\"card-add-btn\" data-piece=\"" + esc(piece.id) + "\" data-type=\"" + esc(_selectedProdPage) + "\">Add to Cart</button>";
    var addBtn = action.querySelector(".card-add-btn");
    if (addBtn) addBtn.addEventListener("click", function() {
      addFromProductPage(this.dataset.piece, this.dataset.type);
    });
  } else {
    action.innerHTML = "<span class=\"card-price-empty\">Select a product type</span>";
  }
}

function selectProdPage(type) {
  _selectedProdPage = (_selectedProdPage === type) ? null : type;
  renderProductPageAction();
}

function addFromProductPage(pieceId, type) {
  var piece = getPiece(pieceId);
  if (!piece) return;
  var prod = null;
  for (var j = 0; j < piece.products.length; j++) {
    if (piece.products[j].type === type) { prod = piece.products[j]; break; }
  }
  if (!prod) return;
  var key = pieceId + "__" + type;
  cart[key] = (cart[key] || 0) + 1;
  _selectedProdPage = null;
  updateBadge();
  renderProductPageAction();
  toast(piece.name + " " + prod.label + " added to cart!");
}

/* ── SHOP PAGE ── */
var COLLECTION_LABELS = {"lovely-ladies":"Lovely Ladies", "faces":"Faces", "fashion":"Fashion"};
function buildAllProducts() {
  var all = [];
  for (var i = 0; i < CATALOG.length; i++) {
    var p = CATALOG[i];
    for (var j = 0; j < p.products.length; j++) {
      var pr = p.products[j];
      all.push({
        collId:    p.collection,
        collLabel: COLLECTION_LABELS[p.collection] || p.collection,
        pieceId:   p.id,
        pieceName: p.name,
        type:      pr.type,
        typeLabel: pr.label,
        price:     pr.price,
        img:       p.image || ""
      });
    }
  }
  return all;
}

function renderShopPage() {
  var params     = new URLSearchParams(window.location.search);
  var collFilter = params.get("collection") || "all";
  var typeFilter = params.get("type")       || "all";

  var collPills  = ["all","lovely-ladies","faces","fashion"];
  var collLabels = {all:"All Collections","lovely-ladies":"Lovely Ladies",faces:"Faces",fashion:"Fashion"};
  var typePills  = ["all","notebook","mug","poster","tote"];
  var typeLabels = {all:"All Products",notebook:"Notebooks",mug:"Mugs",poster:"Posters",tote:"Totes"};

  var collHtml = "";
  for (var c = 0; c < collPills.length; c++) {
    var cv = collPills[c];
    collHtml += "<button class=\"filter-pill" + (collFilter===cv?" active":"") + "\""
              + " data-key=\"collection\" data-value=\"" + esc(cv) + "\">" + esc(collLabels[cv]) + "</button>";
  }
  var typeHtml = "";
  for (var t = 0; t < typePills.length; t++) {
    var tv = typePills[t];
    typeHtml += "<button class=\"filter-pill" + (typeFilter===tv?" active":"") + "\""
              + " data-key=\"type\" data-value=\"" + esc(tv) + "\">" + esc(typeLabels[tv]) + "</button>";
  }

  var filtersEl = document.getElementById("shop-filters");
  if (filtersEl) {
    filtersEl.innerHTML =
        "<div class=\"filter-row\"><span class=\"filter-label\">Collection</span>" + collHtml
          + "<a class=\"filter-pill-link\" href=\"collections.html\">Browse All ›</a></div>"
      + "<div class=\"filter-row\"><span class=\"filter-label\">Product</span>"    + typeHtml + "</div>";
    filtersEl.querySelectorAll(".filter-pill").forEach(function(btn) {
      btn.addEventListener("click", function() {
        shopFilter(this.dataset.key, this.dataset.value);
      });
    });
  }

  // Dynamic heading
  var labelEl = document.getElementById("shop-heading-label");
  var titleEl = document.getElementById("shop-heading-title");
  if (labelEl && titleEl) {
    if (collFilter !== "all" && typeFilter !== "all") {
      labelEl.textContent = collLabels[collFilter];
      titleEl.textContent = typeLabels[typeFilter];
    } else if (collFilter !== "all") {
      labelEl.textContent = "Collection";
      titleEl.textContent = collLabels[collFilter];
    } else if (typeFilter !== "all") {
      labelEl.textContent = "Product type";
      titleEl.textContent = typeLabels[typeFilter];
    } else {
      labelEl.textContent = "Everything in one place";
      titleEl.textContent = "Shop All";
    }
  }

  var grid = document.getElementById("shop-grid");
  if (!grid) return;

  // Show filtered product grid (all products when no filter active)
  var all      = buildAllProducts();
  var filtered = [];
  for (var k = 0; k < all.length; k++) {
    var item = all[k];
    if ((collFilter === "all" || item.collId === collFilter) &&
        (typeFilter === "all" || item.type   === typeFilter)) {
      filtered.push(item);
    }
  }

  if (filtered.length === 0) {
    var msg;
    if (collFilter !== "all" && typeFilter !== "all") {
      msg = "No " + typeLabels[typeFilter] + " in " + collLabels[collFilter];
    } else if (typeFilter !== "all") {
      msg = "No " + typeLabels[typeFilter] + " available right now";
    } else {
      msg = "Nothing in " + collLabels[collFilter] + " yet";
    }
    grid.innerHTML = "<div class=\"shop-empty\">"
      + "<div class=\"shop-empty-symbol\">\u2726</div>"
      + "<div class=\"shop-empty-msg\">" + esc(msg) + "</div>"
      + "<button class=\"shop-empty-reset\">Clear filters</button>"
      + "</div>";
    var resetBtn = grid.querySelector(".shop-empty-reset");
    if (resetBtn) resetBtn.addEventListener("click", function() { shopFilter("reset", ""); });
    return;
  }

  var isFiltered = collFilter !== "all" || typeFilter !== "all";
  var countBar = "<div class=\"shop-context-bar\">"
    + "<span class=\"shop-count\">" + esc(filtered.length) + " product" + (filtered.length === 1 ? "" : "s") + "</span>"
    + (isFiltered ? "<button class=\"shop-clear-btn\">Clear filters</button>" : "")
    + "</div>";

  var html = "";
  for (var m = 0; m < filtered.length; m++) {
    var prod = filtered[m];
    html += "<div class=\"variant-card\">"
          + "<a href=\"product.html?design=" + encodeURIComponent(prod.pieceId) + "\" class=\"piece-img-link\"><img class=\"variant-img\" src=\"" + esc(prod.img) + "\" alt=\"" + esc(prod.pieceName + " " + prod.typeLabel) + "\" loading=\"lazy\" onload=\"this.classList.add('loaded')\" onerror=\"this.classList.add('loaded')\"></a>"
          + "<div class=\"variant-body\">"
          + "<div class=\"variant-piece\"><a href=\"product.html?design=" + encodeURIComponent(prod.pieceId) + "\" class=\"piece-name-link\">" + esc(prod.pieceName + " " + prod.typeLabel) + "</a></div>"
          + "<div class=\"variant-coll\">" + esc(prod.collLabel) + "</div>"
          + "<div class=\"variant-price\">$" + esc(prod.price) + "</div>"
          + "<button class=\"variant-add\" data-coll=\"" + esc(prod.collId) + "\" data-piece=\"" + esc(prod.pieceId) + "\" data-type=\"" + esc(prod.type) + "\">Add to Cart</button>"
          + "</div></div>";
  }
  grid.innerHTML = countBar + "<div class=\"variants-grid\">" + html + "</div>";
  var clearBtn = grid.querySelector(".shop-clear-btn");
  if (clearBtn) clearBtn.addEventListener("click", function() { shopFilter("reset", ""); });
  grid.querySelectorAll(".variant-add").forEach(function(btn) {
    btn.addEventListener("click", function() {
      shopAdd(this.dataset.coll, this.dataset.piece, this.dataset.type);
    });
  });
  markLoadedImgs();
}

function shopFilter(key, value) {
  var params = new URLSearchParams(window.location.search);
  if (key === "reset") { params.delete("collection"); params.delete("type"); }
  else params.set(key, value);
  history.replaceState(null, "", "?" + params.toString());
  renderShopPage();
}

function shopAdd(collId, pieceId, type) {
  var piece = getPiece(pieceId);
  if (!piece || piece.collection !== collId) return;
  var prod = null;
  for (var j = 0; j < piece.products.length; j++) {
    if (piece.products[j].type === type) { prod = piece.products[j]; break; }
  }
  if (!prod) return;
  var key = pieceId + "__" + type;
  cart[key] = (cart[key] || 0) + 1;
  updateBadge();
  renderShopPage();
  toast(piece.name + " " + prod.label + " added to cart!");
}

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", function() {
  if (PAGE === "shop") {
    renderShopPage();
    renderCartBody();
  } else if (PAGE === "collections") {
    renderCollectionsPage();
  } else if (PAGE === "collection") {
    renderCollectionPage();
    renderCartBody();
  } else if (PAGE === "product") {
    renderProductPage();
    renderCartBody();
  } else {
    renderArtView();
    renderArtView2();
    renderArtView3();
  }
  updateBadge();
  document.addEventListener("keydown", function(e){ if(e.key==="Escape") closeCart(); });
});


function markLoadedImgs() {
  document.querySelectorAll(".piece-img,.variant-img,.product-img").forEach(function(img) {
    if (img.complete) img.classList.add("loaded");
  });
}

/* ── HELPERS ── */
function esc(s) {
  var d = document.createElement("div");
  d.textContent = s == null ? "" : s;
  return d.innerHTML;
}

function getPiece(id) {
  for (var i = 0; i < CATALOG.length; i++) { if (CATALOG[i].id === id) return CATALOG[i]; }
  return null;
}
function getImg(id) {
  var p = getPiece(id);
  return p ? p.image : "";
}
function byCollection(collId) {
  var out = [];
  for (var i = 0; i < CATALOG.length; i++) { if (CATALOG[i].collection === collId) out.push(CATALOG[i]); }
  return out;
}
function getProd(piece, type) {
  for (var j = 0; j < piece.products.length; j++) {
    if (piece.products[j].type === type) return piece.products[j];
  }
  return null;
}

var PROD_ICON = {notebook:"icons/diary.png", mug:"icons/cup.png", poster:"icons/painting.png", tote:"icons/bag.png"};
var PROD_SHORT = {notebook:"Journal", mug:"Mug", poster:"Print", tote:"Tote"};

var selectedProd  = {};
var selectedProd2 = {};
var selectedProd3 = {};

/* ── SHARED CAROUSEL RENDER ── */
function renderCarousel(pieces, gridId, selected, selectFn, addFn, carousel) {
  var html = "";
  for (var i = 0; i < pieces.length; i++) {
    var p = pieces[i];
    var sel = selected[p.id] || null;
    var icons = "";
    for (var j = 0; j < p.products.length; j++) {
      var pr = p.products[j];
      icons += "<button class=\"prod-icon-btn" + (sel === pr.type ? " selected" : "") + "\""
             + " data-piece=\"" + esc(p.id) + "\" data-type=\"" + esc(pr.type) + "\">"
             + "<img class=\"prod-icon-img\" src=\"" + esc(PROD_ICON[pr.type]) + "\" alt=\"" + esc(PROD_SHORT[pr.type]) + "\" onload=\"this.classList.add('loaded')\" onerror=\"this.classList.add('loaded')\">"
             + "<span class=\"prod-icon-label\">" + esc(PROD_SHORT[pr.type]) + "</span>"
             + "</button>";
    }
    var action = "";
    if (sel) {
      var selPr = null;
      for (var k = 0; k < p.products.length; k++) { if (p.products[k].type === sel) { selPr = p.products[k]; break; } }
      action = "<span class=\"card-price\">$" + esc(selPr.price) + "</span>"
             + "<button class=\"card-add-btn\" data-piece=\"" + esc(p.id) + "\" data-type=\"" + esc(sel) + "\">Add to Cart</button>";
    } else {
      action = "<span class=\"card-price-empty\">Select a product</span>";
    }
    html += "<div class=\"piece-card\">"
          + "<a href=\"product.html?design=" + encodeURIComponent(p.id) + "\" class=\"piece-img-link\"><img class=\"piece-img\" src=\"" + esc(p.image) + "\" alt=\"" + esc(p.name) + "\" onload=\"this.classList.add('loaded')\" onerror=\"this.classList.add('loaded')\"></a>"
          + "<div class=\"piece-body\">"
          + "<div class=\"piece-name\"><a href=\"product.html?design=" + encodeURIComponent(p.id) + "\" class=\"piece-name-link\">" + esc(p.name) + "</a></div>"
          + "<div class=\"piece-desc\">" + esc(p.desc) + "</div>"
          + "<div class=\"piece-footer\">"
          + "<div class=\"prod-carousel\">" + icons + "</div>"
          + "<div class=\"card-action\">" + action + "</div>"
          + "</div>"
          + "</div></div>";
  }
  var g = document.getElementById(gridId);
  if (g) {
    g.innerHTML = html;
    g.querySelectorAll(".prod-icon-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        selectFn(this.dataset.piece, this.dataset.type);
      });
    });
    g.querySelectorAll(".card-add-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        addFn(this.dataset.piece, this.dataset.type);
      });
    });
    carousel.update();
    markLoadedImgs();
  }
}

function renderArtView()  { renderCarousel(byCollection("lovely-ladies"), "pieces-grid",   selectedProd,  selectProd,  add,  C1); }
function renderArtView2() { renderCarousel(byCollection("fashion"),       "pieces-grid-2", selectedProd2, selectProd2, add2, C2); }
function renderArtView3() { renderCarousel(byCollection("faces"),         "pieces-grid-3", selectedProd3, selectProd3, add3, C3); }

/* ── SHARED SELECT ── */
function selectProdIn(selected, renderFn, pieceId, type) {
  if (selected[pieceId] === type) delete selected[pieceId];
  else selected[pieceId] = type;
  renderFn();
}

function selectProd(pieceId, type)  { selectProdIn(selectedProd,  renderArtView,  pieceId, type); }
function selectProd2(pieceId, type) { selectProdIn(selectedProd2, renderArtView2, pieceId, type); }
function selectProd3(pieceId, type) { selectProdIn(selectedProd3, renderArtView3, pieceId, type); }

/* ── SHARED ADD ── */
function addToCart(selected, renderFn, pieceId, type) {
  var piece = getPiece(pieceId);
  if (!piece) return;
  var prod = null;
  for (var j = 0; j < piece.products.length; j++) { if (piece.products[j].type === type) { prod = piece.products[j]; break; } }
  if (!prod) return;
  var key = pieceId + "__" + type;
  cart[key] = (cart[key] || 0) + 1;
  delete selected[pieceId];
  updateBadge();
  renderFn();
  toast(piece.name + " " + prod.label + " added to cart!");
}

function add(pieceId, type)  { addToCart(selectedProd,  renderArtView,  pieceId, type); }
function add2(pieceId, type) { addToCart(selectedProd2, renderArtView2, pieceId, type); }
function add3(pieceId, type) { addToCart(selectedProd3, renderArtView3, pieceId, type); }

/* ── CART LOGIC ── */
function remove(key) {
  if (!cart[key]) return;
  delete cart[key];
  updateBadge();
  renderCartBody();
  renderArtView();
}
function changeQty(key, d) {
  if (!cart[key]) return;
  if (d > 0) {
    cart[key]++;
  } else {
    if (cart[key] <= 1) { remove(key); return; }
    cart[key]--;
  }
  updateBadge();
  renderCartBody();
}
function updateBadge() {
  var n = 0;
  var keys = Object.keys(cart);
  for (var i = 0; i < keys.length; i++) n += cart[keys[i]];
  var b = document.getElementById("badge");
  b.textContent = n;
  b.style.display = n > 0 ? "flex" : "none";
}

/* ── RENDER CART ── */
function renderCartBody() {
  var body = document.getElementById("d-body");
  var foot = document.getElementById("d-foot");
  var keys = Object.keys(cart);
  if (keys.length === 0) {
    body.innerHTML = "<div class=\"empty\">Your cart is empty.<br>Start browsing above.</div>";
    foot.style.display = "none";
    return;
  }
  var html = "";
  var total = 0;
  for (var i = 0; i < keys.length; i++) {
    var key   = keys[i];
    var parts = key.split("__");
    var piece = getPiece(parts[0]);
    var prod  = getProd(piece, parts[1]);
    var q     = cart[key];
    var line  = prod.price * q;
    total    += line;
    html += "<div class=\"ci\">"
          + "<img class=\"ci-img\" src=\"" + esc(getImg(parts[0])) + "\" alt=\"\">"
          + "<div class=\"ci-info\">"
          + "<div class=\"ci-name\">" + esc(piece.name) + "</div>"
          + "<div class=\"ci-type\">" + esc(prod.label) + "</div>"
          + "<div class=\"ci-row\">"
          + "<div class=\"qty\">"
          + "<button class=\"qbtn\" data-key=\"" + esc(key) + "\" data-delta=\"-1\">&#8722;</button>"
          + "<span class=\"qnum\">" + esc(q) + "</span>"
          + "<button class=\"qbtn\" data-key=\"" + esc(key) + "\" data-delta=\"1\">+</button>"
          + "</div>"
          + "<span class=\"ci-price\">$" + esc(line) + "</span>"
          + "</div>"
          + "<button class=\"ci-rm\" data-key=\"" + esc(key) + "\">Remove</button>"
          + "</div></div>";
  }
  body.innerHTML = html;
  body.querySelectorAll(".qbtn").forEach(function(btn) {
    btn.addEventListener("click", function() {
      changeQty(this.dataset.key, parseInt(this.dataset.delta, 10));
    });
  });
  body.querySelectorAll(".ci-rm").forEach(function(btn) {
    btn.addEventListener("click", function() { remove(this.dataset.key); });
  });
  foot.style.display = "block";
  foot.innerHTML = "<div class=\"subtotal\"><span class=\"sub-lbl\">Subtotal</span>"
    + "<span class=\"sub-amt\">$" + esc(total) + "</span></div>"
    + "<button class=\"go-btn\" id=\"go-btn\">Proceed to Checkout</button>"
    + "<div class=\"success\" id=\"success\">"
    + "<h2>Order placed! &#10022;</h2>"
    + "<p>Thank you — this is a prototype.<br>No real payment was taken.</p>"
    + "</div>";
  var goBtn = foot.querySelector("#go-btn");
  if (goBtn) goBtn.addEventListener("click", placeOrder);
}
function placeOrder() {
  var sub = document.querySelector(".subtotal");
  var btn = document.getElementById("go-btn");
  var suc = document.getElementById("success");
  if (sub) sub.style.display = "none";
  if (btn) btn.style.display = "none";
  if (suc) suc.style.display = "block";
  cart = {};
  updateBadge();
}

/* ── CART DRAWER ── */
function closeNav() {
  var h = document.querySelector("header");
  if (h) h.classList.remove("nav-open");
  var btn = document.querySelector(".nav-toggle");
  if (btn) btn.setAttribute("aria-expanded", "false");
}
function toggleNav() {
  var h = document.querySelector("header");
  var open = h.classList.toggle("nav-open");
  h.querySelector(".nav-toggle").setAttribute("aria-expanded", String(open));
}
function openCart() {
  closeNav();
  renderCartBody();
  document.getElementById("overlay").classList.add("on");
  document.getElementById("drawer").classList.add("on");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("overlay").classList.remove("on");
  document.getElementById("drawer").classList.remove("on");
  document.body.style.overflow = "";
}
document.addEventListener("click", function(e) {
  var h = document.querySelector("header");
  if (h && h.classList.contains("nav-open") && !h.contains(e.target)) closeNav();
});

/* ── CONTACT FORM ── */
function setInterest(selId) {
  document.getElementById("sel-merch").classList.remove("selected");
  document.getElementById("sel-art").classList.remove("selected");
  document.getElementById(selId).classList.add("selected");
}

function submitContact(e) {
  e.preventDefault();
  var first    = document.getElementById("cf-first").value.trim();
  var last     = document.getElementById("cf-last").value.trim();
  var email    = document.getElementById("cf-email").value.trim();
  var vision   = document.getElementById("cf-vision").value.trim();
  var interest = document.querySelector("input[name='interest']:checked");
  if (!first || !last || !email || !vision || !interest) {
    toast("Please fill in all fields.");
    return;
  }
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("cf-success").style.display   = "block";
}

/* ── TOAST ── */
var _toastTimer;
function toast(msg) {
  var el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("on");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function(){ el.classList.remove("on"); }, 2400);
}
