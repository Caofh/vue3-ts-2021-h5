import { homeMethodType } from '@/type'
import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(): homeMethodType {
  const repositories = ref(['我', '是', '大', '好', '人'])

  onMounted(() => {
    console.log('mounted')
  })
  watch(repositories, () => {
    console.log('watch')
  })

  const setUepositor = (data: any): void => {
    repositories.value = data
  }

  return {
    repositories,
    setUepositor
  }
}
