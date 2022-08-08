String[] ideas;
float[] scores;
float[][] circles;

void setup() {
  colorMode(HSB, 360, 100, 100, 100);
  scores = new float[3];
  ideas = new String[3];
  circles = new float[3][3];
 
  smooth();
  size(640, 425);
  background(31, 10, 93);
  noStroke();
  scores[0] = 10;
  scores[1] = 30;
  scores[2] = 100;
  ideas[0] = "Bar";
  ideas[1] = "Laundromat";
  ideas[2] = "Daycare";
  var sum = scores[0] + scores[1] + scores[2];
  for (int i = 0; i < scores.length; i++) {
    drawScore((scores[i]/sum)*300, ideas[i]);
  }
}

void draw() {
  
}



//red spot
void drawScore(float score, String idea) {
  float rad = sqrt(score/3.14)*20;
  fill(random(255), random(255), random(255)); //RED
  var x = random(640-(2*rad))+rad;
  var y = random(425-(2*rad))+rad;
  circle(x, y, rad);
  fill(0, 0, 0);
  textSize(30);
  text(idea, x, y);
}
