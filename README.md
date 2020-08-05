# WebTch

- **Dev structure**

    ```
    project
    │   README.md
    │   package.json    
    │   package-lock.json
    │   webpack.config.js
    │   .gitignore
    │
    └───src
    │   │   index.html
    │   │   index.js
    │   │   app.vue
    │   │
    │   └───assets
    │   │    css
    │   │    img
    │   │    less
    │   │
    │   └───components
    │   │
    │   └───router
    │   │   router.js 
    │   
    └───dist
        │   index.html
        │   bundle.js
    ```


**Project Operation**
The following operations will instantly start the project:
```
git clone https://github.com/lele1307/DeepKW.git

cd Server

npm install

npm run start

cd project

npm install

npm run dev

```
**HTML**
HTML is an integral part of the Vue component demonstrated as ```<template>``` tag. Vue.js uses an HTML-based template syntax that allows programmers to declaratively bind the rendered DOM to the underlying Vue instance’s data. The advantage of Vue is it compiles the templates into Virtual DOM render functions. Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.

In our project, only one index.html document is used as the entrance, which is accessed through index.js.Other pages are all broken down into components, which are stitched together like building blocks.Compared with basic .html document, Vue's template HTML reduces the replication of many HTML statements. At the same time, the grammar in the Vue framework makes the data no longer nested in HTML statements, making the project itself more flexible.

In this project, BaseNav.vue (project/src/components/Common/BaseNav.vue) is a good example. This is a common Navigation component, which uses list rendering to render the navigation name(data) into HTML, and completes the task with a brief HTML statement.

![html](/report/img/exp/html.png)

**CSS**
CSS is also an integral part of the Vue component demonstrated as ```<style>``` tag. The advantage is that the scope of CSS can be limited by adding the "scoped" attribute.

Vue supports a variety of CSS, Less, Sass style expression mode, this project uses basic CSS for style editing. At the same time, we also carried out basic beautification of some HTML parts with the help of Bootstrap4. The use of Flexbox in the layout, this method effectively improves the website screen adaptability.

Original CSS  can be reflected in groups.vue (project/src/components/About/groups.vue).Finally achieving the predetermined goal of the design diagram.

![css_final](/report/img/exp/css.png)
![design](/report/img/05.jpg)

**JS**
The embodiment of Javascript on the client-side is the Vue.js framework. From the structural point of view, index.js is used as the entrance into the program, router.js is the route deployment of the subpage of the website, and other specific js methods are written in the ```<script>``` tag of each component.

There are some examples of specific JS methods:
- The pop-up effect of the About-Group page
- Hide and show the title of the navigation bar subset
- News / Works pages read data from the database in the light of requirements

In addition, we used the Webpack packaging tool to modularize and unify a large number of CSS, JS and other dependent files. To a certain extent, the page loading capacity has been optimized.

The entire Vue project does not rely on Vue CLI scaffolding, and the project configuration files are all original.

**SVG**
We tried to use Inkscape as a tool for original SVG design.
- The arrow shape mainly reflected in Contact page (project / src / assets / img / Contact / arrow.svg)
- LOGO  of ```<title>``` tag is converted to ico format via svg.

![logo](/report/img/exp/svg1.png)

In addition to the original SVG, the project also references the font-awsome icon font library. This font library can provide scalable vector icons. Its scalability can better adapt to the page size.

![svg](/report/img/exp/svg.png)


**Deficiencies**
The construction of the website is basically completed, including the communication between the client and the server, and the configuration of the database. However,  some styles and functions on the sub-webpage are still unfinished. For example, the About-Member page is just the basic layout, with simple JS interaction methods, but the formal style has not been completed yet and needs further improvement.

**Teamwork**
Our two-person team mainly uses Git for version control and GitHub for code merging and storage. Only in the circumstance of online communication, this tool greatly improves work efficiency. In the early stage of development, we agreed to use the Vue.js framework. In the early stage, we have been learning by ourselves and helping each other. Although the final product still has a gap to launching, the first Web development experience is still impressive for us.