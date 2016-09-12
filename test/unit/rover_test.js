"use strict"

const expect = require('chai').expect
const Rover = require('../../src/rover');

describe('MARS BARS', function () {
    it('Initializes a rover', () => {
      var rover = new Rover(1, 2, 'N', 5, 5);
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(2);
      expect(rover.direction).to.equal('N');
    })

    it('Apply a 90L movement to a rover', () => {
      var rover = new Rover(1, 2, 'N', 5, 5);
      rover._applyMovement('L');
      expect(rover.direction).to.equal('W');

      rover._applyMovement('L');
      expect(rover.direction).to.equal('S');

      rover._applyMovement('L');
      expect(rover.direction).to.equal('E');

      rover._applyMovement('L');
      expect(rover.direction).to.equal('N');

    })

    it('Apply a 90R movement to a rover', () => {
      var rover = new Rover(1, 2, 'N', 5, 5);
      rover._applyMovement('R');
      expect(rover.direction).to.equal('E');

      rover._applyMovement('R');
      expect(rover.direction).to.equal('S');

      rover._applyMovement('R');
      expect(rover.direction).to.equal('W');

      rover._applyMovement('R');
      expect(rover.direction).to.equal('N');

    })

    it('Apply a movement to a rover when it is facing north', () => {
      var rover = new Rover(1, 2, 'N', 5, 5);
      rover._applyMovement('M');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(3);
      expect(rover.direction).to.equal('N');

      rover._applyMovement('M');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(4);
      expect(rover.direction).to.equal('N');

      rover._applyMovement('R');
      rover._applyMovement('R');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(4);
      expect(rover.direction).to.equal('S');

      rover._applyMovement('M');
      rover._applyMovement('M');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(2);
      expect(rover.direction).to.equal('S');

    })

    it('Apply a movement to a rover when it is facing south', () => {
      var rover = new Rover(1, 2, 'S', 5, 5);
      rover._applyMovement('M');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(1);
      expect(rover.direction).to.equal('S');

      rover._applyMovement('M');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(0);
      expect(rover.direction).to.equal('S');

      rover._applyMovement('M');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(-1);

      rover._applyMovement('R');
      rover._applyMovement('R');

      rover._applyMovement('M');
      rover._applyMovement('M');
      rover._applyMovement('M');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(2);

    })

    it('Apply a movement to a rover when it is facing west', () => {
      var rover = new Rover(1, 2, 'W', 5, 5);
      rover._applyMovement('M');
      expect(rover.x).to.equal(0);
      expect(rover.y).to.equal(2);
      expect(rover.direction).to.equal('W');

      rover._applyMovement('M');
      expect(rover.x).to.equal(-1);
      expect(rover.y).to.equal(2);
      expect(rover.direction).to.equal('W');

      rover._applyMovement('R');
      rover._applyMovement('R');
      expect(rover.direction).to.equal('E');
      rover._applyMovement('M');
      rover._applyMovement('M');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(2);

    })

    it('Apply a movement to a rover when it is facing east', () => {
      var rover = new Rover(1, 2, 'E', 5, 5);
      rover._applyMovement('M');
      expect(rover.x).to.equal(2);
      expect(rover.y).to.equal(2);
      expect(rover.direction).to.equal('E');

      rover._applyMovement('M');
      expect(rover.x).to.equal(3);
      expect(rover.y).to.equal(2);
      expect(rover.direction).to.equal('E');

      rover._applyMovement('R');
      rover._applyMovement('R');
      expect(rover.direction).to.equal('W');

      rover._applyMovement('M');
      rover._applyMovement('M');
      expect(rover.x).to.equal(1);
      expect(rover.y).to.equal(2);

    })

})
