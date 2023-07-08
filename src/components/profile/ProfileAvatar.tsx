import { Avatar } from '@chakra-ui/react';

type ProfileAvatarProps = {
  id?: string;
  name: string;
};

export const ProfileAvatar = (props: ProfileAvatarProps) => {
  return (
    <Avatar
      name={props.name}
      src={`https://avatar.vercel.sh/${props.id ?? props.name}.svg?text=${props.name.slice(0, 2).toUpperCase()}`}
      size={'xl'}
    />
  );
};
