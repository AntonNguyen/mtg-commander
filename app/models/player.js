import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  life: DS.attr('number', { defaultValue: 40 }),
  poisonCounters: DS.attr('number', { defaultValue: 0 }),
  opponents: DS.hasMany('opponent', { async: false }),

  isAlmostDead: Ember.computed('poisonCounters', 'opponents.@each.commanderDamage', 'life', function() {
    const poisonCounters = this.get('poisonCounters'),
      opponents = this.get('opponents'),
      life = this.get('life');

    if (poisonCounters > 10 && poisonCounters < 15) {
      return true;
    }

    if (life < 10 && life > 0) {
      return true;
    }

    let commanderDamageOverwhelming = false;
    opponents.forEach((opponent) => {
      let damage = opponent.get('commanderDamage');
      if (damage > 17 && damage < 21) {
        commanderDamageOverwhelming = true;
      }
    });

    return commanderDamageOverwhelming;
  }),

  isDead: Ember.computed('poisonCounters', 'opponents.@each.commanderDamage', 'life', function() {
    const poisonCounters = this.get('poisonCounters'),
      opponents = this.get('opponents'),
      life = this.get('life');

    if (poisonCounters >= 15) {
      return true;
    }

    if (life <= 0) {
      return true;
    }

    let commanderDamageOverwhelming = false;
    opponents.forEach((opponent) => {
      if (opponent.get('commanderDamage') >= 21) {
        commanderDamageOverwhelming = true;
      }
    });

    return commanderDamageOverwhelming;
  })
});
