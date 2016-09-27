/* global require, module */
const Filter = require('broccoli-filter');

function TargetBlankRemover(inputTree) {
  if (!(this instanceof TargetBlankRemover)) {
    return new TargetBlankRemover(inputTree);
  }

  Filter.call(this, inputTree);

  this.name = 'target-blank-remover';
  this.inputTree = inputTree;
}

TargetBlankRemover.prototype = Object.create(Filter.prototype);
TargetBlankRemover.prototype.constructor = TargetBlankRemover;
TargetBlankRemover.prototype.extensions = ['hbs'];
TargetBlankRemover.prototype.targetExtension = 'hbs';
TargetBlankRemover.prototype.processString = function(string) {
  return string.replace(/target=("|')_blank("|')/gi, '');
};

module.exports = TargetBlankRemover;
