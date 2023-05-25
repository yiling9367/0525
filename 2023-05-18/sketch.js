// let points = [
// let points = [
// [7,10],[12,6],[12,4],[9,1],[10,-2],[10,-7],[5,-10],[1,-11],[1,-13],[-3,-13],[-14,-4],[-13,4],
// [-11,9],[-12,13],[-10,16],[-8,17],[-5,13],[3,13],[7,16],[10,15],[10,13],[7,10]
// ]

// let points =[[6, -3], [5, 0], [7, 2],[7,4],[6,5],[9,5],[9,6],[8,7],[7,8],[6,8],[5,10],[4,10],[4,9],[5,8],[4,5],[0,5],[-2,4],[-4,1],[-4,-6],[-5,-7],[-10,-6],[-9,-7],[-4,-8],[-3,-7],[-1,-5],[4,4],[3,2],[3,1],[5,-3],[4,-4],[5,-4],[6,-3],[4,1],[5,2],[1,-4],[2,-5],[2,-8],[8,-8],[7,-7],[3,-7],[3,-1],[4,-1],[3,-1],[2,-3],[0,-5],[-4,-2],[-3,-4],[-1,-5],[-1,-9],[5,-10],[6,-9],[0,-8],[0,-5],[1,0],[-1,3],[5,-4],[6,-4],[7,-3],[6,1]];

let points = [[-2, 0], [-1,-1], [0, -1],[1,0],[1,2],[0,3],[-1,3],[-2,2],[-3,2],[-4,1],[-4,-2],[-5,-4],[-4,-4],[-3,-2],[-2,-1],[-2,-3], [-2,-4], [-1, -4],[0,-4],[0,-2],[2,-2],[2,-4], [4, -4],[4,1],[3,2],[1,2],[1,2]]; //list資料，
var fill_colors ="fffcf2-ccc5b9-403d39-252422-eb5e28".split("-").map(a=>"#"+a)
var line_colors="fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a".split("-").map(a=>"#"+a)



//++++++++++++++++
var ball //目前要處理的物件，暫時放在ball變數內
var balls=[] //把產生的"所有"的物件
//++++++++++++++++++++++
var bullet
var bullets=[]
//++++++++++++++++++++++
var monster
var monsters=[]
//++++++++++++++++++++++++++++
var shipP
var score =0

function preload(){
  elephant_sound=loadSound("sound/elephant.wav")
  bullet_sound=loadSound("sound/Launching wire.wav")
}

function setup() {
createCanvas(windowWidth, windowHeight);
shipP=createVector(width/2,height/2)
for(var i=0;i<10;i=i+1){ //i=0,1,2,3,4,…,8,9
ball=new Obj({}) //產生一個Obj class元件
balls.push(ball) //把ball的物件放入到balls陣列內
}
for(var i=0;i<10;i=i+1){ //i=0,1,2,3,4,…,8,9
  monster=new Monster({}) //產生一個Obj class元件
  monsters.push(monster) //把ball的物件放入到balls陣列內
  }
}
function draw() {
background(220);
// for(var j=0;j<balls.length;j=j+1){
// ball=balls[j]
// ball.draw()
// ball.update()
// }


if(keyPressed){
if(key=="ArrowLeft"||key=="a"){
  shipP.x=shipP.x-5
}
if(key=="ArrowRight"||key=="d"){
  shipP.x=shipP.x+5
}
if(key=="ArrowUp"||key=="w"){
  shipP.y=shipP.y-5
}
if(key=="ArrowDown"||key=="s"){
  shipP.y=shipP.y+5
}
}
//大象的顯示
for (let ball of balls)
 { 
  ball.draw()
  ball.update()
  for(let bullet of bullets)
  if(ball.isBallInRanger(bullet.p.x,bullet.p.y)){
        balls.splice(balls.indexOf(ball),1) //從倉庫balls取出被滑鼠按到的物件編號
        bullets.splice(bullets.indexOf(bullet),1)
       score=score-1
       elephant_sound.play()
 }
}
 //飛彈的顯示
 for (let bullet of bullets)
 { 
  bullet.draw()
  bullet.update()
 }
 //怪物顯示
 for (let monster of monsters)
 { 
  monster.draw()
  monster.update()
  for(let bullet of bullets)
  if(monster.isBallInRanger(bullet.p.x,bullet.p.y)){
        monsters.splice(monsters.indexOf(monster),1) //從倉庫balls取出被滑鼠按到的物件編號
        bullets.splice(bullets.indexOf(bullet),1)
       score=score+1
       //elephant_sound.play()
  
 }
 }
 textSize(50)
 text(score,50,50) //50,50座標上顯示scoreㄈ順內容
 push() //重新規劃原點(0,0)，在視窗的中心
 let dx=mouseX-width/2
 let dy=mouseY-height/2
 let angle=atan2(dy,dx)
 translate(shipP.x,shipP.y)
 fill("#ffc03a")
 noStroke()
 rotate(angle)
 triangle(-25,-25,-25,25,50,0)//設定三個點，畫成一個三角形
 ellipse(0,0,50)
 pop() //恢復原本設定，原本(0,0)在視窗的左上角

}

function mousePressed(){

  //+++++++++++++++++++++++++++++++++++++
  // ball=new Obj({
  //   p:{x:mouseX,y:mouseY}
  // })
  // balls.push(ball)
  //++++++++++++++++++++++++++++++++++++++++

  //物件上按下滑鼠，物件消失不見，分數+1
//   for(let ball of balls){ //檢查每一個物件
//     if(ball.isBallInRanger()){
//       balls.splice(balls.indexOf(ball),1) //從倉庫balls取出被滑鼠按到的物件編號
//       score=score+1
    
//     }
//   }
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++產生一個飛彈+++++++++++++++++++++++++++++
bullet =new Bullet({})
bullets.push(bullet)
bullet_sound.play()
}

function keyPressed(){
  if(key==" "){//按下空白建
    bullet =new Bullet({})
    bullets.push(bullet)
    bullet_sound.play()
  }
  
}

