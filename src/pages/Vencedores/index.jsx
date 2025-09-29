import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import styles from './index.module.css';

// 1. Nossos dados fictícios (mock data)
const vencedoresData = [
  {
    id: 1,
    nome: 'Projeto Alpha',
    categoria: 'Inovação em Tecnologia',
    tipo: 'grande-premio',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    imagem: 'https://via.placeholder.com/400x200?text=Grande+Prêmio',
  },
  {
    id: 2,
    nome: 'Iniciativa Beta',
    categoria: 'Sustentabilidade',
    tipo: 'mencao-honrosa',
    descricao: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
    imagem: 'https://via.placeholder.com/400x200?text=Menção+Honrosa',
  },
  {
    id: 3,
    nome: 'Solução Gamma',
    categoria: 'Impacto Social',
    tipo: 'mencao-honrosa',
    descricao: 'Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
    imagem: 'https://via.placeholder.com/400x200?text=Menção+Honrosa',
  },
  {
    id: 4,
    nome: 'Plataforma Delta',
    categoria: 'Educação Digital',
    tipo: 'mencao-honrosa',
    descricao: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    imagem: 'https://via.placeholder.com/400x200?text=Menção+Honrosa',
  },
    {
    id: 5,
    nome: 'Produto Epsilon',
    categoria: 'Saúde e Bem-estar',
    tipo: 'mencao-honrosa',
    descricao: 'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.',
    imagem: 'https://via.placeholder.com/400x200?text=Menção+Honrosa',
  },
  {
    id: 6,
    nome: 'Serviço Zeta',
    categoria: 'Inovação em Serviços',
    tipo: 'mencao-honrosa',
    descricao: 'Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.',
    imagem: 'https://via.placeholder.com/400x200?text=Menção+Honrosa',
  }
];

const Vencedores = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Vencedores
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Conheça os projetos e as mentes brilhantes que foram reconhecidos nesta edição do Prêmio Infosfera.
      </Typography>
      
      {/* 2. Usando o Grid para organizar os cards */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {vencedoresData.map((vencedor) => (
          // Cada card ocupará 4 de 12 colunas em telas médias, ou 12/12 em telas pequenas
          <Grid item key={vencedor.id} xs={12} sm={6} md={4}>
            {/* 3. Lógica para aplicar estilo condicional */}
            <Card className={`${styles.card} ${vencedor.tipo === 'grande-premio' ? styles.grandePremio : styles.mencaoHonrosa}`}>
              <CardMedia
                component="img"
                height="140"
                image={vencedor.imagem}
                alt={`Imagem do ${vencedor.nome}`}
              />
              <CardContent>
                {/* 4. Badge para destacar o Grande Prêmio */}
                {vencedor.tipo === 'grande-premio' && (
                  <Box className={styles.badge}>
                    <Typography variant="caption">🏆 Grande Prêmio</Typography>
                  </Box>
                )}
                <Typography gutterBottom variant="h5" component="div">
                  {vencedor.nome}
                </Typography>
                <Typography variant="body1" color="text.primary" sx={{ mb: 1.5 }}>
                  {vencedor.categoria}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {vencedor.descricao}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Vencedores;