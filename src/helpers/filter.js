import _ from 'lodash';

const filter = {
  generateLayout(data) {
    const layout = {
      wrows: [],
      worows: []
    };
    // All Items
    const wrows = _.clone(data);
    // Remove Without Rows
    const worows = _.remove(wrows, (item) => {
      const isLayout = item.layout ? item.layout.row : item.layout;
      return isLayout === undefined;
    });
    layout.worows = worows; // Concat all items without rows
    // All row indices
    const rowIndex = _.map(wrows, 'layout.row');
    const uniqIndex = _.uniq(rowIndex);
    const sortedIndex = _.sortBy(uniqIndex);

    _.each(sortedIndex, (value) => {
      const rows = [];
      _.each(wrows, (item) => {
        if (item.layout) {
          if (item.layout.row === value) {
            rows.push(item);
          }
        }
      });
      layout.wrows.push(rows);
    });

    return layout;
  }
};

module.exports = filter;
