import { states as seedStates } from '@/data/states';
import { monuments as seedMonuments } from '@/data/monuments';
import { foods as seedFoods } from '@/data/foods';
import { festivals as seedFestivals } from '@/data/festivals';
import { historyEvents as seedHistoryEvents } from '@/data/historyEvents';
import { quizzes as seedQuizzes } from '@/data/quizzes';
import { diwaliSubmissions as seedSubmissions } from '@/data/diwaliSubmissions';
import { boardMembers as seedBoardMembers } from '@/data/boardMembers';

const clone = (value) => JSON.parse(JSON.stringify(value));
const makeId = (prefix = 'id') => `${prefix}-${Math.random().toString(36).slice(2, 9)}`;

const createEntity = (seed, key = 'id') => {
  let data = [...seed];

  const filterByObject = (item, query) =>
    Object.entries(query).every(([prop, expected]) => item[prop] === expected);

  return {
    list: async () => clone(data),
    filter: async (query = {}, orderBy, limit) => {
      let results = Array.isArray(query) ? query : data.filter((item) => {
        if (typeof query === 'function') return query(item);
        return filterByObject(item, query);
      });

      if (orderBy) {
        const desc = orderBy.startsWith('-');
        const field = desc ? orderBy.slice(1) : orderBy;
        results = [...results].sort((a, b) => {
          const av = a[field];
          const bv = b[field];
          if (av === bv) return 0;
          if (av === undefined) return 1;
          if (bv === undefined) return -1;
          return desc ? (bv > av ? 1 : -1) : (av > bv ? 1 : -1);
        });
      }

      if (limit) {
        results = results.slice(0, limit);
      }

      return clone(results);
    },
    create: async (payload) => {
      const newItem = { ...payload, [key]: payload[key] || makeId(key) };
      data = [newItem, ...data];
      return clone(newItem);
    }
  };
};

const stateStore = createEntity(seedStates, 'id');
const monumentStore = createEntity(seedMonuments, 'id');
const foodStore = createEntity(seedFoods, 'id');
const festivalStore = createEntity(seedFestivals, 'id');
const historyStore = createEntity(seedHistoryEvents, 'id');
const quizStore = createEntity(seedQuizzes, 'id');
const submissionStore = createEntity(seedSubmissions, 'id');
const boardMemberStore = createEntity(seedBoardMembers, 'id');

export const base44 = {
  entities: {
    State: stateStore,
    Monument: monumentStore,
    Food: foodStore,
    Festival: festivalStore,
    HistoryEvent: historyStore,
    Quiz: quizStore,
    DiwaliSubmission: submissionStore,
    BoardMember: boardMemberStore
  },
  integrations: {
    Core: {
      UploadFile: async ({ file }) => {
        const fileUrl = file ? URL.createObjectURL(file) : '';
        return { file_url: fileUrl };
      }
    }
  }
};
