(function() {
    game = {};
    
    game.describe = function(location) {
        return location.name +'\n'+ location.description;
    }
    
    game.Character = Backbone.Model.extend({
        initialize: function() {
            this.set({'location': game.locations.clearing});
            term.terminal.model.set({'stdout': game.describe(game.locations.clearing)});
        },
        
        defaults: {
            name: 'avator',
            skill: 10,
            health: 100,
            inventory: ['knife', 'pocket watch'],
            location: null,
        },

        look: function() {
            return game.describe(this.get('location'));
        },
        
        move: function(direction) {
            var next = this.get('location').exits[direction];
            if (next) {
                this.set({'location': game.locations[next]});
                return game.describe(game.locations[next]);
            }
            return 'You can\'t go that way.';
        },

        
    });
})();