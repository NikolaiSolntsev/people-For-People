import { MyService } from "../myService/type/MyService";

export async function getServicesForMee (): Promise<MyService[]> {
   const response = await fetch('/api/servicesForMee');
   const data = await response.json();
   return data.mySevices
}

export function getAbout ({service, navigate}: {service: MyService, navigate: (value: string) => void}): void {
navigate(`/servicesForMee/${service.id}`)
}

