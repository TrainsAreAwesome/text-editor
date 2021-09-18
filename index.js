import * as monaco from 'monaco-editor';

import "./style.css"

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return './css.worker.bundle.js';
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}									
		return './editor.worker.bundle.js';
	}
};

window.onload = ()=>{	
	let editor = monaco.editor.create(document.getElementById('container'), {
		value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
		language: 'javascript',
		automaticLayout: true
	});
	
	monaco.editor.defineTheme('dark', {
		base: 'vs-dark',
		inherit: true,
		rules: [],
		colors: {
			'editor.foreground': '#000000',
			'editorCursor.foreground': '#8B0000',
			'editor.lineHighlightBackground': '#0000FF20',
			'editorLineNumber.foreground': '#008800',
			'editor.selectionBackground': '#88000030',
			'editor.inactiveSelectionBackground': '#88000015'
		}
	});

	monaco.editor.defineTheme('hc-black', {
		base: 'hc-black',
		inherit: true,
		rules: [],
		colors: {
			
		}
	});

	monaco.editor.defineTheme('light', {
		base: 'vs',
		inherit: true,
		rules: [],
		colors: {
			
		}
	});
	
	
	
	
	
	monaco.editor.setTheme('light');
	
	monaco.editor.registerCommand("LightTheme", () => {
		monaco.editor.setTheme('light');
	})

	
	editor.addAction({
		id: 'light-theme',
		label: 'Set-the-light-theme',
		run: () => {
			monaco.editor.setTheme('light');
		}
	});
	
	monaco.editor.registerCommand("DarkTheme", () => {
		monaco.editor.setTheme('dark');
	})
	
	editor.addAction({
		id: 'dark-theme',
		label: 'Set-the-dark-theme',
		run: () => {
			monaco.editor.setTheme('dark');
		}
	});






	monaco.editor.registerCommand("HCBlackTheme", () => {
		monaco.editor.setTheme('hc-black');
	})
	
	editor.addAction({
		id: 'hc-black-theme',
		label: 'Set-the-hc-black-theme',
		run: () => {
			monaco.editor.setTheme('hc-black');
		}
	});






// END OF WINDOW.ONLOAD!!!
}

