import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'Naruto', weapon: 'stars' },
    { id: 1, name: 'Sasuke', weapon: 'sword' },
  ];

  getNinjas(weapon?: 'stars' | 'sword') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }
}
