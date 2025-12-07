import { base44 } from '@/api/base44Client';

export class BoardMember {
  static async list() {
    return base44.entities.BoardMember?.list?.() || [];
  }
}
