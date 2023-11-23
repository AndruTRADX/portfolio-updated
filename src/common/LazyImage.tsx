// import { Image } from 'antd'
import { useRef, useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'
import { base64img } from './img'

type LazyImageProps = { src: string | undefined }
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNativeTypes

export default function LazyImage( { src, className }: Props ):JSX.Element {  
  const node = useRef<HTMLImageElement> (null)
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(base64img)

  useEffect(() => {

    // nuevo observador
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      })
    })
  
    // observar node
    if (node.current) {
      observer.observe(node.current)
    }

    // desconectar observador
    return () => {
      observer.disconnect()
    }

  },[src])

  return (
    <img ref={node} src={currentSrc} className={className} />
  )
}