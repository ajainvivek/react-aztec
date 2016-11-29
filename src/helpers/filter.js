import _ from 'lodash';

const filter = {
  generateLayout(data) {
    const layout = {
      wrows: [],
      worows: []
    };
    // All Items
    const wrows = data;
    // Remove Without Rows
    const worows = _.remove(wrows, (item) => {
      return item.layout.row === undefined;
    });
    layout.worows.concat(worows); // Concat all items without rows
    // All row indices
    const rowIndex = _.map(wrows, 'layout.row');
    const uniqIndex = _.uniq(rowIndex);
    const sortedIndex = _.sortBy(uniqIndex);

    _.each(sortedIndex, (value) => {
      let rows = [];
      _.each(wrows, (item) => {
        if (item.layout.row === value) {
          rows.push(item);
        }
      });
      layout.wrows.push(rows);
    });

    return layout;
  }
};

module.exports = filter;
