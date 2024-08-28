import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  courseStatus: {
    id: 'learner-dash.courseListFilters.courseStatus',
    description: 'course status filter form heading',
    defaultMessage: 'Статус курса',
  },
  inProgress: {
    id: 'learner-dash.courseListFilters.inProgress',
    description: 'in-progress filter checkbox label for course list filters',
    defaultMessage: 'В процессе',
  },
  notStarted: {
    id: 'learner-dash.courseListFilters.notStarted',
    description: 'Not-Started filter checkbox label for course list filters',
    defaultMessage: 'Не начато',
  },
  done: {
    id: 'learner-dash.courseListFilters.done',
    description: 'done filter checkbox label for course list filters',
    defaultMessage: 'Готово',
  },
  notEnrolled: {
    id: 'learner-dash.courseListFilters.notEnrolled',
    description: 'not-enrolled filter checkbox label for course list filters',
    defaultMessage: 'Нет записи',
  },
  upgraded: {
    id: 'learner-dash.courseListFilters.upgraded',
    description: 'upgraded filter checkbox label for course list filters',
    defaultMessage: 'Обновить',
  },
  clearAll: {
    id: 'learner-dash.courseListFilters.clearAll',
    description: 'clear all filters button text',
    defaultMessage: 'Очистить все',
  },
  sort: {
    id: 'learner-dash.courseListFilters.sort',
    description: 'Sort radio form heading',
    defaultMessage: 'Сортировка',
  },
  sortLastEnrolled: {
    id: 'learner-dash.courseListFilters.sortLastEnrolled',
    description: 'Last enrolled sort option text',
    defaultMessage: 'Последняя регистрация',
  },
  sortTitle: {
    id: 'learner-dash.courseListFilters.sortTitle',
    description: 'Title sort option text',
    defaultMessage: 'Название (А-Я)',
  },
  refine: {
    id: 'learner-dash.courseListFilters.refine',
    description: 'Filter button container text',
    defaultMessage: 'Фильтр',
  },
});

export default messages;
