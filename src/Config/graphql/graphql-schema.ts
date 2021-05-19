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
// GraphQL mutation operation: customerLogin
// ====================================================

export interface customerLogin_customerLogin_avatar {
  __typename: "Avatar";
  type: string;
  data: string;
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
  token: string;
  expirationTime: number;
  role: string;
}

export interface customerRegister {
  customerRegister: customerRegister_customerRegister;
}

export interface customerRegisterVariables {
  customer: CustomerRegisterInput;
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
  name: string;
  startDate: any;
  endDate: any;
  color: string;
  index: number;
  finished: boolean;
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

export interface FastingInput {
  name: string;
  startDate: any;
  endDate: any;
  color: string;
  index: number;
  finished: boolean;
}

export interface Pagination {
  pageNumber: number;
  nPerPage: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
