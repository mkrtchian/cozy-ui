import React from 'react'

import { CozyProvider } from 'cozy-client'

import { I18nContext } from '../../I18n'

const demoTextFileResponse = {
  text: () => new Promise(resolve => resolve('Hello World !'))
}

const demoFilesByClass = {
  pdf:
    'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf',
  audio: 'https://viewerdemo.cozycloud.cc/Z.mp3',
  video: 'https://viewerdemo.cozycloud.cc/Nextcloud.mp4',
  text: 'https://viewerdemo.cozycloud.cc/notes.md'
}

const mockClient = {
  collection: () => ({
    getDownloadLinkById: id =>
      new Promise(resolve => resolve(demoFilesByClass[id])),
    download: () =>
      alert(
        "This is a demo, there's no actual Cozy to download the file from ¯\\_(ツ)_/¯"
      ),
    get: () =>
      new Promise(resolve =>
        resolve({
          data: {
            links: {
              large: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
            }
          }
        })
      )
  }),
  getStackClient: () => ({
    uri: '',
    fetch: () => new Promise(resolve => resolve(demoTextFileResponse))
  }),
  getClient: () => mockClient
}

class Wrapper extends React.Component {
  render() {
    return (
      <CozyProvider client={mockClient}>
        <I18nContext.Provider value={{ t: x => x, lang: 'en' }}>
          {this.props.children}
        </I18nContext.Provider>
      </CozyProvider>
    )
  }
}

export default Wrapper
