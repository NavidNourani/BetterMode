export interface TokensResponse {
  tokens: Tokens;
}

export interface Tokens {
  accessToken: string;
  role: Role;
  member: Member;
  __typename: string;
}

export interface Member {
  id: string;
  name: string;
  __typename: string;
}

export interface Role {
  name: string;
  scopes: string[];
  __typename: string;
}
