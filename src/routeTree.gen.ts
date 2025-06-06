/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ReferencesLazyImport = createFileRoute('/references')()
const ProjectsLazyImport = createFileRoute('/projects')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ReferencesLazyRoute = ReferencesLazyImport.update({
  id: '/references',
  path: '/references',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/references.lazy').then((d) => d.Route))

const ProjectsLazyRoute = ProjectsLazyImport.update({
  id: '/projects',
  path: '/projects',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/projects.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/projects': {
      id: '/projects'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsLazyImport
      parentRoute: typeof rootRoute
    }
    '/references': {
      id: '/references'
      path: '/references'
      fullPath: '/references'
      preLoaderRoute: typeof ReferencesLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/projects': typeof ProjectsLazyRoute
  '/references': typeof ReferencesLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/projects': typeof ProjectsLazyRoute
  '/references': typeof ReferencesLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/projects': typeof ProjectsLazyRoute
  '/references': typeof ReferencesLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/projects' | '/references'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/projects' | '/references'
  id: '__root__' | '/' | '/projects' | '/references'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ProjectsLazyRoute: typeof ProjectsLazyRoute
  ReferencesLazyRoute: typeof ReferencesLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ProjectsLazyRoute: ProjectsLazyRoute,
  ReferencesLazyRoute: ReferencesLazyRoute,
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
        "/projects",
        "/references"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/projects": {
      "filePath": "projects.lazy.tsx"
    },
    "/references": {
      "filePath": "references.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
