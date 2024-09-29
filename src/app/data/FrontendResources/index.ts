import ReactLogo from '@/app/img/react_logo.png'
import JSLogo from '@/app/img/JavaScript-logo.png'
import TSLogo from '@/app/img/typescript_logo.png'
import CleanArch from '@/app/img/clean-architecture-diagram.png'
import DiagramaLogo from '@/app/img/diagrama.png'
import { link } from 'fs'

export const FrontendResources = [
  {
    name: ' Arquitetura de Software',
    logoImg: CleanArch,
    resources: [
      {
        name: 'Como arquitetar seu Front-end React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_arquitetando-suas-pages-front-end-activity-7176551911041441793-5qBt?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Desesvendando Arquitetura de Micro-Frontends React.js',
        link: ' https://www.linkedin.com/posts/isaac-gomes-matos_desvendando-arquitetura-de-micro-frontends-activity-7231277075146412033-g34a?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Gerenciamento de Estados Em Micro-Frontends React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_gerenciamento-de-estados-em-micro-frontends-activity-7244681617347137537-y__c?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: '(DDD) Modelo Anêmico e Modelo Rico',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_desvendando-ddd-modelos-anemico-rico-activity-7228736447434915841-frTw?utm_source=share&utm_medium=member_desktop',
      },

      {
        name: 'Clean architecture',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_desvendando-clean-architecture-activity-7223662654291099650-ASjS?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: '(MVVM) Aplicada ao React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_desvendando-arquitetura-mvvm-activity-7221125826098937856-xZOv?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Ports and Adapters',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_desvendando-arquitetura-hexagonal-activity-7218585095098531840-3txc?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: '(BFF) Backend for Frontend',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_arquitetura-baseada-em-bff-backend-for-frontend-activity-7216053400319193088-imDn?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'MVVM + SOLID no Front-end React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_solid-mvvm-activity-7171116937966436352-vLx2?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'SOLID no seu Front-end React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_solid-no-front-end-activity-7166042718807212032-rqP9?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Como aplicar a arquitetura MVVM em React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-typescript-activity-7143575059654246400-KCP4?utm_source=share&utm_medium=member_desktop',
      },
    ],
  },
  {
    name: 'Design de Software',
    logoImg: DiagramaLogo,
    resources: [
      {
        name: '(SRP) Single Responsibility Principle',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_aplicando-o-s-do-solid-em-fun%C3%A7%C3%B5es-activity-7173653397051584513-wWTq?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Principios SOLID',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_desvendando-solid-activity-7226199082405363712-Y3z1?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'TDD + DIP + Adapter',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_entendendo-dip-adapter-patterns-tdd-activity-7186698899741425664-BoQT?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Design Patterns Chain of Responsibility',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_design-patterns-chain-of-responsibility-activity-7236346727581011968-iIbf?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Melhorando seus if',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_melhore-seus-ifs-activity-7166768026447560704-TRiA?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Design Patterns (Builder, decorator, adatper e strategy)',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_design-patterns-activity-7167854766092496896-c2gs?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Criando Funções melhores',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_crie-fun%C3%A7%C3%B5es-melhores-em-typescript-activity-7208445790820741120-BmcR?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: "DRY (Don't Repeat Yourself)",
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_dry-dont-repeat-yourselfpdf-activity-7169304479736049664-6C5W?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Design Pattern Builder',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-typescript-activity-7162781429607731200-p2J7?utm_source=share&utm_medium=member_desktop',
      },
    ],
  },
  {
    name: 'React.js',
    logoImg: ReactLogo,
    resources: [
      {
        name: 'Limpando os IFS do seu JSX ',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_a-melhor-maneira-de-limpar-seu-jsx-com-objetos-activity-7210982508455206912-zEQc?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'criando app multilanguage',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_internacionaliza%C3%A7%C3%A3o-da-sua-aplica%C3%A7%C3%A3o-reactjs-activity-7198295171006922753-p8Ca?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Criando uma CLI',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_criando-cli-no-reactjs-activity-7190685239566876672-xwRq?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Documentando seu Front-end React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_documentando-seu-front-end-activity-7178001579583696897-LAx6?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Documentando Components Compostos',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_como-documentar-componentes-compostos-activity-7180538626525569025-Khh7?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Resolvendo Prop drilling',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_a-melhor-maneira-de-lidar-com-prop-drilling-activity-7179089222434209792-njHf?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Tudo que você precisa saber sobre react-hook-form',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_todos-os-recursos-do-react-hook-form-activity-7172928564454014976-bivL?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Criando validações condicionais em React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_como-criar-valida%C3%A7%C3%B5es-condicionais-activity-7171841230270521344-BLnW?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Desacoplando libs do seu Front-end',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_frontend-react-typescript-activity-7161331848747352064-FR7h?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Arquitetura de módulos em React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-arquitetura-activity-7160244710912012288-u5WR?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'impedindo o usuário de copiar e colar no input',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-typescript-activity-7158432967474741248-o6Gs?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'identificando gargalos de Performance em React.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-typescript-javascript-activity-7153359121403047939-T2EG?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Lidando com componentes dinâmicos em React',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-typescript-javascript-activity-7152996997862416384-HkZd?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'não caia nessa armadilha do react.js',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-typescript-activity-7143212305407787008-gF30?utm_source=share&utm_medium=member_desktop',
      },
    ],
  },
  {
    name: 'Javascript',
    logoImg: JSLogo,
    resources: [
      {
        name: 'Como o Javascript Funciona',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_como-o-javascript-funciona-activity-7233809507749908480-mRb8?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Promises em Javascript (.all, .allSettled, .race, .any)',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_js-promise-ts-activity-7238881369701965825-Aet0?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Formatando numeros e valores',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_js-react-node-activity-7241420772810887169-8y1l?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'metodos de Array',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_javascript-typescript-activity-7237071186491305984-c4Na?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Cinco Conceitos Avançados',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_cinco-conceitos-avan%C3%A7ados-de-javascript-activity-7175464733318234112-_T7n?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Web Workers',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-typescript-javascript-activity-7155171168444919808-i26g?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'você não precisa de date-fns',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_javascript-typescript-activity-7151547326409388032-n1Vc?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'melhore sua UX com Lazy de Imagem + Streaming do NextJS ',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_reactjs-nextjs-typescript-activity-7150460194966122496-1hwp?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Planejando seu Front-end',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-typescrip-activity-7143937044992483328-jq1c?utm_source=share&utm_medium=member_desktop',
      },
    ],
  },
  {
    name: 'Typescript',
    logoImg: TSLogo,
    resources: [
      {
        name: 'types e utilitários',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_types-activity-7170392939708280833-AWCz?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Criando Funçoes com tipos restritos de um objeto',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_intellisense-do-seu-typescript-activity-7201194507676053504-tg_8?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'Pare de criar types desnecessárias!',
        link: 'https://www.linkedin.com/posts/isaac-gomes-matos_react-typescript-activity-7158071055268356097-KJSK?utm_source=share&utm_medium=member_desktop',
      },
    ],
  },
]
