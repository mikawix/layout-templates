import classNames from 'classnames';
import styles from './test.module.scss';

export interface TestProps {
    className?: string;
}

/**
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Test = ({ className }: TestProps) => {
    return <div className={classNames(styles.root, className)}>
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

};
