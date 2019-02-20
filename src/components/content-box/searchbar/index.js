import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { isEventKey } from 'keycode';

import { noop } from 'utils/helpers';
import { colors } from 'utils/ui';
import { StyledRoot, StyledIcon, StyledInput } from './styled';

export default class Searchbar extends PureComponent {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(event) {
    if (isEventKey(event, 'enter'))
      this.props.onSubmit(event, event.target.value);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <StyledRoot>
        <StyledIcon icon="magnifier" width={16} bg={colors.grey} />
        <StyledInput
          placeholder={placeholder}
          onKeyUp={this.handleKeyUp}
        />
      </StyledRoot>
    );
  }
};

Searchbar.defaultProps = {
  onSubmit: noop,
};

Searchbar.propTypes = {
  placeholder: pt.string,
  onSubmit: pt.func,
};
