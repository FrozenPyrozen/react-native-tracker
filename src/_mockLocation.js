import * as Location from 'expo-location';

// Mock expo location
const tenMetersWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 100000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altidudeAccuracy: 5,
      altitude: 5,
      longtitude: -122.0312186 + increment * tenMetersWithDegrees,
      latitude: 37.33233141 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });

  counter++;
}, 1000);
