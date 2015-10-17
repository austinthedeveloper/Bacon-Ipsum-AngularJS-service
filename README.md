# Bacon-Ipsum-AngularJS-service
Uses the Bacon-Ipsum JSON API to pull in bacon-ipsum text to your projects. API info can be found here:

https://baconipsum.com/json-api/ 

##Demo
[Plunkr](http://embed.plnkr.co/Gpty10hZI7NujbxdNRu9/preview)

##Requirements
* AngularJS

##Use
* Include `baconIpsum` in your module.

```
<bacon-ipsum></bacon-ipsum>
```

###Fields
* `type`: `all-meat` (default) for meat only or `meat-and-filler` for meat mixed with miscellaneous ‘lorem ipsum’ filler.
* `paras`: Optional number of paragraphs, defaults to 5.
* `sentences`: Number of sentences (this overrides paragraphs). Optional
* `start-with-lorem`: Optional pass 1 to start the first paragraph with ‘Bacon ipsum dolor sit amet’.
* `format`: ‘json’ (default), ‘text’, or ‘html’

##Files
* Directive: `bacon-ipsum.js`
