import Image from 'next/image'
import { Container, PageInfo, UserInfo } from './styles'
import { Heading, Text } from '../Typography'
import { Avatar } from '../ui/Avatar'

type HeaderProps = {
  title: string
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <Container>
      <PageInfo>
        <Image src="/images/logo_higia.svg" width={50} height={50} alt="Logo" />
        <Heading color="orange-200">{title}</Heading>
      </PageInfo>
      <UserInfo>
        <Text size="md" color="gray-300">
          Rafael Matos
        </Text>
        <Avatar
          src="https://res.cloudinary.com/dkrhvi3kt/image/upload/v1705084513/tlpznwacrjdty7ivsqwn.jpg"
          alt="Avatar do usuário Rafael Matos"
        />
      </UserInfo>
    </Container>
  )
}
