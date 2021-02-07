# Blogfolio
Portfolio + Blog + Project Showcase Hugo theme

<br>

## Installation 
Follow the standard process of creating a hugo website, followed by below command from 
the root directory of your project to add the theme `Blogfolio` as a submodule (if you haven't initialized git then run `git init` first):

```git
git submodule add https://github.com/sarthakpranesh/Blogfolio themes/Blogfolio
```


<br>

## Getting started 
Before you test the theme, there are a few configs you need to setup so the 
theme works perfectly.

1. Copy the below content into your projects `config.toml` file
```toml
theme = "Blogfolio"

# Details for the home page
# Also author and shortAbout will be used in meta data for setting up "application-name" and "description"
[params]
  author = "Your Name"
  shortAbout = "Your main Occupation"
  about = "About You --- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis tincidunt nisi ut posuere. Cras in fermentum elit, eleifend rutrum lectus. Suspendisse elementum finibus erat, sit amet commodo arcu ornare ac. Aliquam et mauris eget odio facilisis dapibus."
  contact = "Contact You --- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis tincidunt nisi ut posuere. Cras in fermentum elit, eleifend rutrum lectus. Suspendisse elementum finibus erat, sit amet commodo arcu ornare ac. Aliquam et mauris eget odio facilisis dapibus."

  [[params.homeSections]]
    type = "chip"
    title = "What I Do"
    content = ["React Native", "Nodejs", "Golang", "Firebase", "Expo", "Mongo Atlas", "Python", "Mininet", "HTML5", "C", "C++", "Java", "Electron", "Blogging", "Planting"]
  [[params.homeSections]]
    type = "para"
    title = "Sample Para Section"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis tincidunt nisi ut posuere. Cras in fermentum elit, eleifend rutrum lectus. Suspendisse elementum finibus erat, sit amet commodo arcu ornare ac. Aliquam et mauris eget odio facilisis dapibus."

  [[params.contacts]]
    name = "github"
    link = ""
  [[params.contacts]]
    name = "linkedin"
    link = ""
  [[params.contacts]]
    name = "instagram"
    link = ""
  [[params.contacts]]
    name = "twitter"
    link = ""
  [[params.contacts]]
    name = "facebook"
    link = ""

# Top Menu Nav
[menu]
  [[menu.main]]
    name = "Home"
    pre = "home"
    url = "/"
    weight = 1
  [[menu.main]]
    name = "Blogs"
    pre = "pen-tool"
    url = "/blogs/"
    weight = 2
  [[menu.main]]
    name = "Projects"
    pre = "code"
    url = "/projects/"
    weight = 3
  [[menu.main]]
    name = "Tags"
    pre = "tag"
    url = "/tags/"
    weight = 4
```

2. Now run the following commands from your project's root to create necessary directories and some sample content
```bash
cd content
mkdir -p blogs/example projects
echo '---
title: "Title of Blog Content"
date: 2020-07-04T11:46:58+05:30
draft: false
tags: ["Tag 1", "Tag 2", "Tag 3"]
summary: "Open Source social media platform built with React Native and Firebase. Uses Google OAuth and Hermes JavaScript engine while providing intuitive design inspired by Instagram and application size of just 9 MB. It provides users the ability to create their own communities based on common interests, affiliations, etc."
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis tincidunt nisi ut posuere. Cras in fermentum elit, eleifend rutrum lectus. Suspendisse elementum finibus erat, sit amet commodo arcu ornare ac. Aliquam et mauris eget odio facilisis dapibus.
' >> blogs/example/1.md
echo '---
title: "Title of Project Content"
date: 2020-07-04T11:46:58+05:30
draft: false
tags: ["Tag 4", "Tag 5", "Tag 6"]
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis tincidunt nisi ut posuere. Cras in fermentum elit, eleifend rutrum lectus. Suspendisse elementum finibus erat, sit amet commodo arcu ornare ac. Aliquam et mauris eget odio facilisis dapibus."
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis tincidunt nisi ut posuere. Cras in fermentum elit, eleifend rutrum lectus. Suspendisse elementum finibus erat, sit amet commodo arcu ornare ac. Aliquam et mauris eget odio facilisis dapibus.
' >> projects/p1.md
```

3. Run `hugo server` to test the site

<br>

## Adding Content
All the content for the website should reside in the `content` directory. Whereas the folders in the `content` directory represent different sections accessible from the top navigation (if you add a new section, then make sure you add it to the site menu in config file). All the icons used in this project are [`Feather Icons`](https://feathericons.com) so make sure you use the right `icon` name when adding more `contacts` or `menu`

#### Home Sections
You can add more sections on the home by defining `params.homeSection` under `params` like the following examples:

Adding Chip Section:
```toml
[params]
  ...
  [[params.homeSections]]
    type = "chip"
    title = "Title of the Section"
    content = ["Item 1", "Item 2", "Item 3" , "Item 4"]
```
Adding Paragraph Section:
```toml
[params]
  ...
  [[params.homeSections]]
    type = "para"
    title = "Title of the Section"
    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis tincidunt nisi ut posuere. Cras in fermentum elit, eleifend rutrum lectus. Suspendisse elementum finibus erat, sit amet commodo arcu ornare ac. Aliquam et mauris eget odio facilisis dapibus."
```

<br>

## Contributing
All contributions are welcomed. For contributing make sure you `fork` this repo and on completion open a `pr` to the `develop` branch of this project.

<br>

## Issues
For any bugs, feature requests, discussions or comments please open an issue [here](https://github.com/sarthakpranesh/Blogfolio/issues)
