import Image from 'next/image'

// images
import Tiff from '../../assets/tiffany.png'

export default function Page() {
    return (
      <div>
        <Image
            src="/logo.svg"
            alt="Tiffany's Logo"
            className=""
            width={48}
            height={48}
            priority
          />
        <h1>Hello, Next.js!</h1>

      </div>
    )
  }