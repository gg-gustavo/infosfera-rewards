import { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import styles from './index.module.css';
import bannerImage from '../../assets/banner2.png';

// Importando as fotos dos vencedores
const vencedoresImages = Object.values(
  import.meta.glob('../../assets/vencedores/*.png', { 
    eager: true, 
    query: '?url', 
    import: 'default' 
  })
);

const Vencedores = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Dados dos vencedores
  const vencedores = [
    {
      nome: 'Nome do Vencedor A',
      cargo: 'Cargo/Instituição A',
      premio: 'Grande Prêmio',
      isGrandePremio: true,
      foto: vencedoresImages[0]
    },
    {
      nome: 'Nome do Vencedor B',
      cargo: 'Cargo/Instituição B',
      premio: 'Prêmio B',
      isGrandePremio: false,
      foto: vencedoresImages[1]
    },
    {
      nome: 'Nome do Vencedor C',
      cargo: 'Cargo/Instituição C',
      premio: 'Prêmio C',
      isGrandePremio: false,
      foto: vencedoresImages[2]
    },
    {
      nome: 'Nome do Vencedor D',
      cargo: 'Cargo/Instituição D',
      premio: 'Prêmio D',
      isGrandePremio: false,
      foto: vencedoresImages[3]
    },
    {
      nome: 'Nome do Vencedor E',
      cargo: 'Cargo/Instituição E',
      premio: 'Prêmio E',
      isGrandePremio: false,
      foto: vencedoresImages[4]
    },
    {
      nome: 'Nome do Vencedor F',
      cargo: 'Cargo/Instituição F',
      premio: 'Prêmio F',
      isGrandePremio: false,
      foto: vencedoresImages[5]
    },
    {
      nome: 'Nome do Vencedor G',
      cargo: 'Cargo/Instituição G',
      premio: 'Prêmio G',
      isGrandePremio: false,
      foto: vencedoresImages[6]
    },
    {
      nome: 'Nome do Vencedor H',
      cargo: 'Cargo/Instituição H',
      premio: 'Prêmio H',
      isGrandePremio: false,
      foto: vencedoresImages[7]
    }
  ];

  return (
    <Box className={styles.vencedoresPage}>
      {/* Banner */}
      <Box 
        className={styles.heroBanner} 
        style={{ backgroundImage: `url(${bannerImage})` }} 
      />

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

          {/* Grande Prêmio - Destaque */}
          {vencedores
            .filter((v) => v.isGrandePremio)
            .map((vencedor, index) => (
              <Card
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-id={`vencedor-${index}`}
                className={`${styles.grandePremioCard} ${
                  visibleCards.has(`vencedor-${index}`) ? styles.visible : ''
                }`}
              >
                <Box className={styles.grandePremioAccent} />
                <CardContent className={styles.grandePremioContent}>
                  <Box className={styles.grandePremioImageWrapper}>
                    <img
                      src={vencedor.foto}
                      alt={vencedor.nome}
                      className={styles.grandePremioImage}
                    />
                    <Box className={styles.trophyBadge}>
                      <EmojiEventsIcon sx={{ fontSize: 40 }} />
                    </Box>
                  </Box>
                  <Box className={styles.grandePremioInfo}>
                    <Box className={styles.premioLabel}>
                      <EmojiEventsIcon sx={{ mr: 1 }} />
                      <Typography variant="h5" className={styles.premioText}>
                        {vencedor.premio}
                      </Typography>
                    </Box>
                    <Typography variant="h3" className={styles.vencedorNome}>
                      {vencedor.nome}
                    </Typography>
                    <Typography className={styles.vencedorCargo}>
                      {vencedor.cargo}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}

          {/* Demais Vencedores */}
          <Grid container spacing={3} columns={{xs : 1, sm: 2,  md : 3}}>
            {vencedores
              .filter((v) => !v.isGrandePremio)
              .map((vencedor, index) => {
                const cardIndex = index + 1; // +1 porque o grande prêmio é o 0
                return (
                  <Grid size={{xs : 1, sm: 1, md : 1}} key={cardIndex}>
                    <Card
                      ref={(el) => (cardRefs.current[cardIndex] = el)}
                      data-id={`vencedor-${cardIndex}`}
                      className={`${styles.vencedorCard} ${
                        visibleCards.has(`vencedor-${cardIndex}`)
                          ? styles.visible
                          : ''
                      }`}
                    >
                      <CardContent className={styles.vencedorCardContent}>
                        <Box className={styles.imageWrapper}>
                          <img
                            src={vencedor.foto}
                            alt={vencedor.nome}
                            className={styles.vencedorImage}
                          />
                        </Box>
                        <Box className={styles.vencedorDetails}>
                          <Typography className={styles.premioTag}>
                            {vencedor.premio}
                          </Typography>
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
                );
              })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Vencedores;