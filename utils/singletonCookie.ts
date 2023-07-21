// declare a instance variable


class GlobalParameter {
    public static cookie: string;
    public static instance: GlobalParameter;
    private constructor() {
    }
  
    public static getInstance(): GlobalParameter {
      if (!GlobalParameter.instance) {
        GlobalParameter.instance = new GlobalParameter();
      }
      return GlobalParameter.instance;
    }
  
    public setValue(key: string): void {
      GlobalParameter.cookie = key;
    }
  
    public getValue(): string | undefined {
      return GlobalParameter.cookie;
    }
  }
  
  export default GlobalParameter;
  