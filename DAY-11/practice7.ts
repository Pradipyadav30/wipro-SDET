type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';

type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;

type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;

let mouseEvent: MouseEvents = 'click';
let nonFormEvent: NonFormEvents = 'keypress';

console.log(mouseEvent);
console.log(nonFormEvent);