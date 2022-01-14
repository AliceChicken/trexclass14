var trex_running, groundImage

function preload(){
  cloudMoving = loadImage ("cloud.png");
  trex_running = loadAnimation ("trex1.png", "trex2.png","trex3.png");
  groundImage = loadImage ("ground2.png");
  }
  
  function setup (){
  createCanvas(600,200);
  trex = createSprite (50,150,20,20);
  trex.addAnimation ("trexrunning",trex_running);
  trex.scale = 0.5;
  ground = createSprite (200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.velocityX=-3;
  createEdgeSprites();
  invisibleGround = createSprite (200,190,400,10);
  invisibleGround.visible = false
  }
  function draw(){
  background(180);
  //console.log(trex.y);
  // to make the ground infinite.
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  // to make the trex jump
  if (keyDown ("space") && trex.y >= 140){
    trex.velocityY = -10;
  }
  // gravity to the trex.
  trex.velocityY= trex.velocityY+0.6;
  
  trex.collide(invisibleGround);
  spawnCloud();
  drawSprites ();
  }
  function spawnCloud (){
    if(frameCount % 60 ===0){
      var cloud = createSprite (550,100,50,50);
    cloud.velocityX = -3 ;
    cloud.addImage (cloudMoving);
    cloud.scale = 0.5;
    cloud.y = Math.round(random(30,100));
    console.log(cloud.y);
    }


  }