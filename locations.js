(function(){
    game.locations = {
        'clearing': {
            name: 'A Clearing',
            description: 'You see an clearing with soft green grass.  There is a half dug grave next to which you \nsee a shovel and a pine box coffin.  To the north is a thick forest and \nyou can hear the sound of running water from the south',
            items: ['shovel', 'coffin'],
            exits: {n: 'woods', s: 'river'},
        },

        'woods': {
            name: 'The Woods',
            description: 'You are in dense forest.  The ground is padded with pine needles and the air is fragrant.  The forest looks to open up to the south.',
            exits: {n: 'woods', e: 'woods', s: 'clearing', w: 'woods'}
        },

        'river': {
            name: 'The River',
            description: 'You see swiftly running river running east-west. It looks too fast and deep wade across.  \nIn the distant south across the river you see a mountain range with a strange shiny object suspended in the air above it.  \nTo be able to see it at this distance, it must be miles across.',
            exits: {n: 'clearing'}
        }
        
    };
})();