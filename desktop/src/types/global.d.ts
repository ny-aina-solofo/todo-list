export interface IElectronAPI {
  getTodoList: () => Promise<any[]>;
    // addTodo: (todo: any) => Promise<any>;
    // updateTodo: (id: number, updates: any) => Promise<any>;
    // deleteTodo: (id: number) => Promise<{ deleted: boolean }>;
    
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
