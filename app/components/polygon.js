import Ember from 'ember';

const makeRect = () => {
	console.log(point2.y - point1.y)
	$(".rectangle").css({
  	x: Math.min(point1.x, point2.x),
    y: Math.min(point1.y, point2.y),
    width: Math.abs(point2.x - point1.x),
    height: Math.abs(point2.y - point1.y)
  })
};

let point1 = {
  set: false,
	x: null,
  y: null
};

let point2 = {
	x: null,
  y: null
};

export default Ember.Component.extend({
  mouseDown(e) {
    console.log('Mouse down');
    point1.set = true;
    point1.x = e.originalEvent.x;
    point1.y = e.originalEvent.y;
    makeRect();
  },
  mouseUp() {
    console.log('Mouse up');
    point1.x = null;
    point1.y = null;
    point1.set = false;
    point2.x = null;
    point2.y = null;
    makeRect();
  },
  mouseMove(e) {
    console.log('Mouse moving');
    if(point1.set) {
      point2.x = e.originalEvent.x;
      point2.y = e.originalEvent.y;
      makeRect();
    };
  }
});