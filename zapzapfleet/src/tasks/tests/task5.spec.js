import { getMinimumBatteryLevel, getMaximumBatteryLevel, getBCR } from '../task5.js'
import { expect } from 'chai'

describe('task5', () => {
  describe('getMinimumBatteryLevel', () => {
    it('should calculate the Minimum battery level', () => {
      // Given 
      const vehicles_data_history = [{ battery_level: 19 }, { battery_level: 98 }];
      const expected =  19;

      // When
      const minimum = getMinimumBatteryLevel(vehicles_data_history);

      //Then
      expect(minimum).to.deep.equal(expected);
    });
  });

  describe('getMaximumBatteryLevel', () => {
    it('should calculate the maximum battery level', () => {
      // Given 
      const vehicles_data_history = [{ battery_level: 19 }, { battery_level: 98 }];
      const expected =  98;

      // When
      const maximum = getMaximumBatteryLevel(vehicles_data_history);

      //Then
      expect(maximum).to.deep.equal(expected);
    });
  });

  describe('getBCR', () => {
    it('should calculate the BCR', () => {
      // Given 
      const vehicle_data_history = [{ distance: 98 , battery_level: 19 },  { battery_level: 98, distance: 60 }];
      const expected =  0.5;

      // When
      const batteryConsumption = getBCR(vehicle_data_history);

      //Then
      expect(batteryConsumption).to.deep.equal(expected);
    });
  });
});