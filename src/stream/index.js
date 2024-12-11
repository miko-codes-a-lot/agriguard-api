const { OnionInsuranceStream } = require('./onion-insurance.stream')
const { RiceInsuranceStream } = require('./rice-insurance.stream')
const { IndemnityStream } = require('./indemnity.stream')

module.exports = {
  Stream: {
    start: () => {
      const streams = [
        OnionInsuranceStream,
        RiceInsuranceStream,
        IndemnityStream
      ]

      streams.forEach(stream => stream.watch())
    }
  }
}
