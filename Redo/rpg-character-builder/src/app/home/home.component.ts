import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="home-page">
      <h1>rpg-character-builder</h1>
      <br />
      <h2>Do You Love Video Games? So Do We!</h2>
    </div>
    <div>
      <p>
        <br />
        Are you a rpg enthusiast who loves to indulge in immersive gameplay and
        creative character customization? Or maybe you just want to sharpen your
        Angular skills. If so, you are in the right place!
      </p>
      <br />
      <p>
        rpg-character-builder is a platform that allows users to create and
        manage their own collection of characters. This hands-on-experience can
        deliver a sense of individuality and uniqueness within your character
        builds. With so many options and ideas to choose from, the possibilities
        are endless.
      </p>
      <br />
      <p>
        rpg-character-builder allows you access to manage several characters
        along with having the ability to dictate physical characteristics (i.e.
        body build, skin tone, hair style, hair color, eye color) multiple
        wardrobes along with accessories (i.e. headwear, jewelry, makeup, etc.)
        and so much more! And if you're ever feeling as though you have no idea
        of the direction you would like to start, we have even implemented a
        randomize button that will allow you to receive a randomized character
        to give you a chance to see what you are in store for.
      </p>
      <br />
      <p>
        Being able to create your own image of your character enhances the
        gaming experience. Allow us the opportunity to place that sense of
        creativity right at your fingertips. It is simple to get started. First
        create an account with us by clicking account at the top of the page.
        Next click on new account and ensure to type in your name and email.
        Once you are finished with that and have submitted your information
        click characters at the top of the page to begin the thrilling
        adventure!
      </p>
      <br />
      <div class="highlights-container">
        <div class="highlight">
          <img
            src="/assets/purplehair.jpg"
            alt="character build of female with wings"
          />
          <p></p>
          <br />
          <br />
          <br />
        </div>
        <div class="highlight">
          <img
            src="/assets/whitehair.jpg"
            alt="image of girl with white hair"
          />
          <p></p>
        </div>
        <div class="highlight">
          <img
            src="/assets/wings.jpg"
            alt="image of girl with red hair"
          />
        </div>
      </div>
    </div>
  `,
  styles: `.highlights-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
  }

  .highlight {
    text-align: center;
    flex: 0 1 calc(33.333% - 20px);
    box-sizing: border-box;
  }
  .highlight img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  .highlight p {
    margin-top: 10px;
  }`
})
export class HomeComponent {

}
