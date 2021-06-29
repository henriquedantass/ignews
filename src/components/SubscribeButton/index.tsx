import { useSession, signIn } from 'next-auth/client';
import { stripe } from '../../services/stripe';
import styles from './styles.module.scss';


interface SubscribeButtonProps {
    priceId: string,
}


export function SubscribeButton ({priceId}: SubscribeButtonProps) {
    const [session] = useSession();

    function handleSubscribe(){
        if (!session)  {
            signIn('github')
            return;
        }
    }

    return (
        <button 
        className={styles.subscribeButton}
        type="button">
            Subscribe now
        </button>
    )
}