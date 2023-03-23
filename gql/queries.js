import { gql } from "@apollo/client";

export const GET_DUAS = gql`
  query GetDuas {
    duas {
      id
      arabic
      dutch
      transliteration
      category {
        type
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      type
    }
  }
`;

export const GET_CATEGORIES_DUA = gql`
  query GetCategoriesDuas {
    categories {
      id
      type
      data: duas {
        id
        arabic
        dutch
        transliteration
        category {
          type
        }
      }
    }
  }
`;
