export const columns = [
  {
    key: 'title',
    name: 'Название продукта'
  },
  {
    key: 'amount',
    name: 'Доступное кол-во'
  },
  {
    key: 'price',
    name: 'Цена'
  },
];

export const actions = [
  {
    className: 'btn btn-primary',
    label: 'Изменить',
    emit: 'onEdit',
    actionKey: '_id'
  }
];
