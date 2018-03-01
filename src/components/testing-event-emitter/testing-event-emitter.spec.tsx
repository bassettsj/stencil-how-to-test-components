import { render, flush } from '@stencil/core/testing';
import { TestingEventEmitter } from './testing-event-emitter';

describe('testing-event-emitter', () => {
  it('should build', () => {
    expect(new TestingEventEmitter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [TestingEventEmitter],
        html: '<testing-event-emitter></testing-event-emitter>'
      });
    });

    // this fails at the moment :(
    it('should be able to confirm event emitter', async () => {
      await flush(element);

      // arrange
      const callback = jest.fn();
      const div = document.createElement('div');
      document.body.appendChild(div);
      div.addEventListener('somethingHappened', callback);

      // act
      element.querySelector('button').click();

      // assert
      expect(callback).toHaveBeenCalled();
    });

    it('but testing custom events do work!', () => {
      // arrange
      const callback = jest.fn();
      const div = document.createElement('div');
      document.body.appendChild(div);

      div.addEventListener('click', callback);

      const event = document.createEvent('CustomEvent');
      event.initEvent('click', true, true);
      div.dispatchEvent(event);

      // assert
      expect(callback).toHaveBeenCalled();
    });
  });
});