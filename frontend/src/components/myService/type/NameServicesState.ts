export type NameService = { id:number; serviceName: string;createdAt: string|number;
    updatedAt: string|number,}

export type NameServicesState = {
    nameServices: NameService[];
    error?:string | undefined;
  };
  