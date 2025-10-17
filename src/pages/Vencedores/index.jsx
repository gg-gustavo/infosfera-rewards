import { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import styles from './index.module.css';
import bannerImage from '../../assets/banner.jpeg';

const vencedoresImages = Object.values(
  import.meta.glob('../../assets/vencedores/*.png', { 
    eager: true, 
    query: '?url', 
    import: 'default' 
  })
);

// Componente reutilizável para o cabeçalho de cada seção
const CategoriaHeader = ({ titulo, descricao }) => (
  <Box className={styles.categoryHeader}>
    <Box className={styles.categoryTitleWrapper}>
      <EmojiEventsIcon className={styles.categoryIcon} />
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
  
    // Filtra para observar apenas os refs que ainda não foram tornados visíveis
    const unobservedRefs = cardRefs.current.filter(
      (ref) => ref && !visibleCards.has(ref.dataset.id)
    );
  
    unobservedRefs.forEach((card) => {
      if (card) observer.observe(card);
    });
  
    return () => observer.disconnect();
  }, [visibleCards]); // Re-executa o efeito quando `visibleCards` muda

// ===== ESTRUTURA DE DADOS COM FOTOS CORRIGIDAS =====
  // Dados agrupados por categoria para facilitar a renderização
  const categorias = {
    grandePremio: {
      titulo: 'Grande Prêmio',
      descricao: 'Descrição do grande prêmio.',
      vencedores: [
        // Foto 1
        { nome: 'Nome do Vencedor A', cargo: 'Vence como destaque com o "Projeto XYZ", descrição....', foto: vencedoresImages[0] }
      ]
    },
    boasPraticas: {
      titulo: 'Referência em Boas Práticas',
      descricao: 'Descrição do prêmio de boas práticas.',
      vencedores: [
        // Foto 2
        { nome: 'Nome do Vencedor B', cargo: 'Vence com o "Projeto XYZ", descrição....', foto: vencedoresImages[1] },
        // Foto 3
        { nome: 'Nome do Vencedor C', cargo: 'Vence com o "Projeto XYZ", descrição....', foto: vencedoresImages[2] }
      ]
    },
    destaqueParana: {
      titulo: 'Destaque Paraná',
      descricao: 'Descrição do prêmio Destaque Paraná.',
      vencedores: [
        // Foto 4
        { nome: 'Nome do Vencedor D', cargo: 'Vence como destaque com o "Projeto XYZ", descrição....', foto: vencedoresImages[3] }
      ]
    },
    mencoesHonrosas: {
      titulo: 'Menções Honrosas',
      descricao: 'Descrição para as menções honrosas.',
      vencedores: [
        // Foto 5
        { nome: 'Nome da Menção Honrosa 1', cargo: 'Vence com o "Projeto XYZ", descrição....', foto: vencedoresImages[4] },
        // Foto 6
        { nome: 'Nome da Menção Honrosa 2', cargo: 'Vence com o "Projeto XYZ", descrição....', foto: vencedoresImages[5] },
        // Foto 7
        { nome: 'Nome da Menção Honrosa 3', cargo: 'Vence com o "Projeto XYZ", descrição....', foto: vencedoresImages[6] },
        // Foto 8
        { nome: 'Nome da Menção Honrosa 4', cargo: 'Vence com o "Projeto XYZ", descrição....', foto: vencedoresImages[7] },
        // Foto 9
        { nome: 'Nome da Menção Honrosa 5', cargo: 'Vence com o "Projeto XYZ", descrição....', foto: vencedoresImages[8] },
        // Foto 10
        { nome: 'Nome da Menção Honrosa 6', cargo: 'Vence com o "Projeto XYZ", descrição....', foto: vencedoresImages[9] },
        // Foto 11
        { nome: 'Nome da Menção Honrosa 7', cargo: 'Vence com o "Projeto XYZ", descrição....', foto: vencedoresImages[10] }
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

      {/* Seção de Vencedores */}
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
          <CategoriaHeader titulo={categorias.grandePremio.titulo} descricao={categorias.grandePremio.descricao} />
          {categorias.grandePremio.vencedores.map((vencedor, index) => (
            <Card
              key={`gp-${index}`}
              ref={registerRef}
              data-id={`gp-${index}`}
              className={`${styles.grandePremioCard} ${visibleCards.has(`gp-${index}`) ? styles.visible : ''}`}
            >
              <CardContent className={styles.grandePremioContent}>
                <Box className={styles.grandePremioImageWrapper}>
                  <img src={vencedor.foto} alt={vencedor.nome} className={styles.grandePremioImage} />
                </Box>
                <Box className={styles.grandePremioInfo}>
                  <Typography variant="h4" className={styles.vencedorNome}>
                    {vencedor.nome}
                  </Typography>
                  <Typography className={styles.vencedorCargo}>
                    {vencedor.cargo}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}

          {/* ===== SEÇÃO REFERÊNCIA EM BOAS PRÁTICAS ===== */}
          <CategoriaHeader titulo={categorias.boasPraticas.titulo} descricao={categorias.boasPraticas.descricao} />
          <Grid container spacing={4}>
            {categorias.boasPraticas.vencedores.map((vencedor, index) => (
              <Grid size={6} key={`bp-${index}`}>
                <Card
                  ref={registerRef}
                  data-id={`bp-${index}`}
                  className={`${styles.vencedorCard} ${visibleCards.has(`bp-${index}`) ? styles.visible : ''}`}
                >
                  <CardContent className={styles.vencedorCardContent}>
                    <Box className={styles.imageWrapper}>
                      <img src={vencedor.foto} alt={vencedor.nome} className={styles.vencedorImage} />
                    </Box>
                    <Box className={styles.vencedorDetails}>
                      <Typography variant="h6" className={styles.nome}>
                        {vencedor.nome}
                      </Typography>
                      <Typography className={styles.cargo}>
                        {vencedor.cargo}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* ===== SEÇÃO DESTAQUE PARANÁ ===== */}
          <CategoriaHeader titulo={categorias.destaqueParana.titulo} descricao={categorias.destaqueParana.descricao} />
          {categorias.destaqueParana.vencedores.map((vencedor, index) => (
             <Card
              key={`dp-${index}`}
              ref={registerRef}
              data-id={`dp-${index}`}
              className={`${styles.grandePremioCard} ${visibleCards.has(`dp-${index}`) ? styles.visible : ''}`} // Reutilizando o estilo do grande prêmio
            >
              <CardContent className={styles.grandePremioContent}>
                <Box className={styles.grandePremioImageWrapper}>
                  <img src={vencedor.foto} alt={vencedor.nome} className={styles.grandePremioImage} />
                </Box>
                <Box className={styles.grandePremioInfo}>
                  <Typography variant="h4" className={styles.vencedorNome}>
                    {vencedor.nome}
                  </Typography>
                  <Typography className={styles.vencedorCargo}>
                    {vencedor.cargo}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}

          {/* ===== SEÇÃO MENÇÕES HONROSAS ===== */}
          <CategoriaHeader titulo={categorias.mencoesHonrosas.titulo} descricao={categorias.mencoesHonrosas.descricao} />
          <Grid container spacing={4}>
            {categorias.mencoesHonrosas.vencedores.map((vencedor, index) => (
              <Grid item key={`mh-${index}`}>
                 <Card
                  ref={registerRef}
                  data-id={`mh-${index}`}
                  className={`${styles.vencedorCard} ${visibleCards.has(`mh-${index}`) ? styles.visible : ''}`}
                >
                  <CardContent className={styles.vencedorCardContent}>
                    <Box className={styles.imageWrapper}>
                      <img src={vencedor.foto} alt={vencedor.nome} className={styles.vencedorImage} />
                    </Box>
                    <Box className={styles.vencedorDetails}>
                      <Typography variant="h6" className={styles.nome}>
                        {vencedor.nome}
                      </Typography>
                      <Typography className={styles.cargo}>
                        {vencedor.cargo}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Box>
      </Box>
    </Box>
  );
};

export default Vencedores;