import classNames from 'classnames';
import styles from './new-component-6.module.scss';

export interface NewComponent6Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent6 = ({ className }: NewComponent6Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_04.jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_05.jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_06.jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div>
                <img
                    src="https://wixmp-b7f7090100b13623109851bc.wixmp.com/layouters/img_03.jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
        </div>
    );
};
