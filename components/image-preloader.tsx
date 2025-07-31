"use client"

import { useEffect, useState } from "react"

interface ImagePreloaderProps {
  images: string[]
  onProgress?: (progress: number) => void
}

export function useImagePreloader(images: string[]) {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (images.length === 0) {
      setIsComplete(true)
      return
    }

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.onload = () => {
          setLoadedImages((prev) => new Set([...prev, src]))
          resolve()
        }
        img.onerror = reject
        img.src = src
      })
    }

    Promise.allSettled(images.map(loadImage)).then(() => {
      setIsComplete(true)
    })
  }, [images])

  return {
    loadedImages,
    isComplete: isComplete || loadedImages.size === images.length,
    progress: images.length > 0 ? (loadedImages.size / images.length) * 100 : 100,
  }
}

export default function ImagePreloader({ images, onProgress }: ImagePreloaderProps) {
  const { progress } = useImagePreloader(images)

  useEffect(() => {
    onProgress?.(progress)
  }, [progress, onProgress])

  return null
}
