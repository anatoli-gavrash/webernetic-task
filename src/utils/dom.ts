const createTitle = (className: string = '', innerText: string = ''): HTMLHeadingElement => {
  const title = document.createElement('h2');

  title.className = className;
  title.innerText = innerText;

  return title;
};

const createInput = (
  className: string = '',
  type: 'text' | 'checkbox' = 'text',
  placeholder: string = ''
): HTMLInputElement => {
  const input = document.createElement('input');
  
  input.className = className;
  input.type = type;
  input.placeholder = placeholder;
  
  return input;
};

const createLink = (className: string = '', href: string = '/', innerText: string = ''): HTMLAnchorElement => {
  const link = document.createElement('a');

  link.className = className;
  link.href = href;
  link.innerText = innerText;

  return link;
};

const createButton = (
  className: string = '',
  innerText: string = '',
  handler: ((e: MouseEvent) => any) | null = null
): HTMLButtonElement => {
  const button = document.createElement('button');

  button.className = className;
  button.type = 'button';
  button.innerText = innerText;
  button.onclick = handler;

  return button;
};

const createLabel = (
  className: string = '',
  innerText: string = '',
  prependElement: Node | null = null
): HTMLLabelElement => {
  const label = document.createElement('label');

  label.className = className;
  label.innerText = innerText;
  prependElement && label.prepend(prependElement);

  return label;
};

const createForm = (): HTMLFormElement => {
  const form = document.createElement('form');
  const formClassName: string = 'registration';

  const handlerCloseModal = (): void => {
    const modal = document.querySelector('.modal');
    modal && modal.classList.remove('show');
  };

  form.className = formClassName;

  form.append(
    createButton(`${formClassName}__close-button`, '', handlerCloseModal),
    createTitle(`${formClassName}__title`, 'Войти в систему'),
    createInput(`${formClassName}__input`, 'text', 'Email/Телефон'),
    createInput(`${formClassName}__input`, 'text', 'Пароль'),
    createLabel(
      `${formClassName}__label`,
      'Запомнить пароль',
      createInput(`${formClassName}__label-input`, 'checkbox')
    ),
    createLink(`${formClassName}__link`, '/', 'Восстановить'),
    createButton(`${formClassName}__signin-button`, 'Войти'),
    createButton(`${formClassName}__signup-button`, 'Зарегистрироваться')
  );

  return form;
};

export {
  createForm
};
