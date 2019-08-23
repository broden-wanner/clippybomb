var clippyBomb = function() {
    setInterval(() => {
        var messages = [
            'You have made a terrible mistake',
            'I am death, the destroyer of worlds',
            'All shall love me and despair'
        ];


        clippy.load('Clippy', function(agent) {
            var pos = {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
            };
            agent.show();
            agent.moveTo(pos.x, pos.y);
            agent.speak(messages[Math.floor(Math.random() * messages.length)]);
        });
    }, 10);
};
