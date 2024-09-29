import Image from 'next/image'
import PhofileGithub from '@/app/img/perfil_github.jpeg'

export const PhofileTheCodingHub = () => {
  return (
    <div className="flex mt-10 ">
      <Image
        src={PhofileGithub}
        alt="foto de perfil do github"
        className="w-[100px] h-[100px] bg-black rounded-full ml-4"
      />
      <div className="mt-4 ml-8">
        <p className="flex flex-col font-bold text-3xl ">
          The
          <span className="text-primary ">Coding Hub .JS</span>
        </p>
      </div>
    </div>
  )
}
