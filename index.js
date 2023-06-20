const returnFirstTwoDrivers = drivers => [drivers[0], drivers[1]]

const returnLastTwoDrivers = drivers => [drivers[drivers.length -2], drivers[drivers.length -1]]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => function(fare){return multiplier*fare}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, selection) => selection(drivers)