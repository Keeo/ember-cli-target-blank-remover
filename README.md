# Ember-cli-target-blank-remover

Removes `/target=("|')_blank("|')/gi` from templates.

## Installation

`ember install ember-cli-target-blank-remover`

## Usage
Add toggle to ember-cli-build.js.
```
var app = new EmberApp(defaults, {
  removeTargetBlank: EmberApp.env() === 'development',
});
```