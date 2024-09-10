export interface LoginNetworkResponse {
  loginNetwork: LoginNetwork;
}

export interface LoginNetwork {
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

export interface Error {
  timestamp: string;
  code: string;
  message: string;
  help: string;
  status: number;
  path: string[];
  extensions: Extensions;
}

export interface Extensions {
  timestamp: string;
  code: string;
  message: string;
  help: string;
  status: number;
}
