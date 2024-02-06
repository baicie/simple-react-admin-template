import { useTranslation } from 'react-i18next'
import { ConfigProvider, } from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';
import useLocal from './hooks/use-local';

function App() {
  const { t } = useTranslation();
  const { local, renderLocal } = useLocal()

  return (
    <ConfigProvider locale={zh_CN}>
      {t('hello')}
      {
        renderLocal({})
      }
    </ConfigProvider>
  )
}

export default App
