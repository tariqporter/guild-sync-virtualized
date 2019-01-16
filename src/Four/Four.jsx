import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import data from '../data.json';
import { AutoSizer, Table, Column } from 'react-virtualized';
import Cell from './Cell';

const styles = {
  root: {
    width: '100vw',
    height: '100vh',
  }
};

let memoizedCells = [];

const onRowsRendered = ({ overscanStartIndex, overscanStopIndex }) => {
  memoizedCells = memoizedCells.filter(x => x.rowIndex >= overscanStartIndex && x.rowIndex <= overscanStopIndex);
};

class Four extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data,
      headers: data[0].map((x, i) => ({ id: i, width: 200, value: i }))
    };
  }

  headerRenderer = ({ dataKey }) => {
    return <div></div>;
  }

  cellRenderer = ({ cellData, rowIndex, columnIndex }) => {
    const memoizedCell = memoizedCells.find(x => x.rowIndex === rowIndex && x.columnIndex === columnIndex);
    let Component = memoizedCell ? memoizedCell.Component : null;
    if (!Component) {
      Component = <Cell value={cellData}></Cell>;
      memoizedCells.push({ rowIndex, columnIndex, Component });
    }
    return Component;
  }

  render() {
    const { classes } = this.props;
    const { data, headers } = this.state;
    return (
      <div className={classes.root}>
        <AutoSizer>
          {({ width, height }) => (
            <Table
              className={classes.table}
              width={width - 15}
              height={height - 10}
              headerHeight={40}
              rowHeight={70}
              rowCount={data.length}
              rowGetter={({ index }) => data[index]}
              onRowsRendered={onRowsRendered}
            >
              {headers.map(header => (
                <Column
                  key={header.id}
                  dataKey={header.id}
                  width={header.width}
                  label={header.value}
                  headerRenderer={this.headerRenderer}
                  cellRenderer={this.cellRenderer}
                />
              ))}
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }
}

export default withStyles(styles)(Four);