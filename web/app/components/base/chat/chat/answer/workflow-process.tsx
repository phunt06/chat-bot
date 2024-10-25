import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  RiArrowRightSLine,
  RiErrorWarningFill,
  RiLoader2Line,
} from '@remixicon/react'
import { useTranslation } from 'react-i18next'
import type { ChatItem, WorkflowProcess } from '../../types'
import TracingPanel from '@/app/components/workflow/run/tracing-panel'
import cn from '@/utils/classnames'
import { CheckCircle } from '@/app/components/base/icons/src/vender/solid/general'
import { WorkflowRunningStatus } from '@/app/components/workflow/types'
import { useStore as useAppStore } from '@/app/components/app/store'

type WorkflowProcessProps = {
  data: WorkflowProcess
  item?: ChatItem
  grayBg?: boolean
  expand?: boolean
  hideInfo?: boolean
  hideProcessDetail?: boolean
}
const WorkflowProcessItem = ({
  data,
  item,
  grayBg,
  expand = false,
  hideInfo = false,
  hideProcessDetail = false,
}: WorkflowProcessProps) => {
  const { t } = useTranslation()
  const [collapse, setCollapse] = useState(!expand)
  const running = data.status === WorkflowRunningStatus.Running
  const succeeded = data.status === WorkflowRunningStatus.Succeeded
  const failed = data.status === WorkflowRunningStatus.Failed || data.status === WorkflowRunningStatus.Stopped

  const background = useMemo(() => {
    if (running && !collapse)
      return 'linear-gradient(180deg, #E1E4EA 0%, #EAECF0 100%)'

    if (succeeded && !collapse)
      return 'linear-gradient(180deg, #ECFDF3 0%, #F6FEF9 100%)'

    if (failed && !collapse)
      return 'linear-gradient(180deg, #FEE4E2 0%, #FEF3F2 100%)'
  }, [running, succeeded, failed, collapse])

  useEffect(() => {
    setCollapse(!expand)
  }, [expand])

  const setCurrentLogItem = useAppStore(s => s.setCurrentLogItem)
  const setShowMessageLogModal = useAppStore(s => s.setShowMessageLogModal)
  const setCurrentLogModalActiveTab = useAppStore(s => s.setCurrentLogModalActiveTab)

  const showIterationDetail = useCallback(() => {
    setCurrentLogItem(item)
    setCurrentLogModalActiveTab('TRACING')
    setShowMessageLogModal(true)
  }, [item, setCurrentLogItem, setCurrentLogModalActiveTab, setShowMessageLogModal])

  return (
    <div></div>
  )
}

export default WorkflowProcessItem
