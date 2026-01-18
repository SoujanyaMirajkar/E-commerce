
import RobotProfileImage from '../assets/bot.png';
import UserProfileImage from '../assets/user.jpg';

export function ChatMessage({message,sender}){
            // const message=props.message;
            // const sender=props.sender;
            // const {message,sender}=props;  this is destructuring

            /*
            if(sender==='robot'){
                return(
                    <div>
                        <img src="bot.png" alt="bot profile" width="50"/>
                        message
                    </div>

                );
            }
                */
            return(
                <div className={sender==='user' ? 'chat-message-user': 'chat-message-robot'}>
                    {sender==='robot' && <img src={RobotProfileImage} alt="bot profile" className="chat-message-profile"/>}
                    <div className="chat-message-text">
                        {message}
                    </div>
                    {sender==='user' && <img src={UserProfileImage} alt="user profile" className="chat-message-profile"/>}
                </div>
            );
        }
