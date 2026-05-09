/* eslint-disable
    @typescript-eslint/explicit-member-accessibility,
    @typescript-eslint/no-useless-constructor,
    unicorn/prefer-spread,
    no-plusplus,
    @typescript-eslint/no-non-null-assertion,
    unicorn/prefer-code-point
*/
// JSDom + Vitest don't play well with each other. Long story short - default
// TextEncoder produces Uint8Array objects that are _different_ from the global
// Uint8Array objects, so some functions that compare their types explode.
// https://github.com/vitest-dev/vitest/issues/4043#issuecomment-1905172846
class ESBuildAndJSDOMCompatibleTextEncoder extends TextEncoder {
  constructor() {
    super()
  }

  // eslint-disable-next-line class-methods-use-this
  override encode(input: string) {
    if (typeof input !== 'string') {
      throw new TypeError('`input` must be a string')
    }

    const decodedURI = decodeURIComponent(encodeURIComponent(input))
    const arr = new Uint8Array(decodedURI.length)
    const chars = decodedURI.split('')
    for (let i = 0; i < chars.length; i++) {
      arr[i] = decodedURI[i]!.charCodeAt(0)
    }

    return arr
  }
}

globalThis.TextEncoder = ESBuildAndJSDOMCompatibleTextEncoder
