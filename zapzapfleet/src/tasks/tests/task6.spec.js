import { getBatteryPercentageLeft } from '../task6.js'
import { expect } from 'chai'

describe('task6', () => {
  describe('getBatteryPercentageLeft', () => {
    it('should calculate the battery percentage left', () => {
      // Given 
      const vehicles_data_history = [{ distance: 98 , battery_level: 19 },  { battery_level: 98, distance: 60 }];
      const expected =  0.1202531646;

      // When
      const estimatedDistance = getBatteryPercentageLeft(vehicles_data_history);

      //Then
      expect(estimatedDistance).to.deep.equal(expected);
    });
  });


});