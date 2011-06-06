(function() {
    _.extend(term.commands, {
        look: function(args) {
            if (!args.length)  {
                return game.character.look();
            } else if (args[0] === 'at') {
                var objString = _.tail(args).join(' ');
                return game.objects[objString].describe();
            }
        },

        l: function(args) {
            return term.commands.look(args);
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

        open: function(args) {
            return game.character.open(args);
        },

        o: function(args) {
            return term.commands.open(args);
        },

        
        
    });
})()