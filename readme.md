# Spike - Roots Template

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



# Spike - Roots Template

[![tests](http://img.shields.io/travis/static-dev/spike-tpl-base/master.svg?style=flat)](https://travis-ci.org/spike-tpl-base/spike-tpl-base) [![dependencies](http://david-dm.org/static-dev/spike-tpl-base.svg?path=root)](https://david-dm.org/static-dev/spike-tpl-base?path=root)

An alternate template for [spike](https://github.com/static-dev/spike) that uses jade, stylus, and coffeescript, like the default stack in [roots](http://roots.cx).

## Installation

### With Spike

If the `spike new` default template for use within [spike](https://github.com/static-dev/spike) isnt your preference and you would rather use the [roots](https://github.com/jescalan/roots) template within spike use [spike-tpl-roots](https://github.com/static-dev/spike-tpl-roots). Presuming you already have spike installed globally `npm i spike -g` you will just need to run the following:

- `spike tpl add roots https://github.com/static-dev/spike-tpl-roots.git`
- `cd <projectpath>`
- `spike new <projectname> -t roots`

##### Options

	? What is the name of your project? 
	? Describe your project 
	? What is your github username? 
	? Would you like a production config file? (y/n)
	
- `cd <projectname>`
- `spike watch`

### Standalone Using Sprout

[Spike](https://github.com/static-dev/spike) uses [sprout](https://github.com/carrot/sprout) internally to generate it's project templates. This means you can even use this template without [spike](https://github.com/static-dev/spike) by using [sprout](https://github.com/carrot/sprout) directly.

- `npm i sprout-cli -g`
- `sprout add spike-tpl-roots https://github.com/static-dev/spike-tpl-roots.git`
- `cd <projectpath>`
- `sprout new spike-tpl-roots <projectname>`

##### Options

	? What is the name of your project? 
	? Describe your project 
	? What is your github username? 
	? Would you like a production config file? (Y/n)

- `cd <projectname>`
- `npm install`
- `spike watch`

