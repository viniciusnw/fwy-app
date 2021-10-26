import { TimeToShowEnum } from '@Config/constants';

export default {
  actionName: 'TIMER-PAGE-TIMER-DISPLAY',
  reducer: (state, action) => {
    switch (action.type) {
      case 'TIMER-PAGE-TIMER-DISPLAY': {
        return {
          ...state,
          timerPage_TimeToDisplay:
            state.timerPage_TimeToDisplay == TimeToShowEnum.remaining
              ? TimeToShowEnum.elapsed
              : TimeToShowEnum.remaining,
        };
      }

      default: return state;
    }
  }
}