import Card from 'components/elements/Card'
import User from 'lib/models/User'

type Props = {
    user: User
}

const UserCard = ({ user }: Props) => {
    return <Card title={user.name} subtitle={user.name} />
}

export default UserCard
