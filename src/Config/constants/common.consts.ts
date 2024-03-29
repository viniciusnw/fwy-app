

export enum languagesEnum {
  PT_US = 'pt-US',
  PT_BR = 'pt-BR',
  EN_US = 'en-US',
  EN_BR = 'en-BR'
}

export enum registerFieldsEnum {
  name = 'name',
  email = 'email',
  phone = 'phone',
  birthday = 'birthday',
  country = 'country',
  state = 'state',
  password = 'password',
}

export enum editProfileFieldsEnum {
  name = 'name',
  phone = 'phone',
  email = 'email',
  birthday = 'birthday',
  gender = 'gender',
  weight = 'weight',
  height = 'height',
  avatar = 'avatar',
}

export enum loginFieldsEnum {
  email = "email",
  password = "password",
}

export enum SaveOrUpdateEnum {
  Update = 'Update',
  Save = 'Save'
}

export default {
  fullDays: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ],
  weekDays: [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
  ],
  hours: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
  ],
  ApolloClient: 'APOLLO_CLIENT',
  customHours: (hours: number) => {
    const hoursArray = Array.from(Array(hours + 1)).map((i, idx) => idx);
    hoursArray.shift();
    return hoursArray;
  },
  fastColors: ['#EC5349', '#8B4F9F', '#222842', '#EB334D'],
  fastColorsRgb: ['236, 83, 73', '139, 79, 159', '34, 40, 66', '235, 51, 77'],
  enums: {
    languages: languagesEnum,
    registerFields: registerFieldsEnum,
    loginFields: loginFieldsEnum,
    saveOrUpdate: SaveOrUpdateEnum
  }
};