import { Address } from './address-interface';
export interface PickUp {
    id: number;
    address: Address;
    pickUpTime: string;
    pickedUp: boolean;
}