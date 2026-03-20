import { Typography, Box } from '@mui/material';
import styles from './index.module.css';

const Regulamento = () => {
  return (
    <Box className={styles.regulamentoPage}>
      {/* Seção Principal */}
      <Box className={styles.section}>
        <Box className={styles.contentContainer}>

          {/* Cabeçalho */}
          <Box className={styles.sectionHeader}>
            <Typography variant="h2" className={styles.sectionTitle}>
              Regulamento
            </Typography>
            <Typography className={styles.sectionSubtitle}>
              Prêmio Infosfera de Boas Práticas em Gestão da Informação na Esfera Pública — Edição 2026
            </Typography>
          </Box>

          {/* Intro institucional */}
          <Box className={styles.introBox}>
            <Typography className={styles.introText}>
              O Núcleo de Pesquisa em Informações, Direito e Sociedade da Universidade Federal do Paraná
              (Infojus.UFPR) e o Laboratório de Riscos, Privacidade, Segurança e Crises da Universidade de
              Brasília (LabRisk/UnB), com o apoio de seus parceiros institucionais, por meio da Comissão
              Executiva do Prêmio Infosfera de Boas Práticas em Gestão da Informação na Esfera Pública,
              doravante denominado <strong>Prêmio Infosfera</strong>, tornam público o regulamento da edição de 2026.
            </Typography>
          </Box>

          {/* ── DISPOSIÇÕES PRELIMINARES ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Disposições Preliminares
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 1º.</span> O Prêmio Infosfera 2026 terá abrangência em todo o território nacional.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 2º.</span> A cerimônia de premiação da edição de 2026 será realizada na cidade de{' '}
                <strong>Goiânia, Goiás</strong>, no mês de novembro, durante o Encontro de Administração da
                Justiça (EnAJUS), em parceria autônoma e independente.
              </Typography>
            </Box>
          </Box>

          {/* ── OBJETIVOS ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Objetivos
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 3º.</span> O Prêmio Infosfera 2026 é uma iniciativa criada com o propósito de disseminar e
                reconhecer solenemente servidores, equipes e entidades responsáveis por aplicar boas práticas
                de gestão da informação, contribuindo para o aprimoramento e modernização da gestão pública.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 4º.</span> São objetivos estratégicos da premiação:
              </Typography>
              <ol className={styles.lista}>
                <li>Identificar práticas em uso de gestão da informação que contribuam para o aprimoramento e modernização da gestão pública;</li>
                <li>Mitigar o isolamento de boas ideias, fomentando uma cultura nacional de compartilhamento;</li>
                <li>Fomentar a replicabilidade de boas práticas;</li>
                <li>Servir de instrumento de reconhecimento nacional e como repositório de memória institucional e técnica de práticas em uso.</li>
              </ol>
            </Box>
          </Box>

          {/* ── ELEGIBILIDADE ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Elegibilidade
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 5º.</span> Poderão participar do Prêmio Infosfera 2026 órgãos e entidades da Administração
                Direta e Indireta, dos Poderes Executivo, Legislativo e Judiciário, bem como das funções
                essenciais à Justiça (Ministério Público, Advocacia Pública e Defensoria Pública), e dos
                sistemas de controle externo (Tribunais de Contas), em todos os níveis federativos — União,
                Estados, Distrito Federal e Municípios — compreendendo autarquias, fundações, empresas
                públicas, sociedades de economia mista e consórcios públicos.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 6º.</span> É vedada a participação de membros do Comitê Executivo ou da Comissão
                Julgadora, bem como de seus parentes de até segundo grau.
              </Typography>
            </Box>
          </Box>

          {/* ── INSCRIÇÕES ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Inscrições
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 7º.</span> A inscrição dar-se-á exclusivamente via{' '}
                <strong>Plataforma Infosfera de Boas Práticas</strong>{' '}
                (<a href="https://boaspraticas.infosfera.inf.br/" target="_blank" rel="noopener noreferrer" className={styles.link}>boaspraticas.infosfera.inf.br</a>)
                até a data limite prevista no cronograma oficial do Prêmio (Anexo 2).
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 1º.</span> Todas as práticas cadastradas na Plataforma estarão automaticamente inscritas no Prêmio Infosfera 2026.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 2º.</span> Não serão aceitas inscrições fora do prazo ou realizadas por qualquer outro meio que não seja a Plataforma Infosfera de Boas Práticas.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 8º.</span> Cada órgão ou entidade poderá cadastrar um número ilimitado de práticas na
                Plataforma Infosfera de Boas Práticas, contudo, apenas as <strong>3 (três) práticas de maior
                pontuação técnica</strong> da respectiva instituição estarão habilitadas para avançar para a fase
                competitiva do Prêmio.
              </Typography>
            </Box>
          </Box>

          {/* ── ADMISSIBILIDADE E TEMÁTICAS ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Admissibilidade ao Prêmio e Temáticas
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 9º.</span> Para concorrer ao Prêmio, as práticas inscritas devem estar obrigatoriamente
                vinculadas a um ou mais dos eixos temáticos indicados no Anexo I.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>Parágrafo único.</span> A lista de temas e subtemas do Anexo I não é exaustiva, podendo ser admitidas submissões em assuntos diversos, desde que aderentes ao propósito geral do Prêmio.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 10.</span> São condições adicionais de admissibilidade de práticas ao Prêmio:
              </Typography>
              <ol className={styles.lista}>
                <li>Apresentar resultados práticos e mensuráveis, sendo admitidos diferentes níveis de maturidade de operação (de piloto a plenamente estabelecidas);</li>
                <li>Possuir status de <strong>Cadastro Ouro</strong> na Plataforma Infosfera de Boas Práticas até a data limite da inscrição, o que se refere à existência de evidências exaustivas que comprovem resultados e o impacto real da prática.</li>
              </ol>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>Parágrafo único.</span> Práticas consideradas meramente conceituais ou em fase inicial de planejamento não serão admissíveis ao Prêmio, visto que a essência da premiação é o reconhecimento das iniciativas aplicadas e comprovadas.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ── COMISSÃO JULGADORA ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Comissão Julgadora
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 11.</span> A Comissão Julgadora será composta por profissionais de notório saber,
                experiência acadêmica ou aplicada nos campos da inovação pública, tecnologia da informação,
                ciência de dados, administração pública ou áreas correlatas, designados por ato do Comitê
                Executivo.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 1º.</span> Para assegurar o equilíbrio e a celeridade nas deliberações, a Comissão terá composição ímpar, variando de 03 (três) a 05 (cinco) membros titulares.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 2º.</span> A atuação na Comissão Julgadora é considerada prestação de serviço público relevante, não sendo remunerada a qualquer título.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 12.</span> As decisões da Comissão Julgadora possuem natureza estritamente técnica e soberana.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>Parágrafo único.</span> Não caberá recurso administrativo quanto ao mérito da avaliação, pontuação ou classificação final das práticas, dada a natureza discricionária e técnica do julgamento.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 13.</span> A atuação dos avaliadores será pautada pelos princípios constitucionais da
                impessoalidade, moralidade e probidade administrativa.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 14.</span> Para garantir a isenção durante o processo de seleção de premiados, é vedada a
                participação de avaliadores que possuam vínculo funcional ou colaborativo com órgãos que
                tenham práticas concorrentes nas categorias sob sua avaliação.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 1º.</span> Caso o avaliador identifique qualquer conflito de interesses, alinhamento prévio ou relação de parentesco com os responsáveis por projeto sob sua análise, deverá declarar-se impedido de imediato.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 2º.</span> O impedimento de um avaliador em determinada prática não o inabilita para a avaliação das demais, desde que não haja contaminação da imparcialidade.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 15.</span> Os membros da Comissão Julgadora obrigam-se a manter o mais estrito sigilo sobre
                todas as informações e documentos a que tiverem acesso durante o processo de avaliação.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 16.</span> São deveres de cautela e confidencialidade dos avaliadores:
              </Typography>
              <ol className={styles.lista}>
                <li>Salvaguardar a integridade das informações recebidas durante o processo de julgamento, impedindo o acesso de terceiros não autorizados;</li>
                <li>Não reproduzir, extrair ou divulgar dados presentes na Plataforma Infosfera de Boas Práticas para finalidades alheias ao escopo da avaliação;</li>
                <li>Abster-se de utilizar informações privilegiadas obtidas durante o certame em benefício próprio ou de outrem;</li>
                <li>Manter o sigilo sobre as notas parciais e deliberações internas até a publicação oficial dos resultados e cerimônia de premiação.</li>
              </ol>
            </Box>
          </Box>

          {/* ── CATEGORIAS DE PREMIAÇÃO ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Categorias de Premiação
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 17.</span> O Prêmio Infosfera 2026 será estruturado por meio de um sistema de distinções de
                mérito, observada a pontuação técnica final e a natureza jurídica do órgão proponente, nas
                seguintes categorias:
              </Typography>
              <ol className={styles.lista}>
                <li><strong>Grande Prêmio Infosfera:</strong> distinção máxima concedida à prática que obtiver a maior pontuação global absoluta no ranking geral, independentemente do eixo temático ou da esfera federativa, sendo considerada a solução de maior impacto e excelência da edição;</li>
                <li><strong>Destaque Regional (Goiás):</strong> distinção outorgada à prática de maior pontuação técnica entre as instituições sediadas no Estado de Goiás, com o objetivo de valorizar a inovação no ente federativo anfitrião do evento;</li>
                <li><strong>Destaque Municipal:</strong> distinção destinada exclusivamente a iniciativas desenvolvidas no âmbito de Prefeituras, Secretarias Municipais ou autarquias municipais, visando reconhecer a capilaridade da inovação no nível local;</li>
                <li><strong>Menções Honrosas:</strong> distinções de reconhecimento técnico atribuídas a até 07 (sete) práticas finalistas que, embora não tenham atingido o topo do ranking global, demonstram mérito excepcional em critérios específicos, tais como criatividade disruptiva, baixo custo de implementação ou superação de desafios tecnológicos complexos.</li>
              </ol>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>Parágrafo único.</span> Vigora o princípio da não cumulatividade, pelo qual uma única prática não poderá ser premiada em mais de uma categoria, devendo prevalecer, quando for o caso, a premiação de maior hierarquia.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ── RECONHECIMENTOS ESPECIAIS ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Reconhecimentos Especiais
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 18.</span> A categoria <strong>Referência em Boa Prática</strong> possui natureza excepcional e atua como
                instrumento de indução estratégica e mapeamento livre pela Comissão Julgadora.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 1º.</span> Esta categoria destina-se a laurear iniciativas de notório impacto nacional ou colaborativo que, embora exemplares, não tenham ingressado via fluxo regular de inscrição na Plataforma.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 2º.</span> A escolha nesta categoria é discricionária da Comissão, baseando-se em mapeamento ativo de mercado, literatura técnica e evidências públicas de sucesso.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 3º.</span> As práticas assim reconhecidas serão convidadas a compor o acervo da Plataforma Infosfera, servindo de modelo de replicabilidade para as demais instituições.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 19.</span> A critério do Comitê Executivo, poderá ser instituída a distinção de{' '}
                <strong>Escolha Popular (Aclamação Pública)</strong>, realizada em ambiente digital oficial após a
                divulgação dos finalistas técnicos.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 1º.</span> A concessão desta distinção é independente das notas técnicas, mas sujeita à homologação da Comissão Julgadora.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 2º.</span> A Comissão reserva-se o direito de invalidar a votação popular de determinada prática caso identifique o uso de mecanismos artificiais (bots), impulsionamento pago ou condutas que firam a ética do processo de premiação.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 3º.</span> Esta é a única categoria passível de acúmulo com as demais previstas neste Regulamento.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ── CRITÉRIOS DE JULGAMENTO ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Critérios de Julgamento
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 20.</span> A avaliação será baseada nos seguintes critérios e pesos:
              </Typography>

              <Box className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Critério</th>
                      <th>Descrição</th>
                      <th className={styles.pesoCol}>Peso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Relevância e Qualidade Técnica</strong></td>
                      <td>Avalia a pertinência da solução frente aos problemas identificados e a robustez metodológica da prática. Analisa-se o alinhamento da iniciativa com os eixos temáticos do Prêmio, a coerência entre os objetivos propostos e os meios utilizados, o grau de inovação em relação aos processos tradicionais da gestão pública e a conformidade técnica da solução com padrões éticos e normativos.</td>
                      <td className={styles.pesoCol}><span className={styles.pesoBadge}>3,5</span></td>
                    </tr>
                    <tr>
                      <td><strong>Impacto e Resultados</strong></td>
                      <td>Avalia a eficácia da prática e os benefícios gerados para a administração e para o cidadão. Analisa-se, com base em comprovação documental do impacto gerado, a entrega de valor público por meio de indicadores ou evidências de desempenho, ganhos de eficiência (redução de tempo, custos ou burocracia), melhoria na qualidade dos serviços prestados, entre outros.</td>
                      <td className={styles.pesoCol}><span className={`${styles.pesoBadge} ${styles.pesoBadgeDestaque}`}>4,0</span></td>
                    </tr>
                    <tr>
                      <td><strong>Replicabilidade e Sustentabilidade</strong></td>
                      <td>Avalia o potencial de escala e a continuidade da iniciativa no tempo. Analisa-se a capacidade de a prática ser transferida ou adaptada para outros órgãos ou contextos federativos, bem como a sua viabilidade financeira, técnica e institucional a longo prazo, observando se a iniciativa possui governança estabelecida que garanta sua manutenção além do ciclo de seus idealizadores.</td>
                      <td className={styles.pesoCol}><span className={styles.pesoBadge}>3,0</span></td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 21.</span> No caso de empate na pontuação final, o desempate será realizado de forma
                sucessiva, em favor da prática que obtiver a maior nota nos critérios de maior peso.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>Parágrafo único.</span> Persistindo o empate, a decisão caberá soberanamente ao Comitê Executivo, mediante análise do histórico da prática e do tempo de implementação.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ── ETAPAS ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Etapas
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 22.</span> O processo de seleção dos premiados observará o seguinte rito procedimental, de
                caráter sucessivo e eliminatório:
              </Typography>
              <ol className={styles.lista}>
                <li><strong>Fase de Admissibilidade:</strong> Verificação técnica pela equipe de curadoria da Plataforma para confirmar se a prática atingiu o cadastro Status Ouro, mediante o preenchimento de campos e anexação de evidências.</li>
                <li><strong>Validação de Interesse:</strong> Comunicação oficial para que as práticas com status Ouro confirmem, em prazo definido em cronograma, o interesse em participar da etapa competitiva do Prêmio Infosfera 2026.</li>
                <li><strong>Avaliação de Mérito:</strong> Avaliação por parte da Comissão Julgadora, atribuição de notas conforme os critérios previstos neste Regulamento e divulgação das práticas finalistas.</li>
                <li><strong>Aclamação Pública:</strong> Participação em votação pública (conforme o Art. 19).</li>
                <li><strong>Apresentação e Cerimônia de Premiação:</strong> Participação das práticas finalistas em atividades presenciais de premiação.</li>
              </ol>
            </Box>
          </Box>

          {/* ── RESULTADOS E PREMIAÇÃO ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Resultados e Premiação
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 23.</span> A lista oficial de finalistas será divulgada nos canais da Plataforma Infosfera até o
                prazo estabelecido no cronograma oficial.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>Parágrafo único.</span> A comunicação oficial aos finalistas servirá como convocação formal para a participação nas atividades presenciais de premiação em Goiânia/GO.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 24.</span> A concessão do prêmio e a entrega das honrarias estão condicionadas ao
                cumprimento integral das seguintes obrigações por parte do órgão ou entidade finalista:
              </Typography>
              <ol className={styles.lista}>
                <li><strong>Presença Institucional:</strong> Estar presente na cerimônia em Goiânia, na data designada no mês de novembro de 2026, representado por autor(es) da prática ou representante legal formalmente constituído;</li>
                <li><strong>Difusão de Conhecimento:</strong> Realizar a apresentação técnica da prática (exposição oral ou demonstração) na "Sessão de Boas Práticas" do evento, conforme orientações de tempo e formato a serem enviadas oportunamente;</li>
                <li><strong>Protocolo Solene:</strong> Participar da cerimônia solene de premiação para o recebimento do troféu e/ou certificado correspondente.</li>
              </ol>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>Parágrafo único.</span> O não cumprimento de quaisquer das obrigações previstas no caput deste artigo resultará na desclassificação da prática para fins de premiação oficial, podendo o Comitê Executivo realizar a sucessão da honraria para a prática subsequente no ranking técnico.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 25.</span> Uma prática que tenha sido premiada em categorias de fluxo regular (Grande Prêmio,
                Destaque Regional ou Destaque Municipal) em edição imediatamente anterior do Prêmio Infosfera
                não poderá ser objeto de nova premiação na edição subsequente.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 1º.</span> Para fins de nova candidatura à premiação, deverá ser observado um interstício mínimo de 01 (uma) edição de intervalo.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 2º.</span> A restrição de que trata o caput não impede que a prática permaneça ativa e disponível na Plataforma Infosfera do Boas Práticas para fins de consulta, disseminação e replicabilidade.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 3º.</span> A prática premiada em edição anterior poderá ser submetida novamente ao certame após o período de interstício, desde que o proponente demonstre, de forma inequívoca, que a iniciativa sofreu atualizações substanciais, melhorias incrementais ou expansão de impacto que justifiquem uma nova avaliação técnica.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 4º.</span> Casos de práticas que tenham recebido Menção Honrosa ou que tenham sido mapeadas como Referência em Boa Prática não se sujeitam à regra do interstício, podendo concorrer normalmente nas categorias principais na edição seguinte.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ── ÉTICA E PROPRIEDADE ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Ética e Propriedade
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 26.</span> Os participantes declaram, no ato da confirmação de interesse (Fase II) mencionada
                no Artigo 22, a originalidade das informações e a inexistência de conflitos de interesse,
                assumindo total responsabilidade civil e administrativa pelo conteúdo apresentado.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 1º.</span> A responsabilidade de que trata o caput abrange, de forma integral, a garantia de que a prática não constitui plágio, omissão de autoria intelectual, cópia indevida, falsidade ideológica de informações ou violação de direitos de propriedade intelectual de terceiros.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 2º.</span> Caso a prática envolva tecnologias de terceiros ou parcerias público-privadas, o proponente deve possuir as autorizações necessárias para a publicidade e disseminação da solução na Plataforma Infosfera.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 27.</span> A Comissão Organizadora reserva-se o direito de revogar, a qualquer tempo,
                premiações e distinções já concedidas, caso sejam descobertas irregularidades tardias que
                firam este Regulamento.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 1º.</span> A revogação ocorrerá mediante processo administrativo sumário, garantido o direito de manifestação do órgão envolvido.
                </Typography>
              </Box>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>§ 2º.</span> Em caso de revogação, o órgão será compelido a devolver o troféu e os certificados físicos, e a menção à prática será excluída do rol de vencedores nos canais oficiais, podendo a Comissão decidir pela ascensão da prática subsequente no ranking técnico.
                </Typography>
              </Box>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 28.</span> Ao se inscrever, o participante cede ao Prêmio Infosfera, de forma gratuita e
                definitiva, o direito de uso de som, imagem e voz captados durante o evento ou enviados no
                material de inscrição, para fins de divulgação, publicações técnicas e memória histórica, nos
                termos da Lei nº 9.610/1998.
              </Typography>
            </Box>
          </Box>

          {/* ── DISPOSIÇÕES FINAIS ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Disposições Finais
            </Typography>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 29.</span> A inscrição na Plataforma e a subsequente participação no Prêmio Infosfera 2026
                implicam na concordância integral e irretratável com os termos deste Regulamento e com as
                normas de uso da Plataforma Infosfera de Boas Práticas.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 30.</span> A participação no certame é de natureza gratuita e voluntária, não gerando qualquer
                direito a remuneração, prêmios em espécie, gratificações ou benefícios financeiros diretos
                aos participantes ou às instituições proponentes.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 31.</span> A Comissão Julgadora detém plena autonomia técnica e soberania em suas decisões,
                podendo, inclusive, não conceder premiações em determinadas categorias (deixando-as desertas)
                caso as práticas inscritas não atinjam o patamar mínimo de excelência e qualidade exigido
                para o prestígio do Prêmio.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 32.</span> A organização do Prêmio exime-se de qualquer responsabilidade por inscrições não
                concluídas dentro do prazo regulamentar, independentemente do motivo, incluindo, mas não se
                limitando a: falhas técnicas em equipamentos ou conexões de internet por parte do proponente;
                interrupções no fornecimento de energia elétrica ou instabilidades em serviços de
                telecomunicações; erros no preenchimento do formulário ou ausência de documentos obrigatórios
                para o Status Ouro.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 33.</span> O Comitê Executivo reserva-se o direito de alterar o cronograma do Prêmio (datas
                de inscrição, avaliação e cerimônia), mediante ampla divulgação nos canais oficiais, por
                motivo de força maior ou conveniência administrativa.
              </Typography>
            </Box>

            <Box className={styles.artigo}>
              <Typography className={styles.artigoTexto}>
                <span className={styles.artigoNum}>Art. 34.</span> Os casos omissos neste Regulamento, bem como as dúvidas interpretativas surgidas
                no decorrer do processo, serão resolvidos de forma soberana pelo Comitê Executivo.
              </Typography>
              <Box className={styles.paragrafo}>
                <Typography className={styles.artigoTexto}>
                  <span className={styles.paragrafoNum}>Parágrafo único.</span> Das decisões de mérito proferidas pela Comissão Julgadora e pelo Comitê Executivo não caberá recurso administrativo, em face da natureza técnica e discricionária do julgamento.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* ── ANEXO I – TEMAS ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Anexo I – Temas
            </Typography>

            <Box className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Categoria</th>
                    <th>Descrição do Escopo</th>
                    <th>Temas Relacionados (Exemplos)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>A. Governança Digital e Eficiência Administrativa</strong></td>
                    <td>Foco na transformação digital como ferramenta de desburocratização e economia. Inclui a modernização da máquina pública, otimização de processos e melhoria na comunicação interinstitucional.</td>
                    <td>Governança Eletrônica; Interoperabilidade; Transformação Digital; Inovação em Serviços Públicos.</td>
                  </tr>
                  <tr>
                    <td><strong>B. Gestão Estratégica da Informação</strong></td>
                    <td>Abrange desde a estruturação de dados até o uso de tecnologias avançadas (IA) para extrair insights, apoiar decisões fundamentadas e criar políticas públicas baseadas em evidências.</td>
                    <td>Inteligência de Dados Públicos; Observatório de Dados; Gestão do Conhecimento; Inteligência Artificial e Ética no Setor Público.</td>
                  </tr>
                  <tr>
                    <td><strong>C. Transparência e Integridade Governamental</strong></td>
                    <td>Iniciativas que promovem a publicidade das ações governamentais, o acesso democrático à informação e o fortalecimento do controle social e da participação cidadã.</td>
                    <td>Transparência Digital; Inclusão Digital e Acessibilidade; Compliance e Integridade Digital.</td>
                  </tr>
                  <tr>
                    <td><strong>D. Preservação Digital e Memória Institucional</strong></td>
                    <td>Metodologias e sistemas dedicados à salvaguarda do patrimônio informacional público digital, garantindo acesso a longo prazo a registros de valor histórico e probatório.</td>
                    <td>Preservação da Memória Institucional; Curadoria Digital de Acervos Públicos; Gestão de Documentos Arquivísticos Digitais.</td>
                  </tr>
                  <tr>
                    <td><strong>E. Privacidade, Segurança e Resiliência Informacional</strong></td>
                    <td>Proteção do ecossistema público contra ameaças e incidentes. Foco na integridade, confidencialidade e disponibilidade dos dados, além de estratégias de mitigação de riscos, incluindo aspectos de privacidade e proteção de dados.</td>
                    <td>Segurança Cibernética; Confidencialidade e Integridade; Gestão de Documentos Digitais; Segurança, Privacidade e Proteção de dados.</td>
                  </tr>
                  <tr>
                    <td><strong>F. Outros Temas Correlatos</strong></td>
                    <td>Projetos que apresentem aderência aos objetivos do Prêmio Infosfera 2026, mas que não estejam explicitamente listados nas categorias anteriores.</td>
                    <td>Inovação em Processos; Transparência Ativa; Tecnologias Emergentes; Cidades Inteligentes; Sustentabilidade Digital; e outras propostas de gestão da informação na esfera pública.</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>

          {/* ── ANEXO II – CRONOGRAMA ── */}
          <Box className={styles.regulamentoSection}>
            <Typography variant="h4" className={styles.sectionHeading}>
              Anexo II – Cronograma
            </Typography>

            <Box className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Marco Temporal</th>
                    <th>Atividade Principal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>01 de Abril a 31 de Julho</strong></td>
                    <td>Período de submissão e cadastramento na Plataforma Infosfera.</td>
                  </tr>
                  <tr>
                    <td><strong>01 a 15 de Agosto</strong></td>
                    <td>Período de Análise de Admissibilidade e Validação de interesse.</td>
                  </tr>
                  <tr>
                    <td><strong>1 a 30 de Agosto</strong></td>
                    <td>Avaliação de Mérito pela Comissão Julgadora.</td>
                  </tr>
                  <tr>
                    <td><strong>10/09/2026</strong></td>
                    <td>Data limite para a Divulgação dos Resultados Oficiais e comunicação oficial aos finalistas.</td>
                  </tr>
                  <tr>
                    <td><strong>25/09/2026</strong></td>
                    <td>Data limite para confirmação de participação presencial.</td>
                  </tr>
                  <tr>
                    <td><strong>05 a 09 de Outubro</strong></td>
                    <td>Fase de Aclamação Pública em ambiente digital.</td>
                  </tr>
                  <tr>
                    <td><strong>05 de Novembro</strong></td>
                    <td>Sessão de Apresentação de Boas Práticas e Cerimônia de Premiação em Goiânia/GO.</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Regulamento;
