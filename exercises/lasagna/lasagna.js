export const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export const actualMinutesInOven = 20;
export const numberOfLayers = 3;

export const remainingMinutesInOven = (actualMinutesInOven) => {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

export const preparationTimeInMinutes = (numberOfLayers) => {
  return  PREPARATION_MINUTES_PER_LAYER * numberOfLayers;
}

export const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) => {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}