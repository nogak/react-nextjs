function EachPost(props){
  return(
    <article>
      <a href="{props.url}">
        <h3>{props.title}</h3>
      </a>
    </article>
  )
}

export default function Posts(){
  return(
    <section>
      <h2>おすすめ記事</h2>
      <EachPost title="スケジュール管理と猫の理論"/>
      <EachPost title="音楽が呼び起こす美味しい物の記憶"/>
    </section>
  )
}