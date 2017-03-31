import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      player: this.store.createRecord('player')
    };
  },

  increaseAttribute(attribute) {
    let player = this.get('currentModel.player'),
      attributeValue = this.get(`currentModel.player.${attribute}`);

    player.set(attribute, attributeValue + 1);
  },

  decreaseAttribute(attribute) {
    let player = this.get('currentModel.player'),
      attributeValue = this.get(`currentModel.player.${attribute}`),
      newValue = attributeValue - 1;

    if (newValue >= 0) {
      player.set(attribute, newValue);
    }
  },

  actions: {
    reset() {
      this.set('currentModel', this.store.createRecord('player'));
    },

    decreaseLife() {
      this.decreaseAttribute('life');
    },

    increaseLife() {
      this.increaseAttribute('life');
    },

    decreasePoison() {
      this.decreaseAttribute('poisonCounters');
    },

    increasePoison() {
      this.increaseAttribute('poisonCounters');
    },

    addOpponent() {
      let player = this.get('currentModel.player'),
        curentOpponents = this.get('currentModel.player.opponents'),
        newOpponent = this.store.createRecord('opponent'),
        opponents = [];

      newOpponent.set('id', curentOpponents.length + 1);

      curentOpponents.forEach((opponent) => {
        opponents.push(opponent);
      });
      opponents.addObject(newOpponent);

      player.set('opponents', opponents);
    }
  }
});
