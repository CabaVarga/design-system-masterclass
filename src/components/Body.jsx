import MainContent from './MainContent.jsx'
import Sidebar from './Sidebar.jsx'

const Body = (props) => (
    <div>
        <Sidebar />
        <MainContent />
    </div>
)

Body.propTypes = {}

export default Body
