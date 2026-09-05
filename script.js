/* ============================================================
   Mood Café — a wizard cat quizzes you, then hands you a coffee.
   ============================================================ */

const EMOTIONS = {
  sadness: {
    label: "sadness", coffee: "Espresso", cupColor: "#8C6A56", decoration: "swirl",
    accent: "#7C8A76", scene: "rain",
    ritual: { type: "single", icon: "🕯️", label: "light a small candle", iconClass: "" },
    messages: [
      "Hey, it's okay to feel small today. Even the sky is crying with you — let it out, then let it pass.",
      "You don't have to be okay right now. Rainy days end, and so will this one. I'll sit here with you until it does.",
      "Whatever this sadness is carrying, you don't have to carry it perfectly. Just carry it. That's brave enough.",
      "Soft reminder: you are not too much, and this feeling is not forever. Breathe with the rain for a second.",
      "It's okay to cry without needing a reason that makes sense to anyone else. This feeling is allowed to just be here.",
      "You're not falling behind. You're just having a heavy day, and heavy days still count as showing up."
    ]
  },
  happiness: {
    label: "happiness", coffee: "Latte", cupColor: "#C9A27A", decoration: "swirl",
    accent: "#5FAE7D", scene: "sunny",
    ritual: { type: "single", icon: "🥠", label: "crack the fortune cookie", iconClass: "cookie" },
    messages: [
      "Look at you, glowing! Whatever's making you smile today — let it soak in, you earned this warmth.",
      "This is your reminder to actually enjoy this moment, not just notice it. You deserve every bit of this light.",
      "The sun showed up for you today. So did you. That's worth celebrating, even quietly.",
      "Hold onto this feeling for a little longer than usual. Good days like to be remembered.",
      "You don't need a reason to feel this good — but I'm glad you found one anyway. Wear it well.",
      "Whatever you did to get here, keep it. This lightness looks good on you."
    ]
  },
  anxious: {
    label: "anxious", coffee: "Cappuccino", cupColor: "#D8B08C", decoration: "dots",
    accent: "#C9A25A", scene: "gallery",
    ritual: { type: "single", icon: "🧺", label: "open the picnic basket", iconClass: "" },
    messages: [
      "The fog feels thick right now, but you don't need to see the whole path — just the next step.",
      "Your mind is doing a lot of guessing about things that haven't happened yet. You're safe in this exact moment.",
      "Breathe in for four, out for six. The fog always lifts a little more than it feels like it will.",
      "You're allowed to not have it all figured out today. Uncertainty isn't danger, it's just... unclear. That's okay.",
      "You're not behind, and you're not failing. You're just a person whose mind is working overtime. Rest it a little.",
      "One small step is still a step. You don't have to solve everything before you're allowed to feel calm."
    ]
  },
  angry: {
    label: "angry", coffee: "Mocha", cupColor: "#5C4033", decoration: "drizzle",
    accent: "#B5566B", scene: "storm",
    ritual: { type: "cluster", icon: "🫧", label: "pop the bubble wrap", count: 6 },
    messages: [
      "Your anger is valid — something mattered enough to hurt. Let the storm move through, it's not meant to stay.",
      "You don't have to perform calm right now. Feel it fully, just don't let it steer. I've got you either way.",
      "Even thunderclouds pass. Whatever lit this fire in you, you're allowed to feel it without apology.",
      "Take one loud breath if you need to. Then another, softer one. The storm is already easing.",
      "This feeling makes sense. You're not overreacting — you're reacting to something real. Let it move through you.",
      "It's okay to be furious and still be gentle with yourself. Those two things can sit in the same room."
    ]
  },
  lonely: {
    label: "lonely", coffee: "Macchiato", cupColor: "#A87C5A", decoration: "dollop",
    accent: "#8B85B0", scene: "night",
    ritual: { type: "single", icon: "🏮", label: "send up the lantern", iconClass: "lantern" },
    messages: [
      "You're alone in this room, maybe — but not alone in this feeling. Someone, somewhere, gets it tonight.",
      "The stars are just far apart, not disconnected. You're closer to people who love you than it feels right now.",
      "I know it's quiet. I'm still here, and I'm not going anywhere until you feel a little less far away.",
      "Being lonely doesn't mean being unloved. It just means your heart is asking for a little more closeness soon.",
      "This feeling is heavy but it's not permanent. Reach out to one person tomorrow, even just to say hi.",
      "You matter to more people than this quiet moment is letting you remember. I'm one of them, right now."
    ]
  },
  tired: {
    label: "tired", coffee: "Cold Brew", cupColor: "#4A3728", decoration: "ice",
    accent: "#D9B7A3", scene: "dreamy",
    ritual: { type: "single", icon: "🕯️", label: "blow out the candle", iconClass: "" },
    messages: [
      "You don't have to earn rest. You're tired because you've been carrying real things — put a few down tonight.",
      "Slow down, just for a bit. The world can wait a little longer than it's told you it can.",
      "This is your permission slip to do less today. Tired isn't lazy — it's a body asking to be taken care of.",
      "Close your eyes for a second if you can. I'll keep the light on until you're ready to rest.",
      "You've been running on empty and still showing up. That's not nothing — that's quiet strength.",
      "Rest now, not after everything is done. Everything is never really done. You are allowed to pause."
    ]
  },
  excited: {
    label: "excited", coffee: "Affogato", cupColor: "#B98A5E", decoration: "dollop",
    accent: "#E08E68", scene: "carnival",
    ritual: { type: "single", icon: "🎉", label: "pop the confetti", iconClass: "confetti" },
    messages: [
      "Yes! Whatever this is, ride it — excitement like this doesn't show up every day, so let it move your feet a little.",
      "This spark in you? Follow it. You don't need permission to be this thrilled about something.",
      "Go tell someone. Good energy multiplies when it's shared, and yours is contagious right now.",
      "You don't have to tone this down for anyone. Big feelings, especially good ones, deserve room to be big.",
      "Whatever's coming, you're ready for it — that buzz under your skin is your body saying let's go.",
      "Bottle this feeling if you can. Remember what today felt like the next time things feel harder."
    ]
  },
  overwhelmed: {
    label: "overwhelmed", coffee: "Cortado", cupColor: "#C7A583", decoration: "dots",
    accent: "#9C93A6", scene: "clutter",
    ritual: { type: "cluster", icon: "💭", label: "tap the floating thoughts", count: 6 },
    messages: [
      "You don't have to sort it all right now. Just pick one thing off the pile — the rest can wait a beat.",
      "Too much at once doesn't mean too much for you. It just means you need a minute to breathe before you sort it.",
      "Not everything needs to happen today. Put down whatever isn't on fire and just handle what is.",
      "You're not behind — you're carrying more than one person should at once. That's the actual problem, not you.",
      "One breath, one task, one minute. That's all you owe anyone right now, including yourself.",
      "It's okay to say 'not right now' to something. Your plate can be smaller than it currently is."
    ]
  }
};

const QUESTIONS = [
  {
    q: "If today were weather, it would be…",
    options: [
      ["sadness", "Grey drizzle that won't stop"],
      ["happiness", "Golden sunshine, warm and bright"],
      ["anxious", "Thick fog you can't see through"],
      ["angry", "A sudden thunderstorm"],
      ["lonely", "A quiet, empty sky"],
      ["tired", "Heavy clouds you just want to sleep under"],
      ["excited", "Clear skies with fireworks going off"],
      ["overwhelmed", "A whirlwind picking up everything at once"]
    ]
  },
  {
    q: "Your body feels most like…",
    options: [
      ["sadness", "Heavy, like everything takes effort"],
      ["happiness", "Light, like you could float"],
      ["anxious", "Tight, like you're bracing for something"],
      ["angry", "Hot, like something's boiling under the surface"],
      ["lonely", "Small, like you're taking up less space than usual"],
      ["tired", "Drained, like your battery's at 2%"],
      ["excited", "Buzzing, like you can't sit still"],
      ["overwhelmed", "Full, like there's no room left to think"]
    ]
  },
  {
    q: "Right now you mostly want…",
    options: [
      ["sadness", "Someone to just sit with you, no fixing"],
      ["happiness", "To tell someone your good news"],
      ["anxious", "Certainty about what happens next"],
      ["angry", "To let something out, loudly"],
      ["lonely", "Someone to check on you"],
      ["tired", "To lie down and do absolutely nothing"],
      ["excited", "To DO the thing, right now"],
      ["overwhelmed", "Someone to help you sort the pile"]
    ]
  },
  {
    q: "Pick a sound.",
    options: [
      ["sadness", "Rain on a window"],
      ["happiness", "Wind chimes in the sun"],
      ["anxious", "Static / white noise"],
      ["angry", "A door slamming"],
      ["lonely", "A clock ticking in an empty room"],
      ["tired", "A long, slow exhale"],
      ["excited", "A drumroll"],
      ["overwhelmed", "Too many notifications going off at once"]
    ]
  },
  {
    q: "If your thoughts were a room, it would be…",
    options: [
      ["sadness", "Dim and quiet"],
      ["happiness", "Bright and open"],
      ["anxious", "A hallway of doors, unsure which to open"],
      ["angry", "Loud, walls closing in"],
      ["lonely", "Big, and you're the only one in it"],
      ["tired", "Dark, you just want to close your eyes"],
      ["excited", "String lights and music, ready for something"],
      ["overwhelmed", "Every drawer open and spilling out"]
    ]
  },
  {
    q: "How much energy do you have to deal with anything right now?",
    options: [
      ["sadness", "None"],
      ["happiness", "Tons!"],
      ["anxious", "Jittery, restless energy"],
      ["angry", "Explosive"],
      ["lonely", "Depends who's around"],
      ["tired", "Running on empty"],
      ["excited", "Through the roof"],
      ["overwhelmed", "Scattered in ten directions"]
    ]
  }
];

/* ---------------- element refs ---------------- */
const screens = {
  home: document.getElementById("home"),
  quiz: document.getElementById("quiz"),
  reveal: document.getElementById("reveal"),
  scene: document.getElementById("scene")
};
const catTemplate = document.getElementById("catTemplate");
const beginBtn = document.getElementById("beginBtn");
const quizBackBtn = document.getElementById("quizBackBtn");
const revealBackBtn = document.getElementById("revealBackBtn");
const backBtn = document.getElementById("backBtn");
const quizProgress = document.getElementById("quizProgress");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const revealLine = document.getElementById("revealLine");
const revealEmotion = document.getElementById("revealEmotion");
const revealCup = document.getElementById("revealCup");
const revealCoffeeName = document.getElementById("revealCoffeeName");
const stepInsideBtn = document.getElementById("stepInsideBtn");
const retakeBtn = document.getElementById("retakeBtn");
const sceneBg = document.getElementById("sceneBg");
const ritualArea = document.getElementById("ritualArea");
const speechBubble = document.getElementById("speechBubble");
const catMessage = document.getElementById("catMessage");
const anotherMsgBtn = document.getElementById("anotherMsgBtn");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function mountCat(container) {
  container.innerHTML = "";
  container.appendChild(catTemplate.content.cloneNode(true));
}
mountCat(document.getElementById("homeCat"));

function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove("active"));
  screens[name].classList.add("active");
}

/* ---------------- quiz engine ---------------- */
let quizIndex = 0;
let tally = {};
let lastAnswer = null;

function startQuiz() {
  quizIndex = 0;
  tally = {};
  lastAnswer = null;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = QUESTIONS[quizIndex];
  quizProgress.textContent = `Question ${quizIndex + 1} of ${QUESTIONS.length}`;
  quizQuestion.textContent = question.q;
  quizOptions.innerHTML = "";
  question.options.forEach(([emotionId, text]) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.type = "button";
    btn.textContent = text;
    btn.addEventListener("click", () => chooseAnswer(emotionId, btn));
    quizOptions.appendChild(btn);
  });
}

function chooseAnswer(emotionId, btn) {
  tally[emotionId] = (tally[emotionId] || 0) + 1;
  lastAnswer = emotionId;
  btn.classList.add("chosen");
  Array.from(quizOptions.children).forEach((c) => (c.disabled = true));
  const delay = prefersReducedMotion ? 0 : 380;
  setTimeout(() => {
    quizIndex++;
    if (quizIndex < QUESTIONS.length) {
      renderQuestion();
    } else {
      finishQuiz();
    }
  }, delay);
}

function finishQuiz() {
  let best = [];
  let bestScore = -1;
  Object.entries(tally).forEach(([id, score]) => {
    if (score > bestScore) {
      bestScore = score;
      best = [id];
    } else if (score === bestScore) {
      best.push(id);
    }
  });
  const resultId = best.includes(lastAnswer) ? lastAnswer : best[0];
  showReveal(resultId);
}

/* ---------------- reveal screen ---------------- */
let currentEntry = null;
let currentEntryId = null;

function decorationMarkup(kind) {
  switch (kind) {
    case "swirl":
      return `<div class="swirl"></div>`;
    case "dots":
      return `<div class="dots">
          <span style="left:8px; top:2px;"></span>
          <span style="left:16px; top:4px;"></span>
          <span style="left:24px; top:1px;"></span>
          <span style="left:12px; top:5px;"></span>
        </div>`;
    case "drizzle":
      return `<div class="drizzle"></div>`;
    case "dollop":
      return `<div class="dollop"></div>`;
    case "ice":
      return `<div class="ice">
          <span style="left:6px; top:1px; transform:rotate(-8deg);"></span>
          <span style="left:16px; top:2px; transform:rotate(10deg);"></span>
          <span style="left:26px; top:0px; transform:rotate(-4deg);"></span>
        </div>`;
    default:
      return "";
  }
}

function cupMarkup(entry) {
  const noSteam = entry.decoration === "ice";
  return `
    <div class="cup" style="--cup-color:${entry.cupColor}">
      ${noSteam ? "" : ""}
      <div class="liquid">${decorationMarkup(entry.decoration)}</div>
      <div class="body"></div>
      <div class="handle"></div>
    </div>`;
}

function showReveal(id) {
  currentEntryId = id;
  currentEntry = EMOTIONS[id];
  mountCat(document.getElementById("revealCat"));
  revealEmotion.textContent = currentEntry.label;
  revealEmotion.style.color = currentEntry.accent;
  revealCup.innerHTML = cupMarkup(currentEntry);
  revealCoffeeName.textContent = currentEntry.coffee;
  revealCoffeeName.style.color = currentEntry.accent;
  showScreen("reveal");
}

stepInsideBtn.addEventListener("click", () => {
  if (currentEntry) openScene(currentEntry);
});
retakeBtn.addEventListener("click", startQuiz);
beginBtn.addEventListener("click", startQuiz);
quizBackBtn.addEventListener("click", () => showScreen("home"));
revealBackBtn.addEventListener("click", () => showScreen("home"));

/* ---------------- scene + ritual ---------------- */
let messageBag = [];
let typeTimer = null;
let ritualDone = false;

function openScene(entry) {
  mountCat(document.getElementById("sceneCat"));
  messageBag = [];
  ritualDone = false;
  speechBubble.classList.add("hidden");
  catMessage.textContent = "";
  buildSceneLayers(entry.scene);
  buildRitual(entry);
  showScreen("scene");
  Sound.play(entry.scene);
  backBtn.focus();
}

function returnToCafe() {
  showScreen("home");
  Sound.stopCurrent();
  clearTimeout(typeTimer);
}

backBtn.addEventListener("click", returnToCafe);
anotherMsgBtn.addEventListener("click", showMessage);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && screens.scene.classList.contains("active")) {
    returnToCafe();
  }
});

function nextMessage() {
  if (!currentEntry) return "";
  if (messageBag.length === 0) {
    messageBag = currentEntry.messages.map((_, i) => i);
    for (let i = messageBag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [messageBag[i], messageBag[j]] = [messageBag[j], messageBag[i]];
    }
  }
  const idx = messageBag.pop();
  return currentEntry.messages[idx];
}

function showMessage() {
  const text = nextMessage();
  clearTimeout(typeTimer);
  speechBubble.style.animation = "none";
  void speechBubble.offsetWidth;
  speechBubble.style.animation = "";

  if (prefersReducedMotion) {
    catMessage.textContent = text;
    catMessage.classList.remove("typing-cursor");
    return;
  }

  catMessage.textContent = "";
  catMessage.classList.add("typing-cursor");
  let i = 0;
  const speed = 18;
  function typeNext() {
    catMessage.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      typeTimer = setTimeout(typeNext, speed);
    } else {
      catMessage.classList.remove("typing-cursor");
    }
  }
  typeNext();
}

function completeRitual() {
  if (ritualDone) return;
  ritualDone = true;
  speechBubble.classList.remove("hidden");
  showMessage();
}

function buildRitual(entry) {
  ritualArea.innerHTML = "";
  const r = entry.ritual;

  if (r.type === "single") {
    const btn = document.createElement("button");
    btn.className = "ritual-btn";
    btn.type = "button";
    btn.innerHTML = `<span class="ritual-icon ${r.iconClass}">${r.icon}</span><span class="ritual-label">${r.label}</span>`;
    btn.addEventListener("click", () => {
      const icon = btn.querySelector(".ritual-icon");
      if (!btn.classList.contains("triggered")) {
        btn.classList.add("triggered");
        icon.classList.add("triggered");
        if (r.iconClass === "confetti") spawnConfetti(icon);
      }
      completeRitual();
    });
    ritualArea.appendChild(btn);
  }

  if (r.type === "cluster") {
    const label = document.createElement("p");
    label.className = "ritual-label";
    label.style.margin = "0 0 0.4rem";
    label.style.fontSize = "0.85rem";
    label.style.color = "var(--text-soft)";
    label.textContent = r.label;

    const cluster = document.createElement("div");
    cluster.className = "ritual-cluster";
    for (let i = 0; i < r.count; i++) {
      const b = document.createElement("button");
      b.className = "bubble-btn";
      b.type = "button";
      b.textContent = r.icon;
      b.setAttribute("aria-label", "pop");
      b.addEventListener("click", () => {
        if (b.classList.contains("popped")) return;
        b.classList.add("popped");
        Sound.pop();
        completeRitual();
      });
      cluster.appendChild(b);
    }

    const wrap = document.createElement("div");
    wrap.appendChild(label);
    wrap.appendChild(cluster);
    ritualArea.appendChild(wrap);
  }
}

function spawnConfetti(anchor) {
  const colors = ["#B76E79", "#9CAF88", "#D9A0A6", "#F1E7D8", "#718063"];
  for (let i = 0; i < 16; i++) {
    const p = document.createElement("span");
    p.className = "confetti-piece";
    const angle = Math.random() * Math.PI * 2;
    const dist = 40 + Math.random() * 50;
    p.style.setProperty("--dx", Math.cos(angle) * dist + "px");
    p.style.setProperty("--dy", Math.sin(angle) * dist - 20 + "px");
    p.style.setProperty("--dr", Math.random() * 360 + "deg");
    p.style.background = colors[i % colors.length];
    anchor.appendChild(p);
    setTimeout(() => p.remove(), 1100);
  }
}

/* ---------------- scene background builders ---------------- */
function clearScene() {
  sceneBg.innerHTML = "";
  sceneBg.className = "scene-bg";
}

let flashTimeout = null;
let fireworkInterval = null;

function buildSceneLayers(kind) {
  clearScene();
  clearInterval(fireworkInterval);

  if (kind === "rain") {
    sceneBg.style.background = "linear-gradient(180deg, #7C8A76 0%, #9CAF88 55%, #B9C7A9 100%)";
    for (let i = 0; i < 60; i++) {
      const d = document.createElement("div");
      d.className = "drop";
      d.style.left = Math.random() * 100 + "%";
      d.style.animationDuration = 0.6 + Math.random() * 0.6 + "s";
      d.style.animationDelay = Math.random() * 2 + "s";
      d.style.opacity = 0.3 + Math.random() * 0.4;
      sceneBg.appendChild(d);
    }
  }

  if (kind === "sunny") {
    sceneBg.style.background = "linear-gradient(180deg, #F6E7C9 0%, #F1D9C4 45%, #E9C6C9 100%)";
    const sun = document.createElement("div");
    sun.className = "sun";
    sceneBg.appendChild(sun);
    for (let i = 0; i < 24; i++) {
      const s = document.createElement("div");
      s.className = "sparkle";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = Math.random() * 3 + "s";
      sceneBg.appendChild(s);
    }
  }

  if (kind === "gallery") {
    sceneBg.style.background = "linear-gradient(180deg, #E9DFC8 0%, #E4D2CB 55%, #D9C8DC 100%)";
    const swirl = document.createElement("div");
    swirl.className = "gallery-swirl";
    sceneBg.appendChild(swirl);
    for (let i = 0; i < 18; i++) {
      const s = document.createElement("div");
      s.className = "star gold";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 70 + "%";
      s.style.animationDelay = Math.random() * 3 + "s";
      sceneBg.appendChild(s);
    }
  }

  if (kind === "storm") {
    sceneBg.style.background = "linear-gradient(180deg, #6E4E56 0%, #8C5D66 50%, #B76E79 100%)";
    for (let i = 0; i < 50; i++) {
      const d = document.createElement("div");
      d.className = "drop";
      d.style.left = Math.random() * 100 + "%";
      d.style.animationDuration = 0.4 + Math.random() * 0.4 + "s";
      d.style.animationDelay = Math.random() * 2 + "s";
      d.style.opacity = 0.3 + Math.random() * 0.4;
      sceneBg.appendChild(d);
    }
    const flash = document.createElement("div");
    flash.className = "flash";
    flash.id = "flash";
    sceneBg.appendChild(flash);
    scheduleFlash();
  }

  if (kind === "night") {
    sceneBg.style.background = "linear-gradient(180deg, #5C5A6E 0%, #6E6580 55%, #9C8AA0 100%)";
    const moon = document.createElement("div");
    moon.className = "moon";
    sceneBg.appendChild(moon);
    for (let i = 0; i < 45; i++) {
      const s = document.createElement("div");
      s.className = "star";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 70 + "%";
      s.style.animationDelay = Math.random() * 3 + "s";
      sceneBg.appendChild(s);
    }
  }

  if (kind === "dreamy") {
    sceneBg.style.background = "linear-gradient(180deg, #E9D9DE 0%, #EFE3D6 55%, #F6ECDD 100%)";
    for (let i = 0; i < 6; i++) {
      const c = document.createElement("div");
      c.className = "cloud";
      const w = 90 + Math.random() * 110;
      c.style.width = w + "px";
      c.style.height = w * 0.4 + "px";
      c.style.top = 8 + Math.random() * 55 + "%";
      c.style.left = "-15vw";
      c.style.animationDuration = 24 + Math.random() * 14 + "s";
      c.style.animationDelay = -Math.random() * 20 + "s";
      sceneBg.appendChild(c);
    }
    for (let i = 0; i < 10; i++) {
      const z = document.createElement("div");
      z.className = "zzz";
      z.textContent = "z";
      z.style.left = Math.random() * 100 + "%";
      z.style.bottom = Math.random() * 40 + "%";
      z.style.fontSize = 14 + Math.random() * 16 + "px";
      z.style.animationDelay = Math.random() * 6 + "s";
      z.style.animationDuration = 5 + Math.random() * 4 + "s";
      sceneBg.appendChild(z);
    }
  }

  if (kind === "carnival") {
    sceneBg.style.background = "linear-gradient(180deg, #5C4A66 0%, #8C5D74 45%, #E0A088 100%)";
    for (let i = 0; i < 14; i++) {
      const l = document.createElement("div");
      l.className = "string-light";
      l.style.left = Math.random() * 100 + "%";
      l.style.top = 6 + Math.random() * 14 + "%";
      l.style.animationDelay = Math.random() * 2 + "s";
      sceneBg.appendChild(l);
    }
    if (!prefersReducedMotion) {
      fireworkInterval = setInterval(() => {
        if (!screens.scene.classList.contains("active")) return;
        const fw = document.createElement("div");
        fw.className = "firework";
        const colors = ["#F0D28A", "#E08E68", "#D9A0A6", "#9CAF88"];
        fw.style.background = colors[Math.floor(Math.random() * colors.length)];
        fw.style.left = 10 + Math.random() * 80 + "%";
        fw.style.top = 10 + Math.random() * 40 + "%";
        sceneBg.appendChild(fw);
        setTimeout(() => fw.remove(), 1000);
      }, 1400);
    }
  }

  if (kind === "clutter") {
    sceneBg.style.background = "linear-gradient(180deg, #D9D2CE 0%, #E3DCE6 55%, #EDE7DA 100%)";
    for (let i = 0; i < 7; i++) {
      const b = document.createElement("div");
      b.className = "clutter-blob";
      const size = 100 + Math.random() * 120;
      b.style.width = size + "px";
      b.style.height = size + "px";
      b.style.top = Math.random() * 85 + "%";
      b.style.left = "-15vw";
      b.style.animationDuration = 20 + Math.random() * 14 + "s";
      b.style.animationDelay = -Math.random() * 18 + "s";
      sceneBg.appendChild(b);
    }
  }
}

function scheduleFlash() {
  clearTimeout(flashTimeout);
  const flash = document.getElementById("flash");
  if (!flash) return;
  flashTimeout = setTimeout(() => {
    flash.classList.remove("active");
    void flash.offsetWidth;
    flash.classList.add("active");
    if (screens.scene.classList.contains("active") && currentEntryId === "angry") {
      scheduleFlash();
    }
  }, 3500 + Math.random() * 4000);
}

/* ============================================================
   Procedural ambient sound engine (Web Audio API — no files)
   ============================================================ */
const Sound = (() => {
  let ctx = null;
  let master = null;
  let muted = false;
  try { muted = localStorage.getItem("moodCafeMuted") === "true"; } catch (e) {}
  let current = null;
  let noiseBufferCache = null;
  let supported = true;

  function ensureCtx() {
    if (!supported) return false;
    try {
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) { supported = false; return false; }
        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = muted ? 0 : 0.32;
        master.connect(ctx.destination);
      }
      if (ctx.state === "suspended") ctx.resume();
      return true;
    } catch (e) {
      supported = false;
      return false;
    }
  }

  function noiseBuffer() {
    if (noiseBufferCache) return noiseBufferCache;
    const len = ctx.sampleRate * 4;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    noiseBufferCache = buf;
    return buf;
  }

  function stopCurrent() {
    if (current && current.stop) current.stop();
    current = null;
  }

  function safeStop(node) {
    try {
      if (node.stop) node.stop();
      node.disconnect();
    } catch (e) {}
  }

  function makeRain(intensity = 0.5) {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer();
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1400;
    filter.Q.value = 0.5;
    const gain = ctx.createGain();
    gain.gain.value = intensity;
    src.connect(filter).connect(gain).connect(master);
    src.start();
    return { stop: () => safeStop(src) };
  }

  function makeSunny() {
    const notes = [523.25, 659.25, 783.99, 987.77];
    const g = ctx.createGain();
    g.gain.value = 0.05;
    g.connect(master);
    let idx = 0;
    const interval = setInterval(() => {
      const o = ctx.createOscillator();
      const og = ctx.createGain();
      o.type = "sine";
      o.frequency.value = notes[idx % notes.length];
      idx++;
      og.gain.value = 0;
      o.connect(og).connect(g);
      const t = ctx.currentTime;
      og.gain.linearRampToValueAtTime(0.7, t + 0.3);
      og.gain.linearRampToValueAtTime(0, t + 1.8);
      o.start();
      o.stop(t + 2);
    }, 1500);
    return { stop: () => { clearInterval(interval); safeStop(g); } };
  }

  function makeGallery() {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuffer();
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 450;
    const gain = ctx.createGain();
    gain.gain.value = 0.28;
    src.connect(filter).connect(gain).connect(master);
    src.start();

    const chimeInterval = setInterval(() => {
      const o = ctx.createOscillator();
      const og = ctx.createGain();
      o.type = "sine";
      o.frequency.value = 700 + Math.random() * 500;
      og.gain.value = 0;
      o.connect(og).connect(master);
      const t = ctx.currentTime;
      og.gain.linearRampToValueAtTime(0.06, t + 0.1);
      og.gain.linearRampToValueAtTime(0, t + 1.2);
      o.start();
      o.stop(t + 1.3);
    }, 2600);

    return { stop: () => { clearInterval(chimeInterval); safeStop(src); } };
  }

  function makeStorm() {
    const rain = makeRain(0.55);
    const rumbleOsc = ctx.createOscillator();
    rumbleOsc.type = "sine";
    rumbleOsc.frequency.value = 55;
    const rumbleGain = ctx.createGain();
    rumbleGain.gain.value = 0.12;
    rumbleOsc.connect(rumbleGain).connect(master);
    rumbleOsc.start();
    return { stop: () => { rain.stop(); safeStop(rumbleOsc); } };
  }

  function makeNight() {
    const pad = ctx.createOscillator();
    pad.type = "sine";
    pad.frequency.value = 220;
    const padGain = ctx.createGain();
    padGain.gain.value = 0.05;
    pad.connect(padGain).connect(master);
    pad.start();
    const interval = setInterval(() => {
      if (Math.random() < 0.6) {
        const o = ctx.createOscillator();
        const og = ctx.createGain();
        o.type = "sine";
        o.frequency.value = 1200 + Math.random() * 800;
        og.gain.value = 0;
        o.connect(og).connect(master);
        const t = ctx.currentTime;
        og.gain.linearRampToValueAtTime(0.05, t + 0.05);
        og.gain.linearRampToValueAtTime(0, t + 0.4);
        o.start();
        o.stop(t + 0.5);
      }
    }, 900);
    return { stop: () => { clearInterval(interval); safeStop(pad); } };
  }

  function makeDreamy() {
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    o1.type = "sine"; o2.type = "sine";
    o1.frequency.value = 196;
    o2.frequency.value = 196.5;
    const g = ctx.createGain();
    g.gain.value = 0.08;
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.15;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.03;
    lfo.connect(lfoGain).connect(g.gain);
    o1.connect(g); o2.connect(g); g.connect(master);
    o1.start(); o2.start(); lfo.start();
    return { stop: () => { safeStop(o1); safeStop(o2); safeStop(lfo); } };
  }

  function makeCarnival() {
    const scale = [523.25, 587.33, 659.25, 783.99, 880.0]; // C D E G A (bouncy major)
    const g = ctx.createGain();
    g.gain.value = 0.06;
    g.connect(master);
    let idx = 0;
    const interval = setInterval(() => {
      const o = ctx.createOscillator();
      const og = ctx.createGain();
      o.type = "triangle";
      o.frequency.value = scale[idx % scale.length];
      idx++;
      og.gain.value = 0;
      o.connect(og).connect(g);
      const t = ctx.currentTime;
      og.gain.linearRampToValueAtTime(0.8, t + 0.02);
      og.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      o.start();
      o.stop(t + 0.4);
    }, 320);
    return { stop: () => { clearInterval(interval); safeStop(g); } };
  }

  function makeClutter() {
    const freqs = [130, 138, 146];
    const oscs = freqs.map((f) => {
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.value = f;
      return o;
    });
    const g = ctx.createGain();
    g.gain.value = 0.045;
    oscs.forEach((o) => { o.connect(g); o.start(); });
    g.connect(master);
    return { stop: () => oscs.forEach(safeStop) };
  }

  const builders = {
    rain: () => makeRain(0.5),
    sunny: makeSunny,
    gallery: makeGallery,
    storm: makeStorm,
    night: makeNight,
    dreamy: makeDreamy,
    carnival: makeCarnival,
    clutter: makeClutter
  };

  return {
    play(kind) {
      if (!ensureCtx()) return;
      stopCurrent();
      try {
        if (builders[kind]) current = builders[kind]();
      } catch (e) {}
    },
    stopCurrent,
    pop() {
      if (!ensureCtx()) return;
      try {
        const o = ctx.createOscillator();
        const og = ctx.createGain();
        o.type = "sine";
        o.frequency.value = 500 + Math.random() * 400;
        og.gain.value = 0.001;
        o.connect(og).connect(master);
        const t = ctx.currentTime;
        og.gain.linearRampToValueAtTime(0.18, t + 0.02);
        og.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
        o.start();
        o.stop(t + 0.15);
      } catch (e) {}
    },
    toggleMute() {
      if (!ensureCtx()) {
        muted = !muted;
        try { localStorage.setItem("moodCafeMuted", muted); } catch (e) {}
        return muted;
      }
      muted = !muted;
      master.gain.setTargetAtTime(muted ? 0 : 0.32, ctx.currentTime, 0.15);
      try { localStorage.setItem("moodCafeMuted", muted); } catch (e) {}
      return muted;
    },
    isMuted: () => muted
  };
})();

function syncSoundIcons(muted) {
  const icon = muted ? "🔇" : "🔊";
  document.querySelectorAll(".sound-toggle").forEach((b) => (b.textContent = icon));
}
document.querySelectorAll(".sound-toggle").forEach((b) =>
  b.addEventListener("click", () => syncSoundIcons(Sound.toggleMute()))
);
syncSoundIcons(Sound.isMuted());
