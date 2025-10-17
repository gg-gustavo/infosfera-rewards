import { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import styles from './index.module.css';
import bannerImage from '../../assets/banner.jpeg';

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
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' }
      ]
    },
    boasPraticas: {
      titulo: 'Referência em Boas Práticas',
      descricao: 'Descrição do prêmio de boas práticas.',
      vencedores: [
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' },
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' }
      ]
    },
    destaqueParana: {
      titulo: 'Destaque Paraná',
      descricao: 'Descrição do prêmio Destaque Paraná.',
      vencedores: [
      { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' }
      ]
    },
    mencoesHonrosas: {
      titulo: 'Menções Honrosas',
      descricao: 'Descrição para as menções honrosas.',
      vencedores: [
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' },
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' },
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' },
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' },
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' },
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' },
        { nomes: 'Nome do Projeto Vencedor', projeto: 'Nomes', vinculo: 'Instituição de Vínculo' },
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

          {/* ===== SEÇÃO GRANDE PRÊMIO (SEM IMAGEM) ===== */}
          <CategoriaHeader titulo={categorias.grandePremio.titulo} />
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

          {/* ===== SEÇÃO REFERÊNCIA EM BOAS PRÁTICAS (SEM IMAGEM) ===== */}
          <CategoriaHeader titulo={categorias.boasPraticas.titulo} />
          <Grid container spacing={4}>
            {categorias.boasPraticas.vencedores.map((vencedor, index) => (
              <Grid size={{xs: 12 , md : 6}} key={`bp-${index}`}>
                <Card
                  ref={registerRef}
                  data-id={`bp-${index}`}
                  className={`${styles.vencedorCard} ${visibleCards.has(`bp-${index}`) ? styles.visible : ''}`}
                >
                  <CardContent className={styles.vencedorCardContent}>
                    <Box className={styles.vencedorDetails}>
                      <Typography variant="h6" className={styles.nomes}>
                        {vencedor.nomes}
                      </Typography>
                       <Typography className={styles.projeto}>
                        {vencedor.projeto}
                      </Typography>
                      <Typography className={styles.vinculo}>
                        {vencedor.vinculo}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* ===== SEÇÃO DESTAQUE PARANÁ (SEM IMAGEM) ===== */}
          <CategoriaHeader titulo={categorias.destaqueParana.titulo} />
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

          {/* ===== SEÇÃO MENÇÕES HONROSAS (SEM IMAGEM) ===== */}
          <CategoriaHeader titulo={categorias.mencoesHonrosas.titulo}  />
          <Grid sx={{width:"100%",justifyContent:"center"}} container spacing={4}>
            {categorias.mencoesHonrosas.vencedores.map((vencedor, index) => (
              <Grid item xs={12} sm={6} md={4} key={`mh-${index}`}>
                 <Card
                  ref={registerRef}
                  data-id={`mh-${index}`}
                  className={`${styles.vencedorCard} ${visibleCards.has(`mh-${index}`) ? styles.visible : ''}`}
                >
                  <CardContent className={styles.vencedorCardContent}>
                    <Box className={styles.vencedorDetails}>
                      <Typography variant="h6" className={styles.nomes}>
                        {vencedor.nomes}
                      </Typography>
                      <Typography className={styles.projeto}>
                        {vencedor.projeto}
                      </Typography>
                      <Typography className={styles.vinculo}>
                        {vencedor.vinculo}
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