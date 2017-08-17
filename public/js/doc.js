loadEditor();
getText();
var id = window.location.href.split("/doc/")[1];
var editor;

function loadEditor () {
    require.config({ paths: { 'vs': '/scripts/monaco-editor/min/vs' }});
	require(['vs/editor/editor.main'], function() {
		editor = monaco.editor.create(document.getElementById('container'), {
			value: [
				'function x() {',
				'\tconsole.log("Hello world!");',
				'}'
			].join('\n'),
			language: 'javascript',
			theme: "vs-dark",
		});
	});
}

function getText () {
    require(['vs/editor/editor.main'], function() {
        var value = editor.getValue();
        console.log(value);
	});
}