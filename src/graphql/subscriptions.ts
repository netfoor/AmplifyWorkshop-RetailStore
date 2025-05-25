/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onCreateCategory(filter: $filter, owner: $owner) {
    createdAt
    description
    id
    image
    name
    owner
    products {
      nextToken
      __typename
    }
    styles
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onCreateProduct(filter: $filter, owner: $owner) {
    category {
      createdAt
      description
      id
      image
      name
      owner
      styles
      updatedAt
      __typename
    }
    categoryProductId
    createdAt
    current_stock
    description
    id
    image
    name
    owner
    price
    rating
    style
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onDeleteCategory(filter: $filter, owner: $owner) {
    createdAt
    description
    id
    image
    name
    owner
    products {
      nextToken
      __typename
    }
    styles
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onDeleteProduct(filter: $filter, owner: $owner) {
    category {
      createdAt
      description
      id
      image
      name
      owner
      styles
      updatedAt
      __typename
    }
    categoryProductId
    createdAt
    current_stock
    description
    id
    image
    name
    owner
    price
    rating
    style
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory(
  $filter: ModelSubscriptionCategoryFilterInput
  $owner: String
) {
  onUpdateCategory(filter: $filter, owner: $owner) {
    createdAt
    description
    id
    image
    name
    owner
    products {
      nextToken
      __typename
    }
    styles
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct(
  $filter: ModelSubscriptionProductFilterInput
  $owner: String
) {
  onUpdateProduct(filter: $filter, owner: $owner) {
    category {
      createdAt
      description
      id
      image
      name
      owner
      styles
      updatedAt
      __typename
    }
    categoryProductId
    createdAt
    current_stock
    description
    id
    image
    name
    owner
    price
    rating
    style
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
