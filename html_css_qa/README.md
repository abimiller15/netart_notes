# HTML/CSS Q&A

***[HTML Review](http://netart.rocks/html)***

***[CSS Review](http://netart.rocks/notes/cssoverview)***

```HTML
<!DOCTYPE html>
```
DOCTYPE tells the browser what era you wrote your code in and what standards you're adhering to

No need to update DOCTYPE in the future

```html
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
</html>
```
made of elements inside elements
in b/w tags, is the content

```HTML
<head>
  <meta charset="utf-8">
  <title></title>
</head>
```
ex. within the head element is the meta attribute and title element

attributes:
```HTML
<html lang="en" dir="ltr">
```
lang, dir

lang: letting computer know that it's written in english

dir: left to right


attribute value is always in quotes

### Head or body?
Head - holds the metadata


```HTML
    <meta name="description" content="woooo test">
```
description on search results and when you post links on twitter/facebook/etc

favicon - meta tag, the little logo in a tab, bring in other files to include in the head

tag within a tag, child of that tag (the parent)

## CSS

```html
<style>
    a{
        color: red;
    }
</style>
```
b/w those script tags, I'm writing CSS not HTML

OR make a new CSS file like you usually doo wooo

a block applies a set of characteristics
```CSS
a{
    color:red;
}
```
a is the selector (class,ID), color is the characteristic, red is the property

IDs are not supposed to be repeatedly used, only once. might cause problems if used more than once.

NO SPACES, dashes and underscores are okay

reminders:
- padding: space b/w content and edge of the box
- border - width, color, style
```CSS
    /*how u do da notes on CSS since I always forget*/
```
- EVERYTHING IS A BOX WE R ALL BOXES jk
- crazy CSS: CSS 3D x-wing, single element pure css macbook icon, Codepen(social media jfiddle kind of thing, look at pure CSS)
- [CSSmatic](www.cssmatic.com)
- boxshadow woo
    - chrome/safari: webkit-box-shadow
    - firefox: moz-box-shadow
    - boxshadow
    - put all 3
- [css-tricks](css-tricks.com)
