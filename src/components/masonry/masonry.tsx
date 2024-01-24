import classNames from 'classnames';
import styles from './masonry.module.scss';

export interface MasonryProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Masonry = ({ className }: MasonryProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
        </div>
    );
};
