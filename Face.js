function Face(x, y, sc, expression) {

  this.x = x;
  this.y = y;
  this.sc = sc;
  this.exp = expression;
  this.c = "#B5BEB1";
  this.edit = false;
  this.symmetry = false;
  this.draw = function() {
    push();
    translate(this.x, this.y);
    scale(this.sc);
    this.drawContour();
    this.drawEyebrows();
    this.drawEyes();
    this.drawNose();
    this.drawMouth();

    if (this.symmetry) {
      this.makeSymmetric();
    }

    if (this.edit) {
      for (var i = 0; i < l; i++) {
        this.exp[i].edit();
        output.innerHTML = getExpression();
      }
    }
    pop();
  } 

  this.drawContour = function() {
    noStroke();
    fill(this.c);
    beginShape();
    vertex(this.exp[0].x, this.exp[0].y);
    bezierVertex(this.exp[1].x, this.exp[1].y, this.exp[2].x, this.exp[2].y, this.exp[3].x, this.exp[3].y);
    bezierVertex(this.exp[4].x, this.exp[4].y, this.exp[5].x, this.exp[5].y, this.exp[6].x, this.exp[6].y);
    bezierVertex(this.exp[7].x, this.exp[7].y, this.exp[8].x, this.exp[8].y, this.exp[9].x, this.exp[9].y);
    bezierVertex(this.exp[10].x, this.exp[10].y, this.exp[11].x, this.exp[11].y, this.exp[0].x, this.exp[0].y);
    endShape();
  }

  this.drawEyebrows = function() {
    stroke(1);
    strokeWeight(10);
    strokeCap(SQUARE);
    beginShape();
    vertex(this.exp[12].x, this.exp[12].y);
    bezierVertex(this.exp[13].x, this.exp[13].y, this.exp[14].x, this.exp[14].y, this.exp[15].x, this.exp[15].y);
    endShape();
    beginShape();
    vertex(this.exp[16].x, this.exp[16].y);
    bezierVertex(this.exp[17].x, this.exp[17].y, this.exp[18].x, this.exp[18].y, this.exp[19].x, this.exp[19].y);
    endShape();
  }

  this.drawEyes = function() {
    strokeWeight(5);
    strokeCap(SQUARE);
    beginShape();
    vertex(this.exp[20].x, this.exp[20].y);
    bezierVertex(this.exp[21].x, this.exp[21].y, this.exp[22].x, this.exp[22].y, this.exp[23].x, this.exp[23].y);
    endShape();
    beginShape();
    vertex(this.exp[24].x, this.exp[24].y);
    bezierVertex(this.exp[25].x, this.exp[25].y, this.exp[26].x, this.exp[26].y, this.exp[27].x, this.exp[27].y);
    endShape();

    noStroke();
    fill(0);
    ellipse(this.exp[28].x, this.exp[28].y, 20, 20);
    ellipse(this.exp[29].x, this.exp[29].y, 20, 20);
  }

  this.drawMouth = function() {
    //noStroke();
    fill(0);
    beginShape();
    vertex(this.exp[33].x, this.exp[33].y);
    bezierVertex(this.exp[34].x, this.exp[34].y, this.exp[35].x, this.exp[35].y, this.exp[36].x, this.exp[36].y);
    bezierVertex(this.exp[38].x, this.exp[38].y, this.exp[37].x, this.exp[37].y, this.exp[33].x, this.exp[33].y);
    endShape(CLOSE);
  }

  this.drawNose = function() {
    noFill();
    strokeWeight(3);
    strokeCap(ROUND);
    stroke(0);
    beginShape();
    vertex(this.exp[30].x, this.exp[30].y);
    curveVertex(this.exp[30].x, this.exp[30].y);
    curveVertex(this.exp[31].x, this.exp[31].y);
    curveVertex(this.exp[32].x, this.exp[32].y);
    vertex(this.exp[30].x, this.exp[30].y);
    endShape();
  }

  this.makeSymmetric = function() {
    this.exp[0].x = 0;
    this.exp[6].x = 0;
    this.exp[11].x = -this.exp[1].x;
    this.exp[10].x = -this.exp[2].x;
    this.exp[9].x = -this.exp[3].x;
    this.exp[8].x = -this.exp[4].x;
    this.exp[7].x = -this.exp[5].x;
    this.exp[12].x = -this.exp[19].x;
    this.exp[13].x = -this.exp[18].x;
    this.exp[14].x = -this.exp[17].x;
    this.exp[15].x = -this.exp[16].x;
    this.exp[20].x = -this.exp[27].x;
    this.exp[21].x = -this.exp[26].x;
    this.exp[22].x = -this.exp[25].x;
    this.exp[23].x = -this.exp[24].x;
    this.exp[28].x = -this.exp[29].x;
    this.exp[33].x = -this.exp[36].x;
    this.exp[34].x = -this.exp[35].x;
    this.exp[37].x = -this.exp[38].x;
    this.exp[11].y = this.exp[1].y;
    this.exp[10].y = this.exp[2].y;
    this.exp[9].y = this.exp[3].y;
    this.exp[8].y = this.exp[4].y;
    this.exp[7].y = this.exp[5].y;
    this.exp[12].y = this.exp[19].y;
    this.exp[13].y = this.exp[18].y;
    this.exp[14].y = this.exp[17].y;
    this.exp[15].y = this.exp[16].y;
    this.exp[20].y = this.exp[27].y;
    this.exp[21].y = this.exp[26].y;
    this.exp[22].y = this.exp[25].y;
    this.exp[23].y = this.exp[24].y;
    this.exp[28].y = this.exp[29].y;
    this.exp[33].y = this.exp[36].y;
    this.exp[34].y = this.exp[35].y;
    this.exp[37].y = this.exp[38].y;
  }
}
