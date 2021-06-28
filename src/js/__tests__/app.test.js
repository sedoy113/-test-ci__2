import healthSort from '../app';

test('sort 0 players', () => {
  const players = [];
  const result = [];
  expect(healthSort(players)).toEqual(result);
});

test('sort 1 player', () => {
  const players = [
    { name: 'маг', health: 100 },
  ];
  const result = [
    { name: 'маг', health: 100 },
  ];
  expect(healthSort(players)).toEqual(result);
});

test('sort 3 players', () => {
  const players = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(healthSort(players)).toEqual(result);
});

test('sort not toBe', () => {
  const players = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(healthSort(players)).not.toBe(result);
});
