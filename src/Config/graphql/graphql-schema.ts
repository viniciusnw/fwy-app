/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: customerLogin
// ====================================================

export interface customerLogin_customerLogin {
  __typename: "CustomerLogin";
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string | null;
  weight: number | null;
  height: number | null;
  country: string;
  state: string;
  avatar: string | null;
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
// GraphQL mutation operation: updateCustomer
// ====================================================

export interface updateCustomer_updateCustomer {
  __typename: "CustomerUpdate";
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string | null;
  weight: number | null;
  height: number | null;
  country: string;
  state: string;
  avatar: string | null;
  token: string;
  expirationTime: number;
  role: string;
}

export interface updateCustomer {
  updateCustomer: updateCustomer_updateCustomer;
}

export interface updateCustomerVariables {
  customer: CustomerUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: customerRegister
// ====================================================

export interface customerRegister_customerRegister {
  __typename: "CustomerRegister";
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string | null;
  weight: number | null;
  height: number | null;
  country: string;
  state: string;
  avatar: string | null;
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

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CustomerRegisterInput {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  country: string;
  state: string;
  password: string;
  gender?: string | null;
  weight?: number | null;
  height?: number | null;
  avatar?: string | null;
}

export interface CustomerUpdateInput {
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  birthday?: string | null;
  gender?: string | null;
  country?: string | null;
  state?: string | null;
  weight?: number | null;
  height?: number | null;
  password?: string | null;
  avatar?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
