import { Link } from "react-router-dom"
import Footer from "../organisms/Footer"
import Header from "../organisms/Header"


function PostComplet() {
  return (
    <div>
        <Header show={true} />
        <div style={{marginTop:"60px"}}>
        <div style={{width:"100%"}}>
        <p style={{textAlign:"center"}}>投稿が完了しました</p>
        </div>
        <div style={{textAlign:"center"}}>
        {/* style={{margin:"0 auto",}} */}
        <Link to="/" ><button className='btn'>Topページに戻る</button></Link>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default PostComplet