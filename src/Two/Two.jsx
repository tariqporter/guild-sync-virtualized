import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import data from '../data.json';
import Cell from './Cell';

const styles = {
  row: {
    height: 30,
    display: 'flex'
  }
};

class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.slice(0, 400)
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
              <Cell key={d} value={d}></Cell>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Two);