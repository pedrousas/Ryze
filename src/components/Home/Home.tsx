import React from 'react';
import { HomeDiv, Header, TextoTitulo, TextoMenor, RyzeAnime, ButtonLogin, Container,
     TextoConteudo, TextoConteudoMenor, Section, Info, NewSection, CaixaComentarios, Comentarios, Footer } from './Home.styled';
import Img from '../../assets/images/ryze1.png'
import Img2 from '../../assets/images/ryze2.png'
import Img3 from '../../assets/images/gamer.png'
import Img4 from '../../assets/images/info.png'
import Img5 from '../../assets/images/build.png'
import Img6 from '../../assets/images/conversando.png'




export default function Home() {

    return (
        <React.Fragment>
        <HomeDiv>           
            <Header>
               <RyzeAnime>
                   <img  src = {Img}/>
                   <img  src = {Img2}/>
               </RyzeAnime>
                <div>
                <TextoTitulo>Bem-vindo(a) ao <span>Ryze</span></TextoTitulo>
                <TextoMenor>Ryze é um ferramenta para te ajudar a subir de elo.</TextoMenor>
                <button>Cadastre-se</button>
                </div>
                <ButtonLogin>Login</ButtonLogin>  
                             
            </Header>            

        </HomeDiv>

        <Container>
        <hr/>
            <TextoConteudo><span>Consulte suas estatística</span></TextoConteudo> 
            <TextoConteudoMenor>Daremos a você dados reais e atualizados sobre o jogo, tudo para que você tenha melhor desempenho.</TextoConteudoMenor>
            <Section>
               <Info> 
                   <img src = {Img3} />
                   <h1>Revisões de Performasse</h1>
                   <br/>
                   <h3>Aqui você poderá acessar informações de suas partidas anteriores para poder melhorar cada vez mais em suas partidas </h3>
               </Info>
               <Info>
                   <img src = {Img4} />
                   <h1>Informações de outros Jogadores</h1>
                   <br/>
                   <h3>Você terá acesso a histórico de outros jogadores, que tal saber o que um pro-player anda testando?</h3>
               </Info>
               <Info>
                   <img src = {Img5} />
                   <h1>Melhores Builds</h1>
                   <br/>
                   <h3>Também poderá ter informações privilegiadas sobre novas builds que estão surgindo, nada melhor que estar dois passos à frente de qualquer outro jogador, não é mesmo? </h3>
               </Info>
               <Info>
                   <img src = {Img6} />
                   <h1>Fórum</h1>
                   <br/>
                   <h3>E aqueles problemas que pesquisamos em todos os lugares e não achamos nenhuma resposta? Você talvez a ache em nosso fórum de jogadores! Também pode ajudar alguém e fazer novos amigos.</h3>
               </Info>
                
            </Section>
            <hr/>
        </Container>
        <NewSection>
            <h1>Temos responsabilidades contigo</h1>
            <h3> Não queremos ser só mais uma empresa, realmente queremos te ajudar e ser seu guia para o progresso! </h3>
            <h3>Que tal nos dar essa chance de andar contigo? Veja alguns comentários sobre nós.</h3>
            
             <CaixaComentarios>
             <Comentarios>
                 <h3>"Fiquei surpreendido quando vi, não acreditei no que meus olhos enxergavam... Sou apaixonado pelo game e quando fiquei sabendo deste App fiquei muito empolgado e eles corresponderam a todas as minhas expectativas." </h3>
                 <h3> -Glauco Toloddo</h3>
             </Comentarios>
             <Comentarios>
             <h3> "Um dia nos meus sonhos eu tive uma visão, visão é exatamente como eu poderia definir esse App... No processo de criação minha mente estava a mil, eu estava tão empolgado que quando eu dormia só conseguia ver o ryze." </h3>
             <h3> -Matheus Luiz</h3>
             </Comentarios>
             <Comentarios>
             <h3> "O que eu poderia dizer sobre esse App que amei como meu filho? recitando um grande poeta chamado chewbacca: "WWWRRRRRRGWWWRRRR". Este é meu sentimento, não tiraria uma letra do que ele disse, eu simplesmente amo." </h3>
             <h3> -Pedro Alves</h3>
             </Comentarios>
             </CaixaComentarios>

             <br/><br/>
             <h5>Estamos te esperando para fazer parte desta família, faça seu Login ou cadastro e vamos avançar juntos!</h5>
             
        </NewSection>
         <Footer>
                 <h2>DW &copy; 2021, ALL Rights Reserved</h2>
                 <h5>Este aplicativo é protegido por Deus, tenta a sorte não.</h5>
         </Footer>

        
        </React.Fragment>
    )

}