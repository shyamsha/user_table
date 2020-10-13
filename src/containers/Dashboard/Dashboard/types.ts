export interface UserParams {
  page:number
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Ad {
  company: string;
  url: string;
  text: string;
}

export interface Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  ad: Ad;
}


export enum UserActionTypes {
  USER_REQUEST = "@@user/dashboard/USER_REQUEST",
  USER_SUCCESS = "@@user/dashboard/USER_SUCCESS",
  USER_ERROR = "@@user/dashboard/USER_ERROR",

}

export interface UserState {
  readonly loading: boolean;
  readonly users:Users | null;
  readonly errors: {
    user?:string;
  };
}

