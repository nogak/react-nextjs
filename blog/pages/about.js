import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function About(){
  return(
    <Container>
      <Meta
        pageTitle="about"
        pageDesc="About development activities"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          size="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
          <h1>サンプルテキスト</h1>
          <p>
            Cubeが得意とする分野はものづくりです。3次元から2次元の造形、プログラミングやデザインなど、様々な技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
          <h2>ものづくりで目指していること</h2>
          <p>
            ものづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案wお実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
          </p>
          <p>
            単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくりをしています。毎回課題解決テーマを持って「もの」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるもやもやを言葉にして「問い」への答えを出しています。
          </p>
          <h3>新しいことへのチャレンジ</h3>
          <p>
            今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでも良いから取り入れて、良いものを作れるようにしています。地位sなヒントから新しいものを生み出すようなものづくりは、これからも続けていきたいです。
          </p>
          <p>hoge</p>
          </PostBody>
        
        </TwoColumnMain>
    
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}