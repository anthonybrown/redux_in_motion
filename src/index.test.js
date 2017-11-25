it('should check for  equal values', () => {
  expect(5).toEqual(5); // you can use to .toBe(5) as well.
});

it('should check for eqaul values, using deep equality.', () => {
  expect({ foo: 5 }).toEqual({ foo: 5 });
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

it('should check that an array contains a specific value', () => {
  expect([1, 2, 3]).toContain(2);
});

it('should check that an array contains a specific object/array', () => {
  expect([{ foo: 5 }, { foo: 6 }]).toContainEqual({ foo: 6 });
});

/* SPY's */
it('should support spys', () => {
  const spy = jest.fn();
  spy();
  expect(spy).toHaveBeenCalled();
});

it('should have been called n times.', () => {
  const spy = jest.fn();
  spy();
  spy();
  expect(spy).toHaveBeenCalledTimes(2);
});

it('should have been called with n', () => {
  const spy = jest.fn();
  spy('foo');
  expect(spy).toHaveBeenCalledWith('foo');  
});



// it('should check that an array contains a specific object/array', () => {
//   expect({ foo: 5, bar: 6, baz: 7 }).toContainEqual({ foo: 5 });
// });

// it('should check for equal values', () => {
//   expect(5).toequal(5); // you can use to .tobe(5) as well.
// });

/*
** USING DESCRIBE
*/
// describe('Our first tests', () => {
//
//   it('should work', () => {
//     expect(true).toEqual(true);
//   });
//
//   it('should work again.', () => {
//     expect(true).toEqual(true);
//   });
//
// });

/*
** Basic test
*/
// it('should work', () => {
//   expect(true).toEqual(true);
// });
