import { setInactiveVehiclesToNotVisible } from '../task3.js'
import { expect } from 'chai'

describe('task3', () => {
  describe('setInactiveVehiclesToNotVisible', () => {
    it('should set inactive cars to not visible', () => {
      // Given 
      const vehicles = [{ status: "ACTIVE", visible: true }, { status: "INACTIVE", visible: true }];
      const expected = [{ status: "ACTIVE", visible: true },{ status: "INACTIVE", visible: false }];

      // When
      const visible = setInactiveVehiclesToNotVisible(vehicles);

      //Then
      expect(visible).to.deep.equal(expected);
    });
  });
});