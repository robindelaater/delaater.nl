import CogIcon from '@sanity/icons/Cog'
import HomeIcon from '@sanity/icons/Home'
import MenuIcon from '@sanity/icons/Menu'
import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('content')
    .title('Content')
    .items([
      S.documentTypeListItem('homePage')
				.title('Homepage')
        .icon(HomeIcon)
        .child(
          S.editor()
            .id('homepage')
            .schemaType('homePage')
            .documentId('f74f0ecc-4faf-4388-992f-c7a151fa343b'),
        ),
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .id('settings')
            .title('Settings')
            .items([
							S.documentTypeListItem('header').title('Header')
								.child(S.editor().id('header').schemaType('header').documentId('43badfb6-a58f-4282-9955-ce7bbbb95b57')),
              S.listItem()
                .id('footer')
                .title('Footer')
                .child(S.editor().id('footer').schemaType('footer').documentId('footer')),
              S.documentTypeListItem('menu').title("Menu's").icon(MenuIcon),
            ]),
        ),
    ])
