var chao,player;
var gameState = 0
var botaoplay, titulo;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // 1 = pro lado pro outro , 2 = altura, 3 = largura, 4 = espaçamento
  chao = createSprite(400, 695, 1800, 50);
  player = createSprite(30,650,50,80);
  player.shapeColor = "red"

  //criação do menu
  botaoplay = createButton("play")
  botaoplay.position(width/2,height/2)
  botaoplay.mouseClicked(()=>{gameState=1})

  titulo = createElement("h1","INSIRA UM TITULO AQUI!")
  titulo.class("titulo")
  titulo.position(width/2 - 100,height/2 - 100)
}

function draw() {
  background(0);  
  play();
}

function movPlayer(){
  if(keyDown("d")){
    player.x +=5
  } 
  if(keyDown("a")){
    player.x -=5
  }
  if(keyDown("w")){
    player.y -=10
  }
  player.velocityY += 0.8
}

function play(){
  if(gameState == 1 ){
    //gameplay
  movPlayer();
  drawSprites();
  player.collide(chao)
  camera.position.x = player.x
  camera.position.y = player.y
  titulo.hide()
  botaoplay.hide()
  
}
}