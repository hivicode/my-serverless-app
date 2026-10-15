import * as React from "react"
import { cn } from "cn"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <div
      data-slot="avatar"
      className={cn(
        "relative flex size-9 shrink-0 overflow-hidden rounded-full ring-1 ring-border/50",
        className
      )}
      {...props}
    />
  )
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string
}

function AvatarImage({ className, alt = "", ...props }: AvatarImageProps) {
  return (
    <img
      data-slot="avatar-image"
      alt={alt}
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  )
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted font-medium text-xs text-muted-foreground select-none",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
