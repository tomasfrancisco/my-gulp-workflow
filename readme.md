# MY-GULP-WORKFLOW

## Install
```$ npm install```

Requires [Sass >= 3.4](http://sass-lang.com/install).

## Configuration

Create `config.json` with same structure as `config.example.json` available on this repository and set the following directories:

`"StyleInputFiles"` - Source path to the `.sass` or `.scss` files

`"StyleOutputFolder"` - Source path to output compiled styles

`"ScriptInputFiles"` - Source path to the `.js` files

`"ScriptOutputFolder"` - Source path to output compiled scripts

`"ImageInputFiles"` - Source path to `.gif`, `.jpeg`, `.png`, `.svg` files

`"ImageOutputFolder"` - Source path to optimized image files

`"OutputFilesToLiveReload"` - Source path to reload on change

The last option needs to have installed [LiveReload Plugin](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) - for Chrome Browser

## Usage
``` $ gulp ```
