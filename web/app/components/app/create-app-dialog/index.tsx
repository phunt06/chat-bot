'use client'
import { useTranslation } from 'react-i18next'
import { RiCloseLine } from '@remixicon/react'
import NewAppDialog from './newAppDialog'
import AppList, { PageType } from '@/app/components/explore/app-list'

type CreateAppDialogProps = {
  show: boolean
  onSuccess: () => void
  onClose: () => void
}

const CreateAppTemplateDialog = ({ show, onSuccess, onClose }: CreateAppDialogProps) => {
  const { t } = useTranslation()

  return (
    <div></div>
  )
}

export default CreateAppTemplateDialog
