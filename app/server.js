import express from 'express'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
//import routes from './route'
import { http } from 'http'
import React from 'react'
import CommentBox from './CommentBox'
import routes from './route'

let app = express()
app.get('/', (req, res) => {
  res.send('Hello World!');
})


app.get('*', (req, res) => {
  //console.log(req.url)
  //console.log(res)

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    let html = renderToString(<RoutingContext {...renderProps} />)
    console.log(html)

    if (error) {
      res.status(500).send(error.message)

    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)

    } else if (renderProps) {
      res.status(200).send(renderToString(<RoutingContext {...renderProps} />))

    } else {

      res.status(404).send('Not found')
    }
  })

});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
