import Appbare from '../components/Appbare.js'
function Blog() {
  return (
    <>
      <Appbare />
      {/* <iframe src="https://ceducaty.blogspot.com/" width="100%" height="100%" style={{overflow:'hidden',height:'100%',width:'100%'}}></iframe> */}
      <div style={{margin:'0px',padding:'0px',overflow:'hidden'}}>
        <iframe src="https://ceducaty.blogspot.com/" style={{overflow:'hidden',overflowX:'hidden',overflowY:'hidden',height:'100%',width:'100%',position:'absolute',top:'0px',left:'0px',right:'0px',bottom:'0px'}} height="100%" width="100%"></iframe>
      </div>
    </>
  )
}

export default Blog