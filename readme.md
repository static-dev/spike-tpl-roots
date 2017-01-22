# Spike - Roots Template

[![Greenkeeper badge](https://badges.greenkeeper.io/static-dev/spike-tpl-roots.svg)](https://greenkeeper.io/)

[![tests](http://img.shields.io/travis/static-dev/spike-tpl-base/master.svg?style=flat)](https://travis-ci.org/spike-tpl-base/spike-tpl-base) [![dependencies](http://david-dm.org/static-dev/spike-tpl-base.svg?path=root)](https://david-dm.org/static-dev/spike-tpl-base?path=root)

An alternate template for [spike](https://github.com/static-dev/spike) that uses jade, stylus, and coffeescript, like the default stack in [roots](http://roots.cx).

## Installation

### With Spike

This is the default template for use within [spike](https://github.com/static-dev/spike) when running `spike new` without a template option.

- `npm i spike -g`
- `spike tpl add roots git@github.com:static-dev/spike-tpl-roots.git`
- `spike new <projectname> -t roots`

### Standalone

[Spike](https://github.com/static-dev/spike) uses [sprout](https://github.com/carrot/sprout) internally to generate it's project templates. This means you can even use this template without [spike](https://github.com/static-dev/spike) by using [sprout](https://github.com/carrot/sprout) directly.

- `npm i sprout-cli -g`
- `sprout add spike-tpl-roots git@github.com:static-dev/spike-tpl-roots.git`
- `sprout new spike-tpl-roots <myproject>`

## Options

- **name** (name of template)
- **description** (a short description of the template)
- **github_username** (name of github user)
