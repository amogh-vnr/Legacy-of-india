import { base44 } from '@/api/base44Client';

export class Monument {
  static async list() {
    return base44.entities.Monument.list();
  }

  static async filter(query, orderBy, limit) {
    return base44.entities.Monument.filter(query, orderBy, limit);
  }
}
