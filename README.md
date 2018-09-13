# hn-react
Demo HN client in react.js

# Objectives
The goal of this project was to create a demo MVP in react.js. The objectevies were stated as follows:
> [B]uild a Hacker News (news.ycombinator.com) client using React that will utilise their JSON API (https://github.com/HackerNews/API) to populate the feed and allow users to view comments on each post.

# Design & implementation
Here are some of design and library choices that were applied to this project:

- [Material-UI](https://material-ui.com/) component library to keep the look and feel familiar and straightforward.
- The popular [react-router](https://reacttraining.com/react-router/) for routing
- Moment.js for the pretty dates. Note this is lazy loaded to benefit initial page load speeds
- [react-virtualized](https://bvaughn.github.io/react-virtualized/#/components/List) acts as an alternative to pagination and allows for JIT rest calls, significantly reducing network induced jank. With a bit of optimistic loading and caching, scrolling across the ~500 item front page should always feel snappy and responsive.
- The current state of the app supports reads (login/posting/voting abilities were not implemented), and the front page offers the "top news" view. Components are organized in a top-down hierarchy, with components responsible for their own data hydration and lifecycles. The primary exception was with virtualized lists where the child components need to signal to the parent to remeasure the children after they finished rendering
- I didn't feel the need for redux, although I implemented a primitive cache for rest calls. The gains are realized primarily  during rerendering, and they keep the experience fast and snappy (especially when re-rendering virtualized components) by eliminating the jank associated repeated network calls
- Webpack for building, including some plugins that helped round out the experience. For example, the [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) generates the skeleton HTML page with just two lines of configuration code. Built-in code splitting, especially useful for large libraries such as moment.js, is a pleasure to use and eliminates the difficulties otherwise associated with introducing large libs
- Google's [workbox](https://developers.google.com/web/tools/workbox/) allows for drop-in service workers. While a bit of an overkill for a demo app (especially an MVP), it was helpful in uping the lighthouse score with just a few lines of code (and naturally reap the associated benefits, such as faster time to fcp, and ultimately time to first interaction). Were I to develop the app further, I'd investigate delegating caching to the service workers which was intentionally not implemented due to the complexities involved. The current caching system allows for intuitive cache invalidation: refresh the page for fresh data. Caching network calls at the SW level would have required a user invokable communication mechanism for cache invalidation. <br> An interesting way of avoiding the issue could be implemented by always returning cached data AND always placing a network call to freshen the data. While this approach would allow for quicker paints as well as partial component updates of only fresh data, as well add offline support, it has own drawbacks (such as on-device data storage requirements, in an environment where cached data isn't frequently requested) and lots of measurements would be necessary to determine what gains - if any - this method provides.
- While babel was used for transpilation and the app could theoretically be supported in a host of environments, only Chrome was used for testing on both desktop and mobile.

# Demo
A hosted build of this project is avalible at https://hn-react.netlify.com/. The project can be run locally by running:

```js
npm i
npm run dev
```
