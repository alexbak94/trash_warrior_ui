import * as React from 'react';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    secondary?: boolean;
    rounded?: boolean;
}

export const Button = (props: IButtonProps) => {

    const {disabled, onClick, className, rounded, secondary} = props;

    const onClickButton = disabled ? undefined : onClick;
    const roundedClassName = rounded ? ' button--rounded' : '';
    const secondaryClassName = secondary ? ' button--secondary' : '';
    const disabledClass = disabled ? ' button--disabled' : '';
    const buttonClassName = `button ${secondaryClassName}${roundedClassName}${className ? ' ' + className : ''}${disabledClass}`;
    const buttonProps = {
        ...props,
    };
    delete buttonProps.children;
    delete buttonProps.className;
    delete buttonProps.rounded;
    delete buttonProps.secondary;

    return (
        <button
            {...buttonProps}
            className={buttonClassName}
            onClick={onClickButton}
        >
            {props.children ? props.children : null}
        </button>
    );
};

export default Button;
