import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 0,

  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});
function TableContents(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer anchor = "right" className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper,}}>
        <div className={classes.toolbar} />
            {props.children}
      </Drawer>
    </div>
  );
}

TableContents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableContents);
