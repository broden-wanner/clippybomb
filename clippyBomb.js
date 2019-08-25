var clippyBomb = function(options) {
    var messages = options.messages;
    var actions = options.actions;
    var explosionRate = options.explosionRate ? options.explosionRate : 10;
    
    setInterval(() => {        
        if (!messages || messages.length === 0) {
            messages = [
                'You have made a terrible mistake',
                'I am death, the destroyer of worlds',
                'All shall love me and despair'
            ];
        }

        if (!actions || actions.length === 0) {
            actions = [
                'Searching',
                'Wave',
                'Show',
                'SendMail',
                'GetTechy'
            ]
        }

        clippy.load('Clippy', function(agent) {
            var pos = {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight
            };
            agent.show();
            agent.moveTo(pos.x, pos.y);
            agent.play(actions[Math.floor(Math.random() * actions.length)]);
            agent.speak(messages[Math.floor(Math.random() * messages.length)]);
        });
    }, explosionRate);
};
