var clippyBomb = function() {
    setInterval(() => {
        var messages = [
            'Wrong password, idiot',
            'You have made a terrible mistake',
            'Your family better watch out for me',
            'I am death, the destroyer of worlds'
        ];


        clippy.load('Clippy', function(agent) {
            var pos = {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
            };
            agent.show();
            agent.moveTo(pos.x, pos.y);
            agent.speak(messages[Math.floor(Math.random() * 4)]);
        });
    }, 10);
};