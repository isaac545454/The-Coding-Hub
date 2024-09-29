import { FrontendResources } from '@/app/data/FrontendResources'
import Image from 'next/image'
import Link from 'next/link'

export const LinksFrontendResources = () => {
  return (
    <div className="px-2 flex-1">
      {FrontendResources.map((FrontendResource) => (
        <div key={FrontendResource.name}>
          <div className=" mt-10 mb-4 flex items-center">
            <Image
              src={FrontendResource.logoImg}
              alt={FrontendResource.name}
              width={40}
            />
            <p className="font-bold  ml-3 text-xl text-primary">
              {FrontendResource.name}
            </p>
          </div>
          <div className="flex flex-col">
            {FrontendResource.resources.map((resource) => (
              <Link
                href={resource.link}
                key={resource.link}
                target="_blank"
                className="font-bold mt-1 underline decoration-gray-100"
              >
                * - {resource.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
