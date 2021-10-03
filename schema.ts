export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BusinessLinesCustomer = Customer & {
  readonly __typename?: 'BusinessLinesCustomer';
  readonly businessName: Scalars['String'];
  readonly contactInfo?: Maybe<CustomerContactInfo>;
  readonly id: Scalars['ID'];
  readonly legalBusinessName?: Maybe<Scalars['String']>;
  readonly userId?: Maybe<Scalars['ID']>;
};

export type Customer = {
  readonly contactInfo?: Maybe<CustomerContactInfo>;
  readonly id: Scalars['ID'];
  readonly userId?: Maybe<Scalars['ID']>;
};

export type CustomerContactAddress = {
  readonly __typename?: 'CustomerContactAddress';
  readonly city: Scalars['String'];
  readonly postalCode: Scalars['String'];
  readonly streetAddress: Scalars['String'];
  readonly unit?: Maybe<Scalars['String']>;
};

export type CustomerContactInfo = {
  readonly __typename?: 'CustomerContactInfo';
  readonly address?: Maybe<CustomerContactAddress>;
  readonly email?: Maybe<Scalars['String']>;
  readonly phone?: Maybe<Scalars['String']>;
};

export type PersonalLinesCustomer = Customer & {
  readonly __typename?: 'PersonalLinesCustomer';
  readonly contactInfo?: Maybe<CustomerContactInfo>;
  readonly firstName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly lastName: Scalars['String'];
  readonly priorAddress?: Maybe<CustomerContactAddress>;
  readonly userId?: Maybe<Scalars['ID']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly customer: Customer;
};
