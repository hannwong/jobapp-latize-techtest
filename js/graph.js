sigma.parsers.json('js/data.json', {
  container: 'container',
  renderer: {
    container: document.getElementById('container'),
    type: 'canvas'
  },
  settings: {
    defaultNodeColor: '#ec5148',
    autoRescale: false,
    enableCamera: false
  }
});
