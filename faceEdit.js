var node;
var current = new Node(-999, -999, "z");
var output;
var face;
var l;
var displayEdit, displaySymmetry;

function setup() {
  var canvas = createCanvas(350, 450);
  canvas.parent("sketch");
  node = [];
  var margin = 55;

  node[0] = new Node(0, -139, "0"); 
  node[1] = new Node(88, -133, "1");  
  node[2] = new Node(116.5, -72, "2");  
  node[3] = new Node(106.5, 6, "3");  
  node[4] = new Node(107.5, 78, "4"); 
  node[5] = new Node(68.5, 178, "5"); 
  node[6] = new Node(0, 179, "6");  
  node[7] = new Node(-68.5, 178, "7");  
  node[8] = new Node(-107.5, 78, "8");  
  node[9] = new Node(-106.5, 6, "9"); 
  node[10] = new Node(-116.5, -72, "10"); 
  node[11] = new Node(-88, -133, "11"); 
  node[12] = new Node(-87, -7, "12"); 
  node[13] = new Node(-69, -23, "13");  
  node[14] = new Node(-40, -23, "14");  
  node[15] = new Node(-19, -10, "15");  
  node[16] = new Node(19, -10, "16"); 
  node[17] = new Node(40, -23, "17"); 
  node[18] = new Node(69, -23, "18"); 
  node[19] = new Node(87, -7, "19");  
  node[20] = new Node(-73, 10, "20"); 
  node[21] = new Node(-62, -2, "21"); 
  node[22] = new Node(-44, -4, "22"); 
  node[23] = new Node(-28, 8, "23");  
  node[24] = new Node(28, 8, "24"); 
  node[25] = new Node(44, -4, "25");  
  node[26] = new Node(62, -2, "26");  
  node[27] = new Node(73, 10, "27");  
  node[28] = new Node(-49.5, 10, "28"); 
  node[29] = new Node(49.5, 10, "29");  
  node[30] = new Node(4, 12, "30"); 
  node[31] = new Node(15.5, 72, "31");  
  node[32] = new Node(-6.5, 73, "32");  
  node[33] = new Node(-38, 107, "33");  
  node[34] = new Node(-11.5, 110, "34");  
  node[35] = new Node(11.5, 110, "35"); 
  node[36] = new Node(38, 107, "36"); 
  node[37] = new Node(-15.5, 135, "37");  
  node[38] = new Node(15.5, 135, "38"); 

  l = node.length;

  textAlign(CENTER, CENTER);
  textSize(9);

  face = new Face(width/2, height/2, 1, node);
  output = document.getElementById('output');
  displaySymmetry = document.getElementById('symmetryMode');
  displayEdit = document.getElementById('editMode');
  output.innerHTML = getExpression();
}

function draw() {
  clear();
  face.draw();

  displaySymmetry.innerHTML = face.symmetry;
  displayEdit.innerHTML = face.edit; 
}

function getExpression(){
  var s = "";
  for (var i = 0; i < l; i++) {
    s += "node["+i+"] = new Node("+node[i].x+", "+node[i].y+", \""+i+"\");\t\n";
  }
  return s;
}

function Mousedragged(){
  redraw();
}

function keyPressed() {


  if (key == ' ') {
    face.edit = !face.edit;
    displayEdit.classList.toggle('true');
  }

  if (key == 'S') {
    face.symmetry = !face.symmetry;
    displaySymmetry.classList.toggle('true');
  }

}
