import { logger, getLogger } from './logger';

describe('Logger', () => {
  beforeEach(() => {
    spyOn(process.stdout, 'write');
  });

  it('should log statements to the console', () => {
    logger.error('This is an error');
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('This is an error'));
    logger.warn('This is a warning!');
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('This is a warning!'));
    logger.info('This is an info message.');
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('This is an info message'));
    logger.info('Some debugging is going on here');
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('Some debugging is going on here'));
    logger.silly({ key: 'value', otherKey: 'other value' });
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('{ key: \'value\', otherKey: \'other value\' }'));
  });

  it('should log stack traces for errors', () => {
    logger.error(new Error('I am an error, look at my trace!'));
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('I am an error, look at my trace!'));
    expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('at Object.'));
  });

  describe('const logger', () => {
    it('should return a logger without a label', () => {
      logger.debug('I should have a default label');
      expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('[<No label provided>]'));
    });
  });

  describe('getLogger', () => {
    it('should return a logger instance with the given label', () => {
      const monkeyLogger = getLogger('Monkey 🐒');
      monkeyLogger.info('I am a monkey');
      expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('[Monkey 🐒]'));

      const sheepLogger = getLogger('Sheep 🐑');
      sheepLogger.silly('Meeeeeeeeh');
      expect(process.stdout.write).toHaveBeenCalledWith(expect.stringContaining('[Sheep 🐑]'));
    });
  });
});
