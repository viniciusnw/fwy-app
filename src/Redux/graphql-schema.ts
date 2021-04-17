/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: customerLogin
// ====================================================

export interface customerLogin_customerLogin {
  __typename: "CustomerLogin";
  _id: string | null;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  weight: number;
  height: number;
  zipcode: string;
  city: string;
  state: string;
  token: string;
  role: string;
  expirationTime: number;
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

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
