export interface UserData {
  _id: string
  name: string
  username: string
  email: string
  address?: string
  externalId: string
  __v: number
  coordinates: { lat: string; lng: string }
}

export interface AddUserData {
  name: string
  username: string
  email: string
  coordinates?: { lat: string; lng: string }
}

export interface Users {
  users: UserData[]
}
