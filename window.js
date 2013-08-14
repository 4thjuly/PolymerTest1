document.addEventListener('DOMContentLoaded', function () {
  
  Polymer('MainUI', {
    ready: function() {
      this.nodes = [this.$.header, this.$.content];
      this.layout = [
        [1],
        [2]
      ];
    }
  });
  
});