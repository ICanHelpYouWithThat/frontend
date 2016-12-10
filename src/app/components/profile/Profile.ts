export interface Profile {
  _id: string,
  created: string,
  modified: string,
  name: string,
  email: string,
  linkedAccounts: [string],
  likes: number,
  invites: number,
  admin: false,
  type: string
}
