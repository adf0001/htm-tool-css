# htm-tool-css
htm-tool css module

# Install
```
npm install htm-tool-css
```

# Usage
```html

<!-- css.ht-cmd -->
<span class='ht-cmd'>cmd .ht-cmd style sample</span>

<!-- css.ht-hover -->
<span class='ht-hover'>cmd .ht-hover style sample</span>

<!-- css.ht-selected & .setSelected(selectList, unselectList, selected [, selectedClass] ) -->

<span class='ht-selected'>cmd .ht-selected style sample</span>
<div>
<span>111 </span><span>222 </span><span>333 </span><span>444 </span>
<label>
    <input type=checkbox 
    onchange='var chs=parentNode.parentNode.childNodes;htm_tool_css.setSelected([chs[0],chs[2]],[chs[1],chs[3]],this.checked);'>
    </input>toggle
</label>
</div>

```
