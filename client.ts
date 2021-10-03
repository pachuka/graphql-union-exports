import * as Types from './schema';

export type PersonalLinesCustomerFragment = { readonly __typename?: 'PersonalLinesCustomer', readonly firstName: string, readonly lastName: string };

export type BusinessLinesCustomerFragment = { readonly __typename?: 'BusinessLinesCustomer', readonly businessName: string, readonly legalBusinessName?: string | null | undefined };

type CustomerBusinessLinesCustomerFragment = { readonly __typename?: 'BusinessLinesCustomer', readonly businessName: string, readonly legalBusinessName?: string | null | undefined };

type CustomerPersonalLinesCustomerFragment = { readonly __typename?: 'PersonalLinesCustomer', readonly firstName: string, readonly lastName: string };

export type CustomerFragment = CustomerBusinessLinesCustomerFragment | CustomerPersonalLinesCustomerFragment;

export type GetCustomerQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCustomerQuery = { readonly __typename?: 'Query', readonly customer: { readonly __typename?: 'BusinessLinesCustomer', readonly businessName: string, readonly legalBusinessName?: string | null | undefined } | { readonly __typename?: 'PersonalLinesCustomer', readonly firstName: string, readonly lastName: string } };
