import Component from '@ember/component';

export default Component.extend({
  mouseDown(event) {
    console.log(JSON.stringify(event))
    console.log('Mouse down');
  },
  mouseUp() {
    console.log('Mouse up')
  },
  mouseMove() {
    console.log('Mouse moving')
  }
});