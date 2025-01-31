import styles from './profileCard.module.css';

interface ProfileItem {
  label: string;
  value: string;
}

interface ProfileCardProps {
  data: ProfileItem[];
}

export const ProfileCard = ({ data }: ProfileCardProps) => (
  <div className={styles.profile}>
    {data.map((item, index) => (
      <div key={index} className={styles.profileItem}>
        <div className={styles.label}>{item.label}</div>
        <div className={styles.value}>{item.value}</div>
      </div>
    ))}
  </div>
);
