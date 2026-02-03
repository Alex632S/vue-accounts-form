import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Account, AccountFormData } from '@/types/account'

export const useAccountsStore = defineStore('accounts', () => {
  const accounts = ref<Account[]>([])

  const totalAccounts = computed(() => accounts.value.length)

  const generateId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`

  const addAccount = (formData: Partial<AccountFormData> = {}) => {
    const isLDAP = formData.type === 'ldap'

    const newAccount: Account = {
      id: generateId(),
      label: formData.label || '',
      type: formData.type || 'local',
      login: formData.login || '',
      password: isLDAP ? null : (formData.password ?? ''),
    }

    accounts.value.push(newAccount)
    return newAccount
  }

  const removeAccount = (id: string) => {
    accounts.value = accounts.value.filter((acc) => acc.id !== id)
  }

  const updateAccount = (id: string, updates: Partial<AccountFormData>) => {
    const account = accounts.value.find((acc) => acc.id === id)
    if (!account) return

    if (updates.label !== undefined) account.label = updates.label
    if (updates.type !== undefined) account.type = updates.type
    if (updates.login !== undefined) account.login = updates.login

    if (updates.type === 'ldap') {
      account.password = null
    } else if (updates.password !== undefined) {
      account.password = updates.password
    }
  }

  return {
    accounts,

    totalAccounts,

    addAccount,
    removeAccount,
    updateAccount,
  }
})
