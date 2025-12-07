import { base44 } from '@/api/base44Client';

export class Quiz {
  static async list() {
    return base44.entities.Quiz.list();
  }
}
