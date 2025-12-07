import { base44 } from '@/api/base44Client';

export class DiwaliSubmission {
  static async list() {
    return base44.entities.DiwaliSubmission.list();
  }

  static async filter(query, orderBy, limit) {
    return base44.entities.DiwaliSubmission.filter(query, orderBy, limit);
  }

  static async create(payload) {
    return base44.entities.DiwaliSubmission.create(payload);
  }
}
