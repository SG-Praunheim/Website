class EventBus extends EventTarget {
    constructor() {
  
      super();
    }
  
    addCustomEventListener<T extends Partial<Record<string, any>>>(type: string, listener: (event: CustomEvent<T>) => void, options?: boolean | AddEventListenerOptions) {
      const eventListener: EventListener = (event: Event) => {
        listener(event as CustomEvent<T>);
      };
      this.addEventListener(type, eventListener, options);
    }
  
    dispatchCustomEvent<T>(type: string, detail: T) {
      const customEvent = new CustomEvent(type, { detail });
      this.dispatchEvent(customEvent);
    }
  }
  export class EventManager {
    private static instances: Map<string, EventBus> = new Map();
  
    public static getInstance(name: string): EventBus {
      if (!EventManager.instances.has(name)) {
        EventManager.instances.set(name, new EventBus());
      }
      return  EventManager.instances.get(name)!;
       
    }
  
  }