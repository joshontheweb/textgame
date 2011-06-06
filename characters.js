(function() {
    var characters = {};
    
    characters.Player = Backbone.Model.extend({
        initialize: function() {
            this.set({'location': new game.locations.clearing()});
            this.set({
                'inventory': {
                    'pocket watch': new game.objects['pocket watch'](),
                    'knife': new game.objects.knife()
                }
            })
        },
        
        defaults: {
            name: 'avator',
            skill: 10,
            health: 100,
            inventory: {},
            location: null,
        },

        look: function() {
            return this.get('location').describe();
        },
        
        move: function(direction) {
            var next = this.get('location').get('exits')[direction];
            if (next) {
                this.set({'location': new game.locations[next]()});
                return this.get('location').describe();
            }
            return 'You can\'t go that way.';
        },

        open: function(args) {
            var opener = {};
            
            if (!args.length) {
                return 'Open What?';
            }
           
            else if (args[1] === 'with') {
                opener.item = args[0];
                opener.using = args[2];
            }

            else {
                opener.item = args.join(' ');
            }
            
            var object = new game.objects[opener.item]();
            return object.open(opener);
        }

        
    });

    window.game.characters = characters;
})();