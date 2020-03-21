import * as index from './index';

describe('Index', () => {
  it('should export the default logger', () => {
    expect(index).toHaveProperty('logger');
  });

  it('should export the getLogger function', () => {
    expect(index).toHaveProperty('getLogger');
  });
});
