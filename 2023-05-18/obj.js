//class:類別，粒子
class Obj{ //宣告一個類別<針對一個畫的圖
  constructor(args){ //預設值基本資料(物件顏色，移動速度，大小，出顯示位置)
 //this.p =args.p||{x:random(width),y:random(height)}//初始位置
 this.p =args.p||createVector(random(width),random(height))
 //this.v ={x:random(-1,1),y:random(-1,1)}//物件移動速度
 this.v=createVector(random(-1,1),random(-1,1))
 this.size =random(10,20)
 this.color =random(fill_colors)
 this.stroke =random(line_colors)
 }
draw(){ //畫出單一個物件形狀
push() //執行push()後，依照我的設定，設定原點(0,0)的位置
translate(this.p.x,this.p.y)//以該物件位置為原點
scale(this.v.x<0?1:-1,-1)
fill(this.color)
stroke(this.stroke)
strokeWeight(4) //線條粗細
beginShape()
for(var k=0;k<points.length;k=k+1){
//line(points[k][0]*this.size,points[k][1]*this.size,points[k+1][0]*this.size,points[k+1][1]*this.size)//需要提供兩個點
//vertex(points[k][0]*this.size,points[k][1]*this.size)//只要設定一個點，當指令到endShape()會把所有的點串接再一起
curveVertex(points[k][0]*this.size,points[k][1]*this.size)
}
endShape()
pop() //執行pop()，原點(0,0)設定回到整個視窗的左上角
 }
  update(){
// this.p.x=this.p.x+this.v.x
// this.p.y=this.p.y+this.v.y
this.p.add(this.v) //設定好向量，使用add九可以與上兩行指令有一樣的效果
//向量sub==>減號
//知道滑鼠的位置，並建立一個滑鼠的向量
//  let mouseV=createVector(mouseX,mouseY) //把滑鼠位置
//  let delta=mouseV.sub(this.p).limit(this.v.mag()*2)
//  this.p.add(delta)

if(this.p.x<=0 ||this.p.x>=width){
 this.v.x= -this.v.x
}
if(this.p.y<=0|| this.p.y>=height){
 this.v.y= -this.v.y
}
 }
  isBallInRanger(x,y){ // 功能:判斷滑鼠位置是否在物件的範圍內
   let d =dist(x,y,this.p.x,this.p.y) //計算兩點(滑鼠按下與物件中心點)之間的距離，放到d 變數
   if(d<4*this.size){
     return true //滑鼠與物件的距離小於物件寬度，代表出碰了，則傳回true的植(觸碰)
   }else{
     return false //滑鼠與物件的距離大於物件寬度，代表沒有觸碰了，則傳回false的植(沒觸碰)
   }
}
}

