import Ember from 'ember';

/**
 * Recent Clients Controller
 */
export default Ember.Controller.extend({
  healthColor: Ember.computed('model.player.isAlmostDead', 'model.player.isDead', function() {
    let isAlmostDead = this.get('model.player.isAlmostDead');
    if (isAlmostDead) {
      return 'almostDead';
    }

    let isDead = this.get('model.player.isDead');
    if (isDead) {
      return 'dead';
    }
    return 'healthy';
  })
});
