// PIXI.utils.sayHello();
const canvas = document.getElementById("display");
const app = new PIXI.Application({
  view: canvas,
  width: window.innerWidth,
  height: window.innerHeight
});
// document.body.appendChild(app.view)

// let _w = window.innerWidth;
// let _h = window.innerHeight;

// const resize = () => {
//     let _w = window.innerWidth;
//     let _h = window.innerHeight;

//     renderer.resize(_w, _h);
//   };

// const renderer = new PIXI.Renderer({
//   view: canvas,
//   width: _w,
//   height: _h,
//   resolution: window.devicePixelRatio,
//   autoDensity: true
// });

// window.addEventListener("resize", resize);

// const stage = new PIXI.Container();

// const texture = PIXI.Texture.from("./sprite.png");

// const img = new PIXI.Sprite(texture);

// img.x = app.screen.width / 2;
// img.y = app.screen.height / 2;

// img.anchor.x = 0.5;
// img.anchor.y = 0.5;

// add sprite to stage
// stage.addChild(img);
// app.stage.addChild(img);
// const ticker = new PIXI.Ticker();
// ticker.add(animation);
// ticker.start();
// app.ticker.add(animation);

let loader = PIXI.Loader.shared;

const handleLoadComplete = () => {
  let texture = loader.resources["./sprite.png"].texture;
  img = new PIXI.Sprite(texture);
  img.anchor.x = 0.5;
  img.anchor.y = 0.5;
  app.stage.addChild(img);
  app.ticker.add(animation);
};

loader.onComplete.add(handleLoadComplete);

loader.add("./sprite.png");
loader.load();

let img;


function animation() {
  // img.x = renderer.screen.width / 2;
  // img.y = renderer.screen.height / 2;
  img.x = app.renderer.screen.width / 2;
  img.y = app.renderer.screen.height / 2;
  img.rotation += 0.1;
  // renderer.render(stage);
}
