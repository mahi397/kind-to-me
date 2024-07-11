const lovelyMessagesForMe = [
    "Hi! How's the day going?",
    "Do you need to slow down a bit?",
    "Take a breath, look around.",
    "You can do this. He is with you!",
    "You are a force of positivity!",
    "You have a beautiful smile.",
    "Be VERY specific about what you want. Things eventually happen that way.\n\nBe wary of aiming for the mediocre.",
    "Are you limiting yourself?",
    "Maintain your individuality. Don't blend with the herd.",
    "Think of something you are grateful for in this moment.",
    "Overcommunicate, don't undercommunicate.",
    "If you KNOW something needs to be changed, it's a low-hanging fruit. Let's change it.",
    "How would you say that to a dear friend?",
    "Beginner's mind. Be curious and open to learning.",
    "Get up, move around, step outside.",
    "Action resolves anxiety.",
    "Respect your time. Or no one will.",
    "Don't be penny wise, pound foolish.",
    "Smiling is sexy.",
    "Smile more. A little more.",
    "Respect your body. It deserves to be taken care of.",
    "Respect your mind. It deserves to be taken care of.",
    "Fill your cup. You can't pour from an empty cup.",
    "Sort yourself out to be able to help others.",
    "Value your people.",
    "Be kind. Be kind. Be kind.",
    "Play some music.",
    "Shake it off.",
    "Shake that booty.",
    "Start. Take one step. Help is right around the corner.",
    "Just do it. Regret is too heavy to bear.",
    "Pain of moving vs pain of staying. You choose yours.",
];

const images = ['clouds.jpeg', 'clouds0.png', 'daisies.jpeg', 'horizon.jpeg', 'krishna.webp', 'morpankh.jpeg', 'sea better.avif', 'sea.jpeg', 'sunflowers.jpeg', 'whitedaisy.avif', 'garden.jpeg'];

function pickRandomString() {
    const message = lovelyMessagesForMe[Math.floor(Math.random() * lovelyMessagesForMe.length)];
    // console.log(message);
    document.getElementById('message').innerText = message;
};

function pickRandomImage() {
    const image = images[Math.floor(Math.random() * images.length)];
    
    // document.body.style.backgroundImage = `url('assets/${image}')`;
    // document.body.style.setProperty('--background-image', `url('assets/${image}')`);
    // document.querySelector('body::before').style.backgroundImage = `url('assets/${image}')`;

    const style = document.createElement('style');
    style.innerHTML = `
        body::before {
            background-image: url('assets/${image}');
        }
    `;
    document.head.appendChild(style);
}

window.onload = pickRandomImage;
pickRandomString();