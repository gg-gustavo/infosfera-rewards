import { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import CtaVerde from '../../components/CtaVerde';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

import styles from './index.module.css';
import bannerImage from '../../assets/banner.jpeg';

// Fotos dos premiados 2025
import fotoRJ        from '../../assets/premiados/PREFEITURA DO RJ.JPG';
import fotoPinhais   from '../../assets/premiados/PREFEITURA DE PINHAIS.JPG';
import fotoSenado    from '../../assets/premiados/SENADO FEDERAL.JPG';
import fotoMPFMA     from '../../assets/premiados/MPF MA.JPG';
import fotoPremiados from '../../assets/premiados/PREMIADOS.JPG';
import fotoTRERN     from '../../assets/premiados/TRE-RN.JPG';
import fotoSantana   from '../../assets/premiados/PREFEITURA DE SANTANA DO LIVRAMENTO.JPG';
import fotoCampoLargo from '../../assets/premiados/PREFEITURA DE CAMPO LARGO.JPG';
import fotoMGI       from '../../assets/premiados/MGI - Painel ID.JPG';
import fotoTRESP     from '../../assets/premiados/TRE - SP.JPG';
import fotoTRESP1    from '../../assets/premiados/TRE - SP1.JPG';
import fotoTREGO     from '../../assets/premiados/TRE - GO.JPG';
import fotoTCEPR     from '../../assets/premiados/TCE - PR.JPG';

const FotoPremio = ({ src, alt }) => (
  <Box sx={{ width: '100%', mb: 3, borderRadius: '16px', overflow: 'hidden', lineHeight: 0 }}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', objectPosition: 'center 25%', display: 'block' }}
    />
  </Box>
);

const CategoriaHeader = ({ titulo, descricao }) => (
  <Box className={styles.categoryHeader}>
    <Box className={styles.categoryTitleWrapper}>
      <EmojiEventsOutlinedIcon className={styles.categoryIcon} />
      <Typography variant="h4" className={styles.categoryTitle}>
        {titulo}
      </Typography>
    </Box>
    <Typography className={styles.categoryDescription}>
      {descricao}
    </Typography>
  </Box>
);

const Vencedores = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  // Agrupa todos os refs em um único array para o IntersectionObserver
  const registerRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.dataset.id;
            setVisibleCards((prev) => new Set(prev).add(cardId));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const unobservedRefs = cardRefs.current.filter(
      (ref) => ref && !visibleCards.has(ref.dataset.id)
    );
  
    unobservedRefs.forEach((card) => {
      if (card) observer.observe(card);
    });
  
    return () => observer.disconnect();
  }, [visibleCards]);

const categorias = {
    grandePremio: {
      titulo: 'Grande Prêmio',
      descricao: 'Descrição do grande prêmio.',
      vencedores: [
        { 
          nomes: 'Transparência orientada por evidências: A evolução do Portal da Transparência Rio a partir de avaliações de desempenho', 
          projeto: 'Kelly Ferreira Esch, Laura Fantti Davilla Serpa, Láisa Pontes Teixeira Lisboa Martins, Fernanda de Lima Pérez', 
          vinculo: 'Prefeitura da Cidade do Rio de Janeiro' 
        }
      ]
    },
    boasPraticas: {
      titulo: 'Referência em Boas Práticas',
      descricao: 'Descrição do prêmio de boas práticas.',
      vencedores: [
        {
          nomes: 'Normas.leg.br',
          projeto: 'João Alberto de Oliveira Lima',
          vinculo: 'Senado Federal',
          foto: fotoSenado,
        },
        {
          nomes: 'Investigação a partir de sistemas de informações das emendas parlamentares de saúde destinadas aos municípios maranhenses',
          projeto: 'Juraci Guimarães Junior',
          vinculo: 'Ministério Público Federal do Maranhão',
          foto: fotoMPFMA,
        }
      ]
    },
    destaqueParana: {
      titulo: 'Destaque Paraná',
      descricao: 'Descrição do prêmio Destaque Paraná.',
      vencedores: [
        { 
          nomes: 'Compartilhamento de Dados Interinstitucionais como Estratégia de Compliance Fiscal Cooperativo', 
          projeto: 'Ricardo Shigueru Fujiwara, Denis Offmann, Givanildo dos Santos Lima, Fabrício Aparecido Gonçalves, Maristela de Oliveira Rivabem', 
          vinculo: 'Prefeitura Municipal de Pinhais/PR, Departamento de Rendas Mobiliárias da Secretaria Municipal de Planejamento, Finanças e Orçamento' 
        }
      ]
    },
    mencoesHonrosas: {
      titulo: 'Menções Honrosas',
      descricao: 'Descrição para as menções honrosas.',
      vencedores: [
        { nomes: 'Projeto - TRE-RN Simples Assim: Justiça para Você!', projeto: 'Andréa Carla Guedes Toscano Campos', vinculo: 'Tribunal Regional Eleitoral do Rio Grande do Norte', foto: fotoTRERN },
        { nomes: 'NEM: Núcleo de Estatística Municipal', projeto: 'Rafael Damasceno de Camargo, Bianca Borger Lussani, Felipe Gomes Madruga', vinculo: 'Prefeitura Municipal de Sant\'Ana do Livramento/RS', foto: fotoSantana },
        { nomes: 'Muralha Digital - CIOSP (Centro Integrado de Operações de Segurança Pública)', projeto: 'Fabiano Arruda Bianchinho', vinculo: 'Prefeitura Municipal de Campo Largo/PR', foto: fotoCampoLargo },
        { nomes: 'Painel ID: Dados, um caminho para a cidadania', projeto: 'Hudson Vinicius Mesquita, Simone Cabanelas Martinez, Thiara dos Santos Alves, Bianca Izumi Maeda, Beatriz Aleixo Bezerra de Sales', vinculo: 'Secretaria de Governo Digital / Ministério da Gestão e da Inovação em Serviços Públicos', foto: fotoMGI },
        { nomes: 'Inovação e Gestão no Poder Judiciário: Uma Abordagem Empírica com Inteligência Artificial Generativa para Otimização e Gestão de Riscos de Processos', projeto: 'Luís Felipe de Oliveira Reis', vinculo: 'Tribunal Regional Eleitoral de São Paulo', foto: fotoTRESP },
        { nomes: 'Boas Práticas na Gestão de Grupo de Trabalho Remoto para Análise de Processos Judiciais Antigos no TRE Goiás', projeto: 'Vitor Carneiro Ramos, Patrick Letouze, José Carlos Lucio Maia, Ilana Murici Ayres, Rodrigo de Melo Brustolin', vinculo: 'Tribunal Regional Eleitoral de Goiás', foto: fotoTREGO },
        { nomes: 'Painel e Indicador de Maturidade do Plano Plurianual das Entidades Municipais do Estado do Paraná', projeto: 'Robson Fernandes Soares, Rafael Morais Gonçalves Ayres, Fabio Junior Damacena, Douglas Nascimento de Oliveira, Vinicius Garcia Pimenta', vinculo: 'Tribunal de Contas do Estado do Paraná', foto: fotoTCEPR },
      ]
    }
  };

  return (
    <Box className={styles.vencedoresPage}>
      <Box className={styles.heroBanner} style={{ backgroundImage: `url(${bannerImage})` }}>
        <Box className={styles.heroOverlay} />
        <Box className={`${styles.contentContainer} ${styles.heroContentWrapper}`}>
          <Box className={styles.heroContent}>
            <Box className={styles.heroTextBlock}>
              <Typography className={styles.heroTitlePart1}>
                Vencedores
              </Typography>
              <Typography className={styles.heroDescription}>
                Projetos que se destacaram por sua originalidade, impacto e capacidade de transformação.
              </Typography>
            </Box>
            <Box className={styles.heroDivider} />
          </Box>
        </Box>
      </Box>

      <Box className={styles.section}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>
              Vencedores do Prêmio Infosfera 2025
            </Typography>
            <Box className={styles.titleUnderline} />
            <Typography className={styles.sectionSubtitle}>
              Celebramos os profissionais e instituições que estão transformando 
              a gestão da informação pública através da inovação e excelência.
            </Typography>
          </Box>

          {/* ===== SEÇÃO GRANDE PRÊMIO ===== */}
          <CategoriaHeader titulo={categorias.grandePremio.titulo} />
          <FotoPremio src={fotoRJ} alt="Equipe vencedora do Grande Prêmio Infosfera 2025 — Prefeitura do Rio de Janeiro" />
          {categorias.grandePremio.vencedores.map((vencedor, index) => (
            <Card
              key={`gp-${index}`}
              ref={registerRef}
              data-id={`gp-${index}`}
              className={`${styles.grandePremioCard} ${visibleCards.has(`gp-${index}`) ? styles.visible : ''}`}
            >
              <CardContent className={styles.grandePremioContent}>
                <Box className={styles.grandePremioInfo}>
                  <Typography variant="h4" className={styles.vencedorNomes}>
                    {vencedor.nomes}
                  </Typography>
                  <Typography className={styles.vencedorProjeto}>
                    {vencedor.projeto}
                  </Typography>
                  <Typography className={styles.vencedorVinculo}>
                    {vencedor.vinculo}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}

          {/* ===== SEÇÃO REFERÊNCIA EM BOAS PRÁTICAS ===== */}
          <CategoriaHeader titulo={categorias.boasPraticas.titulo} />
          <FotoPremio src={fotoPremiados} alt="Premiados Prêmio Infosfera 2025 — cerimônia de premiação" />
          <Grid container spacing={4}>
            {categorias.boasPraticas.vencedores.map((vencedor, index) => (
              <Grid size={{xs: 12 , md : 6}} key={`bp-${index}`}>
                <Card
                  ref={registerRef}
                  data-id={`bp-${index}`}
                  className={`${styles.vencedorCard} ${visibleCards.has(`bp-${index}`) ? styles.visible : ''}`}
                >
                  {vencedor.foto && (
                    <Box sx={{ lineHeight: 0, overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                      <img
                        src={vencedor.foto}
                        alt={`${vencedor.vinculo} — Referência em Boas Práticas 2025`}
                        loading="lazy"
                        style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
                      />
                    </Box>
                  )}
                  <CardContent className={styles.vencedorCardContent}>
                    <Box className={styles.vencedorDetails}>
                      <Typography variant="h6" className={styles.nomes}>{vencedor.nomes}</Typography>
                      <Typography className={styles.projeto}>{vencedor.projeto}</Typography>
                      <Typography className={styles.vinculo}>{vencedor.vinculo}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* ===== SEÇÃO DESTAQUE PARANÁ ===== */}
          <CategoriaHeader titulo={categorias.destaqueParana.titulo} />
          <FotoPremio src={fotoPinhais} alt="Equipe vencedora — Prefeitura de Pinhais/PR, Destaque Paraná 2025" />
          {categorias.destaqueParana.vencedores.map((vencedor, index) => (
             <Card
              key={`dp-${index}`}
              ref={registerRef}
              data-id={`dp-${index}`}
              className={`${styles.grandePremioCard} ${visibleCards.has(`dp-${index}`) ? styles.visible : ''}`}
            >
              <CardContent className={styles.grandePremioContent}>
                <Box className={styles.grandePremioInfo}>
                  <Typography variant="h4" className={styles.vencedorNomes}>
                    {vencedor.nomes}
                  </Typography>
                  <Typography className={styles.vencedorProjeto}>
                    {vencedor.projeto}
                  </Typography>
                   <Typography className={styles.vencedorVinculo}>
                    {vencedor.vinculo}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}

          {/* ===== SEÇÃO MENÇÕES HONROSAS ===== */}
          <CategoriaHeader titulo={categorias.mencoesHonrosas.titulo} />
          <FotoPremio src={fotoPremiados} alt="Práticas finalistas premiadas com Menção Honrosa — Prêmio Infosfera 2025" />
          <Grid container spacing={3} columns={{ xs: 1, md: 2 }}>
            {categorias.mencoesHonrosas.vencedores.map((vencedor, index) => (
              <Grid size={{ xs: 1, md: 1 }} key={`mh-${index}`}>
                <Card
                  ref={registerRef}
                  data-id={`mh-${index}`}
                  className={`${styles.vencedorCard} ${visibleCards.has(`mh-${index}`) ? styles.visible : ''}`}
                >
                  {vencedor.foto && (
                    <Box sx={{ lineHeight: 0, overflow: 'hidden', borderRadius: '20px 20px 0 0' }}>
                      <img
                        src={vencedor.foto}
                        alt={`${vencedor.vinculo} — Menção Honrosa Prêmio Infosfera 2025`}
                        loading="lazy"
                        style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
                      />
                    </Box>
                  )}
                  <CardContent className={styles.vencedorCardContent}>
                    <Box className={styles.vencedorDetails}>
                      <Typography variant="h6" className={styles.nomes}>{vencedor.nomes}</Typography>
                      <Typography className={styles.projeto}>{vencedor.projeto}</Typography>
                      <Typography className={styles.vinculo}>{vencedor.vinculo}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
      
      <CtaVerde />
    </Box>
  );
};

export default Vencedores;