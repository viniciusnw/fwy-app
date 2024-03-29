/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: countriesAndStates
// ====================================================

export interface countriesAndStates {
  countriesAndStates: string[];
}

export interface countriesAndStatesVariables {
  country?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createFasting
// ====================================================

export interface createFasting {
  createFasting: string;
}

export interface createFastingVariables {
  fasting: FastingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createPreset
// ====================================================

export interface createPreset {
  createPreset: boolean;
}

export interface createPresetVariables {
  preset: PresetInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: customerLogin
// ====================================================

export interface customerLogin_customerLogin_avatar {
  __typename: "Avatar";
  type: string;
  data: string;
}

export interface customerLogin_customerLogin_configs {
  __typename: "CustomerConfigs";
  chat: boolean | null;
  weight: string | null;
  height: string | null;
  language: string | null;
}

export interface customerLogin_customerLogin {
  __typename: "CustomerLogin";
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: any;
  gender: string | null;
  weight: number | null;
  height: number | null;
  country: string;
  state: string;
  avatar: customerLogin_customerLogin_avatar | null;
  configs: customerLogin_customerLogin_configs | null;
  token: string;
  expirationTime: number;
  role: string;
}

export interface customerLogin {
  customerLogin: customerLogin_customerLogin;
}

export interface customerLoginVariables {
  email: string;
  password: string;
  isAdmin?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: customerRegister
// ====================================================

export interface customerRegister_customerRegister_avatar {
  __typename: "Avatar";
  type: string;
  data: string;
}

export interface customerRegister_customerRegister_configs {
  __typename: "CustomerConfigs";
  chat: boolean | null;
  weight: string | null;
  height: string | null;
  language: string | null;
}

export interface customerRegister_customerRegister {
  __typename: "CustomerRegister";
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: any;
  gender: string | null;
  weight: number | null;
  height: number | null;
  country: string;
  state: string;
  avatar: customerRegister_customerRegister_avatar | null;
  configs: customerRegister_customerRegister_configs | null;
  token: string;
  expirationTime: number;
  role: string;
}

export interface customerRegister {
  customerRegister: customerRegister_customerRegister;
}

export interface customerRegisterVariables {
  customer: CustomerRegisterInput;
  configs?: CustomerConfigsInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: customerUpdate
// ====================================================

export interface customerUpdate_customerUpdate_avatar {
  __typename: "Avatar";
  type: string;
  data: string;
}

export interface customerUpdate_customerUpdate_configs {
  __typename: "CustomerConfigs";
  chat: boolean | null;
  weight: string | null;
  height: string | null;
  language: string | null;
}

export interface customerUpdate_customerUpdate {
  __typename: "CustomerUpdate";
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: any;
  gender: string | null;
  weight: number | null;
  height: number | null;
  country: string;
  state: string;
  avatar: customerUpdate_customerUpdate_avatar | null;
  configs: customerUpdate_customerUpdate_configs | null;
  token: string;
  expirationTime: number;
  role: string;
}

export interface customerUpdate {
  customerUpdate: customerUpdate_customerUpdate;
}

export interface customerUpdateVariables {
  customer: CustomerUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editFasting
// ====================================================

export interface editFasting_editFasting {
  __typename: "Fasting";
  _id: string;
  name: string;
  startDate: any;
  endDate: any;
  color: string;
  initialTotalHours: number;
  finished: any | null;
}

export interface editFasting {
  editFasting: editFasting_editFasting;
}

export interface editFastingVariables {
  id: string;
  fasting: FastingUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editStartEndFasting
// ====================================================

export interface editStartEndFasting_editStartEndFasting {
  __typename: "Fasting";
  _id: string;
  name: string;
  startDate: any;
  endDate: any;
  color: string;
  initialTotalHours: number;
  finished: any | null;
}

export interface editStartEndFasting {
  editStartEndFasting: editStartEndFasting_editStartEndFasting;
}

export interface editStartEndFastingVariables {
  id: string;
  fasting: FastingUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: endFasting
// ====================================================

export interface endFasting {
  endFasting: boolean;
}

export interface endFastingVariables {
  endFasting: EndFastingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getChatMessages
// ====================================================

export interface getChatMessages_getChatMessages_messages {
  __typename: "Message";
  _id: string | null;
  text: string;
  sender: string;
  date: any;
}

export interface getChatMessages_getChatMessages_nextPagination {
  __typename: "NextPagination";
  pageNumber: number;
  nPerPage: number;
  nextPageNumber: number | null;
}

export interface getChatMessages_getChatMessages {
  __typename: "GetChatMessages";
  messages: getChatMessages_getChatMessages_messages[] | null;
  nextPagination: getChatMessages_getChatMessages_nextPagination;
}

export interface getChatMessages {
  getChatMessages: getChatMessages_getChatMessages;
}

export interface getChatMessagesVariables {
  pagination: Pagination;
  customerId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getFasts
// ====================================================

export interface getFasts_getFasts {
  __typename: "Fasting";
  _id: string;
  name: string;
  startDate: any;
  endDate: any;
  color: string;
  finished: any | null;
  initialTotalHours: number;
}

export interface getFasts {
  getFasts: getFasts_getFasts[];
}

export interface getFastsVariables {
  actives?: boolean | null;
  fastingId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPresets
// ====================================================

export interface getPresets_getPresets {
  __typename: "Preset";
  _id: string;
  name: string;
  hours: number;
  days: number;
  color: string;
  index: number;
}

export interface getPresets {
  getPresets: getPresets_getPresets[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendChatMessage
// ====================================================

export interface sendChatMessage {
  sendChatMessage: boolean;
}

export interface sendChatMessageVariables {
  customerId?: string | null;
  text: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: setCustomerConfigs
// ====================================================

export interface setCustomerConfigs_setCustomerConfigs {
  __typename: "CustomerConfigs";
  chat: boolean | null;
  weight: string | null;
  height: string | null;
  language: string | null;
}

export interface setCustomerConfigs {
  setCustomerConfigs: setCustomerConfigs_setCustomerConfigs;
}

export interface setCustomerConfigsVariables {
  customerId?: string | null;
  configs?: CustomerConfigsInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updatePreset
// ====================================================

export interface updatePreset {
  updatePreset: boolean;
}

export interface updatePresetVariables {
  preset: PresetInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCustomer
// ====================================================

export interface getCustomer_getCustomer_configs {
  __typename: "CustomerConfigs";
  chat: boolean | null;
  weight: string | null;
  height: string | null;
  language: string | null;
}

export interface getCustomer_getCustomer_avatar {
  __typename: "Avatar";
  type: string;
  data: string;
}

export interface getCustomer_getCustomer {
  __typename: "Customer";
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: any;
  country: string;
  state: string;
  gender: string | null;
  weight: number | null;
  height: number | null;
  configs: getCustomer_getCustomer_configs | null;
  avatar: getCustomer_getCustomer_avatar | null;
}

export interface getCustomer {
  getCustomer: getCustomer_getCustomer;
}

export interface getCustomerVariables {
  customerId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getLastFasting
// ====================================================

export interface getLastFasting_getLastFasting {
  __typename: "Fasting";
  _id: string;
  name: string;
  startDate: any;
  endDate: any;
  color: string;
  finished: any | null;
  initialTotalHours: number;
}

export interface getLastFasting {
  getLastFasting: getLastFasting_getLastFasting[];
}

export interface getLastFastingVariables {
  customerId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: listCustomers
// ====================================================

export interface listCustomers_listCustomers_customers_avatar {
  __typename: "Avatar";
  type: string;
  data: string;
}

export interface listCustomers_listCustomers_customers {
  __typename: "Customer";
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: any;
  country: string;
  state: string;
  gender: string | null;
  weight: number | null;
  height: number | null;
  avatar: listCustomers_listCustomers_customers_avatar | null;
}

export interface listCustomers_listCustomers_nextPagination {
  __typename: "NextPagination";
  pageNumber: number;
  nPerPage: number;
  nextPageNumber: number | null;
}

export interface listCustomers_listCustomers {
  __typename: "CustomerList";
  customers: listCustomers_listCustomers_customers[] | null;
  nextPagination: listCustomers_listCustomers_nextPagination;
}

export interface listCustomers {
  listCustomers: listCustomers_listCustomers;
}

export interface listCustomersVariables {
  pagination: Pagination;
  term?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AvatarInput {
  type: string;
  data: string;
}

export interface AvatarUpdate {
  type: string;
  data: string;
}

export interface CustomerConfigsInput {
  chat?: boolean | null;
  weight?: string | null;
  height?: string | null;
  language?: string | null;
}

export interface CustomerRegisterInput {
  name: string;
  email: string;
  phone: string;
  birthday: any;
  country: string;
  state: string;
  password: string;
  gender?: string | null;
  weight?: number | null;
  height?: number | null;
  avatar?: AvatarInput | null;
}

export interface CustomerUpdateInput {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  birthday?: any | null;
  gender?: string | null;
  country?: string | null;
  state?: string | null;
  weight?: number | null;
  height?: number | null;
  password?: string | null;
  avatar?: AvatarUpdate | null;
}

export interface EndFastingInput {
  save: boolean;
  fastingId: string;
  customEndDate?: any | null;
  howFelling?: number | null;
  notes?: string | null;
  picture?: PictureInput | null;
}

export interface FastingInput {
  name: string;
  startDate: any;
  endDate: any;
  color: string;
  finished?: any | null;
}

export interface FastingUpdateInput {
  name?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  color?: string | null;
  finished?: any | null;
}

export interface Pagination {
  pageNumber: number;
  nPerPage: number;
}

export interface PictureInput {
  type: string;
  data: string;
}

export interface PresetInput {
  id?: string | null;
  index?: number | null;
  name: string;
  hours: number;
  days: number;
  color?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
