(function() {
    var objects = {};
    
    
    objects.Object = Backbone.Model.extend({
        defaults: {
            'name': null,
            'description': null,
            
            'closed': null,
            'openWith': null,
        },

        open: function() {
            return 'You can\'t open the '+ this.get('name');
        },

        alreadyOpen: function() {
            return 'The '+ this.get('name') + ' is already open.';
        },

        failedToOpen: function() {
            return 'You failed to open the '+ this.get('name');
        },

        cantBeOpened: function() {
            return 'You can\'t open '+ this.get('name');
        },
        
        describe: function() {
            return this.get('description');
        },

    });

    objects.ObjectState = Backbone.View.extend({
        initialize: function() {
            
        }

        
    });

    objects.knife = objects.Object.extend({
        name: 'Knife',
        description: 'The knife has a wooden handle and a four inch blade that looks a bit dull',
        attack: 5,
    });

    objects['pocket watch'] = objects.Object.extend({
        name: 'Pocket Watch',
        description: function() {
            var time = new Date();
            return 'The time reads '+ time.getHours() +':'+ time.getMinutes();
        }
    });

    objects.shovel = objects.Object.extend({
        name: 'Shovel',
        description: 'Its a shovel...',
        attack: 6,
    });

    objects.coffin = objects.Object.extend({
        open: function(args) {
            return game.actions.open.call(this, args);
        },
        
        defaults: {
            name: 'Coffin',
            description: 'A plain pine bix coffin.  Looks to have been rushed with the lid nailed down poorly.',
            closed: true,
            openWith: ['shovel', 'knife'],
            opening: 'You pry the top off of the coffin without too much effort.',
            inside: 'Inside is a key'
        }
    });

    objects.coffinstate = objects.Object.extend({
        initialize: function() {
            this.model.bind('opened', this.opened);
        },
        
        opened: function() {
            this.set({'closed': false})
        },

        stateData: {
            openedDescription: function() {
                var output = 'The pine coffin has been pried open.'
                if (this.get('contains').length) {
                    output += 'Inside you see:'+ this.get('contains').join(' ');
                } else {
                    output += 'There is nothing inside';
                }
                
            },

            closedDescription: function() {
                return 'A plain pine bix coffin.  Looks to have been rushed with the lid nailed down poorly.';
            }
        }
    });


    window.game.objects = objects;
    
})();