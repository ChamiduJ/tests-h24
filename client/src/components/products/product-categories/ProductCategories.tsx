import React from 'react'
import Styled from 'styled-components'

import { Category } from '../../../types/products.types';

interface IProps {
  categories: Category[]
}

const Sidebar = Styled.div`
grid-area: sidebar;
background-color: lavender;
`

const Heading = Styled.h3`
margin: 0 0 10px;
`

const List = Styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
`

const Item = Styled.li`
margin: 0 0 0 8px;
padding: 8px 0;
`

export default function ProductsCategories({ categories }: IProps) {
  return (
    <Sidebar>
      <Heading>Kategorien</Heading>

      {categories.length ? (
        <List>
          {categories[0].childrenCategories.list.map(({ name, urlPath }) => {
            return (
              <Item key={name}>
                <a href={`/products/${urlPath}`}>{name}</a>
              </Item>
            )
          })}
        </List>
      ) : (
        'Loading...'
      )}
    </Sidebar>
  )
}
