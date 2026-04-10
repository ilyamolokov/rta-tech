export interface UserName {
  title: string
  first: string
  last: string
}

export interface UserLocation {
  city: string
  country: string
}

export interface UserPicture {
  large: string
  medium: string
  thumbnail: string
}

export interface User {
  id: string
  name: UserName
  email: string
  phone: string
  picture: UserPicture
  location: UserLocation
  gender: 'male' | 'female'
  nat: string
}

export interface UsersQueryParams {
  page: number
  pageSize: number
  search?: string
}

export interface UsersResponse {
  users: User[]
  total: number
}
