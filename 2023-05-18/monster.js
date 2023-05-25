var monster_colors="dad7cd-a3b18a-588157-3a5a40-344e41".split("-").map(a=>"#"+a)
class Monster{
    constructor(args){
        this.r = args.r||100 // 設計的飛彈有時大有時小<舊船參數args來設定飛彈大小，沒有參數就已10
        this.p = args.p||createVector(random(width),random(height)) //
        this.v = args.v||createVector(random(-1,1),random(-1,1))//移動速度
        this.color = args.color||random(monster_colors)
        this.mode=random(["happy","bad"])
        this.dead=false
    }
   draw(){ //劃出物件
    if(this.dead==false){
    push()
        translate(this.p.x,this.p.y)
        fill(this.color)
        noStroke()
        ellipse(0,0,this.r)
        // stroke(this.color)
        // strokeWeight(4)
        // line(this.r/2,0,this.r,0)
        //++++++++++++++++++++
        if(this.mode=="happy"){
            fill(255)
            ellipse(0,0,this.r/2)
            fill(0)
            ellipse(0,0,this.r/3)
        }else{
            fill(255)
            arc(0,0,this.r/2,this.r/2,0,PI)
            fill(0)
            arc(0,0,this.r/3,this.r/3,0,PI)


        }
        stroke(this.color)
        strokeWeight(4)
        noFill()
        // line(this.r/2,0,this.r,0)
        for(var j=0;j<8;j++){
        rotate(PI/4)
        beginShape()
           for(var i=0;i<(this.r/2);i++){
              vertex(this.r/2+i,sin(i/5+frameCount/10)*10)
           }
        endShape()  
    } 
    pop()
    }
    else{
    push()
    translate(this.p.x,this.p.y)
    fill(this.color)
    noStroke()
    ellipse(0,0,this.r)
    stroke(255)
    line(-this.r/2,0,this.r/2,0)
    stroke(this.color)
    strokeWeight(4)
    noFill()
    //line(this.r/2,0,this.r,0)
    for(var j=0;j<8;j++){
        rotate(PI/4)
        line(this.r/2,0,this.r,0)
    }
    pop()
    }
   }
   update(){ //算出移動元件
      this.p.add(this.v)
      if(this.p.x<=0 ||this.p.x>=width){
         this.v.x= -this.v.x
        }
       if(this.p.y<=0|| this.p.y>=height){
          this.v.y= -this.v.y
        }
    

   }
    isBallInRanger(x,y){ // 功能:判斷飛彈位置是否在物件的範圍內
        let d =dist(x,y,this.p.x,this.p.y) //計算兩點(滑鼠按下與物件中心點)之間的距離，放到d 變數
        if(d<4*this.r/2){
          return true //滑鼠與物件的距離小於物件寬度，代表出碰了，則傳回true的植(觸碰)
        }else{
          return false //滑鼠與物件的距離大於物件寬度，代表沒有觸碰了，則傳回false的植(沒觸碰)
        }
    
   }

}
