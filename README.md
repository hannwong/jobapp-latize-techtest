# Overview

This was a technical test given by [Latize](latize.com) (Head of Engineering, Nurhida Binte Yacob).

The mockup (ui2_customer-overview.jpg) is the property of Latize.

The rest of this repository is the property of Jon Wong, the owner of this GitHub account.

# Pixel-Accurate CSS

The endeavor was to achieve pixel-accurate positioning and sizing of HTML elements using CSS.

The mockup is overlaid to facilitate this endeavor. See `css/main.css`:

    div.overlay img {
      opacity: 0.2;
      /* Assume mockup is 1024px wide, conventional. */
      width: 1024px;
      }

You can tune the opacity to turn on/off the mockup overlay.

SCSS is done in `scss` folder. You can compile with gem-installed `sass`. The SCSS is much cleaner and neater than `css/main.css`.

# Sigma.js Hacking (and Reverse-Engineering)

The library Sigma.js was hacked and modified to extend functionality in these areas:

* Display images inside nodes, without node borders
* Display nodes without color fill, allowing edges to pass through and touch circular nodes.
* Curved tapered edges.
* Node label placement, multiple labels.

**I have no prior experience with Sigma.js. I reverse-engineer new/emerging technologies rapidly, and can hence extend them for new precedents in solutions.**

I have taken apart various technologies based on various platforms --- Java, C/C++, Ruby, Perl, Javascript, Python, Scala, Lisp, and more. I started "*programming*" by reverse-engineering everything I got my hands on, effectively *learning any technology within days or weeks* (rather than months or years).

# Exercise in CSS for HTML Lists

The right part of the mockup is done completely with HTML lists.

Using CSS to style the positioning, bullet images and connective lines, I was able to implement the exact aethestics required for the tree view.

# Git Competence

At http://jon-wong-sutd.github.io/git-lessons/git-lesson/

That's an attempt at creating a trim yet complete *Getting Started* guide to Git. Students at SUTD (and everybody in Singapore, in fact) needs to get comfortable with Git and Agile working techniques.

# Job Description

http://startupjobs.asia/job/28446-front-end-engineer-front-end-developers-latize-pte-ltd-singapore

Other roles I'm attempting: http://startupjobs.asia/job/16911-software-engineer-full-stack-developer-it-job-at-latize-pte-ltd-singapore

I'm hopeful that I can do more for Latize. Nurhida responded to my email positively when I suggested that they remove SVN as a requirement (I know SVN and CVS); central SVN repo hinders rapid Agile techniques. She seemed very interested in having me install world-class productivity and best practices (eg. migrating from SVN to Git, for starters).

I'm really psyched and excited to get this chance to help create a world-class IT company in Singapore! For many years now, companies here are at least a decade behind world-class productivity and best practices.

The *Front end Engineer* job description follows:

## Front end Engineer

At Latize we put the power in the hands of the masses to bring together diverse information and blend them seamlessly. We provide intuitive tools to make it work for you. This is what we do with our revolutionary data management platform – Ulysses; we enable non-technical users to capture, harmonise, and use data. Welcome to the real data revolution!

## Responsibilities

We are looking for a Front End Engineer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with UI/UX Architect and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works.

### Responsibilities:

* Develop new user-facing features
* Build reusable code, styles and libraries for future use
* Ensure the technical feasibility of UI/UX designs
* Implement responsive web design principles to ensure that UI features render well across multiple devices
* Optimize web applications for maximum speed, scalability and security
* Assure that all user input is validated before submitting to back-end
* Collaborate with other engineers and stakeholders

## Requirements

### Skills And Qualifications:

* Bachelor’s Degree in Computer Science or related field
* At least 3 years’ web development experience is a must
* Proficient understanding of HTML5, CSS3 and JavaScript frameworks, including jQuery
* Basic understanding of server-side CSS pre-processing platforms, such as LESS and SASS
* Experience with AJAX, asynchronous request handling, partial page updates and RESTful Services
* Experience with advanced JavaScript libraries and frameworks, such as AngularJS, ReactJS, D3, Kendo is a plus
* Basic knowledge of image authoring tools, to be able to crop, resize, or perform small adjustments on an image. * * * Familiarity with tools such as as Gimp or Photoshop is a plus.
* Proficient understanding of cross-browser compatibility issues and ways to work around them.
* Proficient understanding of code versioning tools, such as SVN, Git
* Good understanding of SEO principles and ensuring that web applications will adhere to them.
