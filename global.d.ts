declare global {
  namespace NodeJS {
    interface Global {
       document: Document;
       window: Window;
       navigator: Navigator;
       ethereum: any;
    } 
  }
}

declare var global: Global;