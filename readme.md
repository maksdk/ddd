Domain Driven Design
<!--
Thank you for taking the time to contribute towards Phaser. Before submitting your issue, check the following:

1. This repo is for Phaser 3 only. Phaser 2.x issues should be raised in the [Phaser CE](https://github.com/photonstorm/phaser-ce) repo.

2. This repo should not be used for technical support. If you're struggling to use Phaser then post your question to the [forum](https://phaser.discourse.group/), [Slack](https://phaser.io/community/slack) or [Discord](https://phaser.io/community/discord) channels. GitHub Issues are for bugs and feature requests only.

3. Make sure your issue isn't a duplicate, or has already been fixed.

4. If your issue contains _any_ form of hostility it will be closed and you will be blocked from access to all our repos. Be nice. We do this for free.

5. If all the above is ok, fill out the template below.
-->


## Version
<!--
Enter the version of Phaser you're using. You can find this output to the Dev Tools console in your browser.
-->
* Phaser Version: 3.19.0
<!--
Place the operating system **below** this comment.
-->
* Operating system: Microsoft Windows 10 Pro / Version 1809 / Build 17763.775
<!--
If the bug is browser specific, please enter the version **below** this comment:
-->
* Browser:  Microsoft Edge 44.17763.771.0


## Description

<!--
I am using ScaleManager's  `this.scale.startFullscreen()`  function and it works ok in all browsers exept Edge. In Ege when I try to call the method I get an error in the console :  `Unable to get property 'then' of undefined or null reference`.

Image of error: 
![issue_phaser](https://user-images.githubusercontent.com/33781214/66545214-e55da800-eb42-11e9-8006-ac6584bc2ec0.png)
-->


## Example Test Code
```javascript

const config = {
   type: Phaser.AUTO,
   width: 600,
   height: 600,
   scene: { create: create },
   scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
   },
   backgroundColor: 0xFFFF00
};

const game = new Phaser.Game(config);

function create() {
   const button = new Phaser.GameObjects.Rectangle(this, 300, 300, 300, 100, 0xFF0000);
   button.setInteractive();
   this.add.existing(button);

   button.on("pointerdown", () => {
      if (this.scale.isFullscreen) {
         this.scale.stopFullscreen();
      } else {
         this.scale.startFullscreen();
      }
   });

   const title = new Phaser.GameObjects.Text(this, 300, 300, "CLICK ME TO\nCALL FULLSCREEN", {
      color: "#ffffff", 
      fontSize: "20px", 
      align: "center"
   });
   title.setOrigin(0.5);
   this.add.existing(title);
}
```
<!--
All issues must have source code demonstrating the problem. We automatically close issues after 30 days if no code is provided.

The code can be pasted directly below this comment, or you can link to codepen, jsbin, or similar. The code will ideally be runnable instantly. The more work involved in turning your code into a reproducible test case, the longer it will take the fix the issue.
-->


## Additional Information

<!--
Is there anything else you think would be useful for us to reproduce the error? Do you have a solution in mind?

If you have any screen shots or gifs demonstrating the issue (if it can't be seen when running your code), please include those too.
-->
