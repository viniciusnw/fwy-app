import {
    store as storeFasting,
    persistor as persistorFasting
} from './Fasting/store.config'

import {
    store as storeFastingAdm,
    persistor as persistorFastingAdm
} from './FastingAdm/store.config'

import { APP_NAME_TYPE } from '@Config/types';

export const Store = {
    [APP_NAME_TYPE.FASTING]: {
        store: storeFasting,
        persistor: persistorFasting
    },
    [APP_NAME_TYPE.FASTING_ADM]: {
        store: storeFastingAdm,
        persistor: persistorFastingAdm
    }
}