(function() {
    _.extend(term.commands, {
        look: function(args) {
            if (!args)  {
                return game.character.look();
            } else {
                return game.describeObject(args[1]);
            }
        },

        l: function() {
            return term.commands.look();
        },

        north: function() {
            return game.character.move('n');
        },

        n: function() {
            return term.commands.north();
        },

        east: function() {
            return game.character.move('e');
        },

        e: function() {
            return term.commands.east();
        },
        
        south: function() {
            return game.character.move('s');
        },

        s: function() {
            return term.commands.south();
        },
        
        west: function() {
            return game.character.move('w');
        },

        w: function() {
            return term.commands.west();
        },

        inventory: function() {
            return game.character.get('inventory');
        },

        i: function() {
            return term.commands.inventory().join('\n');
        },
        
    });
})()