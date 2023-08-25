import { getLibs } from '../../scripts/utils.js';

// size: [heading, body, ...detail]
// blockTypeSizes array order: heading, body, detail, button, link
const blockTypeSizes = {
  small: ['m', 's', 's', 'l', 's'],
  medium: ['l', 'm', 'm', 'l', 'm'],
  large: ['xl', 'm', 'l', 'l', 'm'],
  xlarge: ['xxl', 'l', 'xl', 'l', 'l'],
  'homepage-link-bar': ['m', 'xs', 'm', 's', 'xs'],
};

const icons = {
  'edit-pdfs': `<svg width="19.373" height="17.688" viewBox="0 0 19.373 17.688">
      <g id="Group_596630" data-name="Group 596630" transform="translate(9367.873 9248.978)">
        <path id="Path_625438" data-name="Path 625438" d="M11.152,14.19h-.423L7.938,16.717V14.19H2.884V4.083H16.361v6.3a5.546,5.546,0,0,1,1.685.26v-6.3a2.032,2.032,0,0,0-.59-1.432A1.858,1.858,0,0,0,16.192,2.4H3.052A1.716,1.716,0,0,0,1.789,2.9,1.987,1.987,0,0,0,1.2,4.251v9.771a1.8,1.8,0,0,0,.59,1.348,1.859,1.859,0,0,0,1.263.505h3.2v3.959a.223.223,0,0,0,.253.253A.262.262,0,0,0,6.674,20l4.212-3.734c-.011-.141-.015-.286-.015-.43A5.324,5.324,0,0,1,11.152,14.19Z" transform="translate(-9369.072 -9251.376)" fill="#444" fill-rule="evenodd"/>
        <path id="Path_625439" data-name="Path 625439" d="M17.074,4.8v6.243c.045,0,.051.026.023.075h-.023a5.477,5.477,0,0,0-5.223,3.829c-.055.015-.08,0-.067-.038h-.342L8.651,17.431V14.9H3.6V4.8Z" transform="translate(-9369.785 -9252.089)" fill="#444" fill-rule="evenodd" opacity="0.1"/>
        <path id="Path_625440" data-name="Path 625440" d="M5.993,10.013a.417.417,0,0,1,.421-.421h9.265a.421.421,0,1,1,0,.842H6.414A.417.417,0,0,1,5.993,10.013Zm0,2.527a.417.417,0,0,1,.421-.421h7.581a.421.421,0,1,1,0,.842H6.414A.417.417,0,0,1,5.993,12.54ZM17.787,13.8a4.212,4.212,0,1,1-4.212,4.212A4.212,4.212,0,0,1,17.787,13.8Zm.378,1.68h-.751a.469.469,0,0,0-.469.469h0v1.236l-1.2,0a.469.469,0,0,0-.469.469h0l-.008.738a.469.469,0,0,0,.469.468h1.211l.006,1.217a.468.468,0,0,0,.468.468h0l.742,0a.469.469,0,0,0,.47-.469h0l0-1.222h1.215a.469.469,0,0,0,.469-.468h0l0-.748a.468.468,0,0,0-.468-.468H18.629l0-1.221a.469.469,0,0,0-.47-.469Z" transform="translate(-9370.498 -9253.516)" fill="#444"/>
      </g>
    </svg>`,
  'edit-photos': `<svg width="20.12" height="17.885" viewBox="0 0 20.12 17.885">
      <g id="Group_596628" data-name="Group 596628" transform="translate(9431.12 9298.408)">
        <circle id="Ellipse_24866" data-name="Ellipse 24866" cx="2" cy="2" r="2" transform="translate(-9419 -9295.408)" fill="#444"/>
        <path id="Path_129410" data-name="Path 129410" d="M13,9.277a2.517,2.517,0,0,1,1.309.693l2.044,1.863V7H13Z" transform="translate(-9429.589 -9298.701)" fill="#444" opacity="0.3"/>
        <path id="Path_129411" data-name="Path 129411" d="M6.963,7.734l2.486,2.487V7H5.19a2.515,2.515,0,0,1,1.774.734Z" transform="translate(-9430.509 -9298.701)" fill="#444" opacity="0.3"/>
        <path id="Path_129412" data-name="Path 129412" d="M5,7.019C5.07,7.013,5.141,7,5.212,7H5Z" transform="translate(-9430.531 -9298.701)" fill="#444" opacity="0.3"/>
        <path id="Path_129413" data-name="Path 129413" d="M5.353,7.471V3A3.353,3.353,0,0,0,2,6.353V7.471Z" transform="translate(-9430.885 -9299.173)" fill="#444" opacity="0.3"/>
        <path id="Path_129414" data-name="Path 129414" d="M14.531,1H5.589A5.6,5.6,0,0,0,0,6.589V13.3a5.6,5.6,0,0,0,5.589,5.589h8.942A5.6,5.6,0,0,0,20.12,13.3V6.589A5.6,5.6,0,0,0,14.531,1ZM5.589,3.236h8.942a3.353,3.353,0,0,1,3.353,3.353V12.54L15.84,10.677a2.5,2.5,0,0,0-3.509-.042l-1.354,1.208-3.4-3.4a2.513,2.513,0,0,0-3.539-.012l-1.8,1.737V6.589A3.353,3.353,0,0,1,5.589,3.236Zm8.942,13.414H5.589A3.353,3.353,0,0,1,2.236,13.3v-.013L5.6,10.024a.278.278,0,0,1,.393,0l4.15,4.152a1.118,1.118,0,0,0,1.536.042l2.186-1.96c.137-.134.224-.167.429.036l3.061,2.794a3.347,3.347,0,0,1-2.827,1.56Z" transform="translate(-9431.12 -9299.408)" fill="#444"/>
        <path id="Path_129415" data-name="Path 129415" d="M11.236,5.794a1.677,1.677,0,0,1,1.677-1.677,1.66,1.66,0,0,1,.559.1V3H9V7.471h3.912a1.677,1.677,0,0,1-1.677-1.677Z" transform="translate(-9430.06 -9299.173)" fill="#444" opacity="0.3"/>
        <path id="Path_129416" data-name="Path 129416" d="M12.5,7.011h.559v-.1a1.66,1.66,0,0,1-.559.1Z" transform="translate(-9429.647 -9298.712)" fill="#444" opacity="0.3"/>
      </g>
    </svg>`,
  'edit-videos': `<svg width="22.046" height="15.512" viewBox="0 0 22.046 15.512">
      <g id="Group_596631" data-name="Group 596631" transform="translate(9291 9297.035)">
        <path id="Path_967884" data-name="Path 967884" d="M23.826,8.014a4.752,4.752,0,0,0-.883-2.185,3.157,3.157,0,0,0-2.2-.934c-3.083-.224-7.716-.224-7.716-.224h0s-4.628,0-7.716.224a3.157,3.157,0,0,0-2.2.934,4.725,4.725,0,0,0-.878,2.185A32.881,32.881,0,0,0,2,11.585v1.671a33.613,33.613,0,0,0,.219,3.576,4.777,4.777,0,0,0,.874,2.187,3.766,3.766,0,0,0,2.432.943c1.766.168,7.5.219,7.5.219s4.633-.009,7.716-.228a3.164,3.164,0,0,0,2.2-.934,4.752,4.752,0,0,0,.878-2.187,33.523,33.523,0,0,0,.224-3.576V11.585a33.6,33.6,0,0,0-.219-3.571Zm-13.082,7.27v-6.2L16.7,12.2Z" transform="translate(-9293 -9301.705)" fill="#444"/>
      </g>
    </svg>`,
  'fill-and-sign-pdfs': `<svg width="19.206" height="17.605" viewBox="0 0 19.206 17.605">
      <g id="Group_596632" data-name="Group 596632" transform="translate(9237.5 9251.269)">
        <path id="Path_611353" data-name="Path 611353" d="M11.547,16.725c.248.36.416.712.664,1.072a1.732,1.732,0,0,0,1.249.72,2.048,2.048,0,0,0,1.745-.712,1.765,1.765,0,0,0,1.168.8h.256c.584,0,1.372-.336,2.24-2.057l.337-.632-1.08-1.248-.584,1.248c-.168.36-.416.984-.832.9a1.02,1.02,0,0,1-.584-.36,3.208,3.208,0,0,0,.5-2.417,1.13,1.13,0,0,0-.92-.712,1.242,1.242,0,0,0-1.249.712,3.89,3.89,0,0,0-.328,2.153.423.423,0,0,1-.584.36,4.642,4.642,0,0,1-.752-1.617v-.088c1.337-2.153-2.329-2.329-1.913-.176v.088c-.5.712-2.1,2.249-2.881,2.249H1.927L3.36,12.932,12.972,2.689a.256.256,0,0,1,.184-.088.285.285,0,0,1,.184.072l2.049,2.049a.332.332,0,0,1,.008.448L5.9,15.3a.8.8,0,0,0,1.168,1.088l9.5-10.131a1.947,1.947,0,0,0-.04-2.673L14.46,1.536A1.938,1.938,0,0,0,13.124,1a1.828,1.828,0,0,0-1.321.592L2.079,11.964a.771.771,0,0,0-.168.28l-1.865,5.3a.815.815,0,0,0,.1.728.823.823,0,0,0,.656.336h8A5.067,5.067,0,0,0,11.547,16.725Z" transform="translate(-9237.5 -9252.269)" fill="#444" fill-rule="evenodd"/>
        <path id="Path_611354" data-name="Path 611354" d="M4.2,13.3,13.864,2.921a.251.251,0,0,1,.182-.089.28.28,0,0,1,.182.072l2.037,2.171a.338.338,0,0,1,.008.451L6.905,15.522Z" transform="translate(-9238.339 -9252.635)" fill="#444" fill-rule="evenodd"/>
      </g>
    </svg>`,
  'view-pdfs': `<svg width="16" height="18.667" viewBox="0 0 16 18.667">
      <g id="Group_596629" data-name="Group 596629" transform="translate(9504.006 9250.722)">
        <path id="Path_625435" data-name="Path 625435" d="M17.222,5.711V17.889H4.778V2.778H14.2ZM14.289,1H4.778A1.783,1.783,0,0,0,3,2.778V17.889a1.783,1.783,0,0,0,1.778,1.778H17.222A1.783,1.783,0,0,0,19,17.889V5.444a1.64,1.64,0,0,0-.444-1.067l-3.2-2.933A1.472,1.472,0,0,0,14.289,1Z" transform="translate(-9507.006 -9251.722)" fill="#444"/>
        <path id="Path_625436" data-name="Path 625436" d="M17.5,5.943v12.22H5V3h9.462Z" transform="translate(-9507.254 -9251.97)" fill="#444" opacity="0.1"/>
        <path id="Path_625437" data-name="Path 625437" d="M8.719,12.745a7.7,7.7,0,0,1-.483.628c-.078.09-.154.172-.228.247a1.284,1.284,0,0,1-.748.462.244.244,0,0,1-.171-.06.339.339,0,0,1-.049-.054A.226.226,0,0,1,7,13.85a.259.259,0,0,1,0-.067.4.4,0,0,1,.022-.072.992.992,0,0,1,.239-.322q.044-.043.1-.087a6.669,6.669,0,0,1,1.611-.931Q8.843,12.568,8.719,12.745Zm5.613-1.653a3.91,3.91,0,0,1,.714.054.475.475,0,0,1,.39.268.324.324,0,0,1,.015.089.433.433,0,0,1-.009.105c-.037.187-.235.308-.506.308a1.043,1.043,0,0,1-.107-.013.932.932,0,0,1-.122-.015,3.75,3.75,0,0,1-1.448-.715c.111-.017.218-.03.32-.04a7.275,7.275,0,0,1,.751-.04Zm-2.156-.222c-.287.059-.583.127-.883.2-.216.056-.435.117-.653.182.116-.232.223-.462.316-.681.123-.289.238-.578.344-.861.093.143.189.281.288.414s.2.258.3.38.2.238.308.349l-.025.005ZM10.694,5.879a.311.311,0,0,1,.023-.031.266.266,0,0,1,.208-.115.245.245,0,0,1,.155.05.649.649,0,0,1,.153.5,3.456,3.456,0,0,1-.048.536,8.549,8.549,0,0,1-.208.932q-.035.127-.075.259a5.367,5.367,0,0,1-.233-.758,3.713,3.713,0,0,1-.088-.618,2.179,2.179,0,0,1,.021-.462.843.843,0,0,1,.094-.289Zm5.671,5.694a.817.817,0,0,0-.051-.212.751.751,0,0,0-.153-.247,1.165,1.165,0,0,0-.291-.218,3.231,3.231,0,0,0-1.507-.282c-.215,0-.445.01-.688.031s-.5.051-.764.092a7.081,7.081,0,0,1-.837-.953,8.663,8.663,0,0,1-.523-.794q.116-.356.2-.678c.034-.126.064-.247.092-.366q.058-.252.1-.479c.018-.1.033-.206.044-.3a3.994,3.994,0,0,0,.029-.465A1.544,1.544,0,0,0,11.5,5.418a.872.872,0,0,0-.168-.094,1.03,1.03,0,0,0-.4-.074.772.772,0,0,0-.381.106.8.8,0,0,0-.287.279,1.685,1.685,0,0,0-.186.866,3.6,3.6,0,0,0,.033.425,5.893,5.893,0,0,0,.492,1.65c-.048.137-.1.274-.146.411-.1.273-.206.547-.321.832-.058.142-.118.286-.181.435a14.864,14.864,0,0,1-.733,1.486,6.864,6.864,0,0,0-2.469,1.483,1.085,1.085,0,0,0-.242.472.763.763,0,0,0-.012.189.7.7,0,0,0,.12.346.812.812,0,0,0,.129.148.861.861,0,0,0,.2.13L7,14.532a1.051,1.051,0,0,0,.181.06,1.2,1.2,0,0,0,.272.031,1.4,1.4,0,0,0,.584-.138,2.3,2.3,0,0,0,.383-.226,4.364,4.364,0,0,0,.73-.688,8.684,8.684,0,0,0,.658-.878c.153-.231.3-.465.427-.692q.3-.1.6-.189c.2-.06.4-.116.606-.168l.128-.031c.4-.1.783-.185,1.147-.248q.1.088.206.167.2.158.4.282.1.062.194.117a3.6,3.6,0,0,0,1.778.517,1.334,1.334,0,0,0,.729-.173.785.785,0,0,0,.106-.081.7.7,0,0,0,.185-.272.739.739,0,0,0,.049-.235A.8.8,0,0,0,16.365,11.573Z" transform="translate(-9507.44 -9252.136)" fill="#444"/>
      </g>
    </svg>`

}

function goToDataHref() {
  if (this.dataset.target === '_blank') {
    window.open(this.dataset.href, '_blank');
  } else {
    window.location.href = this.dataset.href;
  }
}

function getBlockSize(el) {
  const sizes = Object.keys(blockTypeSizes);
  return sizes.find((size) => el.classList.contains(size)) || sizes[7];
}

function decorateLinks(el, size) {
  const links = el.querySelectorAll('a:not(.con-button)');
  if (links.length === 0) return;
  links.forEach((link) => {
    if (
      link.closest('.section')
      && link.closest('.section').querySelector('.quick-tools-bar')
    ) {
      // link.setAttribute('class', 'con-button outline button-s');
      if (
        link.querySelector('img')
        && link.querySelector('img').getAttribute('alt')
      ) {
        link.insertAdjacentHTML(
          'beforeEnd',
          `<span class="spectrum-Button-label">${link
            .querySelector('img')
            .getAttribute('alt')}</span>`,
        );
      }

      // link.outerHTML = `<strong>${link.outerHTML}</strong>`;
    }
    const parent = link.closest('p, div');
    parent.setAttribute('class', `body-${size}`);
  });
}

function getBlockSegmentBackground(el) {
  const image = el.querySelector('img');
  const text = el.textContent.trim();
  let background = false;
  if (image) {
    background = `url(${image.getAttribute('src')})`;
  } if (text !== '') {
    background = text;
  }
  el.remove();
  return background;
}

/* function decorateBlockBg(block, node) {
  node.classList.add('background');
  if (!node.querySelector('img')) {
    node.style.background = node.textContent.trim();
    [...node.children].forEach((e) => {
      e.remove();
    });
  } else {
    node.classList.add('background');
    if (node.childElementCount > 1) {
      const viewports = ['mobileOnly', 'tabletOnly', 'desktopOnly'];
      if (node.childElementCount === 2) {
        node.children[0].classList.add(viewports[0], viewports[1]);
        node.children[1].classList.add(viewports[2]);
      } else {
        [...node.children].forEach((e, i) => {
          e.classList.add(viewports[i]);
        });
      }
    }

    [...node.children].forEach((e) => {
      const image = e.querySelector('img');
      const p = e.querySelectorAll('p');
      if (image && p.length > 1) {
        const text = p[1].textContent.trim();
        if (text !== '') {
          const points = text?.slice(text.indexOf(':') + 1).split(',');
          const [x, y = '', s = ''] = points;
          image.style.objectPosition = `${x.trim().toLowerCase()} ${y.trim().toLowerCase()}`;
          if (s !== '') image.style.objectFit = s.trim().toLowerCase();
          const picture = e.querySelector('picture');
          e.insertBefore(picture, p[0]);
        }
      }
    });
  }
} */

function enforceHeaderLevel(node, level) {
  const clone = document.createElement(`H${level}`);
  for (const attr of node.attributes) {
    clone.setAttribute(attr.name, attr.value);
  }
  clone.innerText = node.innerText;
  node.replaceWith(clone);
}

export default async function init(el) {
  const { decorateButtons, decorateBlockText, decorateBlockBg } = await import(`${getLibs()}/utils/decorate.js`);
  const { decorateBlockAnalytics, decorateLinkAnalytics } = await import(`${getLibs()}/martech/attributes.js`);

  el.querySelectorAll('span.icon').forEach((span) => {
    const icon = icons[span.getAttribute('class').replace('icon icon-', '')];
    if (icon) span.innerHTML = icon;
    span.classList.add('margin-right');
  });

  const blockSize = getBlockSize(el);
  decorateButtons(el, `button-${blockTypeSizes[blockSize][3]}`);
  decorateLinks(el, blockTypeSizes[blockSize][4]);
  let rows = el.querySelectorAll(':scope > div');

  const headers = el.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headers.forEach((header, counter) => {
    if (!counter) {
      enforceHeaderLevel(header, 2);
    } else {
      enforceHeaderLevel(header, 3);
    }
  });

  /* TODO fix */
  if (rows.length > 1) {
    let [head, ...tail] = rows;
    if (!head.querySelectorAll('h2, h3, a').length) {
      decorateBlockBg(el, head);
      rows = tail;
      el.classList.add('custom-bg');
    }
  }
  if (rows.length > 1) {
    let [head, ...tail] = rows;
    if (head.querySelectorAll('h2, h3').length) rows = tail;
  }

  const config = blockTypeSizes[blockSize];
  const overrides = ['-heading', '-body', '-detail'];
  overrides.forEach((override, index) => {
    const hasClass = [...el.classList].filter((listItem) => listItem.includes(override));
    if (hasClass.length) config[index] = hasClass[0].split('-').shift().toLowerCase();
  });
  decorateBlockText(el, config);

  const { createTag } = await import(`${getLibs()}/utils/utils.js`);
  const buttonRows = [
    createTag('div', { class: 'button-row' }),
    createTag('div', { class: 'button-row' })
  ];
  rows.forEach((row, index) => {
    let rowNumber = 0;
    if (index >= 3 || (index === 2 && rows.length === 4)) rowNumber = 1;
    buttonRows[rowNumber].appendChild(row);
  });
  el.appendChild(buttonRows[0]);
  el.appendChild(buttonRows[1]);

  
/*     const linkRows = [
    createTag('div', { class: 'foreground' }),
    createTag('div', { class: 'foreground' }),
  ];
const links = el.querySelectorAll('a');
  links.forEach((link, i) => {
    const div = createTag('div', { 'data-valign': 'middle' }, false);
    div.appendChild(link);
    if (i>2 || (i === 2 && links.length === 4)) {
      linkRows[1].appendChild(div);
    } else {
      linkRows[0].appendChild(div);
    }
  });
  el.appendChild(linkRows[0]);
  if (links.length > 3) el.appendChild(linkRows[1]);
  
  rows.forEach((row) => {
    const rowHeaders = row.querySelectorAll('h2, h3');
    if (rowHeaders.length) {
      row.classList.add('foreground');
    } else {
      row.remove();
    }
  }); */



  decorateBlockAnalytics(el);
  
  el.querySelectorAll('a').forEach((button) => {
    button.setAttribute('daa-ll', `outline|${button.textContent.trim()}`);
  });
}
