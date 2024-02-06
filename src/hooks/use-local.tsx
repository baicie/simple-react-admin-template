import React, { useState } from "react"
import dayjs from 'dayjs';
import useGlobalStore from "../stores/global";
import zhCN from 'antd/locale/zh_CN';
import { ConfigProviderProps, Radio, RadioChangeEvent } from "antd";
import i18n from 'i18next';
import "dayjs/locale/zh-cn";
import en_US from "antd/lib/locale/en_US";
import zh_CN from 'antd/locale/zh_CN';

type Locale = ConfigProviderProps['locale'];

function useLocal() {
  const { local, setLocal } = useGlobalStore()
  const [antLocal, setAntLocal] = useState<Locale>(zhCN)

  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue: Locale = e.target.value;
    const _local = localeValue!.locale
    if (_local === local) return
    setAntLocal(localeValue)
    dayjs.locale(_local)
    i18n.changeLanguage(_local)
    setLocal(_local)
  }

  const renderLocal: React.FC = () => {
    return (
      <Radio.Group value={local} onChange={changeLocale}>
        <Radio.Button key="en" value={en_US}>
          English
        </Radio.Button>
        <Radio.Button key="cn" value={zh_CN}>
          中文
        </Radio.Button>
      </Radio.Group>
    )
  }

  return {
    renderLocal,
    antLocal,
    local
  }
}

export default useLocal