import Link from 'next/link'
import { networks } from '@/app/data/networks'
import Image from 'next/image'

export const LinksNetworks = () => {
  return (
    <div className="mt-6  w-full flex flex-col justify-start">
      <p className="font-bold mt-4 mb-2 text-xl  ">Redes</p>

      {networks.map((network) => (
        <Link
          href={network.linkNetwork}
          key={network.linkNetwork}
          target="_blank"
          className="font-bold flex  flex-1  cursor-pointer decoration-gray-100"
        >
          <div
            key={network.name}
            className="flex mt-4 w-full text-center justify-center items-center p-2 rounded-md"
            style={{ backgroundColor: network.color }}
          >
            <Image src={network.imageURL} alt="test" width={network.width} />
            <p className="flex justify-end items-center ml-2">{network.name}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
