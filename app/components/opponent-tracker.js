import Ember from 'ember';

let { Component } = Ember;

export default Component.extend({
  actions: {
    increaseDamage() {
      let opponent = this.get('opponent'),
        damage = this.get('opponent.commanderDamage');

      opponent.set('commanderDamage', damage + 1);

    },
    decreaseDamage() {
      let opponent = this.get('opponent'),
        damage = this.get('opponent.commanderDamage');

      opponent.set('commanderDamage', damage - 1);
    }
  }
});
