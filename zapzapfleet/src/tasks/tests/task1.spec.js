import { validateVehiclesFields, sortVehiclesByMake } from '../task1.js'
import { expect } from 'chai'

describe('task1', () => {
  describe('validateVehiclesFields', () => {
    it('should validate make field exists on each vehicle', () => {
      // Given 
      const vehicles = [{ _id: "1", make: "Tesla" }, { _id: "2", make: "BYD" }, { _id: "3", make: undefined }];
      const expected = [{ _id: "1", make: "Tesla" }, { _id: "2", make: "BYD" }]

      // When
      const result = validateVehiclesFields(vehicles);

      //Then
      expect(result).to.deep.equal(expected);
    });
  });

  describe('sortVehiclesByMake', () => {
    it('should sort vehicles by make field', () => {
      // Given 
      const vehicles = [{ _id: "1", make: "Tesla" }, { _id: "2", make: "BYD" }];
      const expected = [{ _id: "2", make: "BYD" }, { _id: "1", make: "Tesla" }]

      // When
      const result = sortVehiclesByMake(vehicles);

      //Then
      expect(result).to.deep.equal(expected);
    });
  });
});