function Node(x, y, index) {
  this.x = x;
  this.y = y;
  this.d = 18; // diameter for rendering
  this.i = index;

  this.isOver = function() {
    if (dist(mouseX - width/2, mouseY - height/2, this.x, this.y) < this.d/2) {
      return true;
    } else {
      return false;
    }
  }

  this.edit = function() {
    fill("#FC4E11", 90);
    if (this.isOver()) {
      if (mouseIsPressed) {
        this.x = mouseX - width/2;
        this.y = mouseY - height/2;
      }
    }
  }

  this.draw = function(){
    
    if(face.edit){
      this.edit();
    }

    if (this.isOver()) {
      fill("#FC4E11");
      strokeWeight(2);
      stroke(0);
    } else {
      noStroke();
    }
    ellipse(this.x, this.y, this.d, this.d);
    fill(0);
    text(this.i, this.x, this.y);

  }
}
