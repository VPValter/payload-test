import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  logoUrl?: string
}

export const LogoComponent = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className, logoUrl } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="VladimirP Logo"
      width={40}
      height={40}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={className}
      // src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg"
      src={logoUrl}
    />
  )
}
