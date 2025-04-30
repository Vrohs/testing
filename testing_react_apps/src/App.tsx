
import './App.css'
import List from './components/List'

function App() {

  
  return (
    <>
    <p>HEllo</p>
    <button type='submit'>Navigate to: </button>
    <h4>Hello</h4>
    <img alt='hello' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7cRYFyLoDEDh4sRtM73vvwHaDg%26pid%3DApi&f=1&ipt=5bbceb4c30ec2f902855df2488ffd8999dfada2a87b9256f862398c14d7d80f3&ipo=images"></img>
   <a href='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7cRYFyLoDEDh4sRtM73vvwHaDg%26pid%3DApi&f=1&ipt=5bbceb4c30ec2f902855df2488ffd8999dfada2a87b9256f862398c14d7d80f3&ipo=images'>click me</a>
    <List links={['/hello', '/hi', '/btech']} />
    </>
  )
}

export default App
