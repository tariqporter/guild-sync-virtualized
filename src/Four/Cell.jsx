import React, { PureComponent } from 'react';
import { withStyles, TextField } from '@material-ui/core';

const styles = {
  cell: {
    width: 300,
    padding: 5
  }
};

class Cell extends PureComponent {
  render() {
    // console.log(`Oh no! We're re-rendering all cells every time we scroll!`);
    const { classes, value } = this.props;
    return (
      <div className={classes.cell}>
        <TextField value={value} />
      </div>
    );
  }
}

export default withStyles(styles)(Cell);