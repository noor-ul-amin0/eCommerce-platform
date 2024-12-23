/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'

// Create Virtual Routes

const ProductsAddLazyImport = createFileRoute('/products/add')()
const ProductsProductIdEditLazyImport = createFileRoute(
  '/products/$productId/edit',
)()

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsAddLazyRoute = ProductsAddLazyImport.update({
  id: '/products/add',
  path: '/products/add',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/products/add.lazy').then((d) => d.Route))

const ProductsProductIdEditLazyRoute = ProductsProductIdEditLazyImport.update({
  id: '/products/$productId/edit',
  path: '/products/$productId/edit',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/products/$productId.edit.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/products/add': {
      id: '/products/add'
      path: '/products/add'
      fullPath: '/products/add'
      preLoaderRoute: typeof ProductsAddLazyImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId/edit': {
      id: '/products/$productId/edit'
      path: '/products/$productId/edit'
      fullPath: '/products/$productId/edit'
      preLoaderRoute: typeof ProductsProductIdEditLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/products/add': typeof ProductsAddLazyRoute
  '/products/$productId/edit': typeof ProductsProductIdEditLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/products/add': typeof ProductsAddLazyRoute
  '/products/$productId/edit': typeof ProductsProductIdEditLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/products/add': typeof ProductsAddLazyRoute
  '/products/$productId/edit': typeof ProductsProductIdEditLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/products/add' | '/products/$productId/edit'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/products/add' | '/products/$productId/edit'
  id: '__root__' | '/' | '/products/add' | '/products/$productId/edit'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ProductsAddLazyRoute: typeof ProductsAddLazyRoute
  ProductsProductIdEditLazyRoute: typeof ProductsProductIdEditLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ProductsAddLazyRoute: ProductsAddLazyRoute,
  ProductsProductIdEditLazyRoute: ProductsProductIdEditLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/products/add",
        "/products/$productId/edit"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/products/add": {
      "filePath": "products/add.lazy.tsx"
    },
    "/products/$productId/edit": {
      "filePath": "products/$productId.edit.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
