// Gerado a partir de /Users/genautech/mission/PROSPERA/factory-dashboard.html
// Regenerar com scripts/parse_sections.py apos editar o HTML de origem.

export interface LinkRef { title: string; url: string }
export interface Cell { text: string; links: LinkRef[] }
export interface TableData { heads: string[]; rows: Cell[][] }
export interface OverviewItem { label: string; value: string }
export interface PlaybookGroup { title: string; items: LinkRef[] }
export interface LogEntry { when: string; what: string; links: LinkRef[] }

export interface DashboardData {
  overview: OverviewItem[];
  phases: TableData;
  knowledgePlan: TableData;
  orchestration: TableData;
  playbooks: PlaybookGroup[];
  metrics: TableData;
  log: LogEntry[];
  logNote: string;
}

export const dashboardData: DashboardData = {
  "overview": [
    {
      "label": "Destino do Wayfinder",
      "value": "Estabelecer a 'Fábrica de E-books PROSPERA': uma linha de produção escalável para e-books low-ticket focados em nichos, integrados a uma plataforma de vendas própria com checkout, comercialização e divulgação otimizados, utilizando agentes especializados e o conhecimento do projeto piloto como base para expansão e compartilhamento de expertise contínuo."
    },
    {
      "label": "E-book Piloto",
      "value": "OPERADOR (Refatoração concluída no planejamento)"
    },
    {
      "label": "Cronograma Previsto (MVP)",
      "value": "30 dias (Go-live com venda real até o Dia 30)"
    },
    {
      "label": "Status Geral",
      "value": "PLANEJAMENTO CONCLUÍDO. INICIANDO EXECUÇÃO REAL DO MVP."
    }
  ],
  "phases": {
    "heads": [
      "Fase",
      "Título",
      "Status",
      "% Concluído",
      "Notas"
    ],
    "rows": [
      [
        {
          "text": "F0",
          "links": []
        },
        {
          "text": "Setup da Base de Conhecimento e Infraestrutura",
          "links": []
        },
        {
          "text": "✅ Concluída",
          "links": []
        },
        {
          "text": "100%",
          "links": []
        },
        {
          "text": "Playbooks e estrutura de conhecimento criados.",
          "links": []
        }
      ],
      [
        {
          "text": "F1",
          "links": []
        },
        {
          "text": "MVP - Planejamento do Piloto OPERADOR",
          "links": []
        },
        {
          "text": "✅ Concluída",
          "links": []
        },
        {
          "text": "100%",
          "links": []
        },
        {
          "text": "Planejamento do OPERADOR concluído; produção, QA e validação comercial seguem na trilha K3.",
          "links": []
        }
      ],
      [
        {
          "text": "F2",
          "links": []
        },
        {
          "text": "MVP - Desenvolvimento da Plataforma Própria (Semana 2-3 - Dia 21)",
          "links": []
        },
        {
          "text": "⚪ Pendente",
          "links": []
        },
        {
          "text": "0%",
          "links": []
        },
        {
          "text": "Início da construção da loja própria (próximo após Fase 1).",
          "links": []
        }
      ],
      [
        {
          "text": "F3",
          "links": []
        },
        {
          "text": "MVP - Lançamento e Validação (Semana 4 - Dia 30)",
          "links": []
        },
        {
          "text": "⚪ Pendente",
          "links": []
        },
        {
          "text": "0%",
          "links": []
        },
        {
          "text": "Aquecimento, afiliados, campanha de lançamento.",
          "links": []
        }
      ],
      [
        {
          "text": "F4",
          "links": []
        },
        {
          "text": "Produção Escalável e Expansão",
          "links": []
        },
        {
          "text": "⚪ Pendente",
          "links": []
        },
        {
          "text": "0%",
          "links": []
        },
        {
          "text": "Otimização e criação de novos e-books.",
          "links": []
        }
      ]
    ]
  },
  "knowledgePlan": {
    "heads": [
      "Etapa",
      "Janela",
      "Resultado operacional",
      "Skills",
      "Gate de saída",
      "Status"
    ],
    "rows": [
      [
        { "text": "K0 · Memória organizacional", "links": [] },
        { "text": "Concluída", "links": [] },
        { "text": "EMAI Starter Vault canônico, Knowledge Studio conectado e manifesto do PROSPERA disponível no dashboard.", "links": [] },
        { "text": "obsidian · project-knowledge-integration", "links": [] },
        { "text": "Fonte, síntese, projeto e proveniência recuperáveis.", "links": [] },
        { "text": "✅ Concluída", "links": [] }
      ],
      [
        { "text": "K1 · Curadoria das fontes", "links": [] },
        { "text": "Concluída", "links": [] },
        { "text": "Vídeos sobre Obsidian como sistema operacional e direção visual Kimi transformados em princípios aplicáveis.", "links": [] },
        { "text": "project-knowledge-integration · obsidian", "links": [] },
        { "text": "Resumo baseado na transcrição, limites declarados e uso no PROSPERA.", "links": [] },
        { "text": "✅ Concluída", "links": [] }
      ],
      [
        { "text": "K2 · Contrato do produto", "links": [] },
        { "text": "Dias 1–3", "links": [] },
        { "text": "Contrato do curso OPERADOR ligado à URL viva, com jornada de 30 dias, método interativo, DNA próprio, claims bloqueados e backlog R1–R5.", "links": [] },
        { "text": "infoprod-knowledge-agent · obsidian", "links": [] },
        { "text": "30 missões inventariadas com fonte e revisão; hoje 1/30 está observada.", "links": [] },
        { "text": "▶ Em execução · 1/30 missões", "links": [] }
      ],
      [
        { "text": "K3 · Produção do piloto", "links": [] },
        { "text": "Dias 4–10", "links": [] },
        { "text": "Curso OPERADOR refatorado: 30 missões, briefings, validações, D+48h, progressão, modo calmo e experiência interativa responsiva.", "links": [] },
        { "text": "infoprod-knowledge-agent · hallmark", "links": [] },
        { "text": "QA factual, editorial, visual, mobile e acessibilidade aprovado; artefatos salvos no vault.", "links": [] },
        { "text": "⚪ Pendente", "links": [] }
      ],
      [
        { "text": "K4 · Experiência de venda", "links": [] },
        { "text": "Dias 11–21", "links": [] },
        { "text": "Vitrine, página narrativa, checkout e entrega implementados com composição mobile própria e telemetria por variante.", "links": [] },
        { "text": "hallmark · infoprod-knowledge-agent", "links": [] },
        { "text": "Fluxo ponta a ponta testado; performance, responsividade, tracking e recuperação de falhas verificados.", "links": [] },
        { "text": "⚪ Pendente", "links": [] }
      ],
      [
        { "text": "K5 · Lançamento e validação", "links": [] },
        { "text": "Dias 22–30", "links": [] },
        { "text": "Venda real controlada, métricas de funil e feedback de compradores registrados por variante.", "links": [] },
        { "text": "infoprod-knowledge-agent · /afiliados quando aplicável", "links": [] },
        { "text": "Checkout real, eventos analíticos e entrega confirmados; campanha paga/afiliada passa pelos gates de /afiliados.", "links": [] },
        { "text": "⚪ Pendente", "links": [] }
      ],
      [
        { "text": "K6 · Aprendizado escalável", "links": [] },
        { "text": "Contínua após o piloto", "links": [] },
        { "text": "Retrospectiva do OPERADOR convertida em SOPs, templates, presets e melhorias da skill para os próximos e-books.", "links": [] },
        { "text": "project-knowledge-integration · obsidian", "links": [] },
        { "text": "Cada decisão liga evidência, resultado, mudança de processo e responsável.", "links": [] },
        { "text": "⚪ Pendente", "links": [] }
      ]
    ]
  },
  "orchestration": {
    "heads": [
      "Tipo de Tarefa",
      "LLM Principal",
      "Ferramentas/Skills Chave",
      "Notas"
    ],
    "rows": [
      [
        {
          "text": "Direção Criativa / QA (Julgamento Visual e Estrutura)",
          "links": []
        },
        {
          "text": "Claude Opus 5",
          "links": []
        },
        {
          "text": "Playbooks de Design, Copywriting",
          "links": []
        },
        {
          "text": "Para decisões complexas, revisão de design, análise de contexto.",
          "links": []
        }
      ],
      [
        {
          "text": "Geração de Pixels (Imagens, Vídeos)",
          "links": []
        },
        {
          "text": "Higgsfield CLI (GPT Image 2, Nano Banana 2, SeaDance)",
          "links": []
        },
        {
          "text": "Playbook de Design Visual",
          "links": []
        },
        {
          "text": "Geração de assets visuais, capas, ilustrações, KVs, vídeos.",
          "links": []
        }
      ],
      [
        {
          "text": "Trabalho em Lote / Mecânico (Renomear, Converter, Variações)",
          "links": []
        },
        {
          "text": "Claude Haiku 4.5",
          "links": []
        },
        {
          "text": "Scripts auxiliares",
          "links": []
        },
        {
          "text": "Para tarefas repetitivas e de baixo nível de raciocínio.",
          "links": []
        }
      ],
      [
        {
          "text": "Copywriting e Conteúdo (Geração)",
          "links": []
        },
        {
          "text": "Kimi/Claude (via Agente Copywriter)",
          "links": []
        },
        {
          "text": "Playbook de Copywriting e Conteúdo",
          "links": []
        },
        {
          "text": "Criação de copy persuasiva, headlines, CTAs, conteúdo de e-book.",
          "links": []
        }
      ],
      [
        {
          "text": "Estratégias de Lançamento e Otimização (Geração)",
          "links": []
        },
        {
          "text": "Kimi/Claude (via Agente Estrategista)",
          "links": []
        },
        {
          "text": "Playbook de Marketing de Afiliados, Otimização Contínua",
          "links": []
        },
        {
          "text": "Desenvolvimento de planos de lançamento, A/B testing, otimização de funil.",
          "links": []
        }
      ],
      [
        {
          "text": "Design Visual e Geração de Ativos (Orquestração/Execução)",
          "links": []
        },
        {
          "text": "Kimi/Claude (via Agente Designer Visual)",
          "links": []
        },
        {
          "text": "Playbook de Design Visual, Higgsfield CLI (conceitos de Impeccable/Taste Skill)",
          "links": []
        },
        {
          "text": "Coordena a criação de ativos visuais, injetando gosto e combatendo AI slop.",
          "links": []
        }
      ],
      [
        {
          "text": "Pesquisa de Conteúdo Afiliado (Extração/Geração)",
          "links": []
        },
        {
          "text": "Kimi/Claude (via Agente Pesquisador)",
          "links": []
        },
        {
          "text": "Firecrawl, Playbook de Copywriting",
          "links": []
        },
        {
          "text": "Extração de dados competitivos, geração de mini-reviews/comparativos.",
          "links": []
        }
      ],
      [
        {
          "text": "Análise Conversacional de Dados (Futuro)",
          "links": []
        },
        {
          "text": "Claude Code (integração)",
          "links": []
        },
        {
          "text": "Data Warehouse (ClickHouse)",
          "links": []
        },
        {
          "text": "Para interagir com dados de marketing/negócios via conversação.",
          "links": []
        }
      ]
    ]
  },
  "playbooks": [
    {
      "title": "Playbooks Criados:",
      "items": [
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Marketing/Google_Ads_Afiliados.md",
          "title": "Marketing de Afiliados e Google Ads"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Conteudo/Copywriting_Ebook.md",
          "title": "Copywriting e Conteúdo"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Design/Design_Visual_Ebook.md",
          "title": "Design Visual"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Marketing/Landing_Pages_Otimizadas.md",
          "title": "Criação e Otimização de Landing Pages"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Lancamento/Curadoria_Conhecimento_Obsidian.md",
          "title": "Curadoria de Conhecimento no Obsidian"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Organização/Estrutura_Pastas_Conteudo.md",
          "title": "Estrutura de Pastas para o Conteúdo"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Plataforma/Arquitetura_Vendas_Ebooks.md",
          "title": "Arquitetura da Plataforma de Vendas de E-books"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Plataforma/Desenvolvimento_LandingPages.md",
          "title": "Desenvolvimento e Otimização de Landing Pages"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Producao/Workflow_Criacao_Ebooks.md",
          "title": "Workflow de Criação Escalável de E-books"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Playbooks/Otimizacao/Otimizacao_Continua.md",
          "title": "Otimização Contínua e A/B Testing"
        }
      ]
    },
    {
      "title": "Agentes Projetados:",
      "items": [
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Agentes/Copywriter_Ebook_PROSPERA.agent.md",
          "title": "Agente Copywriter E-book PROSPERA"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Agentes/Estrategista_Lancamento_LowTicket_PROSPERA.agent.md",
          "title": "Agente Estrategista de Lançamento Low-Ticket PROSPERA"
        },
        {
          "url": "file:///Users/genautech/notes/PROSPERA/Agentes/Designer_Visual_Ebook_PROSPERA.agent.md",
          "title": "Agente Designer Visual E-book PROSPERA"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/Agentes/Pesquisador_Conteudo_Afiliado_PROSPERA.agent.md",
          "title": "Agente Pesquisador de Conteúdo Afiliado PROSPERA"
        }
      ]
    },
    {
      "title": "Base de Conhecimento:",
      "items": [
        {
          "url": "file:///Users/genautech/EMAI%20Starter%20Vault/Conhecimento/Projetos/infoprod/PROSPERA%20-%20Sistema%20de%20conhecimento%20e%20skills.md",
          "title": "Sistema de conhecimento e skills do PROSPERA"
        },
        {
          "url": "file:///Users/genautech/EMAI%20Starter%20Vault/Conhecimento/Projetos/infoprod/PROSPERA%20-%20Plano%20de%20implementa%C3%A7%C3%A3o%20do%20conhecimento.md",
          "title": "Plano de implementação do conhecimento K0–K6"
        },
        {
          "url": "file:///Users/genautech/EMAI%20Starter%20Vault/00%20Human/30%20Projects/PROSPERA/Contracts/Contrato%20do%20Produto%20-%20Curso%20OPERADOR.md",
          "title": "Contrato do Produto — Curso OPERADOR"
        },
        {
          "url": "file:///Users/genautech/EMAI%20Starter%20Vault/00%20Human/30%20Projects/PROSPERA/Contracts/Matriz%20Curricular%20OPERADOR%20-%2030%20Dias.md",
          "title": "Matriz Curricular OPERADOR — 30 Dias"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/dna/",
          "title": "DNA PROSPERA"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/PROSPERA/entregas/analise-ebook-operador.md",
          "title": "Análise E-book OPERADOR"
        },
        {
          "url": "file:///Users/genautech/notes/Conhecimento/YouTube/prospera/",
          "title": "Insights de Vídeos"
        }
      ]
    }
  ],
  "metrics": {
    "heads": [
      "Métrica",
      "Meta (MVP)",
      "Atual",
      "Tendência",
      "Última Atualização"
    ],
    "rows": [
      [
        {
          "text": "Vendas Loja Própria (Mês 3)",
          "links": []
        },
        {
          "text": "180 vendas",
          "links": []
        },
        {
          "text": "0",
          "links": []
        },
        {
          "text": "⬆️",
          "links": []
        },
        {
          "text": "N/A",
          "links": []
        }
      ],
      [
        {
          "text": "Ticket Médio (Funil Completo)",
          "links": []
        },
        {
          "text": "R$ 55",
          "links": []
        },
        {
          "text": "R$ 37",
          "links": []
        },
        {
          "text": "➡️",
          "links": []
        },
        {
          "text": "N/A",
          "links": []
        }
      ],
      [
        {
          "text": "ROAS Google Ads",
          "links": []
        },
        {
          "text": "> 1.8",
          "links": []
        },
        {
          "text": "N/A",
          "links": []
        },
        {
          "text": "N/A",
          "links": []
        },
        {
          "text": "N/A",
          "links": []
        }
      ],
      [
        {
          "text": "Taxa de Conversão LP",
          "links": []
        },
        {
          "text": "2-3%",
          "links": []
        },
        {
          "text": "N/A",
          "links": []
        },
        {
          "text": "N/A",
          "links": []
        },
        {
          "text": "N/A",
          "links": []
        }
      ],
      [
        {
          "text": "Afiliados Ativos",
          "links": []
        },
        {
          "text": "10-20",
          "links": []
        },
        {
          "text": "0",
          "links": []
        },
        {
          "text": "⬆️",
          "links": []
        },
        {
          "text": "N/A",
          "links": []
        }
      ]
    ]
  },
  "log": [
    {
      "when": "2026-08-08",
      "what": "Conhecimento dos vídeos incorporado ao masterplan como trilha K0–K6, com entregáveis, skills, gates e proveniência no EMAI Starter Vault.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Dashboard HTML (V1) criado e vinculado.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Briefing_Master.md atualizado com o conhecimento sobre orquestração de LLMs e ferramentas.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Playbook: Design Visual para E-books atualizado com insights sobre combate ao AI Slop.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Playbook: Gestão e Processamento de Vídeos MP4 criado.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Todas as tarefas de planejamento (F0 a F4) do Masterplan marcadas como concluídas.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Tarefas de refatoração do e-book piloto \"OPERADOR\" (F1-T3, F1-T4, F1-T5, F1-T6) marcadas como concluídas na To-Do list, baseadas em contexto de sessão anterior.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "factory-dashboard.md atualizado para refletir o planejamento concluído e o foco na execução.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Tarefa T1.3: Pesquisar Melhores Marketplaces e Canais de Divulgação marcada como CONCLUÍDA.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Dashboard HTML (V2) com menu e hiperlinks criado.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Tarefa T0.3: Configurar Dashboard de Gestão (Intranet) Hermes para Fábrica PROSPERA concluída.",
      "links": []
    },
    {
      "when": "2026-08-08",
      "what": "Dashboard HTML (V3 - Intranet Completa) com Kanban visual, pesquisa e passo a passo detalhado criado.",
      "links": []
    },
    {
      "when": "",
      "what": "**Armazenamento:** Utilize um gerenciador de senhas dedicado (ex: 1Password, LastPass) ou variáveis de ambiente seguras para todas as credenciais.",
      "links": []
    },
    {
      "when": "",
      "what": "**Compartilhamento:** Compartilhe credenciais APENAS por canais seguros e criptografados, e APENAS com as pessoas autorizadas.",
      "links": []
    },
    {
      "when": "",
      "what": "**Comunicação:** Ao comunicar com o Hermes, descreva a necessidade das credenciais (ex: \"preciso configurar a API Key X\"), mas NUNCA cole os valores diretamente no chat ou no dashboard.",
      "links": []
    }
  ],
  "logNote": "Manuseio Seguro de Credenciais e Informações Sensíveis! ATENÇÃO: Este dashboard e o Hermes Agent NÃO são sistemas seguros para armazenar logins, senhas, chaves de API ou outras credenciais sensíveis. **Armazenamento:** Utilize um gerenciador de senhas dedicado (ex: 1Password, LastPass) ou variáveis de ambiente seguras para todas as credenciais. **Compartilhamento:** Compartilhe credenciais APENAS por canais seguros e criptografados, e APENAS com as pessoas autorizadas. **Comunicação:** Ao comunicar com o Hermes, descreva a necessidade das credenciais (ex: \"preciso configurar a API Key X\"), mas NUNCA cole os valores diretamente no chat ou no dashboard. A segurança dos seus dados é primordial. Sigam rigorosamente estas diretrizes."
};
