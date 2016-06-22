###### w3d2 - HomeWork - Create an Accordion using jQuery - Transitions

##### [*__Normal__ Mode*](https://jjrajani.github.io/w3d1_HW/normalMode/index.html)
* **jQuery Tools**
    * used `background.style.backgroundColor` to style background color
    * **_To wrap your brain around it_**
        * used `$('p').addClass('inactive')` to **make all divs inactive** - _hidden_.
        * then set variable to `$(this).siblings('p')` to allow me to **select only clicked** div.
        * then `.toggleClass()` on selected div to **remove inactive** from **selected class** - _unhidden_.


* **SASS Tools**
    * `height: 0px;` in **combination** with `transition: all 0.2s ease;` to acheive slow **collapse of div**. (Not sure that's the best way to approach)


##### [*__Hard__ Mode*](https://jjrajani.github.io/w3d1_HW/hardMode/index.html)

* **jQuery Tools**
    * Had to **pull image url** out of object and **add "url()"** around the image link as follows.
        
    *    ``` javascript
            var imgUrls = function(imgs) {
            urls = [];
            for (i in imgs) {
            urls.push("url(" + imgs[i].image_url + ")")
            }
            return urls
        } ```
        
    * Used `$('.container').css("background-image", "url()")` to **set background image**.


* **SASS Tools**
    * Notice `&:hover` stacking to **access hover** element of div.
    * Notice `transition: background-color 0.5s` used in combination with `background-color: rgba(0,0,0, 0.8)` to **darken div background**.
    * **_Code Snippet_**
        ``` 
        .left-arrow {
                float: left;
                width: 40px;
            &:hover {
                background-color: rgba(0,0,0, 0.8);
                transition: background-color 0.5s
            }
            img {
                width: 30px;
            }
        }