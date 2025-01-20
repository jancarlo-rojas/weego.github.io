import React from "react";

const About = () => {
  return (
    <div className="page-content">
      <h1>Optimization Guide for Retards 101</h1>
      <h3>Start here</h3>
      <a href="https://github.com/christitustech/winutil">Debloat tool/ Microwin os download</a>
      <p>There is nothing you have to do in the link above but follow these steps: </p>
      <ol>
        <li>Press windows key</li>
        <li>Type powershell or terminal</li>
        <li>Right click and run as administrator</li>
        <li>Copy and paste this: irm "https://christitus.com/win" | iex</li>
        <li>Something should run, be patient</li>
        <li>Go over to tweaks, then select standard and click run tweaks, will take a moment</li>
        <li>At the bottom right click add and activate ultimate performance profile</li>
      </ol>

      <h3>First step done!</h3>
      <p>Keep the tool open and go over to config we will be using it to navigate pc easily</p>

      <p>This next step is to make windows ugly so that it runs better.</p>
      <ol>
        <li>Click system properties in the config tab</li>
        <li>Click advanced in the navbar</li>
        <li>Click performance settings</li>
        <li>Disable it all, or just click adjust for better performance</li>
      </ol>

      <h3>Ensure computer is clean from your porn</h3>
    
      <ol>
        <li>Go back to the tool and select the install tab at the top left</li>
        <li>Under utilities there should be a program called malwarebytes download and install</li>
        <li>Scan computer and quarantine anything it finds</li>
      </ol>

      <h3>Drivers and shit for nvidia</h3>
      <p>Id recommend doing a clean install of your drivers using nvcleaninstall, its linked in the tool aswell under utilities. Very easy</p>
      <p>Or you can just wait for the next time you update drivers and select do a clean install but keep in mind that resets all your settings <br></br> so either
        do it now or redo these next steps later.
      </p>
      <p>If you do decide to use clean install make sure it prompted you to reinstall drivers, using the most up to date is fine but I
         am <br></br>pretty sure there is a optimal driver nvidia made awhile back if you can find that</p>

        <p>If it doesn't prompt you to install drivers you know where to find that</p>

        <h2>Now we optimize gpu stuff</h2>

        <ol>
          <li>Open nvidia control panel</li>
          <li><a href="https://www.youtube.com/watch?v=9eFnUQFFcXo&t=30s">Follow this link and do what it says</a></li>
        </ol>

        <h2>Next up</h2>
        <ol>
          <li>Open nvidia app, download if you dont have it.</li>
          <li>Go to settings</li>
          <li>Go to about</li>
          <li>Check opt in to receive access to early builds</li>
          <li>Now click features tab and ensure the overlay is turned OFF, you can leave on if you think your computer is decent</li>
          <li>Click system on the left side of the screen</li>
          <li>Now choose performance and enable automatic tuning</li>
        </ol>

        <h2>Look up how to enable xmp in the bios very simple shit go on youtube on your <br></br> phone cause it wont be helpful on pc</h2>

        <h3>To be continued...</h3>
        <p>btw if none of this works and your fps doesnt see the slightest results your pc is ass <br></br> sorry to break it to you
        think about investing in a gpu or cpu, or you can as I said before <br></br>look into a custom os or just downscale the resolution to 1600x900 or lower</p>


    </div>
  );
};

export default About;
