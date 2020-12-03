import React from 'react';
import OqueProcuro from './OqueProcuro';
import SobreMim from './SobreMim';
import Habilidades from './Habilidades';
import Portfolio from './Portfolio';
import OndeAprendi from './OndeAprendi';
import ComQuemAprendi from './ComQuemAprendi';
import Contato from './Contato';

import fotoPerfil from '../../img/perfil.png';

import './style.css';

export default function Main() {
    const habilidades = [
        'HTML, CSS, TypeScript e JavaScript. Conhecimento em Bootstrap e criação de formulários. Apto a desenvolver aplicações web responsivas, funcionais e dinâmicas, com consulta à APIs.',
        'Framework React e React Native. Capaz de criar aplicativos mobile simples com React Native e aplicações web com ReactJS.',
        'Uso corriqueiro do sistema de versionamento Git.',
        'Banco de dados: Fundamentos e aplicações relacionais e não relacionais: MongoDB e PostgreSQL.',
        'Construção de APIs em Node.js usando express.',
        'Além disso, aprendendo e desenvolvendo competências comportamentais, como autoconhecimento, capacidade de dar e receber feedacks, trabalhar em equipes, etc.'
    ];

    const professores = [{"id": 1, "nome": "Roberto Camargo", "foto": "https://ca.slack-edge.com/T014Z7E1Y3S-U014164GA4F-7f921c7fa62c-512", "texto":"Roberto é um dos melhores professores com quem aprendi, ele é um exemplo de pessoa, profissionalismo e dedicação. Com certeza, é a pessoa mais importante no meu desenvolvimento como programador.", "linkedin": "https://www.linkedin.com/in/robertocamargo96/"},

    {"id": 2, "nome": "Pedro Naponoceno", "foto": "https://ca.slack-edge.com/T014Z7E1Y3S-U017D4LAPKP-gea0240bbb80-512", "texto":"O Pedro além de ser uma pessoa de ótimo humor, uma pessoa incrível e um dos caras mais motivadores e inteligente que eu já conheci.", "linkedin": "https://www.linkedin.com/in/pedro-naponoceno/"},

    {"id": 3, "nome": "Italo Marca", "foto": "https://avatars3.githubusercontent.com/u/35382873?s=400&v=4", "texto":"Italo foi o meu primeiro professor no desenvolvimento, sempre tentando explicar de um jeito que todos entendam. Se hoje continuo estudando, é por causa dele.", "linkedin": "https://www.linkedin.com/in/italomarca/"},

    {"id": 4, "nome": "Rafael Magalhaes", "foto": "https://ca.slack-edge.com/T014Z7E1Y3S-U014S14U2MP-f3ea6900db14-512", "texto":"Rafael foi o primeiro contato com a escola, uma pessoa muito animadora e de boas ideias. Me ensinou muita coisa sobre empreendedorismo.", "linkedin": "https://www.linkedin.com/in/rafaelmbsouza/"}]
    
    return (
        <main id='main'>
            <OqueProcuro titulo='Oque eu estou procurando?' texto='No momento, procuro minha primeira oportunidade no mercado de trabalho como desenvolvedor Front End.'/>

            <SobreMim 
                titulo='Sobre mim' 
                texto='Meu nome é João Victor, tenho 20 anos e resolvi me tornar um desenvolvedor em 2020. Sempre gostei de tecnologia, e quando fui apresentado ao desenvolvimento, me identifiquei demais com a área. Gosto muito das partes lógicas das aplicações e pretendo me tornar desenvolvedor Full Stack. Sou calmo, paciente, proativo, trabalho bem em equipe e tenho muita vontade de aprender.' 
                imagem={fotoPerfil} />

            <Habilidades titulo='Um pouco das minhas habilidades' habilidades={habilidades}/>

            <Portfolio titulo='Portfolio' texto='Alguns dos meu projetos' />

            <OndeAprendi 
                titulo='Minha jornada na programação' 
                texto='Em  Maio de 2020, um amigo me apresentou o desenvolvimento web, logo me identifiquei com a área e comecei meus estudos pelo youtube mesmo. Algumas semanas depois eu comecei a me inscrever em processos seletivos de escolas sobre desenvolvimento web online, consegui passar na Arbyte. Na Arbyte, aprendi muito sobre desenvolvimento web no geral e tive ótimos professores para isso. Junto da Arbyte, tive acesso a plataforma DevMedia, onde pude aprofundar em muitos assuntos, além dos assuntos passados na Arbyte. Nessa plataforma, fiquei algumas vezes entre os que mais ultilizaram a plataforma, ficando em segundo no mês de setembro.'/>

            <ComQuemAprendi titulo='Com quem aprendi' profs={professores} />

            <Contato titulo='Entre em contato' telefone='(11) 94007-8725' email='victorps.joao@gmail.com' local='Jandira - São Paulo'/>
        </main>
    )
}