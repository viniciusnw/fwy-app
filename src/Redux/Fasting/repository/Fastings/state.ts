export interface Fasting {
  _id?: string;
  name: string;
  color: string;
  endDate: Date;
  startDate: Date;
  finished: null | Date;
  initialTotalHours: number;

}

interface Preset {
  _id: string;
  name: string;
  days: number;
  hours: number;
  color: string;
  index: number;
}

interface CreateFasting {
  loading: boolean;
  success: boolean;
  error: boolean;
  data: string | null;
  errorMessage: any;
}

export class FastingsReduxType {
  presets: Array<Preset> = [];
  fastings: Array<Fasting> = [];
  fasting: Fasting | null = null;
  createFasting: CreateFasting = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorMessage: null,
  }
  getFastings = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
  }
  getPresets = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
  }
  endFasting = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
  }
  editFasting = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
  }
  saveOrUpdatePreset = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
  }
}

export const FastingsState = new FastingsReduxType