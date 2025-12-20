// JSDom + Vitest don't play well with each other. Long story short - default
// TextEncoder produces Uint8Array objects that are _different_ from the global
// Uint8Array objects, so some functions that compare their types explode.
// https://github.com/vitest-dev/vitest/issues/4043#issuecomment-1905172846
class ESBuildAndJSDOMCompatibleTextEncoder extends TextEncoder {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility, no-useless-constructor
  constructor() {
    super()
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/explicit-member-accessibility
  override encode(input: string) {
    if (typeof input !== 'string') {
      throw new TypeError('`input` must be a string')
    }

    const decodedURI = decodeURIComponent(encodeURIComponent(input))
    const arr = new Uint8Array(decodedURI.length)
    // eslint-disable-next-line unicorn/prefer-spread
    const chars = decodedURI.split('')
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < chars.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, unicorn/prefer-code-point
      arr[i] = decodedURI[i]!.charCodeAt(0)
    }
    return arr
  }
}

globalThis.TextEncoder = ESBuildAndJSDOMCompatibleTextEncoder
