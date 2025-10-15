import { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grid, Card, CardContent, Stack } from '@mui/material';

// Ícones para as seções existentes (intocados)
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Ícones para a seção de Temáticas
import PolicyIcon from '@mui/icons-material/Policy';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VpnlockIcon from '@mui/icons-material/VpnLock';
import MemoryIcon from '@mui/icons-material/Memory';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SwitchAccessShortcutIcon from '@mui/icons-material/SwitchAccessShortcut';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';


import styles from './index.module.css';
import bannerImage from '../../assets/banner.jpeg';

// Logos (código original mantido)
const realizacaoLogos = Object.values(import.meta.glob('../../assets/realizacao/*.jpg', { eager: true, query: '?url', import: 'default' }));
const apoioLogos = Object.values(import.meta.glob('../../assets/apoio/*.jpg', { eager: true, query: '?url', import: 'default' }));

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardId = entry.target.dataset.id;
          setVisibleCards((prev) => new Set(prev).add(cardId));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cardRefs.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  // Dados originais mantidos
  const cardCategories = [
    { icon: CorporateFareIcon, title: 'Instituições Públicas', desc: 'Órgãos e entidades da administração pública que implementaram práticas inovadoras.' },
    { icon: SchoolIcon, title: 'Academia e Pesquisa', desc: 'Pesquisadores e grupos acadêmicos com estudos de impacto na gestão da informação.' },
    { icon: TrendingUpIcon, title: 'Iniciativas de Destaque', desc: 'Projetos individuais ou de equipes que demonstraram resultados excepcionais e replicáveis.' }
  ];
  const checkItems = [
    { title: 'Relevância e Originalidade:', text: 'A importância e a inovação do projeto para a gestão pública.' },
    { title: 'Impacto e Resultados:', text: 'A comprovação dos resultados obtidos por meio de indicadores claros.' },
    { title: 'Replicabilidade e Sustentabilidade:', text: 'A capacidade da prática ser adotada em outros contextos.' }
  ];
  
  const tematicas = [
    { title: 'Transparência Digital', icon: <PolicyIcon fontSize="large" /> },
    { title: 'Governança Eletrônica', icon: <AccountBalanceIcon fontSize="large" /> },
    { title: 'Segurança Cibernética', icon: <VpnlockIcon fontSize="large" /> },
    { title: 'Preservação da Memória', icon: <MemoryIcon fontSize="large" /> },
    { title: 'Inteligência de Dados', icon: <StackedBarChartIcon fontSize="large" /> },
    { title: 'Inclusão Digital', icon: <WheelchairPickupIcon fontSize="large" /> },
    { title: 'Interoperabilidade', icon: <ScreenRotationAltIcon fontSize="large" /> },
    { title: 'Gestão do Conhecimento', icon: <PsychologyAltIcon fontSize="large" /> },
    { title: 'Compliance Digital', icon: <AssuredWorkloadIcon fontSize="large" /> },
    { title: 'Inovação em Serviços', icon: <SwitchAccessShortcutIcon fontSize="large" /> },
    { title: 'Curadoria Digital', icon: <AdUnitsIcon fontSize="large" /> },
    { title: 'Transformação Digital', icon: <AppShortcutIcon fontSize="large" /> },
  ];

  return (
    <Box className={styles.homePage}>
      <Box className={styles.heroBanner} style={{ backgroundImage: `url(${bannerImage})` }}>
        <Box className={styles.heroOverlay} />
        <Box className={`${styles.contentContainer} ${styles.heroContentWrapper}`}>
          <Box className={styles.heroContent}>
            <Box className={styles.heroTextBlock}>
              <Typography className={styles.heroTitlePart1}>
                Prêmio
              </Typography>
              <Typography className={styles.heroTitlePart2}>
                Boas Práticas em Gestão da Informação na Esfera Pública
              </Typography>
              <Typography className={styles.heroDescription}>
                Uma iniciativa que busca identificar, valorizar e dar visibilidade a projetos que se destacam pela originalidade, impacto e capacidade de transformação.
              </Typography>
            </Box>
            <Box className={styles.heroDivider} />
          </Box>
        </Box>
      </Box>


      <Box className={styles.section}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Sobre o Prêmio</Typography>
            <Box className={styles.titleUnderline} />
          </Box>
          <Grid container spacing={2} columns={{xs : 1 , md :4}}>
            <Grid size={{xs: 1, md: 2}}>
              <Card ref={(el) => (cardRefs.current[0] = el)} data-id="card-1" className={`${styles.infoCard} ${visibleCards.has('card-1') ? styles.visible : ''}`}>
                <Box className={styles.cardAccentBar} />
                <CardContent>
                  <Box className={styles.cardHeader}>
                    <Box className={`${styles.cardIconWrapper} ${styles.iconPrimary}`}><StarBorderIcon fontSize="large" /></Box>
                    <Typography variant="h3" className={styles.cardTitle}>O Reconhecimento</Typography>
                  </Box>
                  <Typography><strong>O Prêmio Infosfera é uma homenagem ao esforço e à inovação.</strong></Typography>
                  <Typography>Em sua primeira edição, celebramos profissionais, equipes e instituições que estão redefinindo a gestão da informação na esfera pública através de soluções criativas e eficazes.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{xs: 1, md: 2}}>
              <Card ref={(el) => (cardRefs.current[1] = el)} data-id="card-2" className={`${styles.infoCard} ${visibleCards.has('card-2') ? styles.visible : ''}`}>
                <Box className={`${styles.cardAccentBar} ${styles.accentSecondary}`} />
                <CardContent>
                  <Box className={styles.cardHeader}>
                    <Box className={`${styles.cardIconWrapper} ${styles.iconSecondary}`}><LightbulbOutlinedIcon fontSize="large" /></Box>
                    <Typography variant="h3" className={styles.cardTitle}>A Missão</Typography>
                  </Box>
                  <Typography><strong>Nossa missão é ser uma vitrine de inovação para todo o setor.</strong></Typography>
                  <Typography>Através de um rigoroso processo de avaliação, queremos destacar práticas que não só alcançam resultados concretos, mas que também inspiram e podem ser replicadas.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Quem Pode Participar</Typography>
            <Box className={styles.titleUnderline} />
            <Typography className={styles.sectionSubtitle}>O prêmio está aberto a todos que estão fazendo a diferença na gestão da informação pública.</Typography>
          </Box>
          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            {cardCategories.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid key={index} sx={{ width: '100%' }}>
                  <Card ref={(el) => (cardRefs.current[2 + index] = el)} data-id={`cat-${index}`} className={`${styles.categoryCard} ${visibleCards.has(`cat-${index}`) ? styles.visible : ''}`}>
                    <CardContent>
                      <Box className={styles.categoryIconWrapper}><Icon fontSize="large" /></Box>
                      <Typography variant="h5" component="h3" className={styles.categoryTitle}>{item.title}</Typography>
                      <Typography>{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Stack>
        </Box>
      </Box>

      <Box className={styles.section}>
        <Box className={styles.contentContainer}>
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            <Grid>
              <Card ref={(el) => (cardRefs.current[5] = el)} data-id="info-card" className={`${styles.infoCard} ${styles.fullHeightCard} ${visibleCards.has('info-card') ? styles.visible : ''}`}>
                <Box className={styles.cardAccentBar} />
                <CardContent>
                  <Typography variant="h3" className={styles.cardTitle}>Critérios de Avaliação</Typography>
                  <Typography variant='p' sx={{ mt: 2 }}>Para garantir uma seleção justa e criteriosa, nossos avaliadores se basearão nos seguintes pilares:</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mt: 2 }}>
                    {checkItems.map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <CheckCircleOutlineIcon color="primary" sx={{ mr: 1.5, mt: '3px', flexShrink: 0 }} />
                        <Typography><strong>{item.title}</strong> {item.text}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid>
              <Card ref={(el) => (cardRefs.current[6] = el)} data-id="highlight-card" className={`${styles.highlightCard} ${styles.fullHeightCard} ${visibleCards.has('highlight-card') ? styles.visible : ''}`}>
                <CardContent>
                  <EmojiEventsOutlinedIcon sx={{ fontSize: 80, mb: 2 }} />
                  <Typography variant="h4" component="h3">A Premiação</Typography>
                  <Typography sx={{ mt: 1 }}>A cerimônia de reconhecimento acontecerá durante a Sessão Solene do <strong>Infosfera 2025</strong>.</Typography>
                  <Typography variant="h5" component="p" fontWeight="bold" sx={{ mt: 2 }}>21 de outubro de 2025</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ===== SEÇÃO "TEMÁTICAS ELEGÍVEIS" COM AS NOVAS CLASSES APLICADAS ===== */}
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Temáticas Elegíveis</Typography>
            <Typography variant="body1" className={styles.sectionSubtitle}>Iniciativas relacionadas aos seguintes temas podem ser submetidas para avaliação:</Typography>
          </Box>
          <Grid container spacing={4} columns={{xs : 2 ,md:12}}>
            {tematicas.map((item, index) => (
              <Grid size={{xs:1 , md : 3}} key={item.title}> 
                <Card 
                  ref={(el) => (cardRefs.current[7 + index] = el)} 
                  data-id={`tematica-${item.title.replace(/\s+/g, '-')}`}
                  // APLICANDO AS NOVAS CLASSES AQUI
                  className={`${styles.categoryCard} ${styles.themeCard} ${visibleCards.has(`tematica-${item.title.replace(/\s+/g, '-')}`) ? styles.visible : ''}`}
                >
                    <Box className={styles.categoryIconWrapper} sx={{display:"flex",justifyContent:"center"}}>{item.icon}</Box>
                    {/* APLICANDO A NOVA CLASSE DE TÍTULO AQUI */}
                    <Typography variant="h6" className={styles.themeCardTitle}>
                      {item.title}
                    </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box className={styles.section}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Realização</Typography>
          </Box>
          <Grid container spacing={4} columns={{ xs: 1, md: 4 }} className={styles.logoGridContainer}>
            {realizacaoLogos.map((logo, index) => (
              <Grid size={{ xs: 1, md: 1 }} key={index}>
                <Box className={styles.logoWrapper}>
                  <img src={logo} alt={`Logo Realização ${index + 1}`} className={styles.logoImage} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>Apoio</Typography>
          </Box>
          <Grid container spacing={1} columns={{ xs: 12, sm: 12, md: 12 }} className={styles.logoGridContainer}>
            {apoioLogos.map((logo, index) => (
              <Grid spacing={1} size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box className={styles.logoWrapper}>
                  <img src={logo} alt={`Logo Apoio ${index + 1}`} className={styles.logoImage} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;