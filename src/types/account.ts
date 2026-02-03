export type AccountType = 'ldap' | 'local'

export interface Account {
  id: string
  label: string
  type: AccountType
  login: string
  password: string | null
}

export type AccountFormData = Omit<Account, 'id'>
