---
title: RAWGraphs updates with version 1.3.0
date: 2018-06-08T13:20:51.000Z
author: RAW Graphs Team
layout: post
subtitle:
  - ''
secondary_title:
  - ''
discover_more_description:
  - ''
background_image:
  - '0'
page_background_image:
  - ''
featured_video:
  - ''
discover_more_left:
  - 'null'
discover_more_right:
  - 'null'
image: ./1-3-0.png
categories:
  - New Release
tags:
  - changelog
  - new-release
  - visual models
path: /new-release/rawgraphs-updates-with-version-1-3-0/
---
Today we are releasing a [new version of RAWGraphs (1.3.0)](https://github.com/densitydesign/raw/releases/tag/v1.3.0) that can be used on our website: [app.rawgraphs.io](http://app.rawgraphs.io/).

The main improvement is the adoption of the [d3.js 5.x](https://github.com/d3/d3/blob/master/CHANGES.md) version, all the charts has been rewrote accordingly.

This allowed us to add two new visual models: &#8220;bee swarm plot&#8221; and &#8220;contour plot&#8221;.

  * **Bee swarm plot** are useful to show distributions of item avoiding overlappings. If you want to learn how to create one with RAWGraphs, check this post: [How to make a beeswarm plot](https://rawgraphs.io/learning/how-to-make-a-beeswarm-plot/).

<div id="attachment_1070" style="width: 610px" class="wp-caption aligncenter">
  <a href="https://rawgraphs.io/wp-content/uploads/2018/05/beeswarm-cover.png">![](./beeswarm-cover-783x400.png)</a>
  
  <p id="caption-attachment-1070" class="wp-caption-text">
    A bee swarm plot representing Kickstarted campaigns. <a href="https://rawgraphs.io/learning/how-to-make-a-beeswarm-plot/">See how to create it here</a>.
  </p>
</div>

  * **Contour plot** show the estimated density of point clouds, which is especially useful to avoid overlappings in large datasets. If you want to learn how to create one with RAWGraphs, check this post: [How to make a beeswarm plot](https://rawgraphs.io/learning/how-to-make-a-contour-plot/).

<div id="attachment_1076" style="width: 610px" class="wp-caption aligncenter">
  <a href="https://rawgraphs.io/wp-content/uploads/2018/05/contourplot-cover.png">![](./contourplot-cover-778x400.png)</a>
  
  <p id="caption-attachment-1076" class="wp-caption-text">
    A contour plot showing the distribution of temperature during the second world war. <a href="https://rawgraphs.io/learning/how-to-make-a-contour-plot/">See how to create it here</a>.
  </p>
</div>

Since all the charts have been updated, you could experience bugs/errors.

If you find one of them, please report it using the GitHub function: [github.com/densitydesign/raw/issues](https://github.com/densitydesign/raw/issues)