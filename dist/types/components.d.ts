import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}


import {
  MyApp as MyApp
} from './components/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      first?: string;
      last?: string;
    }
  }
}


import {
  TestingEventEmitter as TestingEventEmitter
} from './components/testing-event-emitter/testing-event-emitter';

declare global {
  interface HTMLTestingEventEmitterElement extends TestingEventEmitter, HTMLStencilElement {
  }
  var HTMLTestingEventEmitterElement: {
    prototype: HTMLTestingEventEmitterElement;
    new (): HTMLTestingEventEmitterElement;
  };
  interface HTMLElementTagNameMap {
    "testing-event-emitter": HTMLTestingEventEmitterElement;
  }
  interface ElementTagNameMap {
    "testing-event-emitter": HTMLTestingEventEmitterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "testing-event-emitter": JSXElements.TestingEventEmitterAttributes;
    }
  }
  namespace JSXElements {
    export interface TestingEventEmitterAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  TestingMethods as TestingMethods
} from './components/testing-methods/testing-methods';

declare global {
  interface HTMLTestingMethodsElement extends TestingMethods, HTMLStencilElement {
  }
  var HTMLTestingMethodsElement: {
    prototype: HTMLTestingMethodsElement;
    new (): HTMLTestingMethodsElement;
  };
  interface HTMLElementTagNameMap {
    "testing-methods": HTMLTestingMethodsElement;
  }
  interface ElementTagNameMap {
    "testing-methods": HTMLTestingMethodsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "testing-methods": JSXElements.TestingMethodsAttributes;
    }
  }
  namespace JSXElements {
    export interface TestingMethodsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  TestingProps as TestingProps
} from './components/testing-props/testing-props';

declare global {
  interface HTMLTestingPropsElement extends TestingProps, HTMLStencilElement {
  }
  var HTMLTestingPropsElement: {
    prototype: HTMLTestingPropsElement;
    new (): HTMLTestingPropsElement;
  };
  interface HTMLElementTagNameMap {
    "testing-props": HTMLTestingPropsElement;
  }
  interface ElementTagNameMap {
    "testing-props": HTMLTestingPropsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "testing-props": JSXElements.TestingPropsAttributes;
    }
  }
  namespace JSXElements {
    export interface TestingPropsAttributes extends HTMLAttributes {
      first?: string;
      last?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }