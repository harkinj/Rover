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

    it('Moves rover1 properly', () => {
      var rover1 = new Rover(1, 2, 'N', 5, 5);
      rover1.move("LMLMLMLMM");
      expect(rover1.x).to.equal(1);
      expect(rover1.y).to.equal(3);
      expect(rover1.direction).to.equal('N');
    })

    it('Moves rover2 properly', () => {
      var rover2 = new Rover(3, 3, 'E', 5, 5);
      rover2.move("MMRMMRMRRM");
      expect(rover2.x).to.equal(5);
      expect(rover2.y).to.equal(1);
      expect(rover2.direction).to.equal('E');
    })

})
