import React from 'react'
import { Avatar } from '../avatar/Avatar'
import { Article, Header, Author } from './styles'
import { format, formatDistanceToNow, isValid } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishedAt }) {
  const formatDate = (date) => {
    const parsedDate = new Date(date)
    return isValid(parsedDate)
      ? format(parsedDate, "d 'de' LLLL 'de' yyyy", { locale: ptBR })
      : 'Data inválida'
  }

  const formatDistance = (date) => {
    const parsedDate = new Date(date)
    return isValid(parsedDate)
      ? formatDistanceToNow(parsedDate, { locale: ptBR, addSuffix: true })
      : 'Data inválida'
  }

  const formattedPublishedAt = formatDate(publishedAt)
  const distanceFromNow = formatDistance(publishedAt)

  return (
    <Article>
      <Header>
        <Author>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div>
            <strong>{author.name}</strong>
            <time
              title={formattedPublishedAt}
              dateTime={new Date(publishedAt).toISOString()}
            >
              {distanceFromNow}
            </time>
          </div>
        </Author>
      </Header>

     
    </Article>
  )
}
