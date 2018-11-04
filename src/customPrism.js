Prism.languages.insertBefore('js', 'operator', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

Prism.languages.insertBefore('js', 'number', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

Prism.languages.insertBefore('js', 'comment', {
	'bullet': /([/]*[<]{2}(.*?)[\>]{2})/
});

Prism.hooks.add('wrap', function(env) {
  if (env.type === 'bullet') {
    env.content = env.content.replace(/[/]/g, '');
    env.content = env.content.replace(/&lt;&lt;/g, '');
    env.content = env.content.replace(/[>]/g, '');
  }
});
