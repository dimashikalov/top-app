import { PProps } from './Paragraph.props';
import styles from './Paragraph.module.css';



export const P = ({ size = 'm', children }: PProps): JSX.Element => {
	switch (size) {
		case 's': {
			return <p className={styles.s}>{children}</p>;
		}
		case 'm': {
			return <p className={styles.m}>{children}</p>;
		}
		case 'l': {
			return <p className={styles.l}>{children}</p>;
		}
		default:
			return <></>;
	}
	
};

