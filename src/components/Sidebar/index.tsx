import { useState } from 'react'
import {
  Container,
  DateInfo,
  Nav,
  NavItemText,
  NavItems,
  SidebarHeader,
  SidebarInner,
} from './styles'
import {
  List,
  X,
  House,
  Heartbeat,
  Calendar,
  User,
  Storefront,
  ArrowFatLineUp,
} from '@phosphor-icons/react'
import { Text } from '../Typography'

import dayjs from 'dayjs'
import { useRouter } from 'next/router'

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const navItems = [
    { item: 'Início', icon: <House size={24} />, pushRoot: '/service' },
    { item: 'Pacientes', icon: <User size={24} />, pushRoot: '/patients' },
    {
      item: 'Consultas',
      icon: <Heartbeat size={24} />,
      pushRoot: '/appointments',
    },
    { item: 'Agenda', icon: <Calendar size={24} />, pushRoot: '/appointments' },
    {
      item: 'Parceiros',
      icon: <Storefront size={24} />,
      pushRoot: '/partners',
    },
  ]

  const handlePushPage = async (path: string) => {
    await router.push(path)
  }

  return (
    <Container isOpen={isOpen}>
      <SidebarInner>
        <SidebarHeader>
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
          {isOpen && (
            <DateInfo>
              <Text size="sm" color="gray-400">
                {dayjs().format('dddd, DD[ de ]MMMM')}
              </Text>
              <Text size="sm" color="gray-400">
                {dayjs().format('h:mm A	')}
              </Text>
            </DateInfo>
          )}
        </SidebarHeader>
        <Nav>
          {navItems.map((item) => {
            return (
              <NavItems
                key={item.item}
                isOpen={isOpen}
                onClick={() => handlePushPage(item.pushRoot)}
              >
                {item.icon}
                {isOpen && <NavItemText> {item.item}</NavItemText>}
              </NavItems>
            )
          })}
        </Nav>
      </SidebarInner>
    </Container>
  )
}
