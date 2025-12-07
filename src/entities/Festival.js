import { base44 } from '@/api/base44Client';

export class Festival {
  static async list(orderBy) {
    const list = await base44.entities.Festival.list();
    if (!orderBy) return list;
    const desc = orderBy.startsWith('-');
    const field = desc ? orderBy.slice(1) : orderBy;
    return [...list].sort((a, b) => {
      const av = a[field];
      const bv = b[field];
      return desc ? (bv > av ? 1 : -1) : (av > bv ? 1 : -1);
    });
  }
}
