import { address } from './address-interface';
export interface PickUp {
    id: number;
    address: address;
    pickUpTime: Date;
}