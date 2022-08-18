
// htm-tool-css @ npm, htm-tool css module.

var add_css_text = require("add-css-text");
var { bindFrame } = require("bind-set-class-frame");

// css modules
add_css_text(require("./res/common.css"), "ht-common-css");
add_css_text(require("./res/entity.css"), "ht-entity-css");

//module

module.exports = bindFrame("ht");
