const main = document.querySelector('main');

const hamburger = document.querySelector('[data-menu]');

const menu = () => {
  const modal = document.createElement('section');
  modal.className = 'about-menu';
  modal.innerHTML = `<ul class="menu-list">
  <div class="close flex">
    <p>X</p>
  </div>
  <li><a class='hyperlink' href="index.html">Home <div class="">
      <div class="line"></div>
    </div></a></li>
  <li><a class='hyperlink' href="about.html">About <div class="middle-underline flex justify-center">
    <div class="line"></div>
  </div></a></li>
    <li><a class='hyperlink' href="index.html#program-section">Program <div class="middle-underline flex justify-center">
      <div class="line"></div>
    </div></a></li>
    <li><a class='hyperlink' href="index.html#speakers-section">Speakers <div class="middle-underline flex justify-center">
      <div class="line"></div>
    </div></a></li>
    <li><a class='hyperlink' href="about.html#partners">Sponsors <div class="middle-underline flex justify-center">
      <div class="line"></div>
    </div></a></li>
  </ul>`;
  main.appendChild(modal);

  const hyperlinks = document.querySelectorAll('.hyperlink');
  const menuList = document.querySelector('.menu-list');

  hyperlinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuList.parentNode.remove();
    });
  });

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    menuList.parentNode.remove();
  });
};

hamburger.addEventListener('click', menu);