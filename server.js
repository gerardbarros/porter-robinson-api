const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7200

app.use(cors())

const albums = {
    'say my name': {
        'name':'say my name',
        'songCount': 1,
        'releaseYear': 2010,
        'albumImage': 'https://i.discogs.com/uwUrHqKBQSAp85VEh5qx13YP6pGg3Hiap9fQtfo-k3U/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MzI5/MDYtMTI4Mzc3NTMx/MC5qcGVn.jpeg'
    },

    'spitfire': {
        'name': 'spitfire',
        'songCount': 11,
        'releaseYear': 2011,
        'albumImage': 'https://i.discogs.com/2cYFcFvxts4Vu2q-j-GVceD0OARwZzNlqosaFEA7_-g/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMxMDg1/OTYtMTMxNjE3NzY5/My5qcGVn.jpeg'
    },

    'language': {
        'name': 'language',
        'songCount': 1,
        'releaseYear': 2010,
        'albumImage': 'https://i.discogs.com/fJ8slcNPTtq7lFOkhkHuW4aBiEG-cexiuBf_b-VI-5k/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1MzE3/NTYtMTM5NjY5Nzkz/My01MDczLmpwZWc.jpeg'
    },

    'easy': {
        'name': 'easy',
        'songCount': 1,
        'releaseYear': 2013,
        'albumImage': 'https://i.discogs.com/Y3SwjYGT8LA_8--npoLbz1Uz4xuLcB0QTAd942VqmNY/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ2Mjg0/NzItMTM3MDM5NDUw/MS04NDAzLmpwZWc.jpeg'
    },

    'shelter': {
        'name': 'shelter',
        'songCount': 1,
        'releaseYear': 2016,
        'albumImage': 'https://i.discogs.com/KbcI4mm2n5cZJNrutZKIHyKo0siuYd4hPMANJoQGs3I/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTkzMzMw/OTgtMTQ3ODc2NDIz/NS0yNzMyLmpwZWc.jpeg'
    },

    'worlds': {
        'name': 'worlds',
        'songCount': 12,
        'releaseYear': 2014,
        'albumImage': 'https://i.discogs.com/3jbfXPozuZ0CHKvr7TWgciWzb-qYdTfkycvSPr_aQVk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5ODc1/OTAtMTQwODE2MjU2/My01NTEwLmpwZWc.jpeg'
    },

    'nurture': {
        'name': 'nurture',
        'songCount': 14,
        'releaseYear': 2021,
        'albumImage': 'https://i.discogs.com/bUjb_EuTpvf5R96X3WXK_WjK3UM2_qt37R-5jWeVmfk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NDE0/NzYzLTE2MTkxMjQz/ODAtODYxOC5qcGVn.jpeg'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html' )
})

app.get('/api/:albumName', (request, response) => {
    const albumName = request.params.albumName.toLowerCase()
    if(albums[albumName]){
        response.json(albums[albumName])
    } else {
        response.json(albums['none'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}`)
})