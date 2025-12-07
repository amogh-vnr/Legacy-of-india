import { base44 } from '@/api/base44Client';

export class HistoryEvent {
  static async list(orderBy) {
    return base44.entities.HistoryEvent.filter({}, orderBy);
  }
}
