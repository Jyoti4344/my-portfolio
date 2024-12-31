import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <img
        src="/logo.png"
        alt="JG"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'transparent',
        }}
      />
    ),
    {
      ...size,
    }
  )
}

