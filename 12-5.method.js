let boy = {
  name: 'mike',
  showName: function() {
    console.log(this.name);
  }
};

let man = boy;
boy = null;

man.showName();