import { getVehicleMakeKPI } from '../task2.js'
import { expect } from 'chai'

describe('task2', () => {
  describe('getVehicleMakeKPI', () => {
    it('should get vehicle kpi', () => {
      // Given 
      const vehicles = [{ _id: "1", make: "Tesla" }, { _id: "2", make: "BYD" }, { _id: "3", make: "Tesla" }];
      const expected = { Tesla: 2, BYD: 1  }

      // When
      const result = getVehicleMakeKPI(vehicles);

      //Then
      expect(result).to.deep.equal(expected);
    });
  });
});