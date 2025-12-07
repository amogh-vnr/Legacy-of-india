import { base44 } from '@/api/base44Client';

export class Food {
  static async list() {
    return base44.entities.Food.list();
  }
}
