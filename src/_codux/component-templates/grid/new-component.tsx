import classNames from 'classnames';
import styles from './new-component.module.scss';

export interface NewComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent = ({ className }: NewComponentProps) => {
    return <div className={classNames(styles.root, className)}>
        <img src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_04.jpg" alt="" />
        <img src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_05.jpg" alt="" />
        <img src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_06.jpg" alt="" />
        <img src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_03.jpg" alt="" />
    </div>
};
