function Rover(x, y, direction, platX, platY){
    this.x = x;
    this.y = y
    this.direction = direction;
    this.platX = platX;
    this.platY = platY;
}

Rover.prototype._applyLeftMovement = function(){
  if (this.direction == 'N')
  {
      this.direction = 'W';
  }
  else if (this.direction == 'W')
  {
    this.direction = 'S';
  }
  else if (this.direction == 'S')
  {
      this.direction = 'E';
  }
  else if (this.direction == 'E')
  {
      this.direction = 'N';
  }
}

Rover.prototype._applyRightMovement = function()
{
  if (this.direction == 'N')
  {
      this.direction = 'E';
  }
  else if (this.direction == 'E')
  {
      this.direction = 'S';
  }
  else if (this.direction == 'S')
  {
      this.direction = 'W';
  }
  else if (this.direction == 'W')
  {
      this.direction = 'N';
  }
}

Rover.prototype._applyMoveMovement = function()
{
  if (this.direction == 'N')
  {
     this.y++;
  }
  else if (this.direction == 'E')
  {
    this.x++;
  }
  else if (this.direction == 'S')
  {
      this.y--;
  }
  else if (this.direction == 'W')
  {
     this.x--;
  }
}

Rover.prototype._applyMovement = function(movement){
  switch (movement){
      case 'L'  :
            this._applyLeftMovement();
            break;
        case 'R'  :
            this._applyRightMovement();
            break;
        case 'M' :
            this._applyMoveMovement();
            break;
        default:
              throw new Error("Invalid movement");

  }
}

Rover.prototype.move = function(movements){
  for (var i=0; i < movements.length; i++){
      this._applyMovement(movements[i]);
  }
}

module.exports = Rover;
