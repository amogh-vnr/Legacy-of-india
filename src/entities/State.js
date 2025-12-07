import { base44 } from '@/api/base44Client';

export class State {
  static async list() {
    return base44.entities.State.list();
  }

  static async filter(query, orderBy, limit) {
    return base44.entities.State.filter(query, orderBy, limit);
  }
}
