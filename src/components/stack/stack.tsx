import classNames from 'classnames';
import styles from './stack.module.scss';

export interface StackProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Stack = ({ className }: StackProps) => {
    return (
        <div className={classNames(className, styles.grid)}>
            <img
                src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_01.jpg"
                alt=""
                className={styles.area}
                height={undefined}
            />
            <img
                src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_02.jpg"
                alt=""
            />
            <img
                src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_03.jpg"
                alt=""
            />
        </div>
    );
};
