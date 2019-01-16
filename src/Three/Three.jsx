import React, { Component } from 'react';
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

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      headers: data[0].map((x, i) => ({ id: i, value: i }))
    };
  }

  headerRenderer = ({ dataKey }) => {
    return <div></div>;
  }

  cellRenderer = ({ cellData }) => {
    return <Cell value={cellData}></Cell>;
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
            >
              {headers.map(header => (
                <Column
                  key={header.id}
                  dataKey={header.id}
                  width={200}
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

export default withStyles(styles)(Three);
