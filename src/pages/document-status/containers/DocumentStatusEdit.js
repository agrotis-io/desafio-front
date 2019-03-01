import React, { PureComponent, Fragment } from 'react';
import Grid from 'styled-components-grid';

import FloatingActionButton from '@app/components/button/floating-action';
import { atRightBottom } from '@app/components/button/floating-action/styled';
import ContentBox from '@app/components/content-box';
import Field from '@app/components/field';
import FloppyDiskIcon from '@app/components/icon/floppy-disk';
import { colors } from '@app/utils/ui';

export default class DocumentStatusEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.renderFAB = this.renderFAB.bind(this);
  }

  handleBackClick() {
    const { history: routerHistory } = this.props;
    routerHistory.goBack();
  }

  renderFAB() {
    const Action = atRightBottom(
      FloatingActionButton,
      '20px',
      '20px',
    );

    return (
      <Action>
        <FloppyDiskIcon
          fill={colors.white}
          height="17"
        />
      </Action>
    );
  }

  render() {
    return (
      <Fragment>
        <ContentBox
          title="Situação"
          hasBackAction
          onBackActionClick={this.handleBackClick}
          style={{ display: 'flex' }}
        >
          <Grid>
            <Grid.Unit
              size={(4 / 12)}
              style={{ paddingRight: '15px' }}
            >
              <Field
                label="Nome"
                id="name"
                isRequired
                defaultValue="Andamento"
              />
            </Grid.Unit>

            <Grid.Unit
              size={(8 / 12)}
              style={{ paddingLeft: '15px' }}
            >
              <Field
                label="Descrição"
                id="description"
                isRequired
                defaultValue="Quando documento está sendo processado"
              />
            </Grid.Unit>
          </Grid>
        </ContentBox>

        { this.renderFAB() }
      </Fragment>
    );
  }
}
