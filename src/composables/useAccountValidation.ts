import { ref } from 'vue'
import type { AccountFormData } from '@/types/account'

export type ValidationErrors = Partial<Record<keyof AccountFormData, string>>

export function useAccountValidation() {
  const errors = ref<ValidationErrors>({})

  const validateField = (
    field: keyof AccountFormData,
    value: any,
    accountType?: string,
  ): string => {
    if (field === 'login') {
      if (!value || value.trim() === '') return 'Логин обязателен'
      if (value.length > 100) return 'Максимум 100 символов'
    }

    if (field === 'label' && value && value.length > 50) {
      return 'Максимум 50 символов'
    }

    if (field === 'password') {
      if (accountType === 'local') {
        if (!value || value.trim() === '') return 'Пароль обязателен для локальных записей'
        if (value.length > 100) return 'Максимум 100 символов'
      }
    }

    if (field === 'type') {
      if (!value) return 'Выберите тип записи'
    }

    return ''
  }

  const validateForm = (data: Partial<AccountFormData>): ValidationErrors => {
    const newErrors: ValidationErrors = {}

    for (const field of ['login', 'label', 'password', 'type'] as const) {
      const error = validateField(field, data[field], data.type)
      if (error) newErrors[field] = error
    }

    errors.value = newErrors
    return newErrors
  }

  const clearFieldError = (field: keyof AccountFormData) => {
    delete errors.value[field]
  }

  return {
    errors,
    validateField,
    validateForm,
    clearFieldError,
  }
}
