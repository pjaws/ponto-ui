import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Button } from 'grommet';
import { matchPath, withRouter } from 'react-router-dom';

const SideNavButton = ({ Icon, label, path, location, history }) => {
  const handleClick = evt => {
    evt.preventDefault();
    history.push(path);
  };
  return (
    <Button
      hoverIndicator={{ background: 'dark-4' }}
      path={'path'}
      active={
        !!matchPath(location.pathname, { path, exact: true, strict: true })
      }
      onClick={handleClick}
    >
      <Box pad='small' align='center' justify='center'>
        <Icon color='light-5' />
        <Text size='small' color='white'>
          {label}
        </Text>
      </Box>
    </Button>
  );
};

SideNavButton.propTypes = {
  Icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(SideNavButton);
