
// htm-tool-css @ npm, htm-tool css module.

var add_css_text = require("add-css-text");

// basic common css
add_css_text(require("./res/common.css"), "ht-common-css");

add_css_text(require("./res/entity.css"), "ht-entity-css");

// css selected tool
var setSelected = function (selectList, unselectList, selected, selectedClass) {
	if (!selected) { var tmp = selectList; selectList = unselectList; unselectList = tmp; }	//exchange

	var i, imax, li;
	if (selectList) {
		if (!(selectList instanceof Array)) selectList = [selectList];

		imax = selectList.length;
		for (i = 0; i < imax; i++) {
			li = selectList[i];
			if (typeof li === "string") li = document.getElementById(li);
			li.classList.add(selectedClass || "ht-selected");
		}
	}

	if (unselectList) {
		if (!(unselectList instanceof Array)) unselectList = [unselectList];

		imax = unselectList.length;
		for (i = 0; i < imax; i++) {
			li = unselectList[i];
			if (typeof li === "string") li = document.getElementById(li);
			li.classList.remove(selectedClass || "ht-selected");
		}
	}
}

module.exports = {
	setSelected: setSelected,
};
