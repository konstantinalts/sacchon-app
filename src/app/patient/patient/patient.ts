import { Time } from '@angular/common';
export interface Patient {
    date: Date;
    time: Time;
    glucoseLevel: string;
    carbIntake: string;
}
