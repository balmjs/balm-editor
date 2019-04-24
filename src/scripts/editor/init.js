import { tools } from './options';

const _initCreateNodes = function() {
  this.el.classList.add('balm-editor');
  let toolsNode = document.createElement('div');
  let inputNode = document.createElement('div');
  toolsNode.classList.add('tools-area');
  inputNode.classList.add('edit-area');

  Object.keys(tools).forEach(key => {
    let tool = tools[key];
    // TODO: add dropMenu && add menu list value
    toolsNode.innerHTML += `<i data-commander="${key}" class="material-icons" title="${key}">${
      tool.icon
    }</i>`;
  });
  inputNode.contentEditable = true;

  this.el.appendChild(toolsNode);
  this.el.appendChild(inputNode);
  return { toolsNode, inputNode };
};

const _initObserver = function(inputNode) {
  document.execCommand('defaultParagraphSeparator', false, 'p');

  let observerOptions = {
    characterData: true,
    childList: true,
    subtree: true
  };
  this.observe = new MutationObserver(() => {
    this.onChange(inputNode.innerHTML);
  });
  this.observe.observe(inputNode, observerOptions);
};

const _initToolsFunc = function(toolsNode) {
  toolsNode.addEventListener('click', e => {
    let target = e.target;
    let commander = target.getAttribute('data-commander');
    if (commander) {
      console.log(commander);
      // TODO: 执行命令 document.execCommand(commander, false, value)
    }
  });
};

export default function() {
  let { toolsNode, inputNode } = _initCreateNodes.call(this);
  _initToolsFunc.apply(this, [toolsNode]);
  _initObserver.apply(this, [inputNode]);
}
