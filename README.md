# Overview

This was a technical test given by [Latize](latize.com) (Head of Engineering, Nurhida Binte Yacob).

The mockup (ui2_customer-overview.jpg) is the property of Latize.

The rest of this repository is the property of Jon Wong, the owner of this GitHub account.

# Pixel-Accuracy CSS

The endeavor was to achieve pixel-accurate positioning and sizing of HTML elements using CSS.

The mockup is overlaid to facilitate this endeavor. See `css/main.css`:

    div.overlay img {
      opacity: 0.2;
      /* Assume mockup is 1024px wide, conventional. */
      width: 1024px;
      }

You can tune the opacity to turn on/off the mockup overlay.

No effort was made to use SCSS because Latize seemed unable (or unavailable) to access Git repos (whether on BitBucket or GitHub), and hence unable to run a Grunt/Gulp build script to see SCSS in action. Still, SCSS capability can be demonstrated on request.

# Sigma.js Hacking

The library Sigma.js was hacked and modified to extend functionality in these areas:

* Display images inside nodes, without node borders
* Display nodes without color fill, allowing edges to pass through and touch circular nodes.
* Curved tapered edges.

# Exercise in CSS for HTML Lists

The right part of the mockup is done completely with HTML lists.

Using CSS to style the positioning, bullet images and connective lines, I was able to implement the exact aethestics required for the tree view.
