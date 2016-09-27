/* jshint node: true */
'use strict';

const TargetBlankRemover = require('./lib/target-blank-remover');

module.exports = {
  name: 'ember-cli-target-blank-remover',

  included: function(app) {
    this.app = app;

    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }

    this._super.included.apply(this, arguments);
    this.isEnabled = this.app.options.removeTargetBlank || false;
  },

  setupPreprocessorRegistry: function(type, registry) {
    registry.add('template', {
      name: 'target-blank-remover',
      ext: 'hbs',
      _addon: this,
      toTree: function(tree) {
        if (this._addon.isEnabled) {
          return new TargetBlankRemover(tree);
        }

        return tree;
      }
    });

    if (type === 'parent') {
      this.parentRegistry = registry;
    }
  }
};
