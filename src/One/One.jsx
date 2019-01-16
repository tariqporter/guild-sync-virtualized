import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import data from '../data.json';

const styles = {
  row: {
    height: 30,
    display: 'flex'
  },
  cell: {
    overflow: 'hidden',
    border: '1px #ccc solid',
    width: 200
  }
};

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div>
        {data.map(row => (
          <div key={row} className={classes.row}>
            {row.map(d => (
              <div key={d} className={classes.cell}>{d}</div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(One);