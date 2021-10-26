import React from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';

import { ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { TimerContainer } from './../fast.style';

class CirgularTimer extends React.PureComponent<
  ReduxPropsType & {
    differenceInPercentage: number;
  } & WithTranslation,
  any
> {
  constructor(props) {
    super(props);
    this.state = {
      differenceInPercentage: 0,
    };
  }

  render() {
    const { differenceInPercentage } = this.props;

    return (
      <>
        <AnimatedCircularProgress
          size={300}
          width={30}
          rotation={360}
          lineCap="round"
          duration={1450}
          backgroundWidth={30}
          tintColor={'#EC5349'}
          backgroundColor={'#222842'}
          fill={differenceInPercentage}>
          {(fill) => <TimerContainer>{this.props.children}</TimerContainer>}
        </AnimatedCircularProgress>
      </>
    );
  }

  private t = (value: string, variables?: any) =>
    this.props.t && this.props.t(value, variables);
}

function mapStateToProps({ Fastings }: ReduxStateType) {
  return {
    useRedux: {
      Fastings,
    },
  };
}

export default withTranslation('Timer')(
  connect(mapStateToProps, null)(CirgularTimer),
);
