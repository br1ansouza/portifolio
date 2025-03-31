import { farmacia, webcarros, ecommerce, api_gestao, rpg } from "../../data/images";

export const projects = [
  {
    title: {
      pt: "API de Gestão de Filiais e Produtos",
      en: "Branch and Product Management API",
    },
    description: {
      pt: "Uma API desenvolvida com Node.js, TypeScript e TypeORM para gerenciar filiais, produtos e movimentações entre unidades.",
      en: "An API built with Node.js, TypeScript, and TypeORM to manage branches, products, and transfers between units.",
    },
    fullDescription: {
      pt: "Este projeto é uma API RESTful desenvolvida com Node.js, TypeScript e TypeORM, utilizando PostgreSQL como banco de dados...",
      en: "This is a RESTful API developed with Node.js, TypeScript, and TypeORM, using PostgreSQL as the database...",
    },
    technologies: ["Node.js", "Express", "TypeScript", "TypeORM", "PostgreSQL", "Bcrypt"],
    coverImage: api_gestao.logo_api_gestao,
    images: [],
    keyFeatures: {
      pt: [
        "Autenticação com JWT",
        "Gerenciamento de usuários",
        "Cadastro e listagem de produtos",
        "Movimentação de produtos entre filiais",
        "Documentação com Swagger",
        "Criptografia de senhas com Bcrypt"
      ],
      en: [
        "JWT authentication",
        "User management",
        "Product registration and listing",
        "Product transfers between branches",
        "Swagger documentation",
        "Password encryption with Bcrypt"
      ]
    },
    githubUrl: "https://github.com/br1ansouza/api-gestao-filiais-produtos",
  },
  {
    title: {
      pt: "Farmacia App",
      en: "Pharmacy App",
    },
    description: {
      pt: "Um aplicativo mobile desenvolvido com React Native e Expo...",
      en: "A mobile app built with React Native and Expo...",
    },
    fullDescription: {
      pt: "Este projeto foi desenvolvido utilizando React Native e Expo...",
      en: "This project was developed using React Native and Expo...",
    },
    technologies: ["JavaScript", "TypeScript", "React Native", "Expo"],
    coverImage: farmacia.tela_logo_farmacia,
    images: [
      farmacia.tela_home,
      farmacia.tela_users,
      farmacia.tela_movimentacoes
    ],
    keyFeatures: {
      pt: ["Autenticação", "Gestão de Estoque", "Gestão de Usuários", "Gestão de Movimentações"],
      en: ["Authentication", "Stock Management", "User Management", "Movement Management"]
    },
    githubUrl: "https://github.com/br1ansouza/App-React-Farmacia",
  },
  {
    title: {
      pt: "WebCarros",
      en: "WebCarros",
    },
    description: {
      pt: "Um aplicativo React Native que permite aos usuários compartilhar opiniões sobre automóveis...",
      en: "A React Native app that allows users to share car reviews...",
    },
    fullDescription: {
      pt: "O WebCarros é um aplicativo desenvolvido em React Native...",
      en: "WebCarros is a React Native app that allows users to log in...",
    },
    technologies: ["TypeScript", "React Native", "Expo"],
    coverImage: webcarros.tela_logo_webcarros,
    images: [
      webcarros.tela_login_webcarros,
      webcarros.tela_veiculos_webcarros,
      webcarros.tela_avaliacao_webcarros
    ],
    keyFeatures: {
      pt: ["Catálogo de produtos", "Avaliações de usuários", "Autenticação"],
      en: ["Product catalog", "User reviews", "Authentication"]
    },
    githubUrl: "https://github.com/br1ansouza/app-Projeto-WebCarros",
  },
  {
    title: {
      pt: "Plataforma E-commerce",
      en: "E-commerce Platform",
    },
    description: {
      pt: "Aplicativo React Native que exibe uma lista de produtos com funcionalidade de pesquisa...",
      en: "React Native app that displays a product list with search functionality...",
    },
    fullDescription: {
      pt: "Bem-vindo ao Product Page app Ecommerce! Este é um aplicativo React Native...",
      en: "Welcome to the Product Page Ecommerce App! This is a React Native app...",
    },
    technologies: ["JavaScript", "React Native", "Expo"],
    coverImage: ecommerce.tela_logo_ecommerce,
    images: [
      ecommerce.tela_login_ecommerce,
      ecommerce.tela_produtos,
      ecommerce.carrinho_de_compras
    ],
    keyFeatures: {
      pt: ["Catálogo de produtos", "Carrinho de compras", "Integração de pagamento"],
      en: ["Product catalog", "Shopping cart", "Payment integration"]
    },
    githubUrl: "https://github.com/br1ansouza/app-ecommerce",
  },
  {
    title: {
      pt: "Simulador de Combate RPG",
      en: "RPG Combat Simulator",
    },
    description: {
      pt: "Projeto que demonstra como utilizar conceitos avançados de POO em TypeScript...",
      en: "Project demonstrating advanced OOP concepts in TypeScript...",
    },
    fullDescription: {
      pt: "Este projeto é um jogo de RPG simplificado desenvolvido em TypeScript...",
      en: "This is a simplified RPG game built in TypeScript...",
    },
    technologies: ["TypeScript"],
    coverImage: rpg.logo_rpg,
    images: [],
    keyFeatures: {
      pt: ["POO", "Encapsulamento", "Herança", "Polimorfismo"],
      en: ["OOP", "Encapsulation", "Inheritance", "Polymorphism"]
    },
    githubUrl: "https://github.com/br1ansouza/Jogo-RPG-TS",
  }
];
