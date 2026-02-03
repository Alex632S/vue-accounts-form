<template>
  <div class="card">
    <div class="flex justify-content-between align-items-center mb-4">
      <h2 class="m-0">Учетные записи</h2>
      <Button icon="pi pi-plus" label="Добавить" @click="addAccount" />
    </div>

    <DataTable :value="store.accounts" dataKey="id" class="p-datatable-sm">
      <Column field="label" header="Метки">
        <template #body="{ data }">
          <InputText
            v-model="data.label"
            @blur="saveField(data.id, 'label', data.label)"
            placeholder="метка1; метка2"
            class="w-full"
          />
        </template>
      </Column>

      <Column field="type" header="Тип записи">
        <template #body="{ data }">
          <Select v-model="data.type" @change="changeType(data)" :options="types" class="w-full" />
        </template>
      </Column>

      <Column field="login" header="Логин">
        <template #body="{ data }">
          <InputText
            v-model="data.login"
            @blur="saveField(data.id, 'login', data.login)"
            class="w-full"
          />
        </template>
      </Column>

      <Column field="password" header="Пароль">
        <template #body="{ data }">
          <div v-if="data.type === 'local'">
            <Password
              v-model="data.password"
              @blur="saveField(data.id, 'password', data.password)"
              :feedback="false"
              toggleMask
              class="w-full"
            />
          </div>
          <div v-else>
            <span class="text-color-secondary">—</span>
          </div>
        </template>
      </Column>

      <Column header="Действия">
        <template #body="{ data }">
          <Button icon="pi pi-trash" severity="danger" text @click="deleteAccount(data.id)" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { useAccountsStore } from '@/app/stores/accounts'

const store = useAccountsStore()

const types = [
  { label: 'Локальная', value: 'local' },
  { label: 'LDAP', value: 'ldap' },
]

function addAccount() {
  store.addAccount({ type: 'local' })
}

function deleteAccount(id: string) {
  const ok = confirm('Удалить эту запись?')
  if (ok) {
    store.removeAccount(id)
  }
}

function changeType(account: any) {
  const updateData: any = { type: account.type }

  if (account.type === 'ldap') {
    updateData.password = null
  }

  store.updateAccount(account.id, updateData)
}

function saveField(id: string, fieldName: string, value: string) {
  const updateData: any = {}
  updateData[fieldName] = value
  store.updateAccount(id, updateData)
}
</script>
