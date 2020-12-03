import { Address } from './address-interface';
export interface PickUp {
    id: string;
    address: Address;
    pickUpTime: string;
    pickedUp: boolean;
}