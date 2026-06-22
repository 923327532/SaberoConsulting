// ============================================
// SABERO Consulting - Oferta PT
// ============================================
import type { OfertaData } from './types';

export const ofertaPt: OfertaData = {
  intro: {
    title: 'Nossa',
    titleAccent: 'oferta',
    description:
      'A SABERO projeta, desenvolve e evolui plataformas digitais para empresas que precisam escalar processos, produtos e operações na América e Europa.',
    microcopy:
      'Integramos estratégia, produto, engenharia e operação para construir soluções digitais com impacto real.',
  },
  capacidades: {
    title: 'Capacidades',
    subtitle: 'Como geramos valor',
    items: [
      {
        id: 'servicos',
        title: 'Serviços',
        summary:
          'Acompanhamos empresas desde a definição de necessidades até a construção, integração e evolução contínua de produtos e plataformas digitais.',
        items: [
          'Discovery e definição',
          'Design funcional',
          'Desenvolvimento',
          'Integração',
          'Suporte evolutivo',
        ],
        description:
          'Cobrimos cada etapa do ciclo de vida digital com equipes multidisciplinares que combinam visão de negócio, design de experiência e execução técnica.',
        resolves:
          'Quando uma empresa precisa de um parceiro que não apenas programe, mas também entenda negócio, produto e operação.',
      },
      {
        id: 'solucoes',
        title: 'Soluções',
        summary:
          'Construímos soluções digitais orientadas a processos, experiência do usuário, eficiência operacional e crescimento sustentável.',
        items: [
          'Plataformas internas',
          'Marketplaces',
          'Portais de clientes',
          'Sistemas operacionais',
          'Ferramentas de automação',
        ],
        description:
          'Cada solução responde a um desafio concreto de negócio: otimizar operações, habilitar novos canais ou transformar a experiência de usuários internos e externos.',
        resolves:
          'Quando o cliente não sabe se precisa de "um site" ou "um sistema", e você mostra soluções de negócio.',
      },
      {
        id: 'capacidades-tecnologicas',
        title: 'Capacidades tecnológicas',
        summary:
          'Combinamos arquitetura de produto, engenharia moderna, integrações, cloud e análise para construir plataformas confiáveis e escaláveis.',
        items: [
          'Arquitetura',
          'Frontend e backend',
          'Integrações',
          'Cloud',
          'Observabilidade',
          'Dados e AI enablement',
        ],
        description:
          'Nossa base técnica é projetada para resolver problemas reais: escalar sem atrito, manter qualidade em cada entrega e evoluir sem dívida técnica acumulada.',
        resolves:
          'Quando o cliente precisa de confiança técnica e quer saber se a SABERO tem capacidade real de execução.',
      },
      {
        id: 'modelos-colaboracao',
        title: 'Modelos de colaboração',
        summary:
          'Nos adaptamos ao momento do negócio com esquemas de discovery, execução por fases, equipes dedicadas ou colaboração com equipes internas.',
        items: [
          'Discovery inicial',
          'Equipe dedicada ou parcial',
          'Execução por fases',
          'Colaboração com equipes internas',
          'Suporte contínuo',
        ],
        description:
          'Trabalhamos como extensão da equipe do cliente ou como parceiro de execução integral, de acordo com a maturidade digital e as necessidades de cada organização.',
        resolves:
          'Reduz a dúvida típica do cliente sobre "como eles vão trabalhar comigo".',
      },
      {
        id: 'inovacao-modernizacao',
        title: 'Inovação e modernização',
        summary:
          'Ajudamos a modernizar sistemas, automatizar operações e habilitar novas capacidades tecnológicas sem interromper a operação do negócio.',
        items: [
          'Modernização tecnológica',
          'Automação',
          'Evolução de processos',
          'Melhoria de performance',
          'Adoção gradual de IA',
        ],
        description:
          'Conectamos empresas com a evolução tecnológica sem interromper sua operação atual, habilitando novas capacidades de forma progressiva e controlada.',
        resolves:
          'Quando a empresa já tem algo funcionando, mas precisa evoluí-lo.',
      },
    ],
  },
  especialidades: {
    title: 'Especialidades',
    subtitle: 'No que trabalhamos',
    items: [
      {
        id: 'desenvolvimento-medida',
        title: 'Desenvolvimento de software sob medida',
        description:
          'Desenvolvemos software adaptado a processos, objetivos e regras de negócio específicas, com foco em manutenibilidade e escalabilidade.',
        resolves:
          'Elimina a dependência de soluções genéricas que não se adaptam à sua operação. Você obtém um produto projetado para o seu negócio, escalável e sustentável.',
        scope: [
          'Desenvolvimento sob medida',
          'Sistemas internos',
          'Portais',
          'Ferramentas operacionais',
          'Produtos digitais',
        ],
        cta: 'Ver capacidades de desenvolvimento',
        ctaHref: '/pt/industrias',
      },
      {
        id: 'plataformas-web',
        title: 'Plataformas web e marketplaces',
        description:
          'Projetamos e desenvolvemos plataformas web e marketplaces capazes de conectar usuários, processos e operações em uma única experiência digital.',
        resolves:
          'Centraliza a interação com clientes, fornecedores ou parceiros em uma plataforma projetada para escalar sem perder qualidade de experiência.',
        scope: [
          'Marketplaces',
          'Plataformas B2B/B2C',
          'Painéis administrativos',
          'Portais de usuário',
          'Experiências web escaláveis',
        ],
        cta: 'Ver plataformas',
        ctaHref: '/pt/industrias',
      },
      {
        id: 'modernizacao-sistemas',
        title: 'Modernização de sistemas',
        description:
          'Modernizamos aplicações e sistemas existentes para melhorar desempenho, estabilidade, velocidade de entrega e capacidade de evolução.',
        resolves:
          'Reduz a dívida técnica e o risco operacional de sistemas legados. Acelere a entrega de novas funcionalidades sem interromper a operação atual.',
        scope: [
          'Refatoração',
          'Migração',
          'Desacoplamento',
          'Atualização de stack',
          'Melhoria de manutenibilidade',
        ],
        cta: 'Ver modernização',
        ctaHref: '/pt/industrias',
      },
      {
        id: 'integracoes-automacao',
        title: 'Integrações e automação',
        description:
          'Integramos plataformas, serviços e processos para eliminar tarefas manuais, reduzir erros e acelerar a operação.',
        resolves:
          'Elimina silos de informação e automatiza fluxos críticos. Sua equipe opera com dados em tempo real e processos sincronizados.',
        scope: [
          'APIs',
          'Webhooks',
          'Pagamentos',
          'CRM/ERP',
          'Automação de fluxos',
          'Sincronização de dados',
        ],
        cta: 'Ver integrações',
        ctaHref: '/pt/industrias',
      },
      {
        id: 'cloud-devops',
        title: 'Cloud e DevOps',
        description:
          'Preparamos e operamos plataformas em infraestrutura moderna com foco em estabilidade, observabilidade, segurança e escalabilidade.',
        resolves:
          'Elimina gargalos em implantações e operação. Sua equipe entrega com velocidade, confiança e controle sobre cada ambiente.',
        scope: [
          'Implantação',
          'Infraestrutura',
          'CI/CD',
          'Monitoramento',
          'Observabilidade',
          'Confiabilidade',
        ],
        cta: 'Ver cloud e DevOps',
        ctaHref: '/pt/industrias',
      },
      {
        id: 'qa-evolucao',
        title: 'QA e evolução contínua',
        description:
          'Garantimos qualidade em cada entrega e acompanhamos a evolução do produto com melhorias contínuas baseadas no uso, feedback e necessidades do negócio.',
        resolves:
          'Reduz riscos em cada release. Mantenha qualidade constante enquanto o produto cresce e se adapta a novas necessidades do negócio.',
        scope: [
          'Testes funcionais',
          'Validação contínua',
          'Manutenção',
          'Melhorias iterativas',
          'Controle técnico',
        ],
        cta: 'Ver QA',
        ctaHref: '/pt/industrias',
      },
      {
        id: 'dados-analitica',
        title: 'Dados, análise e AI enablement',
        description:
          'Habilitamos capacidades de dados, análise e automação para melhorar visibilidade operacional, tomada de decisões e futuros casos de inteligência aplicada.',
        resolves:
          'Transforma dados dispersos em informações acionáveis. Prepare a organização para adotar IA e automação baseada em dados reais.',
        scope: [
          'Dashboards',
          'Rastreabilidade',
          'Reporting',
          'Métricas operacionais',
          'Preparação de dados',
          'Automação assistida',
        ],
        cta: 'Ver dados e análise',
        ctaHref: '/pt/industrias',
      },
      {
        id: 'arquitetura-produto',
        title: 'Arquitetura de produto',
        description:
          'Definimos arquiteturas de produto que permitem crescer com clareza técnica, velocidade de entrega e sustentabilidade a longo prazo.',
        resolves:
          'Evita que o crescimento gere caos técnico. Seu produto evolui com uma base sólida que permite escalar sem refazer o que foi construído.',
        scope: [
          'Design de arquitetura',
          'Modularidade',
          'Escalabilidade',
          'Dívida técnica',
          'Roadmap técnico',
          'Sustentabilidade do produto',
        ],
        cta: 'Ver arquitetura',
        ctaHref: '/pt/industrias',
      },
    ],
  },
  cta: {
    primary: { text: 'Explorar casos e impacto', href: '/pt/contacto/' },
    secondary: { text: 'Falar com SABERO', href: '/pt/contacto/' },
  },
};
