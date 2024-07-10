import { calculateSpeed,overallDistance,formatJson } from '../task4.js'
import { expect } from 'chai'

describe('task4', () => {
  describe('calculateSpeed', () => {
    it('should display the speed ', () => {
      // Given 
      const dataHistory = [{ distance: 10, timestamp: new Date("2024-06-28T10:35:03.842+0000") }, { distance: 20, timestamp: new Date("2024-06-28T11:35:03.842+0000") }, { distance: 5, timestamp: new Date("2024-06-28T12:35:03.842+0000") }];
      const expected = 12.5;

      // When
      const speed = calculateSpeed(dataHistory);

      //Then
      expect(speed).to.deep.equal(expected);
    });
  });

  describe('overallDistance', () => {
    it('should calculate overall distance ', () => {
      // Given 
      const dataHistory = [{ distance: 10, timestamp: new Date("2024-06-28T10:35:03.842+0000") }, { distance: 20, timestamp: new Date("2024-06-28T11:35:03.842+0000") }, { distance: 5, timestamp: new Date("2024-06-28T12:35:03.842+0000") }];
      const expected = 35;

      // When
      const speed = overallDistance(dataHistory);

      //Then
      expect(speed).to.deep.equal(expected);
    });
  });

  describe('formatJson', () => {
    it('should formal in JSON ', () => {
      // Given 
      const dataHistory = [{ distance: 10, timestamp: new Date("2024-06-28T10:35:03.842+0000") }, { distance: 20, timestamp: new Date("2024-06-28T11:35:03.842+0000") }, { distance: 5, timestamp: new Date("2024-06-28T12:35:03.842+0000") }];
      const expected = {totalDistance: 35, averageSpeed: 12.5};
      var distance = 35;
      var speed = 12.5;
      // When

      const json = formatJson(distance, speed);

      //Then
      expect(json).to.deep.equal(expected);
    });
  });
});