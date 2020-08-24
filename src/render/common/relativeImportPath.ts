import path from 'path'

export const relativeImportPath = (from: string, to: string) => {
  const fromResolved = path.posix.relative(from, to)
  return fromResolved[0] === '.' ? fromResolved : `./${fromResolved}`
}
