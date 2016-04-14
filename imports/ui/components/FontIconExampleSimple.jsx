import React from 'react';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';

const iconStyles = {
  marginRight: 24,
};

const fixColors = {
  blue500:  '#e3f2fd',
  red500: '#f44336',
  greenA200: '#69f0ae',
}; 

const FontIconExampleSimple = () => (
  <div>
    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={fixColors.blue500}
    />

    <FontIcon
      className="muidocs-icon-action-home"
      style={iconStyles}
      color={fixColors.red500}
      hoverColor={fixColors.greenA200}
    />
  </div>
);

export default FontIconExampleSimple;