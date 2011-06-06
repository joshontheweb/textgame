(function() {
    var actions = {};
    window.game = {};
    
    actions.open = function(args){
        var closed = this.get('closed');
        if (closed === false) {
            return this.alreadyOpen();
        }
            
        else if (closed === true) {
            if (this.get('openWith')) {
                var valid = _.intersect([args.using], this.get('openWith')).length;
                if (valid) {
                    return this.stateData.openedDescription();
                } else {
                    return this.failedToOpen();
                }
            }
        }

        else {
            return this.cantBeOpened();
        }
    }
    
    window.game.actions = actions;

})();